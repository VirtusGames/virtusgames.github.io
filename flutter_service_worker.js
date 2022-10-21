'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2552ac5e92f9e3593b65173e8307bf51",
".git/config": "c8a8a597b6cccbdf9e3d0aff2655dcc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c784fc3210ad9724f385b540bda0e33c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "757aa78e4336ddc98b7fb65d977123d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06108fbd233f9d6af16dd0eb42947b67",
".git/logs/refs/heads/main": "06108fbd233f9d6af16dd0eb42947b67",
".git/logs/refs/remotes/origin/HEAD": "f58126a6f55f7e9d8286b878fab8b33b",
".git/logs/refs/remotes/origin/main": "e63a42572a1603b900abb9d6b24b70e5",
".git/objects/08/f6296a3af09291d59b0b8549ea6ffb30023f69": "c6d232e9a37a8722dbc47ce438e000d3",
".git/objects/0e/2ce2d4295bde157162376f9850db54a97fee0a": "6c5ece11199c5379cb5305fcaec59b73",
".git/objects/15/d1ceaf2c66e53b6b2fc856554cfc34933e0ebd": "62f27bc659450ca6381e6d5119bbcbe4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/ead62661565d015d27f525478471c305cb1fc0": "0c3fb69775f87648de2aaa1cc2adbb72",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/39/059332f245f10356052a06218050147c309660": "26de92d17ae7eba8ee916fe207908f1e",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/6694a8213f917db51dabd5d2e70c4cf88a80d6": "5f9b15f5bdd1f147950af43cc1d93eb4",
".git/objects/40/ec39cc103361b7fbd351a0d8030466d7d576b6": "fe693d3b74697070ff08be861ce6e6c3",
".git/objects/4c/25ab100473b82d6915edcea2280c0a166086f9": "b95df0ce3a48d18cde9d90cfa27af4f7",
".git/objects/4f/d3a66ce40c267b9ad3fab8bfed629d57385af7": "99983943c7698eaf317c84aea96b4ac3",
".git/objects/58/79cf83ead60d55ae96ea4f62bbe0994f9e5c3e": "6b6b86eb502da63848606ed8d9fa4635",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/eeecdfc237501c98ed3634c42baaa9feebdd84": "8901d64bb1681e2b1c1b5c350fe824be",
".git/objects/7f/9f9b4d7da04f7210d9de64c471ec8ae01328dd": "9aa7bce2262e905827901640005f009a",
".git/objects/95/227dd46d05db638b53f054c595cc0d52d9b1a9": "c4db24ba293264eb2d173e9b529209bc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/50288ad08d0631e0e068018470f70526b0efc7": "b676def421264797d936227468c10cff",
".git/objects/9f/d2f577fe93e1330f5556c53bbfb3933c602412": "6d26f819e9e3242005cff47a17d45746",
".git/objects/a0/08f870d07158abbc45c41b8a0bd2ad53ab2905": "ce451eaa1ad27007cec989c58986cf3b",
".git/objects/a9/af871623dfdd59d0640ee7bd9de3ad1224812d": "6e6e5daee5748d94a12167e8fad39c47",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/c5/1960652c72bd3c08927d2a35cf0a4749ab7a54": "f3eb0da54447148a0a864102fc736161",
".git/objects/c5/7662f41fcd4e566d951f309828f67749fac879": "2d0ee38ea14c9fb66f80b29b5a94439c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d0/cfebba3992cf4ab5e601faa63a54997f932686": "fcaa9219ca95d888bcbe897829eef35e",
".git/objects/d5/3d7560ff42aa8e85e058015c38ea01f0873fa3": "70e2354bc22cc1410846ccdbd24032ef",
".git/objects/df/1524d8f20d284340dda305586510d90e2ae0f1": "3987a2c8b22177d812f8b578c680681d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/37d0124d6282e660af6b98338372b07c513359": "9f65796554c61141ac8f428e28a474e2",
".git/objects/ea/fe31aee66e321a6101d774c207703e1e75f7f5": "2c24f8915fb97fa3daca56789c0948e1",
".git/objects/ec/39a467d41007d6d6f457ca74f7658bfc45ca83": "034cc29cbeec9e9ad34d0d219b9ddc04",
".git/objects/f0/8893430b40f4a5a8b7175118370275cc8a2ff8": "88e91b9a6b08cc58b8870446440d1d24",
".git/objects/f8/f62edb10ebde973cb236e5f30638f5bbda3b19": "1d36347ac57d8d87ddadfeff4aa3dd9a",
".git/objects/fa/e0638217a418d8ac49a324cec7f4dfe5a23920": "6644d474c40437e0a57a712ec3225991",
".git/objects/pack/pack-98b97ffa9cfd559d707d037d41c961373096ab60.idx": "1fdaf8ba4f2f97f0668c7ad878f2ace7",
".git/objects/pack/pack-98b97ffa9cfd559d707d037d41c961373096ab60.pack": "c28fdf4dbe21d2190c2b4ff1d1956891",
".git/ORIG_HEAD": "0ca848805f3a93128c9a50b452f3d33a",
".git/packed-refs": "d954eed22765750bd7dba766f6ffef3a",
".git/refs/heads/main": "08421d6a51ada2fb719657538c3d517a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "08421d6a51ada2fb719657538c3d517a",
"assets/AssetManifest.json": "83759d85af09b85672541c565a7aee18",
"assets/assets/github.jpg": "bd673b21870d3073f644ca1206aec912",
"assets/assets/ice_skating.jpeg": "7253d2e828010b1fde4059c521715d48",
"assets/assets/linkedin.jpg": "e83ab635c353192d0d78f75e54954917",
"assets/assets/virtus.jpeg": "5bd77f6884825219416181fcdaf3cc01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "613add4bc75842ca39e31b57d1d06540",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c329b25ddb8f8f7e816895422ba2873b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59bbae6032dcada571a3e584e9733f2e",
"/": "59bbae6032dcada571a3e584e9733f2e",
"main.dart.js": "3de8244a37e856b229637e56805db9d5",
"manifest.json": "65fcfe9f670316f4fe411b5de025babf",
"version.json": "8146c365297156816cdba0b755533cc5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
