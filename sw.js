'use strict';
var V='poirot-v1.0.0';
var CORE=['./','index.html','manifest.webmanifest','assets/logo.svg','assets/logo-maskable.svg','assets/banner.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==V;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
  var req=e.request;if(req.method!=='GET')return;
  var url;try{url=new URL(req.url);}catch(er){return;}
  if(req.mode==='navigate'){e.respondWith(fetch(req).then(function(r){var cp=r.clone();caches.open(V).then(function(c){c.put('index.html',cp);});return r;}).catch(function(){return caches.match('index.html');}));return;}
  if(url.origin===location.origin){e.respondWith(caches.match(req).then(function(h){return h||fetch(req).then(function(r){if(r.ok){var cp=r.clone();caches.open(V).then(function(c){c.put(req,cp);});}return r;});}));return;}
  e.respondWith(caches.match(req).then(function(h){var f=fetch(req).then(function(r){if(r&&(r.ok||r.type==='opaque')){var cp=r.clone();caches.open(V).then(function(c){c.put(req,cp);});}return r;}).catch(function(){return h;});return h||f;}));
});
