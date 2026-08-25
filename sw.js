'use strict';
/* Poirot v0.0.9 SW — by THE SAZ 🔱 */
const V='poirot-v0.0.9';
const CORE=['./','index.html','manifest.webmanifest','assets/logo.svg','assets/logo-maskable.svg','assets/banner.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(req.mode==='navigate'){e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(V).then(c=>c.put('index.html',cp));return r;}).catch(()=>caches.match('index.html')));return;}
  if(url.origin===location.origin){e.respondWith(caches.match(req).then(h=>h||fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(V).then(c=>c.put(req,cp));}return r;})));return;}
  e.respondWith(caches.match(req).then(h=>{const f=fetch(req).then(r=>{if(r&&(r.ok||r.type==='opaque')){const cp=r.clone();caches.open(V).then(c=>c.put(req,cp));}return r;}).catch(()=>h);return h||f;}));
});