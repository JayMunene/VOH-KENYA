const base = 'https://ofyevfyfinzdpjqrmbuv.supabase.co/functions/v1/server'

const health = await fetch(`${base}/health`)
if (!health.ok || (await health.json()).status !== 'ok') {
  throw new Error(`Backend health check failed: ${health.status}`)
}

const submissions = await fetch(`${base}/submissions`)
if (!submissions.ok || !Array.isArray(await submissions.json())) {
  throw new Error(`Backend submissions check failed: ${submissions.status}`)
}

console.log('Supabase backend verified: health and submissions endpoints are operational.')