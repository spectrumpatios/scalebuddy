const CACHE_NAME = 'scalebuddy-cache-v1';
const OFFLINE_FILES = [
  './scaled_patio_form.html',
  './manifest.json',
  './sw.js',
  './icon-192.png',
  './icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_FILES))
  );
  self.skipWaiting();
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
