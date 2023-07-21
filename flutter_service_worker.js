'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cd975ad7efd8e864dc83e48f37d8e607",
"index.html": "ae88cad1e808eaebc8cf1a8a96a3920c",
"/": "ae88cad1e808eaebc8cf1a8a96a3920c",
"main.dart.js": "b1ae28d3085e7b6eb15cb7d30496c023",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192m.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "6361a05c514cfb6d986826816526a751",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-App-1024x1024@1x.png": "6361a05c514cfb6d986826816526a751",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb31756397de155201cfe94866ce747e",
"assets/AssetManifest.json": "1cbbfd5fe36649673cf696d15ccc31d9",
"assets/NOTICES": "36dae899781ec114af3e68d50c746da1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6898b876b57024609c169d4543b335c6",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "65fa489daf9daf4f21060c84be4e28c1",
"assets/fonts/MaterialIcons-Regular.otf": "5d021382b0333944f1ebb7f6d77935fb",
"assets/assets/images/googleplay.png": "c59325400914d43829ef7706e3879c7c",
"assets/assets/images/learnig_pc-min.jpg": "db86cdd216406f43af9fe6d4f6181984",
"assets/assets/images/mcel.png": "0839b1d385061efc8d45944a66f8600d",
"assets/assets/images/no_course_page.png": "76a65544ee874e414c99dee6c7c008ce",
"assets/assets/images/building.img-min.jpg": "cf122bdb98c32ba1809f0d64064eff8a",
"assets/assets/images/frame.gif": "83b3e19ba29331a37d99ef45adb65566",
"assets/assets/images/vodacom.png": "a90a1a4bc2260ab57b6208c9976f04b0",
"assets/assets/images/mkash.jpeg": "fc6018fbfb25ff71dd722fceb2d105a1",
"assets/assets/images/team_img-min.jpg": "46b3eab816123d78e539b0466d30ac50",
"assets/assets/images/platform-min.jpg": "745c40a5d2047b5cd6157a0721bf35df",
"assets/assets/images/no_course.svg": "18a94a46bee6c06228972c84e6290e5f",
"assets/assets/images/frame3.png": "fee0d1ad684b9a48a1f86f3e299352e8",
"assets/assets/images/frame2.png": "69603d0f27b8004508039e598e70ee30",
"assets/assets/images/frame1.png": "937a1dc276618472350313892d7ada1d",
"assets/assets/images/emola.png": "d809bedfb86773cd3247a8920cb27978",
"assets/assets/images/movitel.png": "6dc6ae2b4b5a6449b1f43c5135bc178e",
"assets/assets/images/developer-min.jpg": "17f4a2394d0f36ff3ad751c8fa95d351",
"assets/assets/images/rocket_icon.jpg": "f17fa3ef6934dc769aab80ef5c07fd04",
"assets/assets/images/mpesa.png": "cfc980a60a2a8b8b793728d0e450df2d",
"assets/assets/logo/gray_blue_on_top_logo.png": "b40be41124c0361c6ae1a2b7677307b2",
"assets/assets/logo/icon.png": "f187a5303221a2b2424334c97798cc4c",
"assets/assets/logo/icon_front.png": "0f371342ff3096a44007c5747f7cb469",
"assets/assets/logo/gray_blue_logo.png": "956e5f55937031e6cd40c234470c30ed",
"assets/assets/logo/white_blue_on_top_logo.png": "75b874d3945ab36bfec96c743a7e5d31",
"assets/assets/logo/splash.png": "2653dfcc6273562644ad6038d2925500",
"assets/assets/logo/logo_compasso.png": "2b6c45bd6f461806581a25b3c14fe61f",
"assets/assets/logo/white_blue_logo.png": "206fdee4e0558cb6c01c8ef14858405f",
"assets/assets/logo/icon_front_android.png": "6abe91c57536c75fbc1a134fda009a7c",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
