self.addEventListener('install', (event) => {
  console.log("Service Worker installé");
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log("Service Worker activé");
});

self.addEventListener('fetch', (event) => {
  // Réseau d’abord, puis fallback offline si besoin
  event.respondWith(
    fetch(event.request).catch(() => new Response("Hors ligne"))
  );
});