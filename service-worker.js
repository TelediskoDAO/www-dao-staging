!function(){"use strict";const e=1647811819129,s="0.10.0";console.log("[Service Worker] Version:",s,"Build date:",new Date(e));const o=s+"."+e,t=["fonts/material-icons.woff2","images/icons/ios-share.png","images/logo-152.png","images/logo-167.png","images/logo-180.png","images/logo-192.png","images/logo-512.png","images/shortcut-time-tracking-192.png","images/splash-1125.png","images/splash-1242.png","images/splash-1536.png","images/splash-1668.png","images/splash-2048.png","images/splash-640.png","images/splash-750.png","core.js","bundle.js","components.css","./","manifest.webmanifest","style.css"];console.log(`[Service Worker ${o}] Register Listener: install`),self.addEventListener("install",(s=>{s.waitUntil((console.log(`[Service Worker ${o}] Caching app`),caches.open(o).then((s=>Promise.all(t.map((t=>fetch(`${t}?${e}`).then((n=>{if(console.log(`[Service Worker] Fetching ${t}?${e}`),!n.ok)throw console.error(`[Service Worker ${o}] Cannot fetch`,t),Error(`Cannot fetch ${t}`);return s.put(t,n)})))))))))})),console.log(`[Service Worker ${o}] Register Listener: fetch`),self.addEventListener("fetch",(e=>{e.respondWith(async function({request:e}){let s=await caches.match(e);return s?console.log(`[Service Worker ${o}] Fetch hit`,e.url):(console.log(`[Service Worker ${o}] Fetch miss`,e.url),s=await fetch(e)),s}(e))})),console.log(`[Service Worker ${o}] Register Listener: activate`),self.addEventListener("activate",(e=>{console.log(`[Service Worker ${o}] Activate`),e.waitUntil(async function(){console.log(`[Service Worker ${o}] Clear cache`);const e=(await caches.keys()).filter((e=>e!==o));return Promise.all(e.map((e=>caches.delete(e))))}())})),self.addEventListener("message",(function(o){console.log("[Service Worker] Message:",o);const t=o.ports[0];switch(o.data.method){case"skipWaiting":self.skipWaiting();break;case"getInfo":t.postMessage({result:{version:s,date:e}})}}))}();
//# sourceMappingURL=service-worker.js.map
