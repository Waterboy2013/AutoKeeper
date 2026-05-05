// AutoKeeper Service Worker v6
// Strategy:
//   index.html, manifest.json → NETWORK FIRST (always get latest, fall back to cache)
//   CDN assets (React, fonts) → CACHE FIRST (stable, rarely change)
//   Icons → CACHE FIRST

const CACHE = 'autokeeper-v6';
const NETWORK_FIRST = ['index.html', 'manifest.json', '/', ''];
const CDN_CACHE = [
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.allSettled(CDN_CACHE.map(url => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const path = url.pathname.split('/').pop() || '';
  const isSameOrigin = url.origin === self.location.origin;
  const isCDN = url.hostname.includes('unpkg.com') || url.hostname.includes('fonts.g');

  // Network-first for app HTML and manifest
  if (isSameOrigin && (NETWORK_FIRST.includes(path) || url.pathname.endsWith('/'))) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for CDN and static assets (icons, fonts)
  if (isCDN || (isSameOrigin && /\.(png|jpg|svg|js|css|woff2?)$/.test(url.pathname))) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        });
      })
    );
  }
});
