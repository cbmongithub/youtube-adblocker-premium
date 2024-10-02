// ==UserScript==
// @name         youtube-adblocker-premium
// @namespace    https://youtube.com
// @version      v0.1.0
// @description  A lightweight, optimized client script to block all types of YouTube ads, ensuring a premium user experience.
// @author       𝕔𝕓𝕞 - Christian B. Martinez
// @match        https://www.youtube.com/watch?v=*
// @match        https://youtube.com/watch?v=*
// @connect      youtube.com
// @connect      www.youtube.com
// @connect      self
// @connect      localhost
// @connect      8.8.8.8
// @connect      https://www.youtube.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=YouTube.com
// @sandbox      JavaScript
// @grant        unsafeWindow
// @exclude      *://accounts.youtube.com/*
// @exclude      *://www.youtube.com/live_chat_replay*
// @exclude      *://www.youtube.com/persist_identity*
// @run-at       document-body
// @license      MIT
// ==/UserScript==

(function(){"use strict";var v,s=["#masthead-ad","ytd-rich-item-renderer.style-scope.ytd-rich-grid-row #content:has(.ytd-display-ad-renderer)",".video-ads.ytp-ad-module","tp-yt-paper-dialog:has(yt-mealbar-promo-renderer)","ytd-engagement-panel-section-list-renderer[target-id=\"engagement-panel-ads\"]","#related #player-ads","#related ytd-ad-slot-renderer","ytd-ad-slot-renderer","yt-mealbar-promo-renderer","ytd-popup-container:has(a[href=\"/premium\"])","ad-slot-renderer","ytm-companion-ad-renderer"];window.d=!1;var m=function(t){return t.getFullYear()+"-"+(t.getMonth()+1).toString().padStart(2,"0")+"-"+t.getDate().toString().padStart(2,"0")+" "+t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")+":"+t.getSeconds().toString().padStart(2,"0")},l=function(msg){if(!window.d)return;console.log(window.location.href),console.log(m(new Date())+"  "+msg)},f=function(n){var e=document.createElement("style");e.id=n,(document.head||document.body).appendChild(e)},g=function(n){return document.getElementById(n)},c=function(n){return!!g(n)||(f(n),!1)},r=function(id){if(c(id)){l("Ad blocking page node already generated");return}var e=document.createElement("style");(document.head||document.body).appendChild(e),e.appendChild(document.createTextNode(s.map(function(sel){return sel+"{display:none!important}"}).join(" "))),l("Successfully generated ad blocking page node")},t=function(){var touch=new Touch({identifier:Date.now(),target:this,clientX:12,clientY:34,radiusX:56,radiusY:78,rotationAngle:0,force:1}),touchStartEvent=new TouchEvent("touchstart",{bubbles:!0,cancelable:!0,view:window,touches:[touch],targetTouches:[touch],changedTouches:[touch]});this.dispatchEvent(touchStartEvent);var touchEndEvent=new TouchEvent("touchend",{bubbles:!0,cancelable:!0,view:window,touches:[],targetTouches:[],changedTouches:[touch]});this.dispatchEvent(touchEndEvent)},d=function(){v=document.querySelector(".ad-showing video")||document.querySelector("video")},p=function(){v.paused&&v.currentTime<1&&(v.play(),l("Auto play video"))},o=function(){var pc=Array.prototype.slice.call(document.querySelectorAll("ytd-popup-container")).filter(function(c){return c.querySelector('a[href="/premium"]')});pc.length>0&&(pc.forEach(function(c){c.remove()}),l("Removed YT interceptor"));var b=document.querySelectorAll("tp-yt-iron-overlay-backdrop"),tb=Array.prototype.slice.call(b).find(function(b){return b.style.zIndex==="2201"});tb&&(tb.className="",tb.removeAttribute("opened"),l("Closed overlay"))},k=function(){var sb=document.querySelector(".ytp-ad-skip-button")||document.querySelector(".ytp-skip-ad-button")||document.querySelector(".ytp-ad-skip-button-modern"),sm=document.querySelector(".video-ads.ytp-ad-module .ytp-ad-player-overlay")||document.querySelector(".ytp-ad-button-icon");if((sb||sm)&&window.location.href.indexOf("https://m.youtube.com/")===-1&&(v.muted=!0),sb){var dt=.5;setTimeout(k,1e3*dt),v.currentTime>dt?(v.currentTime=v.duration,l("Special account skipped button ad")):(sb.click(),t.call(sb),l("Button skipped ad"))}else sm&&(v.currentTime=v.duration,l("Forced end of ad"))},a=function(id){if(c(id)){l("Remove ads in playback function already running");return}var tn=document.body,cfg={childList:!0,subtree:!0},ob=new MutationObserver(function(){d(),o(),k(),p()});ob.observe(tn,cfg),l("Successfully running remove ads in playback function")},main=function(){r("removeADHTMLElement"),a("removePlayerAD")};document.readyState==="loading"?(document.addEventListener("DOMContentLoaded",main),l("YouTube ad removal script about to be called:")):(main(),l("YouTube ad removal script quickly called:"))})();
