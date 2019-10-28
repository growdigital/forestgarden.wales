document.addEventListener("DOMContentLoaded",function(){document.body.classList.remove("no-js"),document.body.classList.add("js")}),function(){if(sessionStorage.fontsLoadedFoutWithClassPolyfill)document.documentElement.className+=" fonts-loaded";else{var g,n,o,e;!function(){"use strict";var t,n=[];function e(){for(;n.length;)n[0](),n.shift()}function s(e){this.a=a,this.b=void 0,this.f=[];var t=this;try{e(function(e){!function t(n,e){if(n.a==a){if(e==n)throw new TypeError;var o=!1;try{var i=e&&e.then;if(null!=e&&"object"==typeof e&&"function"==typeof i)return void i.call(e,function(e){o||t(n,e),o=!0},function(e){o||c(n,e),o=!0})}catch(e){return void(o||c(n,e))}n.a=0,n.b=e,d(n)}}(t,e)},function(e){c(t,e)})}catch(e){c(t,e)}}t=function(){setTimeout(e)};var a=2;function r(t){return new s(function(e){e(t)})}function c(e,t){if(e.a==a){if(t==e)throw new TypeError;e.a=1,e.b=t,d(e)}}function d(i){!function(e){n.push(e),1==n.length&&t()}(function(){if(i.a!=a)for(;i.f.length;){var e=(o=i.f.shift())[0],t=o[1],n=o[2],o=o[3];try{0==i.a?n("function"==typeof e?e.call(void 0,i.b):i.b):1==i.a&&("function"==typeof t?n(t.call(void 0,i.b)):o(i.b))}catch(e){o(e)}}})}s.prototype.g=function(e){return this.c(void 0,e)},s.prototype.c=function(n,o){var i=this;return new s(function(e,t){i.f.push([n,o,e,t]),d(i)})},window.Promise||(window.Promise=s,window.Promise.resolve=r,window.Promise.reject=function(n){return new s(function(e,t){t(n)})},window.Promise.race=function(o){return new s(function(e,t){for(var n=0;n<o.length;n+=1)r(o[n]).c(e,t)})},window.Promise.all=function(a){return new s(function(n,e){function t(t){return function(e){i[t]=e,(o+=1)==a.length&&n(i)}}var o=0,i=[];0==a.length&&n(i);for(var s=0;s<a.length;s+=1)r(a[s]).c(t(s),e)})},window.Promise.prototype.then=s.prototype.c,window.Promise.prototype.catch=s.prototype.g)}(),e=o=n=g=null,l.prototype.load=function(e,t){var p=this,m=e||"BESbswy",w=0,v=t||3e3,y=(new Date).getTime();return new Promise(function(f,h){if(u()&&!function(){if(null===n)if(u()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);n=!!e&&parseInt(e[1],10)<603}else n=!1;return n}()){var e=new Promise(function(n,e){!function t(){(new Date).getTime()-y>=v?e():document.fonts.load(T(p,'"'+p.family+'"'),m).then(function(e){1<=e.length?n():setTimeout(t,25)},function(){e()})}()}),t=new Promise(function(e,t){w=setTimeout(t,v)});Promise.race([t,e]).then(function(){clearTimeout(w),f(p)},function(){h(p)})}else!function(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t()}):document.attachEvent("onreadystatechange",function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())})}(function(){function n(){var e;(e=-1!=a&&-1!=r||-1!=a&&-1!=c||-1!=r&&-1!=c)&&((e=a!=r&&a!=c&&r!=c)||(null===g&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),g=!!e&&(parseInt(e[1],10)<536||536===parseInt(e[1],10)&&parseInt(e[2],10)<=11)),e=g&&(a==t&&r==t&&c==t||a==d&&r==d&&c==d||a==l&&r==l&&c==l)),e=!e),e&&(u.parentNode&&u.parentNode.removeChild(u),clearTimeout(w),f(p))}var o=new b(m),i=new b(m),s=new b(m),a=-1,r=-1,c=-1,t=-1,d=-1,l=-1,u=document.createElement("div");u.dir="ltr",x(o,T(p,"sans-serif")),x(i,T(p,"serif")),x(s,T(p,"monospace")),u.appendChild(o.a),u.appendChild(i.a),u.appendChild(s.a),document.body.appendChild(u),t=o.a.offsetWidth,d=i.a.offsetWidth,l=s.a.offsetWidth,function e(){if((new Date).getTime()-y>=v)u.parentNode&&u.parentNode.removeChild(u),h(p);else{var t=document.hidden;!0!==t&&void 0!==t||(a=o.a.offsetWidth,r=i.a.offsetWidth,c=s.a.offsetWidth,n()),w=setTimeout(e,50)}}(),E(o,function(e){a=e,n()}),x(o,T(p,'"'+p.family+'",sans-serif')),E(i,function(e){r=e,n()}),x(i,T(p,'"'+p.family+'",serif')),E(s,function(e){c=e,n()}),x(s,T(p,'"'+p.family+'",monospace'))})})},"object"==typeof module?module.exports=l:(window.FontFaceObserver=l,window.FontFaceObserver.prototype.load=l.prototype.load);var t=new FontFaceObserver("IBMPlexSerif"),i=new FontFaceObserver("IBMPlexSerifBold",{weight:700}),s=new FontFaceObserver("IBMPlexSerifItalic",{style:"italic"}),a=new FontFaceObserver("IBMPlexSerifBoldItalic",{weight:700,style:"italic"}),r=new FontFaceObserver("Montserrat");Promise.all([t.load(null,1e4),i.load(null,1e4),s.load(null,1e4),a.load(null,1e4),r.load(null,1e4)]).then(function(){document.documentElement.className+=" fonts-loaded",sessionStorage.fontsLoadedFoutWithClassPolyfill=!0})}function c(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function b(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function x(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function d(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function E(e,t){function n(){var e=o;d(e)&&e.a.parentNode&&t(e.g)}var o=e;c(e.b,n),c(e.c,n),d(e)}function l(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function u(){return null===e&&(e=!!document.fonts),e}function T(e,t){return[e.style,e.weight,function(){if(null===o){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}o=""!==e.style.font}return o}()?e.stretch:"","100px",t].join(" ")}}();var supportsSvg=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");if(supportsSvg){document.body.classList.add("svg");var url="/assets/img/icon.svg",xhr=new XMLHttpRequest;xhr.onload=function(){200===xhr.status&&(document.getElementById("js-svg").innerHTML=xhr.responseText,document.getElementById("footer").classList.add("icons"))},xhr.open("GET",url,!0),xhr.send(null)}else document.body.classList.add("no-svg");