self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("trixie-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "css.html",
                "js.html",
                "trixiecss.css",
                "manifest.json"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
