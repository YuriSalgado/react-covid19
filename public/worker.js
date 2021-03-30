var CACHE_NAME = 'covid19-pwa';
var urlsToCache = [
    '/'
];

// install worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// cache and request
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response
                }
                return fetch(event.request);
            })
    );
});

// update worker
self.addEventListener('activate', event => {
    var cacheWhitelist = ['pwa-task-manager'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheName.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})