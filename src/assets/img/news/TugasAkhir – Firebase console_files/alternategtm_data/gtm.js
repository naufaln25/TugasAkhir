
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"3",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventName"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(utm_medium=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(utm_source=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(utm_campaign=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(utm_content=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(utm_term=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(dclid=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key",".*(gclid=[^\u0026\\?]*).*","value","\u0026$1"]]
    },{
      "function":"__c",
      "vtp_value":["template",["macro",5],["macro",6],["macro",7],["macro",8],["macro",9],["macro",10],["macro",11]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",12],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\u0026(.*)","value","?$1"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"referrer",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__uv"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",14],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":["macro",15],
      "vtp_map":["list",["map","key","^.*\\\/\\\/[^\\\/]*fire(base|site).*","value",["macro",15]],["map","key","^([^\\?]*).*","value","$1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_defaultValue":["macro",16],
      "vtp_map":["list",["map","key","","value",["macro",15]],["map","key",["macro",15],"value",["macro",15]]]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",18],":",["macro",19]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"signedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalUser"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key","1","value","True"],["map","key","true","value","True"],["map","key","True","value","True"]]
    },{
      "function":"__c",
      "vtp_value":"UA-130566877-1"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","legacyHistoryImport","value","false"],["map","fieldName","cookieName","value","_ga2"],["map","fieldName","referrer","value",["macro",17]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","14","dimension",["macro",20]],["map","index","19","dimension",["macro",1]],["map","index","20","dimension",["macro",2]],["map","index","15","dimension",["macro",21]],["map","index","17","dimension",["macro",22]],["map","index","16","dimension",["macro",24]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^([^\\?]*).*","value",["template","$1",["macro",13]]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"metadata"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experimentType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",30],
      "vtp_defaultValue":"",
      "vtp_map":["list",["map","key","exp name goes here","value","exp id goes here"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"variant"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"packageName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"not set",
      "vtp_name":"projectNumber"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template","\/virtual\/",["macro",1],"\/",["macro",2]]],["map","fieldName","location","value",["template","https:\/\/",["macro",3],"\/virtual\/",["macro",1],"\/",["macro",2],["macro",13]]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",26],
      "vtp_enableEcommerce":false,
      "vtp_useInternalVersion":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":true,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",28]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_gaSettings":["macro",26],
      "vtp_enableEcommerce":false,
      "vtp_useInternalVersion":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":true,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"concordEvent"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"^(https:\/\/firebase.google.com\/|.*fernandroid)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1,2],["add",1]]]
},
"runtime":[]




};


