!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){var s=[],i={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},a=function(){};a.prototype=i,a=new a;var o=[];function c(e,t){return(void 0===e?"undefined":r(e))===t}var l=t.documentElement,u="svg"===l.nodeName.toLowerCase();function f(e){var t=l.className,n=a._config.classPrefix||"";if(u&&(t=t.baseVal),a._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}a._config.enableClasses&&(t+=" "+n+e.join(" "+n),u?l.className.baseVal=t:l.className=t)}a.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var d="Moz O ms Webkit",p=i._config.usePrefixes?d.split(" "):[];function m(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}i._cssomPrefixes=p;var h={elem:m("modernizr")};a._q.push(function(){delete h.elem});var A={style:h.elem.style};function g(e,n,r,s){var i,a,o,c,f,d="modernizr",p=m("div"),h=((f=t.body)||((f=m(u?"svg":"body")).fake=!0),f);if(parseInt(r,10))for(;r--;)(o=m("div")).id=s?s[r]:d+(r+1),p.appendChild(o);return(i=m("style")).type="text/css",i.id="s"+d,(h.fake?h:p).appendChild(i),h.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=l.style.overflow,l.style.overflow="hidden",l.appendChild(h)),a=n(p,e),h.fake?(h.parentNode.removeChild(h),l.style.overflow=c,l.offsetHeight):p.parentNode.removeChild(p),!!a}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(v(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+v(t[s])+":"+r+")");return g("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var i=e.console;null!==s?r&&(s=s.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}(t,null,"position")})}return n}a._q.unshift(function(){delete A.style});var w=i._config.usePrefixes?d.toLowerCase().split(" "):[];function z(e,t){return function(){return e.apply(t,arguments)}}function C(e,t,r,s,i){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+p.join(a+" ")+a).split(" ");return c(t,"string")||c(t,"undefined")?function(e,t,r,s){if(s=!c(s,"undefined")&&s,!c(r,"undefined")){var i=y(e,r);if(!c(i,"undefined"))return i}for(var a,o,l,u,f,d=["modernizr","tspan","samp"];!A.style&&d.length;)a=!0,A.modElem=m(d.shift()),A.style=A.modElem.style;function p(){a&&(delete A.style,delete A.modElem)}for(l=e.length,o=0;o<l;o++)if(u=e[o],f=A.style[u],~(""+u).indexOf("-")&&(u=u.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),A.style[u]!==n){if(s||c(r,"undefined"))return p(),"pfx"!=t||u;try{A.style[u]=r}catch(e){}if(A.style[u]!=f)return p(),"pfx"!=t||u}return p(),!1}(o,t,s,i):function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:c(r=t[e[s]],"function")?z(r,n||t):r;return!1}(o=(e+" "+w.join(a+" ")+a).split(" "),t,r)}function b(e,t,r){return C(e,n,n,t,r)}i._domPrefixes=w,i.testAllProps=C,i.testAllProps=b,a.addTest("flexbox",b("flexBasis","1px",!0));var S,E,x="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;function _(e,t){if("object"==(void 0===e?"undefined":r(e)))for(var n in e)S(e,n)&&_(n,e[n]);else{var s=(e=e.toLowerCase()).split("."),i=a[s[0]];if(2==s.length&&(i=i[s[1]]),void 0!==i)return a;t="function"==typeof t?t():t,1==s.length?a[s[0]]=t:(!a[s[0]]||a[s[0]]instanceof Boolean||(a[s[0]]=new Boolean(a[s[0]])),a[s[0]][s[1]]=t),f([(t&&0!=t?"":"no-")+s.join("-")]),a._trigger(e,t)}return a}a.addTest("supports",x||T),a.addTest("srcset","srcset"in m("img")),a.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),a.addTest("hidden","hidden"in m("a")),S=c(E={}.hasOwnProperty,"undefined")||c(E.call,"undefined")?function(e,t){return t in e&&c(e.constructor.prototype[t],"undefined")}:function(e,t){return E.call(e,t)},i._l={},i.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),a.hasOwnProperty(e)&&setTimeout(function(){a._trigger(e,a[e])},0)},i._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},a._q.push(function(){i.addTest=_}),a.addAsyncTest(function(){var e,t,n,r=m("img"),s="sizes"in r;!s&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){_("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):_("sizes",s)}),function(){var e,t,n,r,i,l;for(var u in s)if(s.hasOwnProperty(u)){if(e=[],(t=s[u]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=c(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(l=e[i].split(".")).length?a[l[0]]=r:(!a[l[0]]||a[l[0]]instanceof Boolean||(a[l[0]]=new Boolean(a[l[0]])),a[l[0]][l[1]]=r),o.push((r?"":"no-")+l.join("-"))}}(),f(o),delete i.addTest,delete i.addAsyncTest;for(var P=0;P<a._q.length;P++)a._q[P]();e.Modernizr=a}(window,document)},function(e,t,n){var r,s,i,a,o,c,l,u,f,d;s=window,d=navigator.userAgent,s.HTMLPictureElement&&/ecko/.test(d)&&d.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(a=document.createElement("source"),o=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=a.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},c=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)o(t[e])},l=function(){clearTimeout(i),i=setTimeout(c,99)},u=s.matchMedia&&matchMedia("(orientation: landscape)"),f=function(){l(),u&&u.addListener&&u.addListener(l)},a.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?f():document.addEventListener("DOMContentLoaded",f),l)),function(s,i,a){"use strict";var o,c,l;i.createElement("picture");var u={},f=!1,d=function(){},p=i.createElement("img"),m=p.getAttribute,h=p.setAttribute,A=p.removeAttribute,g=i.documentElement,v={},y={algorithm:""},w="data-pfsrc",z=w+"set",C=navigator.userAgent,b=/rident/.test(C)||/ecko/.test(C)&&C.match(/rv\:(\d+)/)&&RegExp.$1>35,S="currentSrc",E=/\s+\+?\d+(e\d+)?w/,x=/(\([^)]+\))?\s*(.+)/,T=s.picturefillCFG,_="font-size:100%!important;",P=!0,M={},L={},R=s.devicePixelRatio,B={px:1,in:96},N=i.createElement("a"),k=!1,W=/^[ \t\n\r\u000c]+/,D=/^[, \t\n\r\u000c]+/,O=/^[^ \t\n\r\u000c]+/,$=/[,]+$/,I=/^\d+$/,H=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,U=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},j=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function q(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var F,G,Q,V,J,K,X,Z,Y,ee,te,ne,re,se,ie,ae,oe,ce,le,ue=(F=/^([\d\.]+)(em|vw|px)$/,G=j(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in M))if(M[e]=!1,t&&(n=e.match(F)))M[e]=n[1]*B[n[2]];else try{M[e]=new Function("e",G(e))(B)}catch(e){}return M[e]}),fe=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},de=function(e){if(f){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||u.qsa(s.context||i,s.reevaluate||s.reselect?u.sel:u.selShort)).length){for(u.setupRun(s),k=!0,n=0;n<r;n++)u.fillImg(t[n],s);u.teardownRun(s)}}};function pe(e,t){return e.res-t.res}function me(e,t){var n,r,s;if(e&&t)for(s=u.parseSet(t),e=u.makeUrl(e),n=0;n<s.length;n++)if(e===u.makeUrl(s[n].url)){r=s[n];break}return r}s.console&&console.warn,S in p||(S="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in p,u.supSizes="sizes"in p,u.supPicture=!!s.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&(Q=i.createElement("img"),p.srcset="data:,a",Q.src="data:,a",u.supSrcset=p.complete===Q.complete,u.supPicture=u.supSrcset&&u.supPicture),u.supSrcset&&!u.supSizes?(V="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",J=i.createElement("img"),K=function(){2===J.width&&(u.supSizes=!0),c=u.supSrcset&&!u.supSizes,f=!0,setTimeout(de)},J.onload=K,J.onerror=K,J.setAttribute("sizes","9px"),J.srcset=V+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",J.src=V):f=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=y,u.DPR=R||1,u.u=B,u.types=v,u.setSize=d,u.makeUrl=j(function(e){return N.href=e,N.href}),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||ue(e)},u.calcLength=function(e){var t=ue(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||v[e]},u.parseSize=j(function(e){var t=(e||"").match(x);return{media:t&&t[1],length:t&&t[2]}}),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(l));if(r)return n=r[0],l+=n.length,n}var r,s,i,a,o,c=e.length,l=0,u=[];function f(){var e,n,i,a,o,c,l,f,d,p=!1,m={};for(a=0;a<s.length;a++)c=(o=s[a])[o.length-1],l=o.substring(0,o.length-1),f=parseInt(l,10),d=parseFloat(l),I.test(l)&&"w"===c?((e||n)&&(p=!0),0===f?p=!0:e=f):H.test(l)&&"x"===c?((e||n||i)&&(p=!0),d<0?p=!0:n=d):I.test(l)&&"h"===c?((i||n)&&(p=!0),0===f?p=!0:i=f):p=!0;p||(m.url=r,e&&(m.w=e),n&&(m.d=n),i&&(m.h=i),i||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,u.push(m))}function d(){for(n(W),i="",a="in descriptor";;){if(o=e.charAt(l),"in descriptor"===a)if(q(o))i&&(s.push(i),i="",a="after descriptor");else{if(","===o)return l+=1,i&&s.push(i),void f();if("("===o)i+=o,a="in parens";else{if(""===o)return i&&s.push(i),void f();i+=o}}else if("in parens"===a)if(")"===o)i+=o,a="in descriptor";else{if(""===o)return s.push(i),void f();i+=o}else if("after descriptor"===a)if(q(o));else{if(""===o)return void f();a="in descriptor",l-=1}l+=1}}for(;;){if(n(D),l>=c)return u;r=n(O),s=[],","===r.slice(-1)?(r=r.replace($,""),f()):d()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!o&&(e=i.body)){var t=i.createElement("div"),n=g.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=_,e.style.cssText=_,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),g.style.cssText=n,e.style.cssText=r}return o||16},u.calcListLength=function(e){if(!(e in L)||y.uT){var t=u.calcLength(function(e){var t,n,r,s,i,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],s=[],i=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),s;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(q(t)){if(e.charAt(a-1)&&q(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(i=(s=n[t])[s.length-1],o=i,c.test(o)&&parseFloat(o)>=0||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),u.matchesMedia(s))return a}return"100vw"}(e));L[e]=t||B.width}return L[e]},u.setRes=function(e){var t;if(e)for(var n=0,r=(t=u.parseSet(e)).length;n<r;n++)fe(t[n],e.sizes);return t},u.setRes.res=fe,u.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,f,d,p,m,h,A,g,v,w,z,C,E,x=t[u.ns],T=u.DPR;if(o=x.curSrc||t[S],(c=x.curCan||(d=t,p=o,!(m=e[0].set)&&p&&(m=(m=d[u.ns].sets)&&m[m.length-1]),(h=me(p,m))&&(p=u.makeUrl(p),d[u.ns].curSrc=p,d[u.ns].curCan=h,h.res||fe(h,h.set.sizes)),h))&&c.set===e[0].set&&((f=b&&!t.complete&&c.res-.1>T)||(c.cached=!0,c.res>=T&&(a=c))),!a)for(e.sort(pe),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=T){a=e[s=r-1]&&(f||o!==u.makeUrl(n.url))&&(A=e[s].res,g=n.res,v=T,w=e[s].cached,z=void 0,C=void 0,E=void 0,"saveData"===y.algorithm?A>2.7?E=v+1:(C=(g-v)*(z=Math.pow(A-.6,1.5)),w&&(C+=.1*z),E=A+C):E=v>1?Math.sqrt(A*g):A,E>v)?e[s]:n;break}a&&(l=u.makeUrl(a.url),x.curSrc=l,x.curCan=a,l!==o&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,r,s=!1,i=e[u.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&u.matchesMedia(n.media)&&(r=u.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},u.parseSets=function(e,t,n){var r,s,i,o,l=t&&"PICTURE"===t.nodeName.toUpperCase(),f=e[u.ns];(f.src===a||n.src)&&(f.src=m.call(e,"src"),f.src?h.call(e,w,f.src):A.call(e,w)),(f.srcset===a||n.srcset||!u.supSrcset||e.srcset)&&(r=m.call(e,"srcset"),f.srcset=r,o=!0),f.sets=[],l&&(f.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[u.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,f.sets)),f.srcset?(s={srcset:f.srcset,sizes:m.call(e,"sizes")},f.sets.push(s),(i=(c||f.src)&&E.test(f.srcset||""))||!f.src||me(f.src,s)||s.has1x||(s.srcset+=", "+f.src,s.cands.push({url:f.src,d:1,set:s}))):f.src&&f.sets.push({srcset:f.src,sizes:null}),f.curCan=null,f.curSrc=a,f.supported=!(l||s&&!u.supSrcset||i&&!u.supSizes),o&&u.supSrcset&&!f.supported&&(r?(h.call(e,z,r),e.srcset=""):A.call(e,z)),f.supported&&!f.srcset&&(!f.src&&e.src||e.src!==u.makeUrl(f.src))&&(null===f.src?e.removeAttribute("src"):e.src=f.src),f.parsed=!0},u.fillImg=function(e,t){var n,r,s,i,a,o=t.reselect||t.reevaluate;(e[u.ns]||(e[u.ns]={}),n=e[u.ns],o||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:(r=e,i=u.getSet(r),a=!1,"pending"!==i&&(a=l,i&&(s=u.setRes(i),u.applySetCandidate(s,r))),r[u.ns].evaled=a))},u.setupRun=function(){k&&!P&&R===s.devicePixelRatio||(P=!1,R=s.devicePixelRatio,M={},L={},u.DPR=R||1,B.width=Math.max(s.innerWidth||0,g.clientWidth),B.height=Math.max(s.innerHeight||0,g.clientHeight),B.vw=B.width/100,B.vh=B.height/100,l=[B.height,B.width,R].join("-"),B.em=u.getEmValue(),B.rem=B.em)},u.supPicture?(de=d,u.fillImg=d):(re=s.attachEvent?/d$|^c/:/d$|^c|^i/,se=function(){var e=i.readyState||"";ie=setTimeout(se,"loading"===e?200:999),i.body&&(u.fillImgs(),(X=X||re.test(e))&&clearTimeout(ie))},ie=setTimeout(se,i.body?9:99),ae=g.clientHeight,U(s,"resize",(Z=function(){P=Math.max(s.innerWidth||0,g.clientWidth)!==B.width||g.clientHeight!==ae,ae=g.clientHeight,P&&u.fillImgs()},Y=99,ne=function(){var e=new Date-te;e<Y?ee=setTimeout(ne,Y-e):(ee=null,Z())},function(){te=new Date,ee||(ee=setTimeout(ne,Y))})),U(i,"readystatechange",se)),u.picturefill=de,u.fillImgs=de,u.teardownRun=d,de._=u,s.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(y[t]=e[0],k&&u.fillImgs({reselect:!0}))}};for(;T&&T.length;)s.picturefillCFG.push(T.shift());s.picturefill=de,"object"==typeof e&&"object"==typeof e.exports?e.exports=de:(r=function(){return de}.call(t,n,t,e))===a||(e.exports=r),u.supPicture||(v["image/webp"]=(oe="image/webp",ce="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(le=new s.Image).onerror=function(){v[oe]=!1,de()},le.onload=function(){v[oe]=1===le.width,de()},le.src=ce,"pending"))}(window,document)},function(e,t){var n,r;n=window,r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,s=t.documentElement,i=e.Date,a=e.HTMLPictureElement,o="addEventListener",c="getAttribute",l=e[o],u=e.setTimeout,f=e.requestAnimationFrame||u,d=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],h={},A=Array.prototype.forEach,g=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[c]("class")||"")&&h[t]},v=function(e,t){g(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},y=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},w=function(e,t,n){var r=n?o:"removeEventListener";n&&w(e,t),m.forEach(function(n){e[r](n,t)})},z=function(e,r,s,i,a){var o=t.createEvent("CustomEvent");return s||(s={}),s.instance=n,o.initCustomEvent(r,!i,!a,s),e.dispatchEvent(o),o},C=function(t,n){var s;!a&&(s=e.picturefill||r.pf)?s({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=(M=[],L=[],R=M,B=function(){var e=R;for(R=M.length?L:M,_=!0,P=!1;e.length;)e.shift()();_=!1},N=function(e,n){_&&!n?e.apply(this,arguments):(R.push(e),P||(P=!0,(t.hidden?u:f)(B)))},N._lsFlush=B,N),x=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},T=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?u(s,99-e):(d||r)(r)};return function(){n=i.now(),t||(t=u(s,99))}};var _,P,M,L,R,B,N;!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,u(function(){r.init&&D()})}();var k=(ce=/^img$/i,le=/^iframe$/i,ue="onscroll"in e&&!/glebot/.test(navigator.userAgent),fe=0,de=0,pe=-1,me=function(e){de--,e&&e.target&&w(e.target,me),(!e||de<0||!e.target)&&(de=0)},he=function(e,n){var r,i=e,a="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(J-=n,Z+=n,K-=n,X+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=s;)(a=(b(i,"opacity")||1)>0)&&"visible"!=b(i,"overflow")&&(r=i.getBoundingClientRect(),a=X>r.left&&K<r.right&&Z>r.top-1&&J<r.bottom+1);return a},Ae=function(){var e,i,a,o,l,u,f,d,p,m=n.elements;if((F=r.loadMode)&&de<8&&(e=m.length)){i=0,pe++,null==ee&&("expand"in r||(r.expand=s.clientHeight>500&&s.clientWidth>500?500:370),Y=r.expand,ee=Y*r.expFactor),fe<ee&&de<1&&pe>2&&F>2&&!t.hidden?(fe=ee,pe=0):fe=F>1&&pe>1&&de<6?Y:0;for(;i<e;i++)if(m[i]&&!m[i]._lazyRace)if(ue)if((d=m[i][c]("data-expand"))&&(u=1*d)||(u=fe),p!==u&&(Q=innerWidth+u*te,V=innerHeight+u,f=-1*u,p=u),a=m[i].getBoundingClientRect(),(Z=a.bottom)>=f&&(J=a.top)<=V&&(X=a.right)>=f*te&&(K=a.left)<=Q&&(Z||X||K||J)&&(r.loadHidden||"hidden"!=b(m[i],"visibility"))&&(j&&de<3&&!d&&(F<3||pe<4)||he(m[i],u))){if(be(m[i]),l=!0,de>9)break}else!l&&j&&!o&&de<4&&pe<4&&F>2&&(U[0]||r.preloadAfterLoad)&&(U[0]||!d&&(Z||X||K||J||"auto"!=m[i][c](r.sizesAttr)))&&(o=U[0]||m[i]);else be(m[i]);o&&!l&&be(o)}},ne=Ae,se=0,ie=r.ricTimeout,ae=function(){re=!1,se=i.now(),ne()},oe=d&&r.ricTimeout?function(){d(ae,{timeout:ie}),ie!==r.ricTimeout&&(ie=r.ricTimeout)}:x(function(){u(ae)},!0),ge=function(e){var t;(e=!0===e)&&(ie=33),re||(re=!0,(t=125-(i.now()-se))<0&&(t=0),e||t<9&&d?oe():u(oe,t))},ve=function(e){v(e.target,r.loadedClass),y(e.target,r.loadingClass),w(e.target,we),z(e.target,"lazyloaded")},ye=x(ve),we=function(e){ye({target:e.target})},ze=function(e){var t,n=e[c](r.srcsetAttr);(t=r.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Ce=x(function(e,t,n,s,i){var a,o,l,f,d,m;(d=z(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?v(e,r.autosizesClass):e.setAttribute("sizes",s)),o=e[c](r.srcsetAttr),a=e[c](r.srcAttr),i&&(l=e.parentNode,f=l&&p.test(l.nodeName||"")),m=t.firesLoad||"src"in e&&(o||a||f),d={target:e},m&&(w(e,me,!0),clearTimeout(q),q=u(me,2500),v(e,r.loadingClass),w(e,we,!0)),f&&A.call(l.getElementsByTagName("source"),ze),o?e.setAttribute("srcset",o):a&&!f&&(le.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),i&&(o||f)&&C(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),E(function(){(!m||e.complete&&e.naturalWidth>1)&&(m?me(d):de--,ve(d))},!0)}),be=function(e){var t,n=ce.test(e.nodeName),s=n&&(e[c](r.sizesAttr)||e[c]("sizes")),i="auto"==s;(!i&&j||!n||!e[c]("src")&&!e.srcset||e.complete||g(e,r.errorClass)||!g(e,r.lazyClass))&&(t=z(e,"lazyunveilread").detail,i&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,de++,Ce(e,t,i,s,n))},Se=function(){if(!j)if(i.now()-G<999)u(Se,999);else{var e=T(function(){r.loadMode=3,ge()});j=!0,r.loadMode=3,ge(),l("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}},{_:function(){G=i.now(),n.elements=t.getElementsByClassName(r.lazyClass),U=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),te=r.hFac,l("scroll",ge,!0),l("resize",ge,!0),e.MutationObserver?new MutationObserver(ge).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s[o]("DOMNodeInserted",ge,!0),s[o]("DOMAttrModified",ge,!0),setInterval(ge,999)),l("hashchange",ge,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[o](e,ge,!0)}),/d$|^c/.test(t.readyState)?Se():(l("load",Se),t[o]("DOMContentLoaded",ge),u(Se,2e4)),n.elements.length?(Ae(),E._lsFlush()):ge()},checkElems:ge,unveil:be}),W=($=x(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),p.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||C(e,n.detail)}),I=function(e,t,n){var r,s=e.parentNode;s&&(n=S(e,s,n),(r=z(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&$(e,s,r,n))},H=T(function(){var e,t=O.length;if(t)for(e=0;e<t;e++)I(O[e])}),{_:function(){O=t.getElementsByClassName(r.autosizesClass),l("resize",H)},checkElems:H,updateElem:I}),D=function(){D.i||(D.i=!0,W._(),k._())};var O,$,I,H;var U,j,q,F,G,Q,V,J,K,X,Z,Y,ee,te,ne,re,se,ie,ae,oe,ce,le,ue,fe,de,pe,me,he,Ae,ge,ve,ye,we,ze,Ce,be,Se;return n={cfg:r,autoSizer:W,loader:k,init:D,uP:C,aC:v,rC:y,hC:g,fire:z,gW:S,rAF:E}}(n,n.document),n.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}]);