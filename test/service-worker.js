const CACHE_NAME = 'photo-uploader-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
  // 必要に応じてCSSやアイコンも追加
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
