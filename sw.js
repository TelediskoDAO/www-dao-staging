if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/dijkstra.c6eae3dd.js",revision:null},{url:"assets/index.1fb258f5.js",revision:null},{url:"assets/index.4f1d55e0.js",revision:null},{url:"assets/index.578c0626.css",revision:null},{url:"assets/index.a1425873.js",revision:null},{url:"assets/index.b186df6c.js",revision:null},{url:"assets/tslib.es6.cb12a069.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"core.js",revision:"74f98aa2548a8a384cb322484cabc412"},{url:"index.html",revision:"8a2cb381e746c7d900a487ae21107c73"},{url:"main.css",revision:"95805322ebaf23154373d13f6ca369d6"},{url:"images/logo-192.png",revision:"5290fa0e70e41d9211e882265fb59207"},{url:"images/logo-512.png",revision:"55a099f78bbeae3cc8b175b57ab98c51"},{url:"images/shortcut-time-tracking-192.png",revision:"7b4822fd1db08c3ce9be13ad8db57483"},{url:"manifest.webmanifest",revision:"bd54e91261cd2e8f3f695da2344f9776"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
