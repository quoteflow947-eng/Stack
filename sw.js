const CACHE="stack-v4";
const ASSETS=["./","./index.html","./style.css","./app.js","./content.js","./manifest.webmanifest.json","./icon.svg"];

self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>c.add(u).catch(()=>{})))));
});

self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const url=new URL(e.request.url);
  const isCode=url.pathname.match(/\.(js|css)$/);
  if(isCode){
    e.respondWith(fetch(e.request).then(r=>{
      if(r&&r.status===200){const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));}
      return r;
    }).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
    if(r&&r.status===200&&r.type==="basic"){const clone=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,clone));}
    return r;
  })).catch(()=>{
    if(e.request.mode==="navigate")return caches.match("./index.html");
  }));
});
