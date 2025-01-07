'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d455ceac7eea542023b2ebcf21336348",
"version.json": "9ea15f182da48af47fc1f507af825f48",
"index.html": "85d513a8e2c1878ec7f22ca7b441ca81",
"/": "85d513a8e2c1878ec7f22ca7b441ca81",
"main.dart.js": "e8e733acedd9be488cec3432dc7a2e3f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "91b2e216b7f24bee22e47154f18eb706",
"icons/Icon-192.png": "e94dcefff4651b6a0c418147168c18ab",
"icons/Icon-maskable-192.png": "e94dcefff4651b6a0c418147168c18ab",
"icons/Icon-maskable-512.png": "3f9b1f597f2a60a5b14c4160992927df",
"icons/Icon-512.png": "3f9b1f597f2a60a5b14c4160992927df",
"manifest.json": "048fd92d3033a28a3af3cf2c93d68da7",
"assets/AssetManifest.json": "e3f6d7c70be88afd129786950a8b15da",
"assets/NOTICES": "347d8c5524ce5f9d2aee1501474118a5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3d326cd00a9a2a20e0b34b8f67151149",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1a5ff429b9930b2348d3d6b35a6b382e",
"assets/fonts/MaterialIcons-Regular.otf": "f2489b886f45f36b6e3d6b24345c09da",
"assets/assets/res/almond.jpeg": "f25012f4dbb56b65d096bd90e101d65f",
"assets/assets/res/anjeer.jpeg": "b7774124488848cb183f593a970ca2bb",
"assets/assets/res/banner1.webp": "82bbb771b2d888a944c8051340acbcbc",
"assets/assets/res/instagram.png": "063798ac1a7204f7af92d7be023feca5",
"assets/assets/res/pista.jpeg": "a4da2bd514fcca46c5e3bba1106809d3",
"assets/assets/res/x.png": "f2e574ea8637689c39577f7cb7dfaaa6",
"assets/assets/res/whatsapp.webp": "4775ac26035bc06ac889de86530bdbfc",
"assets/assets/res/kismis.jpeg": "aa481168d1aa8cb0d0fac5a5a0e57981",
"assets/assets/res/general_error.svg": "4def409cdef7cac80cbda301753e2ca0",
"assets/assets/res/banner2.jpeg": "d74b4d93d7e1fcf47ab504a7b166f551",
"assets/assets/res/gurbandi.jpeg": "55d57f13d06ea84bb1f27840dd8379c7",
"assets/assets/res/cashew.jpeg": "55376cccac6b5169fec4c9d83a81d537",
"assets/assets/res/logo.png": "8b94b4b2aef88bb6d47cec558101baeb",
"assets/assets/res/walnut.jpeg": "fe5c969de19254b50d6d9ede055c09a6",
"assets/assets/res/linkedin.png": "8c54498de170f54d31a75a7bb0e6c998",
"assets/assets/res/no-image-icon.png": "f617ad7ddae874e7c8f4acc4fe0fdd0c",
"assets/assets/res/mix.jpeg": "f2ed51d7a651696ea20f7c10c9b67a7e",
"assets/assets/res/facebook.png": "60ace5feac0e51ee2c7a12455a651d19",
"assets/assets/res/mamra.jpeg": "a93e3f9595fcd636843c2a1150731ae0",
"assets/assets/res/no_account.svg": "7d141ae5874e2e27e31b8be52c75916c",
"assets/assets/lang/en_US.json": "129d6e7b6f2edd40a7f10ad430470a95",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
