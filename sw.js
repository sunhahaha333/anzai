// 安仔开抢四代 PWA Service Worker
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ /* 空 fetch：满足 PWA 安装条件，不做缓存 */ });
