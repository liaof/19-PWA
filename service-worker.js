const APP_PREFIX = 'FoodFest-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    "./index.html",
    "./events.html",
    "./tickets.html",
    "./schedule.html",
    "./assets/css/style.css",
    "./assets/css/bootstrap.css",
    "./assets/css/tickets.css",
    "./dist/app.bundle.js",
    "./dist/events.bundle.js",
    "./dist/tickets.bundle.js",
    "./dist/schedule.bundle.js"
];


// ****NOTE how we have three listeners, each corresponding to a stage of the service-workers' lifecycle****

// we use self. instead of windows. because service workers run before the windows object is created
self.addEventListener('install', function (e) {
    e.waitUntil(// tell browser wait until work is funished before terminating the service worker
      caches.open(CACHE_NAME).then(function (cache) {// use caches.open to find a specific cache by name
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)// and files to cache
      })
    )
});

//
self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {// caches.keys() returns array of all cache names, and call it keyList
        let cacheKeeplist = keyList.filter(function(key) {
          return key.indexOf(APP_PREFIX);
        });
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function(key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
  });

  // how the app will retrieve information from the cache
  self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
      caches.match(e.request).then(function (request) {// check if the resrouces already exists in caches
        if (request) { // if cache is available, meaning we don't have to make a server request to get content identical to our cache,  return w/ the cached resource
          console.log('responding with cache : ' + e.request.url)
          return request
        } else {       // if there are no cache, allow the resource to be retrieved from onine as usual
          console.log('file is not cached, fetching : ' + e.request.url)
          return fetch(e.request)
        }
  
        // You can omit if/else for console.log & put one line below like this too.
        // return request || fetch(e.request)
      })
    )
  })