/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=ea,ka=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Zi=b.prototype},ma=this||self,pa=function(a){return a};var qa={},ra=function(a,b){qa[a]=qa[a]||[];qa[a][b]=!0},sa=function(a){for(var b=[],c=qa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ta=function(){},ua=function(a){return"function"==typeof a},va=function(a){return"string"==typeof a},wa=function(a){return"number"==typeof a&&!isNaN(a)},xa=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&ra("TAGGING",4):ra("TAGGING",5);return b},ya=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},za=function(a,b){if(a&&xa(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Aa=function(a,b){if(!wa(a)||!wa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ea=function(a,b){for(var c=new Ca,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ga=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ia=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ja=
function(a){return Math.round(Number(a))||0},Ka=function(a){return"false"==String(a).toLowerCase()?!1:!!a},La=function(a){var b=[];if(xa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Oa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Pa=function(){return new Date(Date.now())},Ra=function(){return Pa().getTime()},Ca=function(){this.prefix="gtm.";this.values={}};Ca.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ca.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ya=/^\w{1,9}$/,
Za=function(a){var b=[];Ga(a,function(c,d){Ya.test(c)&&d&&b.push(c)});return b.join(",")};var $a,ab=function(){if(void 0===$a){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:pa,createScript:pa,createScriptURL:pa})}catch(c){ma.console&&ma.console.error(c.message)}$a=a}else $a=a}return $a};var eb=function(a,b){this.o=b===bb?a:""};eb.prototype.toString=function(){return this.o+""};var bb={};var fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var gb;a:{var hb=ma.navigator;if(hb){var jb=hb.userAgent;if(jb){gb=jb;break a}}gb=""}var kb=function(a){return-1!=gb.indexOf(a)};var mb=function(a,b,c){this.o=c===lb?a:""};mb.prototype.toString=function(){return this.o.toString()};var nb=function(a){return a instanceof mb&&a.constructor===mb?a.o:"type_error:SafeHtml"},lb={},ob=function(a){var b=ab(),c=b?b.createHTML(a):a;return new mb(c,null,lb)},pb=new mb(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,lb);var qb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},rb=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var sb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=nb(pb);return!c.parentElement}),tb=function(a,b){if(sb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=nb(b)};var g=window,m=document,ub=navigator,vb=m.currentScript&&m.currentScript.src,wb=function(a,b){var c=g[a];g[a]=void 0===c?b:c;return g[a]},xb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Cb=function(a,b,c){var d=m.createElement("script");d.type="text/javascript";d.async=!0;var e,f=ab(),h=f?f.createScriptURL(a):a;e=new eb(h,bb);d.src=e instanceof eb&&e.constructor===eb?e.o:"type_error:TrustedResourceUrl";
var k,l,n=(d.ownerDocument&&d.ownerDocument.defaultView||window).document,p=null===(l=n.querySelector)||void 0===l?void 0:l.call(n,"script[nonce]");(k=p?p.nonce||p.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",k);xb(d,b);c&&(d.onerror=c);var q=m.getElementsByTagName("script")[0]||m.body||m.head;q.parentNode.insertBefore(d,q);return d},Db=function(){if(vb){var a=vb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Eb=function(a,b){var c=m.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=m.body&&m.body.lastChild||m.body||m.head;d.parentNode.insertBefore(c,d);xb(c,b);void 0!==a&&(c.src=a);return c},Fb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Gb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Hb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},B=function(a){g.setTimeout(a,0)},Ib=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Jb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Kb=function(a){var b=m.createElement("div"),c=ob("A<div>"+a+"</div>");tb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},Lb=function(a,
b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Ob=function(a){ub.sendBeacon&&ub.sendBeacon(a)||Fb(a)},Pb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Qb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Rb=function(a){if(null==a)return String(a);var b=Qb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Tb=function(a){if(!a||"object"!=Rb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sb(a,"constructor")&&!Sb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sb(a,b)},E=function(a,b){var c=b||("array"==Rb(a)?[]:{}),d;for(d in a)if(Sb(a,d)){var e=a[d];"array"==Rb(e)?("array"!=Rb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):Tb(e)?(Tb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Ub=function(a){if(void 0===a||xa(a)||Tb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Vb=function(){var a=function(b){return{toString:function(){return b}}};return{xg:a("consent"),yg:a("consent_always_fire"),Oe:a("convert_case_to"),Pe:a("convert_false_to"),Qe:a("convert_null_to"),Re:a("convert_true_to"),Se:a("convert_undefined_to"),Ii:a("debug_mode_metadata"),kb:a("function"),jh:a("instance_name"),lh:a("live_only"),mh:a("malware_disabled"),nh:a("metadata"),Li:a("original_activity_id"),Mi:a("original_vendor_template_id"),ph:a("once_per_event"),uf:a("once_per_load"),Oi:a("priority_override"),
Pi:a("respected_consent_types"),yf:a("setup_tags"),zf:a("tag_id"),Af:a("teardown_tags")}}();var tc;
var uc=[],Dc=[],Ec=[],Fc=[],Gc=[],Hc={},Ic,Jc,Kc,Lc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Hc[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Kf&&b.Kf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===Vb.yg.toString()&&a[f]){}
d&&b&&b.Jf&&(e.vtp_gtmCachedValues=b.Jf);return void 0!==d?d(e):tc(c,e,b)},Nc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Mc(a[e],b,c));return d},Mc=function(a,b,c){if(xa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Mc(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=uc[f];if(!h||b.se(h))return;c[f]=!0;try{var k=Nc(h,b,c);k.vtp_gtmEventId=b.id;
d=Lc(k,b);Kc&&(d=Kc.Eh(d,k))}catch(y){b.Yf&&b.Yf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Mc(a[l],b,c)]=Mc(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,p=1;p<a.length;p++){var q=Mc(a[p],b,c);Jc&&(n=n||q===Jc.Qc);d.push(q)}return Jc&&n?Jc.Hh(d):d.join("");case "escape":d=Mc(a[1],b,c);if(Jc&&xa(a[1])&&"macro"===a[1][0]&&Jc.ai(a))return Jc.oi(d);d=String(d);for(var t=2;t<a.length;t++)Wb[a[t]]&&(d=Wb[a[t]](d));return d;case "tag":var u=a[1];if(!Fc[u])throw Error("Unable to resolve tag reference "+
u+".");return d={Rf:a[2],index:u};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Oc(r,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Oc=function(a,b,c){try{return Ic(Nc(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Rc=function(a){function b(t){for(var u=0;u<t.length;u++)d[t[u]]=!0}for(var c=[],d=[],e=Pc(a),f=0;f<Dc.length;f++){var h=Dc[f],k=Qc(h,e);if(k){for(var l=h.add||[],n=0;n<l.length;n++)c[l[n]]=!0;b(h.block||[])}else null===k&&b(h.block||[]);}for(var p=[],q=0;q<Fc.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},Qc=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],h=0;h<f.length;h++){var k=b(f[h]);if(2===k)return null;if(1===k)return!1}return!0},Pc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Oc(Ec[c],a));return b[c]}};var Sc={Eh:function(a,b){b[Vb.Oe]&&"string"===typeof a&&(a=1==b[Vb.Oe]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Vb.Qe)&&null===a&&(a=b[Vb.Qe]);b.hasOwnProperty(Vb.Se)&&void 0===a&&(a=b[Vb.Se]);b.hasOwnProperty(Vb.Re)&&!0===a&&(a=b[Vb.Re]);b.hasOwnProperty(Vb.Pe)&&!1===a&&(a=b[Vb.Pe]);return a}};var H={Ub:"_ee",Wc:"_syn_or_mod",Qi:"_uei",Od:"_eu",Ni:"_pci",xb:"event_callback",Fc:"event_timeout",Ca:"gtag.config",Ka:"gtag.get",wa:"purchase",vb:"refund",Za:"begin_checkout",tb:"add_to_cart",ub:"remove_from_cart",Hg:"view_cart",Ue:"add_to_wishlist",Ja:"view_item",Ac:"view_promotion",zc:"select_promotion",td:"select_item",Lb:"view_item_list",Te:"add_payment_info",Gg:"add_shipping_info",Ua:"value_key",Ta:"value_callback",Da:"allow_ad_personalization_signals",Qb:"restricted_data_processing",Mb:"allow_google_signals",
Ga:"cookie_expires",Nb:"cookie_update",Sb:"session_duration",Kc:"session_engaged_time",Na:"user_properties",na:"transport_url",R:"ads_data_redaction",xa:"user_data",Ob:"first_party_collection",D:"ad_storage",H:"analytics_storage",Me:"region",Ne:"wait_for_update",Fa:"conversion_linker",Ea:"conversion_cookie_prefix",fa:"value",da:"currency",nf:"trip_type",X:"items",df:"passengers",ud:"allow_custom_scripts",Ab:"session_id",kf:"quantity",jb:"transaction_id",eb:"language",Ec:"country",Cc:"allow_enhanced_conversions",
zd:"aw_merchant_id",xd:"aw_feed_country",yd:"aw_feed_language",wd:"discount",Ye:"developer_id",Mc:"delivery_postal_code",Fd:"estimated_delivery_date",Dd:"shipping",Md:"new_customer",Ad:"customer_lifetime_value",Ed:"enhanced_conversions",wb:"page_view",ma:"linker",N:"domains",hb:"decorate_forms"};H.rf=[H.wa,H.vb,H.Za,H.tb,H.ub,H.Hg,H.Ue,H.Ja,H.Ac,H.zc,H.Lb,H.td,H.Te,H.Gg];H.qf=[H.Da,H.Mb,H.Nb];H.sf=[H.Ga,H.Fc,H.Sb,H.Kc];var td=function(a){ra("GTM",a)};var ud=function(a,b){this.o=a;this.defaultValue=void 0===b?!1:b};var vd=new ud(1936,!0),wd=new ud(1933);var yd=function(){var a=xd;if(a.pe&&a.hasOwnProperty("pe"))return a.pe;var b=new a;return a.pe=b};var xd=function(){var a={};this.o=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[wd.o]=!0}},Dd=function(a){return yd().o(a.o,a.defaultValue)};var Ed=[];function Fd(){var a=wb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Gd,update:Hd,addListener:Id,notifyListeners:Jd,active:!1,usedDefault:!1});return a.ics}
function Gd(a,b,c,d,e,f){var h=Fd();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,p=c&&va(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?n!==e:!p&&!n)){var q=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)k[a]=t;q&&g.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,Kd(a),Jd(),ra("TAGGING",2))},f)}}}
function Hd(a,b){var c=Fd();c.active=!0;if(void 0!=b){var d=Ld(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Ld(a);f.quiet?(f.quiet=!1,Kd(a)):h!==d&&Kd(a)}}function Id(a,b){Ed.push({ee:a,Ph:b})}function Kd(a){for(var b=0;b<Ed.length;++b){var c=Ed[b];xa(c.ee)&&-1!==c.ee.indexOf(a)&&(c.ag=!0)}}function Jd(a){for(var b=0;b<Ed.length;++b){var c=Ed[b];if(c.ag){c.ag=!1;try{c.Ph({Dh:a})}catch(d){}}}}
var Ld=function(a){var b=Fd().entries[a]||{};return void 0!==b.update?b.update:b.initial},Md=function(a){return(Fd().entries[a]||{}).initial},Nd=function(a){return!(Fd().entries[a]||{}).quiet},Od=function(){return Dd(wd)?Fd().active:!1},Pd=function(){return Fd().usedDefault},Qd=function(a,b){Fd().addListener(a,b)},Rd=function(a){Fd().notifyListeners(a)},Sd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Nd(b[e]))return!0;return!1}if(c()){var d=!1;Qd(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Td=function(a,b){function c(){for(var f=[],h=0;h<d.length;h++){var k=d[h];!1===Ld(k)||e[k]||(f.push(k),e[k]=!0)}return f}var d=va(b)?[b]:b,e={};c().length!==d.length&&Qd(d,function(f){var h=c();0<h.length&&(f.ee=h,a(f))})};function Ud(a){for(var b=[],c=0;c<Vd.length;c++){var d=a(Vd[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Vd=[H.D,H.H],Wd=function(a){var b=a[H.Me];b&&td(40);var c=a[H.Ne];c&&td(41);for(var d=xa(b)?b:[b],e={Hb:0};e.Hb<d.length;e={Hb:e.Hb},++e.Hb)Ga(a,function(f){return function(h,k){if(h!==H.Me&&h!==H.Ne){var l=d[f.Hb];Fd().set(h,k,l,"ID","ID-JK",c)}}}(e))},Xd=function(a,b){Ga(a,function(c,d){Fd().update(c,d)});Rd(b)},K=function(a){var b=Ld(a);return void 0!=b?b:!0},Yd=function(){return"G1"+Ud(Ld)},Zd=function(a,b){Td(a,b)},$d=function(a,b){Sd(a,b)};var be=function(a){return ae?m.querySelectorAll(a):null},ce=function(a,b){if(!ae)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!m.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},de=!1;if(m.querySelectorAll)try{var ee=m.querySelectorAll(":root");ee&&1==ee.length&&ee[0]==m.documentElement&&(de=!0)}catch(a){}var ae=de;var fe,ge=!1;var he=function(a){if(m.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!g.getComputedStyle)return!0;var c=g.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=g.getComputedStyle(d,
null))}return!1};var qe=/:[0-9]+$/,re=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ue=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=se(a.protocol)||se(g.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:g.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||g.location.hostname).replace(qe,"").toLowerCase());return te(a,b,c,d,e)},te=function(a,b,c,d,e){var f,h=se(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=ve(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(qe,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||ra("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ya(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=re(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},se=function(a){return a?a.replace(":","").toLowerCase():""},ve=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},we=function(a){var b=m.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ra("TAGGING",1),c="/"+c);var d=b.hostname.replace(qe,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},xe=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
e=we(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var ye={},ze=!0,Ae=!1;var Le=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Me=new RegExp(/@(gmail|googlemail)\./i),Ne=new RegExp(/support|noreply/i),Oe="SCRIPT STYLE IMG SVG PATH BR".split(" "),Pe=["BR"],Qe={};
function Re(a){var b;if(a===m.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=Re(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function Se(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function Te(a){if(0==a.length)return null;var b;b=Se(a,function(c){return!Ne.test(c.va)});b=Se(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Se(b,function(c){return!he(c.element)});return b[0]}
var Ue=function(a){var b=!a||!!a.Xh,c=!a||!!a.Yh,d=b+"."+c;a&&a.cd&&a.cd.length&&(d+="."+a.cd.join("."));var e=Qe[d];if(e&&200>Ra()-e.timestamp)return e.result;var f;var h=[],k=m.body;if(k){for(var l=k.querySelectorAll("*"),n=0;n<l.length&&1E4>n;n++){var p=l[n];if(!(0<=Oe.indexOf(p.tagName.toUpperCase()))){for(var q=!1,t=0;t<p.childElementCount&&1E4>t;t++)if(!(0<=Pe.indexOf(p.children[t].tagName.toUpperCase()))){q=!0;break}q||h.push(p)}}f={elements:h,status:1E4<l.length?"2":"1"}}else f={elements:h,
status:"4"};for(var u=f,r=u.elements,v=[],w=0;w<r.length;w++){var y=r[w],x=y.textContent;y.value&&(x=y.value);if(x){var z=x.match(Le);if(z){var A=z[0],C;if(g.location){var D=te(g.location,"host",!0);C=0<=A.toLowerCase().indexOf(D)}else C=!1;C||v.push({element:y,va:A})}}}var F;var I=a&&a.cd;if(I&&0!==I.length){for(var N=[],J=0;J<v.length;J++){for(var R=!0,P=0;P<I.length;P++){var T=I[P];if(T&&ce(v[J].element,T)){R=!1;break}}R&&N.push(v[J])}F=N}else F=v;var G=Te(F),Q=[];if(G){var V=G.element,M={va:G.va,
tagName:V.tagName,type:1};b&&(M.querySelector=Re(V));c&&(M.isVisible=!he(V));Q.push(M)}var Z={elements:Q,status:10<v.length?"3":u.status};Qe[d]={timestamp:Ra(),result:Z};return Z},Ve=function(a){return a.tagName+":"+a.isVisible+":"+a.va.length+":"+Me.test(a.va)};
var We=function(a){return/^e\d+$/.test(a)||/^[0-9A-Za-z_-]{43}$/.test(a)},Xe=function(a){return void 0===a||null===a?"":va(a)?Oa(String(a)):"e0"},Ze=function(a){return a.replace(Ye,"")},af=function(a){return $e(a.replace(/\s/g,""))},$e=function(a){return Oa(a.replace(bf,"").toLowerCase())},df=function(a){a=a.replace(/[\s-()/.]/g,"");"+"!==a.charAt(0)&&(a="+"+a);return cf.test(a)?a:"e0"},ff=function(a){var b=a.toLowerCase().split("@");if(2==b.length){var c=b[0];/^(gmail|googlemail)\./.test(b[1])&&
(c=c.replace(/\./g,""));c=c+"@"+b[1];if(ef.test(c))return c}return"e0"},jf=function(a,b,c){window.Promise||c([],[]);Promise.all(a.map(function(d){return d.value&&gf(d.name)?hf(d.value).then(function(e){d.value=e}):Promise.resolve()})).then(function(){c(a,b)}).catch(function(){c([],[])})},hf=function(a){if(""===a||"e0"===a)return Promise.resolve(a);if(g.crypto&&g.crypto.subtle)try{var b=kf(a);return g.crypto.subtle.digest("SHA-256",b).then(function(c){var d=Array.from(new Uint8Array(c)).map(function(e){return String.fromCharCode(e)}).join("");
return g.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}).catch(function(){return"e2"})}catch(c){return Promise.resolve("e2")}else return Promise.resolve("e1")},kf=function(a){var b;if(g.TextEncoder)b=(new g.TextEncoder("utf-8")).encode(a);else{for(var c=[],d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?c.push(e):2048>e?c.push(192|e>>6,128|e&63):55296>e||57344<=e?c.push(224|e>>12,128|e>>6&63,128|e&63):(e=65536+((e&1023)<<10|a.charCodeAt(++d)&1023),c.push(240|e>>18,128|e>>12&63,128|
e>>6&63,128|e&63))}b=new Uint8Array(c)}return b},bf=/[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,ef=/^\S+@\S+\.\S+$/,cf=/^\+\d{11,15}$/,Ye=/[.~]/g,lf={},mf=(lf.email="em",lf.phone_number="pn",lf.first_name="fn",lf.last_name="ln",lf.street="sa",lf.city="ct",lf.region="rg",lf.country="co",lf.postal_code="pc",lf.error_code="ec",lf),nf=function(a,b,c){function d(r,v,w){var y=r[v];xa(y)||(y=[y]);for(var x=0;x<y.length;++x){var z=Xe(y[x]);""!==z&&h.push({name:v,value:w(z),index:void 0})}}function e(r,v,w,y){var x=
Xe(r[v]);""!==x&&h.push({name:v,value:w(x),index:y})}function f(r){return function(v){td(64);return r(v)}}var h=[],k=[];if("https:"===g.location.protocol){d(a,"email",ff);d(a,"phone_number",df);d(a,"first_name",f(af));d(a,"last_name",f(af));var q=a.home_address||{};d(q,"street",f($e));d(q,"city",f($e));d(q,"postal_code",f(Ze));d(q,"region",f($e));d(q,"country",f(Ze));var t=a.address||{};xa(t)||(t=[t]);for(var u=0;u<t.length;u++)e(t[u],"first_name",af,u),e(t[u],"last_name",af,u),e(t[u],"street",$e,u),e(t[u],"city",$e,u),e(t[u],"postal_code",Ze,
u),e(t[u],"region",$e,u),e(t[u],"country",Ze,u);jf(h,k,c)}else h.push({name:"error_code",value:"e3",index:void 0}),c(h,k)},of=function(a,b){nf(a,[],function(c,d){for(var e=["tv.1"],f=0;f<c.length;++f){var h=c[f].name,k=c[f].value,l=c[f].index,n=mf[h];n&&k&&(!gf(h)||We(k))&&(void 0!==l&&(n+=l),e.push(n+"."+k))}b(encodeURIComponent(e.join("~")),d)})},pf=function(a,b){if(g.Promise)try{return new Promise(function(c){nf(a,b,function(d,e){for(var f=["tv.1"],h=0;h<d.length;++h){var k=d[h].name,l=d[h].value,
n=d[h].index,p=mf[k];p&&l&&(!gf(k)||We(l))&&(void 0!==n&&(p+=n),f.push(p+"."+l))}c({mc:encodeURIComponent(f.join("~")),$b:e})})})}catch(c){}},gf=function(a){return-1!==["email","phone_number","first_name","last_name","street"].indexOf(a)};var qf={},rf=null,sf=Math.random();qf.M="GTM-KFPLMHC";qf.Vc="7e0";qf.Ki="";qf.Ag="ChAI8Lm/hwYQh+vk+ciQ6LcaEiQA2oHvNG1gKPKbV47RLDarNL2XwC76r2NXWZzOHpqB3QNDI0AaApoL";var tf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},uf={__paused:!0,__tg:!0},vf;for(vf in tf)tf.hasOwnProperty(vf)&&(uf[vf]=!0);var wf="www.googletagmanager.com/gtm.js";
var xf=wf,yf=Ka(""),zf=null,Af=null,Bf="https://www.googletagmanager.com/a?id="+qf.M+"&cv=3",Cf={},Df={},Ef=function(){var a=rf.sequence||1;rf.sequence=a+1;return a};qf.zg="";var Ff={},Gf=new Ca,Hf={},If={},Lf={name:"dataLayer",set:function(a,b){E(Xa(a,b),Hf);Jf()},get:function(a){return Kf(a,2)},reset:function(){Gf=new Ca;Hf={};Jf()}},Kf=function(a,b){return 2!=b?Gf.get(a):Mf(a)},Mf=function(a){var b,c=a.split(".");b=b||[];for(var d=Hf,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==ya(b,d))return}return d},Nf=function(a,b){If.hasOwnProperty(a)||(Gf.set(a,b),E(Xa(a,b),Hf),Jf())},Jf=function(a){Ga(If,function(b,c){Gf.set(b,c);E(Xa(b,
void 0),Hf);E(Xa(b,c),Hf);a&&delete If[b]})},Pf=function(a,b,c){Ff[a]=Ff[a]||{};Ff[a][b]=Of(b,c)},Of=function(a,b){var c,d=1!==(void 0===b?2:b)?Mf(a):Gf.get(a);"array"===Rb(d)||"object"===Rb(d)?c=E(d):c=d;return c},Qf=function(a,b){if(Ff[a])return Ff[a][b]},Rf=function(a,b){Ff[a]&&delete Ff[a][b]};
var Sf=function(a,b,c){if(c){var d=c.selector_type,e=String(c.value),f;if("js_variable"===d)if(e=e.replace(/\["?'?/g,".").replace(/"?'?\]/g,""),0===e.indexOf("dataLayer."))f=Kf(e.substring(10));else{var h=e.split(".");f=g[h.shift()];for(var k=0;k<h.length;k++)f=f&&f[h[k]]}else if("css_selector"===d&&ae){var l=be(e);l&&0<l.length&&(f=Jb(l[0])||Oa(l[0].value))}f&&(a[b]=f)}},Tf=function(a){if(a){var b={};Sf(b,"email",a.email);Sf(b,"phone_number",a.phone);b.address=[];for(var c=a.name_and_address||[],
d=0;d<c.length;d++){var e={};Sf(e,"first_name",c[d].first_name);Sf(e,"last_name",c[d].last_name);Sf(e,"street",c[d].street);Sf(e,"city",c[d].city);Sf(e,"region",c[d].region);Sf(e,"country",c[d].country);Sf(e,"postal_code",c[d].postal_code);b.address.push(e)}return b}},Uf=function(a){if(a)switch(a.mode){case "selectors":return Tf(a.selectors);case "auto_detect":var b=a.auto_detect,c=Ue({Xh:!1,Yh:!1,cd:b&&b.exclude_element_selectors}).elements,d={};if(0<c.length)for(var e=0;e<c.length;e++){var f=c[e];
if(1===f.type){d.email=f.va;break}}return d}},Vf=function(a){switch(a.enhanced_conversions_mode){case "manual":var b=a.enhanced_conversions_manual_var;return void 0!==b?b:g.enhanced_conversion_data;case "automatic":return Tf(a.enhanced_conversions_automatic_settings)}};var Wf={},Xf=function(a,b){if(g._gtmexpgrp&&g._gtmexpgrp.hasOwnProperty(a))return g._gtmexpgrp[a];void 0===Wf[a]&&(Wf[a]=Math.floor(Math.random()*b));return Wf[a]};function Yf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function Zf(a){return"null"!==a.origin};var bg=function(a,b,c,d){return $f(d)?Yf(a,String(b||ag()),c):[]},eg=function(a,b,c,d,e){if($f(e)){var f=cg(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=dg(f,function(h){return h.bd},b);if(1===f.length)return f[0].id;f=dg(f,function(h){return h.nc},c);return f[0]?f[0].id:void 0}}};function fg(a,b,c,d){var e=ag(),f=window;Zf(f)&&(f.document.cookie=a);var h=ag();return e!=h||void 0!=c&&0<=bg(b,h,!1,d).indexOf(c)}
var jg=function(a,b,c){function d(u,r,v){if(null==v)return delete h[r],u;h[r]=v;return u+"; "+r+"="+v}function e(u,r){if(null==r)return delete h[r],u;h[r]=!0;return u+"; "+r}if(!$f(c.Qa))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=gg(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Wi);f=d(f,"samesite",
c.Xi);c.Yi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=hg(),p=0;p<n.length;++p){var q="none"!==n[p]?n[p]:void 0,t=d(f,"domain",q);t=e(t,c.flags);if(!ig(q,c.path)&&fg(t,a,b,c.Qa))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return ig(l,c.path)?1:fg(f,a,b,c.Qa)?0:1},kg=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return jg(a,b,c)};
function dg(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function cg(a,b,c){for(var d=[],e=bg(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),bd:1*l[0]||1,nc:1*l[1]||1}))}}return d}
var gg=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},lg=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mg=/(^|\.)doubleclick\.net$/i,ig=function(a,b){return mg.test(window.document.location.hostname)||"/"===b&&lg.test(a)},ag=function(){return Zf(window)?window.document.cookie:""},hg=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;mg.test(e)||lg.test(e)||a.push("none");return a},$f=function(a){if(!Dd(wd)||!a||!Od())return!0;if(!Nd(a))return!1;var b=Ld(a);return null==b?!0:!!b};var ng=function(){return[Math.round(2147483647*Math.random()),Math.round(Ra()/1E3)].join(".")},sg=function(a,b,c,d,e){var f=og(b);return eg(a,f,rg(c),d,e)},tg=function(a,b,c,d){var e=""+og(c),f=rg(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},og=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},rg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function ug(a,b,c){var d,e=Number(null!=a.nb?a.nb:void 0);0!==e&&(d=new Date((b||Ra())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var vg=["1"],wg={},Ag=function(a){var b=xg(a.prefix);if(!wg[b]&&!yg(b,a.path,a.domain)){var c=ng();if(0===zg(b,c,a)){var d=wb("google_tag_data",{});d._gcl_au?ra("GTM",57):d._gcl_au=c}yg(b,a.path,a.domain)}};function zg(a,b,c){var d=tg(b,"1",c.domain,c.path),e=ug(c);e.Qa="ad_storage";return kg(a,d,e)}function yg(a,b,c){var d=sg(a,b,c,vg,"ad_storage");d&&(wg[a]=d);return d}function xg(a){return(a||"_gcl")+"_au"};var Bg=function(a){for(var b=[],c=m.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({He:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(h,k){return k.timestamp-h.timestamp});return b};
function Cg(a,b){var c=Bg(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].He]||(d[c[e].He]=[]);var h={version:f[0],timestamp:1E3*Number(f[1]),Aa:f[2]};b&&3<f.length&&(h.labels=f.slice(3));d[c[e].He].push(h)}}return d};function Dg(){for(var a=Eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Eg,Gg;
function Hg(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=Gg[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}Eg=Eg||Fg();Gg=Gg||Dg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ig;var Mg=function(){var a=Jg,b=Kg,c=Lg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Gb(m,"mousedown",d);Gb(m,"keyup",d);Gb(m,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ng=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Lg().decorators.push(f)},Og=function(a,b,c){for(var d=Lg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,p=!!h.sameHost;if(l&&(p||n!==m.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[q])||p&&0<=l[q].indexOf(n)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ua(e,h.callback())}}return e},Lg=function(){var a=wb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Pg=/(.*?)\*(.*?)\*(.*)/,Qg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Rg=/^(?:www\.|m\.|amp\.)+/,Sg=/([^?#]+)(\?[^#]*)?(#.*)?/;function Tg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Vg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);Eg=Eg||Fg();Gg=Gg||Dg();for(var l=[],n=0;n<k.length;n+=3){var p=n+1<k.length,q=n+2<k.length,t=k.charCodeAt(n),u=p?k.charCodeAt(n+1):0,r=q?k.charCodeAt(n+2):0,v=t>>2,w=(t&3)<<4|u>>4,y=(u&15)<<2|r>>6,x=r&63;q||(x=64,p||(y=64));l.push(Eg[v],Eg[w],Eg[y],Eg[x])}h=l.join("");f.call(e,h)}}var z=b.join("*");return["1",Ug(z),
z].join("*")},Ug=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ig)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ig=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^Ig[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Xg=function(){return function(a){var b=we(g.location.href),
c=b.search.replace("?",""),d=re(c,"_gl",!0)||"";a.query=Wg(d)||{};var e=ue(b,"fragment").match(Tg("_gl"));a.fragment=Wg(e&&e[3]||"")||{}}},Yg=function(a){var b=Xg(),c=Lg();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ua(d,e.query),a&&Ua(d,e.fragment));return d},Wg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Pg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],p=0;p<
b;++p)if(n===Ug(k,p)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],u=0;u<t.length;u+=2)q[t[u]]=Hg(t[u+1]);return q}}}}catch(r){}};function Zg(a,b,c,d){function e(p){var q=p,t=Tg(a).exec(q),u=q;if(t){var r=t[2],v=t[4];u=t[1];v&&(u=u+r+v)}p=u;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+n}d=void 0===d?!1:d;var f=Sg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function $g(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Og(b,1,c),e=Og(b,2,c),f=Og(b,3,c);if(Va(d)){var h=Vg(d);c?ah("_gl",h,a):bh("_gl",h,a,!1)}if(!c&&Va(e)){var k=Vg(e);bh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){bh(n,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ah(n,p,q);break a}}"string"==typeof q&&Zg(n,p,q,void 0)}}
function bh(a,b,c,d){if(c.href){var e=Zg(a,b,c.href,void 0===d?!1:d);fb.test(e)&&(c.href=e)}}
function ah(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=m.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Zg(a,b,c.action);fb.test(n)&&(c.action=n)}}}
var Jg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||$g(e,e.hostname)}}catch(h){}},Kg=function(a){try{if(a.action){var b=ue(we(a.action),"host");$g(a,b)}}catch(c){}},ch=function(a,b,c,d){Mg();Ng(a,b,"fragment"===c?2:1,!!d,!1)},dh=function(a,b){Mg();Ng(a,[te(g.location,"host",!0)],b,!0,!0)},eh=function(){var a=m.location.hostname,b=Qg.exec(m.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Rg,""),l=e.replace(Rg,""),n;if(!(n=k===l)){var p="."+l;n=k.substring(k.length-p.length,k.length)===p}return n},fh=function(a,b){return!1===a?!1:a||b||eh()};var gh={};var hh=/^\w+$/,ih=/^[\w-]+$/,jh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},kh=function(){if(!Dd(wd)||!Od())return!0;var a=Ld("ad_storage");return null==a?!0:!!a},lh=function(a,b){Nd("ad_storage")?kh()?a():Td(a,"ad_storage"):b?ra("TAGGING",3):Sd(function(){lh(a,!0)},["ad_storage"])},nh=function(a){return mh(a).map(function(b){return b.Aa})},mh=function(a){var b=[];if(!Zf(g)||!m.cookie)return b;var c=bg(a,m.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{wc:d.wc},e++){var f=oh(c[e]);if(null!=f){var h=f,k=h.version;d.wc=h.Aa;var l=h.timestamp,n=h.labels,p=za(b,function(q){return function(t){return t.Aa===q.wc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=ph(p.labels,n||[])):b.push({version:k,Aa:d.wc,timestamp:l,labels:n})}}b.sort(function(q,t){return t.timestamp-q.timestamp});return qh(b)};function ph(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function rh(a){return a&&"string"==typeof a&&a.match(hh)?a:"_gcl"}
var th=function(){var a=we(g.location.href),b=ue(a,"query",!1,void 0,"gclid"),c=ue(a,"query",!1,void 0,"gclsrc"),d=ue(a,"query",!1,void 0,"wbraid"),e=ue(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||re(f,"gclid",void 0);c=c||re(f,"gclsrc",void 0);d=d||re(f,"wbraid",void 0)}return sh(b,c,e,d)},sh=function(a,b,c,d){var e={},f=function(h,k){e[k]||(e[k]=[]);e[k].push(h)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&ih.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(ih))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},vh=function(a){var b=th();lh(function(){uh(b,a)})};
function uh(a,b,c,d){function e(p,q){var t=wh(p,f);t&&(kg(t,q,h),k=!0)}b=b||{};d=d||[];var f=rh(b.prefix);c=c||Ra();var h=ug(b,c,!0);h.Qa="ad_storage";var k=!1,l=Math.round(c/1E3),n=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",n(a.aw[0]));a.dc&&e("dc",n(a.dc[0]));a.gf&&e("gf",n(a.gf[0]));a.ha&&e("ha",n(a.ha[0]));a.gp&&e("gp",n(a.gp[0]));(void 0==gh.enable_gbraid_cookie_write?0:gh.enable_gbraid_cookie_write)&&!k&&a.gb&&e("gb",n(a.gb[0]))}
var yh=function(a,b){var c=Yg(!0);lh(function(){for(var d=rh(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==jh[f]){var h=wh(f,d),k=c[h];if(k){var l=Math.min(xh(k),Ra()),n;b:{var p=l;if(Zf(g))for(var q=bg(h,m.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(xh(q[t])>p){n=!0;break b}n=!1}if(!n){var u=ug(b,l,!0);u.Qa="ad_storage";kg(h,k,u)}}}}uh(sh(c.gclid,c.gclsrc),b)})},wh=function(a,b){var c=jh[a];if(void 0!==c)return b+c},xh=function(a){return 0!==zh(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function oh(a){var b=zh(a.split("."));return 0===b.length?null:{version:b[0],Aa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function zh(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!ih.test(a[2])?[]:a}
var Ah=function(a,b,c,d,e){if(xa(b)&&Zf(g)){var f=rh(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=wh(a[l],f);if(n){var p=bg(n,m.cookie,void 0,"ad_storage");p.length&&(k[n]=p.sort()[p.length-1])}}return k};lh(function(){ch(h,b,c,d)})}},qh=function(a){return a.filter(function(b){return ih.test(b.Aa)})},Bh=function(a,b){if(Zf(g)){for(var c=rh(b.prefix),d={},e=0;e<a.length;e++)jh[a[e]]&&(d[a[e]]=jh[a[e]]);lh(function(){Ga(d,function(f,h){var k=bg(c+h,m.cookie,void 0,"ad_storage");k.sort(function(u,
r){return xh(r)-xh(u)});if(k.length){var l=k[0],n=xh(l),p=0!==zh(l.split(".")).length?l.split(".").slice(3):[],q={},t;t=0!==zh(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[t];uh(q,b,n,p)}})})}};function Ch(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Dh=function(a){function b(e,f,h){h&&(e[f]=h)}if(Od()){var c=th();if(Ch(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);dh(function(){return d},3);dh(function(){var e={};return e._up="1",e},1)}}};function Eh(a,b){var c=rh(b),d=wh(a,c);if(!d)return 0;for(var e=mh(d),f=0,h=0;h<e.length;h++)f=Math.max(f,e[h].timestamp);return f}
function Fh(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Gh=/^\d+\.fls\.doubleclick\.net$/;function Hh(a,b){Nd(H.D)?K(H.D)?a():Td(a,H.D):b?td(42):$d(function(){Hh(a,!0)},[H.D])}function Ih(a){var b=we(g.location.href),c=ue(b,"host",!1);if(c&&c.match(Gh)){var d=ue(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Jh(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Ih("gcl"+a);if(d)return d.split(".")}var e=rh(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!K(H.D)&&c,h;h=th()[a]||[];if(0<h.length)return f?["0"]:h}var k=wh(a,e);return k?nh(k):[]}function Kh(a){var b=[];Ga(a,function(c,d){d=qh(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].Aa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Lh=function(a){var b=Ih("gac");return b?!K(H.D)&&a?"0":decodeURIComponent(b):Kh(kh()?Cg():{})},Mh=function(a){var b=Ih("gacgb");return b?!K(H.D)&&a?"0":decodeURIComponent(b):Kh(kh()?Cg("_gac_gb",!0):{})},Nh=function(a,b){var c=th(),d=[],e=c.gclid,f=c.dclid,h=c.gclsrc||"aw";!e||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||d.push({Aa:e,je:h});!f||d.push({Aa:f,je:"ds"});Hh(function(){Ag(b);var k=wg[xg(b.prefix)],l=!1;if(k&&0<d.length)for(var n=rf.joined_auid=rf.joined_auid||{},p=0;p<d.length;p++){var q=d[p],t=q.Aa,u=q.je,r=(b.prefix||"_gcl")+"."+u+"."+t;if(!n[r]){var v="https://adservice.google.com/pagead/regclk";v="gb"===u?v+"?gbraid="+t+"&auid="+k:v+"?gclid="+t+"&auid="+k+"&gclsrc="+u;Ob(v);l=n[r]=!0}}null==a&&(a=l);if(a&&k){var w=xg(b.prefix),y=wg[w];y&&zg(w,y,b)}})},
Oh=function(a){var b;if(Ih("gclaw")||Ih("gac")||0<(th().aw||[]).length)b=!1;else{var c;if(0<(th().gb||[]).length)c=!0;else{var d=Math.max(Eh("aw",a),Fh(kh()?Cg():{}));c=Math.max(Eh("gb",a),Fh(kh()?Cg("_gac_gb",!0):{}))>d}b=c}return b};var Ph=/[A-Z]+/,Qh=/\s/,Rh=function(a){if(va(a)&&(a=Oa(a),!Qh.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ph.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],O:d}}}}},Th=function(a){for(var b={},c=0;c<a.length;++c){var d=Rh(a[c]);d&&(b[d.id]=d)}Sh(b);var e=[];Ga(b,function(f,h){e.push(h)});return e};
function Sh(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.O[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uh=function(){var a=!1;return a};var Wh=function(a,b,c,d){return(2===Vh()||d||"http:"!=g.location.protocol?a:b)+c},Vh=function(){var a=Db(),b;if(1===a)a:{var c=xf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=m.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var hi=function(a,b){var c=a?Vf(a):g.enhanced_conversion_data,d=(a||{}).enhanced_conversions_mode;if(g.Promise)try{return c?pf(c,b).then(function(e){e.ce=d;return e}):Promise.resolve({mc:"",$b:[],ce:d})}catch(e){}};
var ii=function(a){if(K(H.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=xe(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=xe(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},ji=function(){var a;if(!(a=yf)){var b;if(!0===g._gtmdgs)b=!0;else{var c=ub&&ub.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ja("1");return Xf(1,100)<d?Xf(2,2):-1},ki=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var li=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),mi={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ni={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oi="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var pi=function(){var a=!1;return a},ri=function(a){var b=Kf("gtm.allowlist")||Kf("gtm.whitelist");b&&td(9);pi()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&Wa(La(b),mi),d=Kf("gtm.blocklist")||
Kf("gtm.blacklist");d||(d=Kf("tagTypeBlacklist"))&&td(3);d?td(8):d=[];qi()&&(d=La(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=ya(La(d),"google")&&td(2);var e=d&&Wa(La(d),ni),f={};return function(h){var k=h&&h[Vb.kb];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Df[k]||[],n=a(k,l);if(b){var p;if(p=
n)a:{if(0>ya(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>ya(c,l[q])){td(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var t=!1;if(d){var u=0<=ya(e,k);if(u)t=u;else{var r=Ea(e,l||[]);r&&td(10);t=r}}var v=!n||t;v||!(0<=ya(l,"sandboxedScripts"))||c&&-1!==ya(c,"sandboxedScripts")||(v=Ea(e,oi));return f[k]=v}},qi=function(){return li.test(g.location&&g.location.hostname)};var si={active:!0,isAllowed:function(){return!0}},ti=function(a){var b=rf.zones;return b?b.checkState(qf.M,a):si},ui=function(a){var b=rf.zones;!b&&a&&(b=rf.zones=a());return b};var vi=function(){},wi=function(){};var xi=!1,yi=0,zi=[];function Ai(a){if(!xi){var b=m.createEventObject,c="complete"==m.readyState,d="interactive"==m.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){xi=!0;for(var e=0;e<zi.length;e++)B(zi[e])}zi.push=function(){for(var f=0;f<arguments.length;f++)B(arguments[f]);return 0}}}function Bi(){if(!xi&&140>yi){yi++;try{m.documentElement.doScroll("left"),Ai()}catch(a){g.setTimeout(Bi,50)}}}var Ci=function(a){xi?a():zi.push(a)};var Ei=function(a,b){this.o=!1;this.F=[];this.P={tags:[]};this.aa=!1;this.s=this.C=0;Di(this,a,b)},Fi=function(a,b,c,d){if(uf.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Tb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return a.P.tags.push(e)-1},Gi=function(a,b,c,d){var e=a.P.tags[b];e&&(e.status=c,e.executionTime=d)},Hi=function(a){if(!a.o){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.o=!0;a.F.length=0}},Di=function(a,b,c){ua(b)&&Ii(a,b);c&&g.setTimeout(function(){return Hi(a)},Number(c))},Ii=function(a,
b){var c=Ta(function(){return B(function(){b(qf.M,a.P)})});a.o?c():a.F.push(c)},Ji=function(a){a.C++;return Ta(function(){a.s++;a.aa&&a.s>=a.C&&Hi(a)})};var Ki=function(){function a(d){return!wa(d)||0>d?0:d}if(!rf._li&&g.performance&&g.performance.timing){var b=g.performance.timing.navigationStart,c=wa(Lf.get("gtm.start"))?Lf.get("gtm.start"):0;rf._li={cst:a(c-b),cbt:a(Af-b)}}},Li=function(a){g.performance&&g.performance.mark(qf.M+"_"+a+"_start")},Mi=function(a){if(g.performance){var b=qf.M+"_"+a+"_start",c=qf.M+"_"+a+"_duration";g.performance.measure(c,b);var d=g.performance.getEntriesByName(c)[0];g.performance.clearMarks(b);g.performance.clearMeasures(c);
var e=rf._p||{};void 0===e[a]&&(e[a]=d.duration,rf._p=e);return d.duration}},Ni=function(){if(g.performance&&g.performance.now){var a=rf._p||{};a.PAGEVIEW=g.performance.now();rf._p=a}};var Oi={},Pi=function(){return g.GoogleAnalyticsObject&&g[g.GoogleAnalyticsObject]},Qi=!1;
var Ri=function(a){g.GoogleAnalyticsObject||(g.GoogleAnalyticsObject=a||"ga");var b=g.GoogleAnalyticsObject;if(g[b])g.hasOwnProperty(b)||td(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(Pa());g[b]=c}Ki();return g[b]},Si=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Pi();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Ti=function(a){if(!Od())return;var b=Pi();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Vi=function(a){},Ui=function(){return g.GoogleAnalyticsObject||"ga"},Zi=function(a,b){return function(){var c=Pi(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var fj=function(a){},jj=function(a){},kj=
function(){return"&tc="+Fc.filter(function(a){return a}).length},nj=function(){2022<=lj().length&&mj()},oj=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},qj=function(){pj||(pj=g.setTimeout(mj,500))},mj=function(){pj&&(g.clearTimeout(pj),pj=void 0);void 0===rj||sj[rj]&&!tj&&!uj||(vj[rj]||wj.bi()||0>=xj--?(td(1),vj[rj]=!0):(wj.wi(),Fb(lj(!0)),sj[rj]=!0,yj=zj=Aj=uj=tj=""))},lj=function(a){var b=rj;if(void 0===b)return"";var c=sa("GTM"),d=sa("TAGGING");return[Bj,sj[b]?"":"&es=1",
Cj[b],fj(b),c?"&u="+c:"",d?"&ut="+d:"",kj(),tj,uj,Aj,zj,jj(a),yj,"&z=0"].join("")},Ej=function(){Bj=Dj()},Dj=function(){return[Bf,"&v=3&t=t","&pid="+Aa(),"&rv="+qf.Vc].join("")},ij=["L","S","Y"],ej=["S","E"],Fj={sampleRate:"0.005000",rg:"",qg:Number("5")},Gj=0<=m.location.search.indexOf("?gtm_latency=")||0<=m.location.search.indexOf("&gtm_latency="),Hj;if(!(Hj=Gj)){var Ij=Math.random(),Jj=Fj.sampleRate;Hj=Ij<Jj}var Kj=Hj,Lj={label:qf.M+" Container",children:[{label:"Initialization",children:[]}]},Bj=Dj(),sj={},tj="",uj="",yj="",zj="",hj={},gj=!1,dj={},Mj={},Aj="",rj=void 0,Cj={},vj={},pj=void 0,Nj=2;0<Fj.qg&&(Nj=Fj.qg);var wj=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);
return{bi:function(){return c<a?!1:Ra()-d[c%a]<b},wi:function(){var f=c++%a;d[f]=Ra()}}}(Nj,1E3),xj=1E3,Pj=function(a,b){if(Kj&&!vj[a]&&rj!==a){mj();rj=a;yj=tj="";Cj[a]="&e="+oj(b)+"&eid="+a;qj();}},Qj=function(a,b,c,d){if(Kj&&b){var e,f=String(b[Vb.kb]||
"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var h=c+e;if(!vj[a]){a!==rj&&(mj(),rj=a);tj=tj?tj+"."+h:"&tr="+h;var k=b["function"];if(!k)throw Error("Error: No function name given for function call.");
var l=(Hc[k]?"1":"2")+e;yj=yj?yj+"."+l:"&ti="+l;qj();nj()}}};var Xj=function(a,b,c){if(Kj&&!vj[a]){a!==rj&&(mj(),
rj=a);var d=c+b;uj=uj?uj+"."+d:"&epr="+d;qj();nj()}},Yj=function(a,b,c){};function Zj(a,b,c,d){var e=Fc[a],f=ak(a,b,c,d);if(!f)return null;var h=Mc(e[Vb.yf],c,[]);if(h&&h.length){var k=h[0];f=Zj(k.index,{onSuccess:f,onFailure:1===k.Rf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ak(a,b,c,d){function e(){if(f[Vb.mh])k();else{var w=Nc(f,c,[]);var y=w[Vb.xg];if(null!=y)for(var x=0;x<y.length;x++)if(!K(y[x])){k();return}var z=Fi(c.lb,String(f[Vb.kb]),Number(f[Vb.zf]),w[Vb.nh]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=Ra()-D;Qj(c.id,Fc[a],"5",F);Gi(c.lb,z,"success",
F);h()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=Ra()-D;Qj(c.id,Fc[a],"6",F);Gi(c.lb,z,"failure",F);k()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Qj(c.id,f,"1");var C=function(){var F=Ra()-D;Qj(c.id,f,"7",F);Gi(c.lb,z,"exception",F);A||(A=!0,k())};var D=Ra();try{Lc(w,c)}catch(F){C(F)}}}var f=Fc[a],h=b.onSuccess,k=b.onFailure,l=b.terminate;if(c.se(f))return null;var n=Mc(f[Vb.Af],c,[]);if(n&&n.length){var p=n[0],q=Zj(p.index,{onSuccess:h,onFailure:k,terminate:l},c,d);if(!q)return null;h=q;k=2===p.Rf?l:q}if(f[Vb.uf]||f[Vb.ph]){var t=f[Vb.uf]?Gc:
c.Di,u=h,r=k;if(!t[a]){e=Ta(e);var v=bk(a,t,e);h=v.onSuccess;k=v.onFailure}return function(){t[a](u,r)}}return e}function bk(a,b,c){var d=[],e=[];b[a]=ck(d,e,c);return{onSuccess:function(){b[a]=dk;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=ek;for(var f=0;f<e.length;f++)e[f]()}}}function ck(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function dk(a){a()}function ek(a,b){b()};var hk=function(a,b){for(var c=[],d=0;d<Fc.length;d++)if(a[d]){var e=Fc[d];var f=Ji(b.lb);try{var h=Zj(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,l=k.push,n=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Hc[p];l.call(k,{mg:n,bg:q?q.priorityOverride||0:0,Oh:h})}else fk(d,b),f()}catch(r){f()}}var t=b.lb;t.aa=!0;t.s>=t.C&&Hi(t);c.sort(gk);for(var u=0;u<c.length;u++)c[u].Oh();
return 0<c.length};function gk(a,b){var c,d=b.bg,e=a.bg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.mg,k=b.mg;f=h>k?1:h<k?-1:0}return f}function fk(a,b){if(!Kj)return;var c=function(d){var e=b.se(Fc[d])?"3":"4",f=Mc(Fc[d][Vb.yf],b,[]);f&&f.length&&c(f[0].index);Qj(b.id,Fc[d],e);var h=Mc(Fc[d][Vb.Af],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ik=!1,ok=function(a){var b=Ra(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(ik)return!1;ik=!0;}var h=ti(c),k=!1;if(!h.active){if("gtm.js"!==d)return!1;k=!0;h=ti(Number.MAX_SAFE_INTEGER)}
Pj(c,d);var l=a.eventCallback,n=a.eventTimeout,p=l;var q={id:c,name:d,se:ri(h.isAllowed),Di:[],Yf:function(){td(6)},Kf:jk(c),lb:new Ei(p,n)};q.Jf=kk();
lk(c,q.lb);var t=Rc(q);k&&(t=mk(t));var u=hk(t,q);"gtm.js"!==d&&"gtm.sync"!==d||Vi(qf.M);switch(d){case "gtm.init":u&&td(20)}return nk(t,u)};function jk(a){return function(b){Kj&&(Ub(b)||Yj(a,"input",b))}}
function lk(a,b){Pf(a,"event",1);Pf(a,"ecommerce",1);Pf(a,"gtm");Pf(a,"eventModel");}function kk(){var a={};a.event=Of("event",1);a.ecommerce=Of("ecommerce",1);a.gtm=Of("gtm");a.eventModel=Of("eventModel");return a}function mk(a){for(var b=[],c=0;c<a.length;c++)a[c]&&tf[String(Fc[c][Vb.kb])]&&(b[c]=!0);return b}
function nk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Fc[c]&&!uf[String(Fc[c][Vb.kb])])return!0;return!1}function pk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return we(""+c+b).href}}function qk(a,b){return rk()?pk(a,b):void 0}function rk(){var a=!1;return a};var sk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},tk=function(a){var b=new sk;b.eventModel=a;return b},uk=function(a,b){a.targetConfig=b;return a},vk=function(a,b){a.containerConfig=b;return a},wk=function(a,b){a.remoteConfig=b;return a},xk=function(a,
b){a.globalConfig=b;return a},yk=function(a,b){a.onSuccess=b;return a},zk=function(a,b){a.setContainerTypeLoaded=b;return a},Ak=function(a,b){a.getContainerTypeLoaded=b;return a},Bk=function(a,b){a.onFailure=b;return a};
sk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ck=function(a){function b(d){for(var e=Object.keys(d),f=0;f<e.length;++f)c[e[f]]=1}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);return Object.keys(c)},Dk=function(a,b){function c(f){Tb(f)&&Ga(f,function(h,k){e=!0;d[h]=k})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var Ek;if(3===qf.Vc.length)Ek="g";else{var Fk="G";Ek=Fk}
var Gk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ek,OPT:"o"},Hk=function(a){var b=qf.M.split("-"),c=b[0].toUpperCase(),d=Gk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===qf.Vc.length){var h="w";f="2"+h}else f="";return f+d+qf.Vc+e};function Ik(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Jk=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Kk=function(){return kb("iPhone")&&!kb("iPod")&&!kb("iPad")};kb("Opera");kb("Trident")||kb("MSIE");kb("Edge");!kb("Gecko")||-1!=gb.toLowerCase().indexOf("webkit")&&!kb("Edge")||kb("Trident")||kb("MSIE")||kb("Edge");-1!=gb.toLowerCase().indexOf("webkit")&&!kb("Edge")&&kb("Mobile");kb("Macintosh");kb("Windows");kb("Linux")||kb("CrOS");var Lk=ma.navigator||null;Lk&&(Lk.appVersion||"").indexOf("X11");kb("Android");Kk();kb("iPad");kb("iPod");Kk()||kb("iPad")||kb("iPod");gb.toLowerCase().indexOf("kaios");var Mk=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null},Nk=function(a){var b=m;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Ok=function(){};var Pk=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Qk=function(a,b){this.s=a;this.o=null;this.F={};this.aa=0;this.P=void 0===b?500:b;this.C=null};ka(Qk,Ok);
var Sk=function(a){return"function"===typeof a.s.__tcfapi||null!=Rk(a)};
Qk.prototype.addEventListener=function(a){var b={},c=rb(function(){return a(b)}),d=0;-1!==this.P&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.P));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Pk(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Tk(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Qk.prototype.removeEventListener=function(a){a&&a.listenerId&&Tk(this,"removeEventListener",null,a.listenerId)};
var Vk=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var n=Uk(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Dd(vd)&&"CH"===a.publisherCC)?!0:n&&Uk(a.purpose.consents,b)}else l=!0;else l=
1===k?a.purpose&&a.vendor?Uk(a.purpose.legitimateInterests,b)&&Uk(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Uk=function(a,b){return!(!a||!a[b])},Tk=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Rk(a)){Wk(a);var f=++a.aa;a.F[f]=c;if(a.o){var h={};a.o.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Rk=function(a){if(a.o)return a.o;a.o=Mk(a.s,"__tcfapiLocator");return a.o},
Wk=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},Jk(a.s,a.C))};var Xk=!0;Xk=!1;var Yk={1:0,3:0,4:0,7:3,9:3,10:3},Zk=Ik("",550),$k=Ik("",500);function al(){var a=rf.tcf||{};return rf.tcf=a}
var bl=function(a,b){this.C=a;this.o=b;this.s=Ra();},cl=function(a){},dl=function(a){},jl=function(){var a=al(),b=new Qk(g,Xk?3E3:-1),c=new bl(b,a);if((el()?!0===g.gtag_enable_tcf_support:!1!==g.gtag_enable_tcf_support)&&!a.active&&("function"===typeof g.__tcfapi||Sk(b))){a.active=!0;a.oc={};fl();var d=null;Xk?d=g.setTimeout(function(){gl(a);hl(a);d=null},$k):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)gl(a),hl(a),cl(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=il(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Yk)if(Yk.hasOwnProperty(k))if("1"===k){var l,n=e,p=!0;p=void 0===p?!1:p;var q;var t=n;!1===t.gdprApplies?q=!0:(void 0===t.internalErrorState&&(t.internalErrorState=Pk(t)),q="error"===t.cmpStatus||0!==t.internalErrorState||"loaded"===t.cmpStatus&&("tcloaded"===t.eventStatus||"useractioncomplete"===
t.eventStatus)?!0:!1);l=q?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!p||"string"!==typeof n.tcString||!n.tcString.length?!0:Vk(n,"1",0):!1;h["1"]=l}else h[k]=Vk(e,k,Yk[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.oc=f,hl(a),cl(c))}}),dl(c)}catch(e){d&&(clearTimeout(d),d=null),gl(a),hl(a)}}};function gl(a){a.type="e";a.tcString="tcunavailable";Xk&&(a.oc=il())}function fl(){var a={},b=(a.ad_storage="denied",a.wait_for_update=Zk,a);Wd(b)}
var el=function(){var a=!1;a=!0;return a};function il(){var a={},b;for(b in Yk)Yk.hasOwnProperty(b)&&(a[b]=!0);return a}function hl(a){var b={},c=(b.ad_storage=a.oc["1"]?"granted":"denied",b);kl();Xd(c,0)}
var ll=function(){var a=al();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},kl=function(){var a=al();return a.active?a.tcString||"":""},ml=function(){var a=al();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},nl=function(a){if(!Yk.hasOwnProperty(String(a)))return!0;var b=al();return b.active&&b.oc?!!b.oc[String(a)]:!0};function ol(a){var b=String(g.location).split(/[?#]/)[0],c=qf.Ag||g._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,h=1,k,l,n;if(f)for(h=0,l=f.length-1;0<=l;l--)n=f.charCodeAt(l),h=(h<<6&268435455)+n+(n<<14),k=h&266338304,h=0!=k?h^k>>21:h;e=String(h)}else e="0";d=e}else d="";return d}
function pl(a){function b(r){var v;rf.reported_gclid||(rf.reported_gclid={});v=rf.reported_gclid;var w;w=!h||Od()&&!K(H.D)?l+(r?"gcu":"gcs"):l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(J,R){R&&(y.push(J+"="+encodeURIComponent(R)),x[J]=!0)},A="https://www.google.com";if(Od()){var C=K(H.D);z("gcs",Yd());r&&z("gcu","1");Pd()&&z("gcd","G1"+Ud(Md));rf.dedupe_gclid||
(rf.dedupe_gclid=""+ng());z("rnd",rf.dedupe_gclid);if((!l||n&&"aw.ds"!==n)&&K(H.D)){var D=nh("_gcl_aw");z("gclaw",D.join("."))}z("url",String(g.location).split(/[?#]/)[0]);z("dclid",ql(d,p));var F=!1;F=!0;C||!d&&!F||(A="https://pagead2.googlesyndication.com")}
z("gdpr_consent",kl()),z("gdpr",ml());"1"===Yg(!1)._up&&z("gtm_up","1");z("gclid",ql(d,l));z("gclsrc",n);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",ql(d,q)),!x.gbraid&&Od()&&K(H.D))){var I=nh("_gcl_gb");z("gclgb",I.join("."))}z("gtm",Hk(!e));h&&K(H.D)&&(Ag(f||{}),z("auid",wg[xg(f.prefix)]||""));
a.Nf&&z("did",a.Nf);var N=A+"/pagead/landing?"+y.join("&");Ob(N)}}var c=!!a.de,d=!!a.ra,e=a.T,f=void 0===a.$c?{}:a.$c,h=void 0===a.gd?!0:a.gd,k=th(),l=k.gclid||"",n=k.gclsrc,p=k.dclid||"",q=k.gbraid||"",t=!c&&((!l||n&&"aw.ds"!==n?!1:!0)||q),u=Od();if(t||u)u?$d(function(){b();K(H.D)||Zd(function(r){return b(!0,r.Dh)},H.D)},[H.D]):b()}function ql(a,b){var c=a&&!K(H.D);return b&&c?"0":b}var rl=function(){this.o={}},sl=function(a,b,c){null!=c&&(a.o[b]=c)},tl=function(a){return Object.keys(a.o).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.o[b])}).join("&")},vl=function(a,b,c,d){};var xl=!1,yl=Number("200");function zl(){if(!g.Promise)return!1;ua(m.interestCohort)||xl||(xl=!0,Nk("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return ua(m.interestCohort)}
function Al(){var a=rf.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>Ra()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([m.interestCohort().then(function(e){rf.floc={ts:Ra(),floc:e};return e}),new Promise(function(e){g.setTimeout(function(){return e()},yl)})]).catch(function(){})}catch(e){return}return d}var xm=function(){var a=!0;nl(7)&&nl(9)&&nl(10)||(a=!1);var b=!0;b=!1;b&&!wm()&&(a=!1);return a},wm=function(){var a=!0;nl(3)&&nl(4)||(a=!1);return a};var Zm=!1;var $m=!1;function an(){var a=rf;return a.gcq=a.gcq||new bn}
var cn=function(a,b,c){an().register(a,b,c)},dn=function(a,b,c,d){an().push("event",[b,a],c,d)},en=function(a,b){an().push("config",[a],b)},fn=function(a,b,c,d){an().push("get",[a,b],c,d)},gn={},hn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.C=null;this.o=!1},jn=function(a,b,c,d,e){this.type=a;this.C=b;this.T=c||"";this.o=d;this.s=e},bn=function(){this.s={};this.C={};this.o=[];this.F={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
Zm},kn=function(a,b){var c=Rh(b);return a.s[c.containerId]=a.s[c.containerId]||new hn},ln=function(a,b,c){if(b){var d=Rh(b);if(d&&1===kn(a,b).status){kn(a,b).status=2;var e={};Kj&&(e.timeoutId=g.setTimeout(function(){td(38);qj()},3E3));a.push("require",[e],d.containerId);gn[d.containerId]=Ra();if(Uh()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=g.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=qk(c,h)||k;Cb(l)}}}},mn=function(a,b,c,d){if(d.T){var e=kn(a,d.T),f=e.C;if(f){var h=E(c),k=E(e.targetConfig[d.T]),l=E(e.containerConfig),n=E(e.remoteConfig),p=E(a.C),q=Kf("gtm.uniqueEventId"),t=Rh(d.T).prefix,u=Ta(function(){var v=h[H.xb];v&&B(v)}),r=Ak(zk(Bk(yk(xk(wk(vk(uk(tk(h),k),l),n),p),function(){
Xj(q,t,"2");$m&&u()}),function(){Xj(q,t,"3");$m&&u()}),function(v,w){a.F[v]=w}),function(v){return a.F[v]});try{Xj(q,t,"1");f(d.T,b,d.C,r)}catch(v){Xj(q,t,"4");}}}};
bn.prototype.register=function(a,b,c){var d=kn(this,a);if(3!==d.status){d.C=b;d.status=3;if(c){E(d.remoteConfig,c);d.remoteConfig=c}var e=Rh(a),f=gn[e.containerId];if(void 0!==f){var h=rf[e.containerId].bootstrap,k=e.prefix.toUpperCase();rf[e.containerId]._spx&&(k=k.toLowerCase());var l=Kf("gtm.uniqueEventId"),n=k,p=Ra()-h;if(Kj&&!vj[l]){l!==rj&&(mj(),rj=l);var q=n+"."+Math.floor(h-
f)+"."+Math.floor(p);zj=zj?zj+","+q:"&cl="+q}delete gn[e.containerId]}this.flush()}};bn.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);ln(this,c,b[0][H.na]||this.C[H.na]);Zm&&c&&kn(this,c).o&&(d=!1);this.o.push(new jn(a,e,c,b,d));d||this.flush()};bn.prototype.insert=function(a,b,c){var d=Math.floor(Ra()/1E3);0<this.o.length?this.o.splice(1,0,new jn(a,d,c,b,!1)):this.o.push(new jn(a,d,c,b,!1))};
bn.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.o.length;){var f=this.o[0];if(f.s)Zm?!f.T||kn(this,f.T).o?(f.s=!1,this.o.push(f)):c.push(f):(f.s=!1,this.o.push(f)),this.o.shift();else{switch(f.type){case "require":if(3!==kn(this,f.T).status&&!a){Zm&&this.o.push.apply(this.o,c);return}Kj&&g.clearTimeout(f.o[0].timeoutId);break;case "set":Ga(f.o[0],function(t,u){E(Xa(t,u),b.C)});break;case "config":e.Ia={};Ga(f.o[0],function(t){return function(u,r){E(Xa(u,r),t.Ia)}}(e));var h=!!e.Ia[H.Nc];
delete e.Ia[H.Nc];var k=kn(this,f.T),l=Rh(f.T),n=l.containerId===l.id;h||(n?k.containerConfig={}:k.targetConfig[f.T]={});k.o&&h||mn(this,H.Ca,e.Ia,f);k.o=!0;delete e.Ia[H.Ub];n?E(e.Ia,k.containerConfig):E(e.Ia,k.targetConfig[f.T]);Zm&&(d=!0);break;case "event":e.vc={};Ga(f.o[0],function(t){return function(u,r){E(Xa(u,r),t.vc)}}(e));mn(this,f.o[1],e.vc,f);break;case "get":var p={},q=(p[H.Ua]=f.o[0],p[H.Ta]=f.o[1],p);mn(this,H.Ka,q,f)}this.o.shift();nn(this,f)}e={Ia:e.Ia,vc:e.vc}}Zm&&(this.o.push.apply(this.o,
c),d&&this.flush())};var nn=function(a,b){if("require"!==b.type)if(b.T)for(var c=a.getCommandListeners(b.T)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var h=f.s[b.type]||[],k=0;k<h.length;k++)h[k]()}};bn.prototype.getRemoteConfig=function(a){return kn(this,a).remoteConfig};bn.prototype.getCommandListeners=function(a){return kn(this,a).s};var on=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":Pb(a,"className"),"gtm.elementId":a["for"]||Ib(a,"id")||"","gtm.elementTarget":a.formTarget||Pb(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||Pb(a,"href")||a.src||a.code||a.codebase||"";return d},pn=function(a){rf.hasOwnProperty("autoEventsSettings")||(rf.autoEventsSettings={});var b=rf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},qn=function(a,b,c){pn(a)[b]=c},rn=function(a,b,c,d){var e=pn(a),f=Sa(e,b,d);e[b]=c(f)},sn=function(a,b,c){var d=pn(a);return Sa(d,b,c)};var tn=["input","select","textarea"],un=["button","hidden","image","reset","submit"],vn=function(a){var b=a.tagName.toLowerCase();return!za(tn,function(c){return c===b})||"input"===b&&za(un,function(c){return c===a.type.toLowerCase()})?!1:!0},wn=function(a){return a.form?a.form.tagName?a.form:m.getElementById(a.form):Lb(a,["form"],100)},xn=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(vn(h)){if(h.dataset[c]===d)return f;f++}}return 0};var yn=!!g.MutationObserver,zn=void 0,An=function(a){if(!zn){var b=function(){var c=m.body;if(c)if(yn)(new MutationObserver(function(){for(var e=0;e<zn.length;e++)B(zn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Gb(c,"DOMNodeInserted",function(){d||(d=!0,B(function(){d=!1;for(var e=0;e<zn.length;e++)B(zn[e])}))})}};zn=[];m.body?b():B(b)}zn.push(a)};var Cn=!1,Dn=[];function En(){if(!Cn){Cn=!0;for(var a=0;a<Dn.length;a++)B(Dn[a])}}var Fn=function(a){Cn?B(a):Dn.push(a)};function Gn(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Hn=new Ca;function In(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Hn.get(e);f||(f=new RegExp(b,d),Hn.set(e,f));return f.test(a)}catch(h){return!1}}
function Jn(a,b){function c(h){var k=we(h),l=ue(k,"protocol"),n=ue(k,"host",!0),p=ue(k,"port"),q=ue(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Kn(a){return Nn(a)?1:0}
function Nn(a){var b=a.arg0,c=a.arg1;if(a.any_of&&xa(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Kn(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(n){}}f=!1}return f;case "_ew":return Gn(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=ya(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return In(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jn(b,c)}return!1};Object.freeze({dl:1,id:1});var On="HA GF G UA AW DC".split(" "),Pn=!1;var Qn=!1,Rn={},Sn=!1;function Tn(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.xb]&&(c.eventCallback=b[H.xb]),b[H.Fc]&&(c.eventTimeout=b[H.Fc]));return c}function Un(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Ef()});return a["gtm.uniqueEventId"]}
function Vn(){return Qn}
var Yn={config:function(a){var b,c;c=Un(a);void 0===c&&(c=Ef());return b},consent:function(a){function b(){Vn()&&E(a[2],{subcommand:a[1]})}if(3===a.length){td(39);var c=Ef(),d=a[1];"default"===d?(b(),Wd(a[2])):"update"===d&&(b(),Xd(a[2],c))}},event:function(a){var b=a[1];if(!(2>
a.length)&&va(b)){var c;if(2<a.length){if(!Tb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Tn(b,c),e=void 0;e=Un(a),d["gtm.uniqueEventId"]=e;void 0===e&&Ef();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){Sn=!0;Vn();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=Un(a);return b}},policy:function(){},
set:function(a){var b;2==a.length&&Tb(a[1])?b=E(a[1]):3==a.length&&va(a[1])&&(b={},Tb(a[2])||xa(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Zn={policy:!0};var $n=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},bo=function(a){var b=ao(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var to=function(a){if(so(a))return a;this.o=a};to.prototype.Uh=function(){return this.o};var so=function(a){return!a||"object"!==Rb(a)||Tb(a)?!1:"getUntrustedUpdateValue"in a};to.prototype.getUntrustedUpdateValue=to.prototype.Uh;var uo=[],vo=!1,wo=!1,xo=!1,yo=function(a){return g["dataLayer"].push(a)},zo=function(a){var b=rf["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Ao(a){var b=a._clear;Ga(a,function(d,e){"_clear"!==d&&(b&&Nf(d,void 0),Nf(d,e))});zf||(zf=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ef(),a["gtm.uniqueEventId"]=c,Nf("gtm.uniqueEventId",c));return ok(a)}function Bo(){var a=uo[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ia(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Co(){for(var a=!1;!xo&&0<uo.length;){var b=!1;b=!0;if(b&&!wo&&Bo()){var c={};uo.unshift((c.event=
"gtm.init",c));wo=!0}var d=!1;d=!0;if(d&&!vo&&Bo()){var e={};uo.unshift((e.event="gtm.init_consent",e));vo=!0}xo=!0;delete Hf.eventModel;Jf();var f=uo.shift();if(null!=f){var h=so(f);
if(h){var k=f;f=so(k)?k.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],n=0;n<l.length;n++){var p=l[n],q=Kf(p,1);if(xa(q)||Tb(q))q=E(q);If[p]=q}}try{if(ua(f))try{f.call(Lf)}catch(z){}else if(xa(f)){var t=f;if(va(t[0])){var u=t[0].split("."),r=u.pop(),v=t.slice(1),w=Kf(u.join("."),2);if(void 0!==w&&null!==w)try{w[r].apply(w,v)}catch(z){}}}else{if(Ia(f)){a:{var y=f;if(y.length&&va(y[0])){var x=Yn[y[0]];if(x&&(!h||!Zn[y[0]])){f=
x(y);break a}}f=void 0}if(!f){xo=!1;continue}}a=Ao(f)||a}}finally{h&&Jf(!0)}}xo=!1}return!a}
function Do(){var b=Co();try{$n(g["dataLayer"],qf.M)}catch(c){}return b}
var Fo=function(){var a=wb("dataLayer",[]),b=wb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ci(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Fn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<rf.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new to(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);uo.push.apply(uo,e);if(300<
this.length)for(td(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Co()&&k};var d=a.slice(0);uo.push.apply(uo,d);if(Eo()){B(Do)}},Eo=function(){var a=!0;return a};var Go={};Go.Qc=new String("undefined");
var Ho=function(a){this.o=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Go.Qc?b:a[d]);return c.join("")}};Ho.prototype.toString=function(){return this.o("undefined")};Ho.prototype.valueOf=Ho.prototype.toString;Go.rh=Ho;Go.Xd={};Go.Hh=function(a){return new Ho(a)};var Io={};Go.xi=function(a,b){var c=Ef();Io[c]=[a,b];return c};Go.Mf=function(a){var b=a?0:1;return function(c){var d=Io[c];if(d&&"function"===typeof d[b])d[b]();Io[c]=void 0}};Go.ai=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Go.oi=function(a){if(a===Go.Qc)return a;var b=Ef();Go.Xd[b]=a;return'google_tag_manager["'+qf.M+'"].macro('+b+")"};Go.ki=function(a,b,c){a instanceof Go.rh&&(a=a.o(Go.xi(b,c)),b=ta);return{Vh:a,onSuccess:b}};var To=g.clearTimeout,Uo=g.setTimeout,L=function(a,b,c){if(Uh()){b&&B(b)}else return Cb(a,b,c)},Vo=function(){return new Date},Wo=function(){return g.location.href},Xo=function(a){return ue(we(a),"fragment")},Yo=function(a){return ve(we(a))},Zo=function(a,b){return Kf(a,b||2)},$o=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=yo(a)):d=yo(a);return d},ap=function(a,b){g[a]=b},O=function(a,b,c){b&&
(void 0===g[a]||c&&!g[a])&&(g[a]=b);return g[a]},bp=function(a,b,c){return bg(a,b,void 0===c?!0:!!c)},cp=function(a,b,c){return 0===kg(a,b,c)},dp=function(a,b){if(Uh()){b&&B(b)}else Eb(a,b)},ep=function(a){return!!sn(a,"init",!1)},fp=function(a){qn(a,"init",!0)},gp=function(a){var b=xf+"?id="+encodeURIComponent(a)+"&l=dataLayer";L(Wh("https://","http://",b))},hp=function(a,b,c){Kj&&(Ub(a)||Yj(c,b,a))};var ip=Go.ki;var Fp=encodeURI,U=encodeURIComponent,Gp=Fb;var Hp=function(a,b){if(!a)return!1;var c=ue(we(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Ip=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function or(){return g.gaGlobal=g.gaGlobal||{}}var pr=function(){var a=or();a.hid=a.hid||Aa();return a.hid},qr=function(a,b){var c=or();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Rr=function(){if(ua(g.__uspapi)){var a="";try{g.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var ls=window,ms=document,ns=function(a){var b=ls._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ls["ga-disable-"+a])return!0;try{var c=ls.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Yf("AMP_TOKEN",String(ms.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ms.getElementById("__gaOptOutExtension")?!0:!1};var os={};function rs(a){delete a.eventModel[H.Ub];ts(a.eventModel)}var ts=function(a){Ga(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.Na]||{};Ga(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ws=function(a,b,c){dn(b,c,a)},xs=function(a,b,c){dn(b,c,a,!0)},Bs=function(a,b){};
function ys(a,b){}var W={g:{}};W.g.ctv=["google"],function(){(function(a){W.__ctv=a;W.__ctv.h="ctv";W.__ctv.m=!0;W.__ctv.priorityOverride=0})(function(){return"3"})}();
W.g.c=["google"],function(){(function(a){W.__c=a;W.__c.h="c";W.__c.m=!0;W.__c.priorityOverride=0})(function(a){hp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
W.g.e=["google"],function(){(function(a){W.__e=a;W.__e.h="e";W.__e.m=!0;W.__e.priorityOverride=0})(function(a){var b=String(Qf(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
W.g.f=["google"],function(){(function(a){W.__f=a;W.__f.h="f";W.__f.m=!0;W.__f.priorityOverride=0})(function(a){var b=Zo("gtm.referrer",1)||m.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ue(we(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Yo(String(b)):String(b)})}();

W.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.h="u";W.__u.m=!0;W.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Zo("gtm.url",1))||Wo();var d=b[a("vtp_component")];if(!d||"URL"==d)return Yo(String(c));var e=we(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?xa(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var p=0;p<n.length;p++){var q=ue(e,"QUERY",void 0,void 0,n[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ue(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
W.g.v=["google"],function(){(function(a){W.__v=a;W.__v.h="v";W.__v.m=!0;W.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Zo(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;hp(d,"v",a.vtp_gtmEventId);return d})}();
W.g.ua=["google"],function(){function a(r){return K(r)}function b(r,v,w){var y=!1;if(Od()&&!y&&!f[r]){var x=!K(H.H),z=function(){var A=Pi(),C="gtm"+Ef(),D=q(v);D["&gtm"]=Hk(!0);var F={name:C};p(D,F,!0);var I=void 0,N=F._useUp;A(function(){var J=A.getByName(w);J&&(I=J.get("clientId"))});
A("create",r,F);x&&K(H.H)&&(x=!1,A(function(){var J=A.getByName(C);!J||J.get("clientId")===I&&N||(D["&gcs"]=Yd(),D["&gcu"]="1",J.set(D),J.send("pageview"))}));A(function(){A.remove(C)})};Td(z,H.H);Td(z,H.D);f[r]=!0}}var c=!1;var d,e={},f={},h={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},k={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},l={urlPassthrough:!0};var p=function(r,v,w){var y=0;if(r)for(var x in r)if(!l[x]&&
r.hasOwnProperty(x)&&(w&&h[x]||!w&&void 0===h[x])){var z=k[x]?Ka(r[x]):r[x];"anonymizeIp"!=x||z||(z=void 0);v[x]=z;y++}return y},q=function(r){var v={};r.vtp_gaSettings&&E(Ip(r.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),v);E(Ip(r.vtp_fieldsToSet,"fieldName","value"),v);Ka(v.urlPassthrough)&&(v._useUp=!0);r.vtp_transportUrl&&(v._x_19=r.vtp_transportUrl);if(!c){K(H.H)||(v.storage="none");K(H.D)||(v.allowAdFeatures=!1,v.storeGac=!1);xm()||(v.allowAdFeatures=!1);wm()||(v.allowAdPersonalizationSignals=!1);
if(Ka(v.urlPassthrough)){var w=!1;Od()&&!w&&(v._cs=a)}}return v},t=function(r,v){},
u=function(r){function v(oa,Y){void 0!==r[Y]&&J("set",oa,r[Y])}var w={},y={},x={},z={};if(r.vtp_gaSettings){var A=r.vtp_gaSettings;E(Ip(A.vtp_contentGroup,"index","group"),y);E(Ip(A.vtp_dimension,"index","dimension"),x);E(Ip(A.vtp_metric,"index","metric"),z);var C=E(A);C.vtp_fieldsToSet=void 0;C.vtp_contentGroup=void 0;C.vtp_dimension=void 0;C.vtp_metric=void 0;r=E(r,C)}E(Ip(r.vtp_contentGroup,"index","group"),y);E(Ip(r.vtp_dimension,"index","dimension"),x);E(Ip(r.vtp_metric,"index","metric"),z);
var D=q(r),F=Ri(r.vtp_functionName);if(ua(F)){var I="",N="";r.vtp_setTrackerName&&"string"==typeof r.vtp_trackerName?""!==r.vtp_trackerName&&(N=r.vtp_trackerName,I=N+"."):(N="gtm"+Ef(),I=N+".");var J=function(oa){var Y=[].slice.call(arguments,0);Y[0]=I+Y[0];F.apply(window,Y)},R=function(oa,Y){return void 0===Y?Y:oa(Y)},P=function(oa,Y){if(Y)for(var Ma in Y)Y.hasOwnProperty(Ma)&&(c?D[oa+Ma]=Y[Ma]:J("set",oa+Ma,Y[Ma]))},T=function(){},G=function(oa,Y){return void 0===r[oa]?w[Y]:r[oa]},Q=r.vtp_trackingId||
w.trackingId;if(!c){var Ba=function(oa,Y){void 0!==Y&&J("set",oa,Y)},Fa={name:N};p(D,Fa,!0);F("create",Q,Fa);J("set","&gtm",Hk(!0));P("contentGroup",y);P("dimension",x);P("metric",z);var Yc=!1;Od()&&!Yc&&(J("set","&gcs",Yd()),b(Q,r,N));D._x_19&&D._x_20&&!e[N]&&(e[N]=!0,F(Zi(N,String(D._x_20))));r.vtp_enableRecaptcha&&J("require","recaptcha","recaptcha.js");v("nonInteraction","vtp_nonInteraction");var Ce={};p(D,Ce,!1)&&J("set",Ce);r.vtp_enableLinkId&&J("require","linkid","linkid.js");J("set","hitCallback",function(){var oa=D&&D.hitCallback;ua(oa)&&oa();r.vtp_gtmOnSuccess()})}var Mb;if("TRACK_EVENT"==r.vtp_trackType){if(!c){}}else if("TRACK_SOCIAL"==r.vtp_trackType){if(!c){}}else if("TRACK_TRANSACTION"==r.vtp_trackType){}else if("TRACK_TIMING"==
r.vtp_trackType){if(!c){}}else if("DECORATE_LINK"==r.vtp_trackType){}else if("DECORATE_FORM"==r.vtp_trackType){}else if("TRACK_DATA"==r.vtp_trackType){}else if(!c){r.vtp_enableEcommerce&&(J("require","ec","ec.js"),T());if(r.vtp_doubleClick||"DISPLAY_FEATURES"==r.vtp_advertisingFeaturesType){var Bd=
"_dc_gtm_"+String(r.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");J("require","displayfeatures",void 0,{cookieName:Bd})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==r.vtp_advertisingFeaturesType){var Fe="_dc_gtm_"+String(r.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");J("require","adfeatures",{cookieName:Fe})}Mb?J("send","pageview",Mb):J("send","pageview");t(r,I);Ka(D.urlPassthrough)&&Ti(I)}if(!d){var ad=r.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";r.vtp_useInternalVersion&&!r.vtp_useDebugVersion&&
(ad="internal/"+ad);d=!0;var wc=qk(D._x_19,"/analytics.js"),xc=Wh("https:","http:","//www.google-analytics.com/"+ad,D&&!!D.forceSSL);L("analytics.js"===ad&&wc?wc:xc,function(){var oa=Pi();oa&&oa.loaded||r.vtp_gtmOnFailure();},r.vtp_gtmOnFailure)}}else B(r.vtp_gtmOnFailure)};(function(r){W.__ua=r;W.__ua.h="ua";W.__ua.m=!0;W.__ua.priorityOverride=0})(function(r){$d(function(){u(r)},[H.H,H.D])})}();
W.g.uv=["google"],function(){(function(a){W.__uv=a;W.__uv.h="uv";W.__uv.m=!0;W.__uv.priorityOverride=0})(function(){})}();



W.g.cid=["google"],function(){(function(a){W.__cid=a;W.__cid.h="cid";W.__cid.m=!0;W.__cid.priorityOverride=0})(function(){return qf.M})}();



W.g.gas=["google"],function(){(function(a){W.__gas=a;W.__gas.h="gas";W.__gas.m=!0;W.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Vb.kb]=null;c[Vb.jh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
W.g.remm=["google"],function(){(function(a){W.__remm=a;W.__remm.h="remm";W.__remm.m=!0;W.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var l=new RegExp(k,e);if(l.test(b)){var n=c[h].value;a.vtp_replaceAfterMatch&&(n=String(b).replace(l,n));f=n;break}}hp(f,"remm",a.vtp_gtmEventId);return f})}();
W.g.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.h="smm";W.__smm.m=!0;W.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Ip(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;hp(d,"smm",a.vtp_gtmEventId);return d})}();














var Cs={};Cs.macro=function(a){if(Go.Xd.hasOwnProperty(a))return Go.Xd[a]},Cs.onHtmlSuccess=Go.Mf(!0),Cs.onHtmlFailure=Go.Mf(!1);Cs.dataLayer=Lf;Cs.callback=function(a){Cf.hasOwnProperty(a)&&ua(Cf[a])&&Cf[a]();delete Cf[a]};Cs.bootstrap=0;Cs._spx=!1;function Ds(){rf[qf.M]=Cs;Ua(Df,W.g);Jc=Jc||Go;Kc=Sc}
function Es(){var a=!1;a&&Li("INIT");yd().s();rf=g.google_tag_manager=g.google_tag_manager||{};jl();
gh.enable_gbraid_cookie_write=!0;if(rf[qf.M]){var b=rf.zones;b&&b.unregisterChild(qf.M);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)uc.push(d[e]);for(var f=c.tags||[],h=0;h<f.length;h++)Fc.push(f[h]);for(var k=c.predicates||[],l=0;l<k.length;l++)Ec.push(k[l]);for(var n=c.rules||[],p=0;p<n.length;p++){for(var q=n[p],t={},u=
0;u<q.length;u++)t[q[u][0]]=Array.prototype.slice.call(q[u],1);Dc.push(t)}Hc=W;Ic=Kn;Ds();Fo();xi=!1;yi=0;if("interactive"==m.readyState&&!m.createEventObject||"complete"==m.readyState)Ai();else{Gb(m,"DOMContentLoaded",Ai);Gb(m,"readystatechange",Ai);if(m.createEventObject&&m.documentElement.doScroll){var r=!0;try{r=!g.frameElement}catch(z){}r&&Bi()}Gb(g,"load",Ai)}Cn=!1;"complete"===m.readyState?En():Gb(g,"load",En);Kj&&g.setInterval(Ej,864E5);Af=(new Date).getTime();if(a){var x=Mi("INIT");}}}
(function(a){if(!g["__TAGGY_INSTALLED"]){var b=!1;if(m.referrer){var c=we(m.referrer);b="cct.google"===te(c,"host")}if(!b){var d=bg("googTaggyReferrer");b=d.length&&d[0].length}b&&(g["__TAGGY_INSTALLED"]=!0,Cb("https://cct.google/taggy/agent.js"))}var f=function(){var n=g["google.tagmanager.debugui2.queue"];n||(n=[],g["google.tagmanager.debugui2.queue"]=n,Cb("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:vb,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};qf.zg&&(p.data.initialPublish=!0);n.push(p)},h="x"===ue(g.location,"query",!1,void 0,"gtm_debug");if(!h&&m.referrer){var k=we(m.referrer);h="tagassistant.google.com"===te(k,"host")}if(!h){var l=bg("__TAG_ASSISTANT");h=l.length&&l[0].length}g.__TAG_ASSISTANT_API&&(h=!0);h&&vb?f():a()})(Es);

})()
