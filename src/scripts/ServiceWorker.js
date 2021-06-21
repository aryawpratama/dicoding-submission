import CacheHelper from './Utils/CacheHelper'
import 'regenerator-runtime'
const { assets } = global.serviceWorkerOption
console.log(assets)

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...')
  event.waitUntil(CacheHelper.cachingAppShell())
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...')
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)
  event.respondWith(CacheHelper.revalidateCache(event.request))
  // TODO: Add/get fetch request to/from caches
})
