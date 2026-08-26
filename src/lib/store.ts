import { useState, useEffect, useCallback } from 'react'
import { supabaseUrl } from '../../utils/supabase/info'

export type SubmissionType = 'newsletter' | 'prayer' | 'membership'

export type Submission = {
  id: string
  type: SubmissionType
  createdAt: number
  data: Record<string, string>
}

export const typeLabels: Record<SubmissionType, string> = {
  newsletter: 'Newsletter',
  prayer: 'Prayer Request',
  membership: 'Membership',
}

const EDGE_FUNCTION = import.meta.env.VITE_SUPABASE_EDGE_FUNCTION ?? 'server'
const EDGE_FUNCTION_ROUTE = import.meta.env.VITE_SUPABASE_FUNCTION_ROUTE ?? 'make-server-d6d8acf9'
const BASE = `${supabaseUrl.replace(/\/$/, '')}/functions/v1/${EDGE_FUNCTION}/${EDGE_FUNCTION_ROUTE}`
const TOKEN_KEY = 'voh_admin_token'
const SESSION_KEY = 'voh_admin'

export async function checkBackend(): Promise<boolean> {
  try {
    const response = await fetch(`${BASE}/health`, { cache: 'no-store' })
    return response.ok && (await response.json()).status === 'ok'
  } catch {
    return false
  }
}

/* ── Public API (visitor forms — no auth required) ── */

export async function addSubmission(
  type: SubmissionType,
  data: Record<string, string>,
): Promise<{ ok: boolean; error?: string }> {
  try {
    if (!(await checkBackend())) return { ok: false, error: 'Membership service is temporarily unavailable. Please try again later.' }
    const res = await fetch(`${BASE}/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data }),
    })
    if (res.status === 429) return { ok: false, error: 'Too many requests. Please try again later.' }
    if (!res.ok) return { ok: false, error: 'Something went wrong. Please try again.' }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection.' }
  }
}

/* ── Admin session ──
   The passcode is verified server-side; we only keep the returned
   bearer token in sessionStorage and send it on admin requests. */

export function isAdminSession(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === '1' && !!sessionStorage.getItem(TOKEN_KEY)
}

export async function adminLogin(passcode: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode }),
    })
    if (res.status === 401) return { ok: false, error: 'Incorrect passcode.' }
    if (!res.ok) return { ok: false, error: 'Something went wrong. Please try again.' }
    const json = await res.json()
    sessionStorage.setItem(TOKEN_KEY, json.token)
    sessionStorage.setItem(SESSION_KEY, '1')
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection.' }
  }
}

export function logoutAdmin(): void {
  sessionStorage.removeItem(TOKEN_KEY)
  sessionStorage.removeItem(SESSION_KEY)
}

function authHeaders(): HeadersInit {
  const token = sessionStorage.getItem(TOKEN_KEY)
  return token ? { Authorization: `Bearer ${token}` } : {}
}

/* ── Admin API (auth required) ── */

export async function fetchSubmissions(): Promise<{ ok: boolean; data: Submission[] }> {
  try {
    const res = await fetch(`${BASE}/submissions`, { headers: authHeaders() })
    if (res.status === 401) {
      logoutAdmin()
      return { ok: false, data: [] }
    }
    if (!res.ok) return { ok: false, data: [] }
    return { ok: true, data: await res.json() }
  } catch {
    return { ok: false, data: [] }
  }
}

export async function deleteSubmission(id: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${BASE}/submissions/${id}`, { method: 'DELETE', headers: authHeaders() })
    if (res.status === 401) {
      logoutAdmin()
      return { ok: false, error: 'unauthorized' }
    }
    if (!res.ok) return { ok: false, error: 'Delete failed. Please try again.' }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection.' }
  }
}

export async function clearSubmissions(): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${BASE}/submissions`, { method: 'DELETE', headers: authHeaders() })
    if (res.status === 401) {
      logoutAdmin()
      return { ok: false, error: 'unauthorized' }
    }
    if (!res.ok) return { ok: false, error: 'Clear failed. Please try again.' }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection.' }
  }
}

/* Loads submissions only while an admin session is active;
   re-fetches automatically when `enabled` flips to true (after login). */
export function useSubmissions(enabled = true) {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(enabled)

  const load = useCallback(async () => {
    setLoading(true)
    const result = await fetchSubmissions()
    setSubmissions(result.data)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (enabled) load()
  }, [enabled, load])

  return { submissions, loading, refresh: load }
}