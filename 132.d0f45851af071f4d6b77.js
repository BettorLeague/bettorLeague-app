(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{v4tM:function(e,o,r){"use strict";r.r(o),r.d(o,"shadow",function(){return f}),r.d(o,"iosTransitionAnimation",function(){return s});var t=500,n="cubic-bezier(0.36,0.66,0.04,1)",a="opacity",d="transform",l="translateX",i="0%",c=.8;function f(e){return e.shadowRoot||e}function s(e,o,r){var s="rtl"===document.dir,m=s?"-99.5%":"99.5%",u=s?"33%":"-33%",b=r.enteringEl,y=r.leavingEl,w=new e;if(w.addElement(b).duration(r.duration||t).easing(r.easing||n).beforeRemoveClass("ion-page-invisible"),y&&o){var S=new e;S.addElement(o).beforeAddClass("show-decor").afterRemoveClass("show-decor"),w.add(S)}var v="back"===r.direction;if(b){var T=b.querySelector(":scope > ion-content"),p=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),E=b.querySelector(":scope > ion-header > ion-toolbar"),q=new e;if(T||E||0!==p.length?(q.addElement(T),q.addElement(p)):q.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),w.add(q),v?q.beforeClearStyles([a]).fromTo(l,u,i,!0).fromTo(a,c,1,!0):q.beforeClearStyles([a]).fromTo(l,m,i,!0),E){var g=new e;g.addElement(E),w.add(g);var C=new e;C.addElement(E.querySelector("ion-title"));var h=new e;h.addElement(E.querySelectorAll("ion-buttons,[menuToggle]"));var k=new e;k.addElement(f(E).querySelector(".toolbar-background"));var x=new e,A=E.querySelector("ion-back-button");if(x.addElement(A),g.add(C).add(h).add(k).add(x),C.fromTo(a,.01,1,!0),h.fromTo(a,.01,1,!0),v)C.fromTo(l,u,i,!0),x.fromTo(a,.01,1,!0);else if(C.fromTo(l,m,i,!0),k.beforeClearStyles([a]).fromTo(a,.01,1,!0),x.fromTo(a,.01,1,!0),A){var R=new e;R.addElement(f(A).querySelector(".button-text")).fromTo(l,s?"-100px":"100px","0px"),g.add(R)}}}if(y){var J=new e;J.addElement(y.querySelector(":scope > ion-content")),J.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),w.add(J),v?J.beforeClearStyles([a]).fromTo(l,i,s?"-100%":"100%"):J.fromTo(l,i,u,!0).fromTo(a,1,c,!0);var z=y.querySelector(":scope > ion-header > ion-toolbar");if(z){var M=new e;M.addElement(z);var P=new e;P.addElement(z.querySelector("ion-title"));var X=new e;X.addElement(z.querySelectorAll("ion-buttons,[menuToggle]"));var j=new e;if(j.addElement(f(z).querySelector(".toolbar-background")),q=new e,x=z.querySelector("ion-back-button"),q.addElement(x),M.add(P).add(X).add(q).add(j),w.add(M),q.fromTo(a,.99,0,!0),P.fromTo(a,.99,0,!0),X.fromTo(a,.99,0,!0),v){if(P.fromTo(l,i,s?"-100%":"100%"),j.beforeClearStyles([a]).fromTo(a,1,.01,!0),x){var B=new e;B.addElement(f(x).querySelector(".button-text")),B.fromTo(l,i,(s?-124:124)+"px"),M.add(B)}}else P.fromTo(l,i,u).afterClearStyles([d]),q.afterClearStyles([a]),P.afterClearStyles([a]),X.afterClearStyles([a])}}return Promise.resolve(w)}}}]);