import { useState, useEffect, useCallback } from 'react'
import { projectId } from '../../utils/supabase/info'

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

const BASE = `https://${projectId}.supabase.co/functions/v1/server`

export async function checkBackend(): Promise<boolean> {
  try {
    const response = await fetch(`${BASE}/health`, { cache: 'no-store' })
    return response.ok && (await response.json()).status === 'ok'
  } catch {
    return false
  }
}

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

export async function fetchSubmissions(): Promise<Submission[]> {
  try {
    const res = await fetch(`${BASE}/submissions`)
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export async function deleteSubmission(id: string): Promise<void> {
  await fetch(`${BASE}/submissions/${id}`, { method: 'DELETE' })
}

export async function clearSubmissions(): Promise<void> {
  await fetch(`${BASE}/submissions`, { method: 'DELETE' })
}

export function useSubmissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    const data = await fetchSubmissions()
    setSubmissions(data)
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  return { submissions, loading, refresh: load }
}
