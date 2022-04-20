import { precacheAndRoute } from 'workbox-precaching'
import type { PrecacheEntry } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate, NetworkFirst } from 'workbox-strategies'
import { build, files, version } from '$service-worker'

precacheAndRoute([
  ...build.map((f: string): PrecacheEntry => ({ url: f, revision: null })),
  ...files
    .filter((f) => !f.includes('.nojekyll'))
    .map((f: string): PrecacheEntry => ({ url: f, revision: `${version}` })),
])

registerRoute(
  () => true,
  new StaleWhileRevalidate({
    cacheName: 'app',
  })
)
