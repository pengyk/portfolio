"use strict";var precacheConfig=[["/portfolio/index.html","3529639af6245b876ac81724c03513d7"],["/portfolio/static/css/main.bf5cc2a7.css","927e0829c00d2152aa1d8906add54df1"],["/portfolio/static/js/main.f20af8d6.js","d7366b442912f279eda9c0848832cd99"],["/portfolio/static/media/AboutMePic.ab55102c.jpg","ab55102c97d1af96d4eaf2b1ca06541c"],["/portfolio/static/media/MSProject.fd8c20e7.pdf","fd8c20e79cad05b4a2612d59c12b96ec"],["/portfolio/static/media/Mail.77980d3b.png","77980d3b07d08e164f64ecf0d2d43be4"],["/portfolio/static/media/Paintrix.93ad61bb.jpg","93ad61bb7d5f219fa1db16624e6d75b3"],["/portfolio/static/media/Peng__Yun_Kai_Resume.4bb514d4.pdf","4bb514d497d54fc703ef6084da3726e4"],["/portfolio/static/media/Properpark.fe423082.jpg","fe4230826a803cf8c7a6dbd630172b19"],["/portfolio/static/media/backgroundPic.61066c4b.jpg","61066c4bc788eadff735ed582f151719"],["/portfolio/static/media/burger-logo.b8503d26.png","b8503d262bffbfb7c67fd6762963e7d1"],["/portfolio/static/media/porfilepic.5cc18e38.jpg","5cc18e38b2a5e45c92edf68f00d7c49e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});