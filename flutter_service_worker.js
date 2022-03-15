'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9b54eb902713096285dc8c5b6750e687",
".git/config": "ad9bf75b87f0215468d8f022d983a1e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dfb2128f43612171efa0a24da06293e4",
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
".git/index": "9d2b3f8e6f2d1f4cefe31fe74937d8ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d5dd2dd7c07e9dfd2ef31d095934e5fb",
".git/logs/refs/heads/github-pages": "a0b9be3af63530f6b48b50d8746db4fc",
".git/logs/refs/heads/hasan": "b41fe8ffbb924d86e773ff584ba35a80",
".git/logs/refs/heads/main": "f4dab860b9bd70bc8970166af16da628",
".git/logs/refs/remotes/origin/hasan": "f99400e1d887228e2078f149e5fc5029",
".git/logs/refs/remotes/origin/main": "c855d72991fe805517ac255798654d96",
".git/objects/03/0179d6d230ed9ac9af2b0fde78858e3dce0fb1": "42119d431e27736f61e5590c68c4939f",
".git/objects/03/71080737d98bb0b1d6cafeae83837ef156c1df": "af52bfdd70d5e113ec0f1bfbf48c2499",
".git/objects/05/f49751bdbcaeee4c2982971ee17af79720a246": "58261ba0f00a2521c030a0c989fb33cc",
".git/objects/07/efb4fd4597f7d784f9d0a7b1cb20d401d169bd": "3857ca513b0aa9b8ba365fdef46f34d9",
".git/objects/08/2c3c54c03b657d2751d5016685f16e440082be": "1af9a6b00ee4a00629bd474a2bb236fa",
".git/objects/0b/53b9acdfea3f1a40ddc20a31b865e0e67499c6": "52a1567be1707592f0eefe22356d18b1",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/f01f83542c7a6c742dbb33c6e80fd86298b157": "a71195c89456aa78c0227d1ea049eaa8",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/15/4c4c900e2a3dab90b57cb61f2f94f2efd20587": "d4b33c640e0205db96d18ca90db47e39",
".git/objects/1c/8a531215d0f86dc621cc3a13256fea18dcfa0d": "6c6b8dfd521cc2ec5b4de1864d834ca6",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/34/014bcb1a8047c4e99dfb47d6f5d6c83b5c0a62": "a8a781a2eceaabdfec8cd9c322e42317",
".git/objects/3a/7235c012b174b1cf96abfe1eaf257924dd8ad5": "1f2e1610f5a0e7e64d347cb02073572a",
".git/objects/3d/f7a4859bb86b2def91374666f1e342cb2dfff8": "5d62c379fcc314a882fa95362b0467a8",
".git/objects/40/79361738dae390e2dba090538ed64c0b9d6aef": "79ac22b4685bb5f5f20f266beaf73262",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/57/4ec444561247e218efce749b5ebccef4af8f5f": "590a11eaf27b170f64251a0aad65e773",
".git/objects/58/2eca5d8a54b782ce31cab896c05dafd86d6631": "497ac7457615c27b3fd3b96620f0bdeb",
".git/objects/5a/de6d883be62e8a43f8f1e61e60842982899719": "24e429113323f128857564a2ca40a50c",
".git/objects/61/95f3e62a18e9b858607f141e606f007f2a37e3": "0b166eb2296516caa0f485722aa69ed8",
".git/objects/6e/4b1f17b1c038a9cfe833d5ad7bc10e7f7c909e": "89e740e535ed9ca2d0ad2c470ae1946c",
".git/objects/70/47dd4ab1c2faa11d8c0d08d19c7df8bc0b6694": "3a13a60aeacc173ea00fb82954026716",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/12ff4305df8e7bd3717745e071927bea178cba": "556a82687181fa2c357a6870e737b979",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/aa302a523f143d7dc46a4fc8ea7661f741b5f9": "72c2c62bdfc5b4558a1d9319d31049a9",
".git/objects/7c/09660093584f7c960ada9e87ce889127cee7af": "cdc0c2fd7cef099b7337d0a246625388",
".git/objects/7f/7e09b478f9d1b2f05601af51e969bd3ee242e7": "b0b5bcabab2171005ac21f8dd6889e96",
".git/objects/81/0fca5dbb87df73bb3087f485f3b2ce3fd37f05": "23522cf6ad529bef27c60eba1f431e78",
".git/objects/85/938b93a454ea0ec65faf930d6b92c16aa3d42a": "4ba2e97f7233482f85b06e72dedea14c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/a28200d0ae66af5e66ee59410ec20481c8f36d": "fd156852e58777cd63348be0aa13ab71",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/cc5284b052ad61a5543fdb5a0b52f265930ff8": "c8bccb49445153953de4b56eb52a0520",
".git/objects/9b/1a2c244ea8ef7ac01a9f28ee8d0ab11d194478": "cf0979a88a2dd1f5392ac5c503d40ccd",
".git/objects/9b/f796bf583ba276d3c010d19a889040527617a3": "21466bc4c6126d30c01dd00212fa2398",
".git/objects/9d/f64a076526cc21b8b621713f6900b1773e81f5": "13d371bd8da4d959b5a47482c2fbcfc4",
".git/objects/9e/507654764a2cb1b79ab458a1e9720dd66623b0": "1752209ef86e008ba32c7e187484efb5",
".git/objects/a0/ec24e26ebfcc2bf81a6344200fcf89e95817ae": "cf1adae62548e8262ae0c2119a45c28c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/0a3a9cb4c56784cbc90f1e7b3c38964b08a60f": "bbcc9a7656ea6c0dd813a9bbe088bc54",
".git/objects/a8/eb4627894b7461d006b03b8c07f693aade85df": "5ac7f1e9e444b4eb1cbc8e38023e385f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/59a5ca9d56de687100f6fbeace441cf999ab5c": "47687ecd41ff5ef0c6a580ac11f7e0ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3aeaf3432c7b4437a2169932b2a504fa1dd3b3": "50171a00857ff05b96800e4938dde740",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/8534c8581605716abee016a7c0b5477a8999a9": "ceb66c78283fb71302d12ff8fe2cf3e3",
".git/objects/bb/eb7abf3901fa34f80b26dbaa2802ccb1dbf86b": "02fc9f8d2afd6ccdb95430f3910f2069",
".git/objects/bd/654eb2154593548d3a354a28dd527fb66e4a3b": "4b5ca54824daf90882e79e42d3f5a654",
".git/objects/c3/a36d06bdab43f361bb75ad063ad9e26e3e7650": "9141583a260e1d4705c2f7ed1ea97e71",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cb/7a9e14748f1f75250a3a92a7497a73b07faef3": "b193d13eee1d1d611f925ecb9da7e160",
".git/objects/d2/a690ea257f5b340310a6e22cb7b298d9b87abf": "f1af0e4cf6912f160f5d4cc4c01e6f9f",
".git/objects/d4/8a2fc4ca3c099f53f3633ce0655db25d1cc8ad": "5dfc5881b44796eaebd947c8f2beb669",
".git/objects/d6/3a3c11ceb88b17e51cb613a74f38610906e4b1": "310ee71cfaf231a0206c996fd1f9807c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/eb2c8cd0260da4939ee1fe400bbf9cf7933d0d": "ffadce79c7c6019349ffc844e2ca011b",
".git/objects/da/ba0bd546044574c56f6ecc5e8d101d05e2a59b": "4b59794fe5889ff44f7c35c397f62c64",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e4/7f334e880dbb60df12140af570be92d2a6bb83": "d938a50de0a10f17212b5ce1690c4c07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2db392eaf089e2b92770e9440f79e4f16ee4e6": "b1494275fd05992d8615fa0bbd8f2751",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a3f1d4a6e6b109a2aa7632822f7846d3e481f3": "f65054d8fbd0633b4f76db9f8899c720",
".git/objects/f4/e090e707f6ef1c2d1926fdd757d7dfc9db2d84": "55656fef3d4306ae0b4b170d0120599c",
".git/objects/f5/6b6e607ef921c3abe5ef03d780f6c6174403d4": "73d44c73f064cd31757dfa097bf16784",
".git/objects/f6/96584e40355b26a4d4400ebfc21cfd3b26e311": "790441fd251818936d9af89c232af678",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/github-pages": "e9b6cce6e313c28cd7051bc8eed6b554",
".git/refs/heads/hasan": "d6792021d0aa1a83a040b99aa15bbb24",
".git/refs/heads/main": "ab129f6532c87254f661d3bc99f09239",
".git/refs/remotes/origin/hasan": "d6792021d0aa1a83a040b99aa15bbb24",
".git/refs/remotes/origin/main": "ab129f6532c87254f661d3bc99f09239",
"assets/AssetManifest.json": "e526e261602fb3550120b04ed4e918fc",
"assets/assets/virtus.jpeg": "5bd77f6884825219416181fcdaf3cc01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ff1371d3cc746d3a34bc8c044e1be96",
"/": "3ff1371d3cc746d3a34bc8c044e1be96",
"main.dart.js": "d197794fc0329a5d3c31f7d0dc7d79a8",
"manifest.json": "3539339f19858a8084b7cdc3b9001a6c",
"README.md": "a5f86a8cc127ee84b05d344c11b8ee01",
"version.json": "7209d9816eaa0e31867d69ac01531f74"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
