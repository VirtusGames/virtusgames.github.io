'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6e86f9b01613555eb42efebb013fc1e3",
".git/config": "c8a8a597b6cccbdf9e3d0aff2655dcc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "46833bc4a236adc5e8a08a8048fbcbd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3408ac13e7db8f4f95c69b15f081d336",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a96ec5b78c1f243a3c29377fbf1fc8f2",
".git/logs/refs/heads/main": "a96ec5b78c1f243a3c29377fbf1fc8f2",
".git/logs/refs/remotes/origin/HEAD": "7f157e372b13fa5679435d8092cdd184",
".git/logs/refs/remotes/origin/main": "1ad2beafb89bc0ae029d16bc4e621022",
".git/objects/09/5f9d6197b32307f8aa7cedecae28e5acd1bb52": "147fa661d9b8ed1b02008fc32ffc6b06",
".git/objects/20/6dae7af0b3f2d7b6c7570a2c8feda242e7bc5f": "88980b5f20e2a3cbb337a11248319678",
".git/objects/2b/ec0e31a7db450cbb570c0d1affcaff96370761": "4a0066555507fdf2ae99d65dee80c17c",
".git/objects/36/6c10fdb56882a3687818b5e902ad60d8df5131": "5561917b1df697fd58dfca1aa0e48cfc",
".git/objects/36/9f73f202b101ad191710fc21c9eab25ec01324": "f8da768c1b41612973bbaff1b02affc1",
".git/objects/38/d9e96faf163249bf945dc0f79f38bde18a76ce": "2473e5a0e69c71728e4578e9e71e88ed",
".git/objects/41/c245f2839b436c512a2bfd726d8a8fbb39d9fc": "e0fdc9cf2f8e7cf1afaec4c3a0793d04",
".git/objects/45/c948fc8badfde4f9c6561c35605e3a780c2ac4": "3f3a66b4147e9f62e9bf43e75ced4d6c",
".git/objects/48/e8d24c6aa295962aacf6d8ba9c470322063efa": "3e9d2ff5b6aa1aded09c71fa4323628b",
".git/objects/49/617cc8456eb10b446a88e7cfd92bba647cd464": "238493ae865fe7eaac87eb349223d51b",
".git/objects/4f/7c6f2660e9d4c1d087555984d1701ae8c2f91a": "a4e91da1558676c6fbcf9f1b1a5f7b99",
".git/objects/70/cfdb50e3da2ab22f424c2bde859f106368aa71": "14cbc8acdeab0fed2a2f1d72841dd530",
".git/objects/70/d2af68afef62cfbaf87f064a7e1774f4419d2f": "d899f74867c72f28054dfcf8805950f6",
".git/objects/a3/4a29b927bdd5caab683a161dd63067efd7f80d": "21c885bf812bf781f72d8ffba224aa7e",
".git/objects/a4/20cd579c0dae8980695c622ebdf544662456bd": "230082c12604d79b09ff0deb8e180f0d",
".git/objects/b5/882d95311ebd092e889bdb31a268225029a520": "fef6772b45cceb99d55abab2565f5a1e",
".git/objects/c0/1d1d218abe213fec76d974eddd4dfeebc74790": "57057644b5d2889f97deeab2f2605d96",
".git/objects/d5/2b9bef177b699a3fb1574c277ee248c025b8f1": "1e21eaa9be6730c9564e8f20e2f411fb",
".git/objects/pack/pack-33f9727bac3644cf6c177a6abc6469b5f3112824.idx": "5290262aa3048dbc0cb39f2dbf3b5412",
".git/objects/pack/pack-33f9727bac3644cf6c177a6abc6469b5f3112824.pack": "b36a5130c9bd97599871d10a4f04798c",
".git/ORIG_HEAD": "831ab49b97fa29c956c707a512c8b5da",
".git/packed-refs": "f614811661df7ee0ff5c26d68ac1550a",
".git/refs/heads/main": "831ab49b97fa29c956c707a512c8b5da",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "831ab49b97fa29c956c707a512c8b5da",
"assets/AssetManifest.json": "83759d85af09b85672541c565a7aee18",
"assets/assets/github.jpg": "bd673b21870d3073f644ca1206aec912",
"assets/assets/ice_skating.jpeg": "7253d2e828010b1fde4059c521715d48",
"assets/assets/linkedin.jpg": "e83ab635c353192d0d78f75e54954917",
"assets/assets/virtus.jpeg": "5bd77f6884825219416181fcdaf3cc01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4bbe1f3cd1cab45811e36194baaca208",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4d871f9bc0b03e912f67a05b5ba6777c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "521040002ddea965d90765c554c05564",
"/": "521040002ddea965d90765c554c05564",
"main.dart.js": "a65be6c84e417caedec0a7bb639b5a95",
"manifest.json": "65fcfe9f670316f4fe411b5de025babf",
"version.json": "8146c365297156816cdba0b755533cc5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
