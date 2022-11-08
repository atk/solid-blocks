"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("solid-js"),fe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],me=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...fe]),ge=new Set(["innerHTML","textContent","innerText","children"]),he=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),V=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),$e=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ve=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),be={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ye(t,e,n){let l=n.length,o=e.length,r=l,c=0,i=0,a=e[o-1].nextSibling,u=null;for(;c<o||i<r;){if(e[c]===n[i]){c++,i++;continue}for(;e[o-1]===n[r-1];)o--,r--;if(o===c){const d=r<l?i?n[i-1].nextSibling:n[r-i]:a;for(;i<r;)t.insertBefore(n[i++],d)}else if(r===i)for(;c<o;)(!u||!u.has(e[c]))&&e[c].remove(),c++;else if(e[c]===n[r-1]&&n[i]===e[o-1]){const d=e[--o].nextSibling;t.insertBefore(n[i++],e[c++].nextSibling),t.insertBefore(n[--r],d),e[o]=n[r]}else{if(!u){u=new Map;let f=i;for(;f<r;)u.set(n[f],f++)}const d=u.get(e[c]);if(d!=null)if(i<d&&d<r){let f=c,b=1,m;for(;++f<o&&f<r&&!((m=u.get(e[f]))==null||m!==d+b);)b++;if(b>d-i){const g=e[c];for(;i<d;)t.insertBefore(n[i++],g)}else t.replaceChild(n[i++],e[c++])}else c++;else e[c++].remove()}}}const W="_$DX_DELEGATE";function $(t,e,n){const l=document.createElement("template");l.innerHTML=t;let o=l.content.firstChild;return n&&(o=o.firstChild),o}function F(t,e=window.document){const n=e[W]||(e[W]=new Set);for(let l=0,o=t.length;l<o;l++){const r=t[l];n.has(r)||(n.add(r),e.addEventListener(r,Ee))}}function _(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function _e(t,e,n,l){l==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,l)}function x(t,e){e==null?t.removeAttribute("class"):t.className=e}function P(t,e,n,l){if(l)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const o=n[0];t.addEventListener(e,n[0]=r=>o.call(t,n[1],r))}else t.addEventListener(e,n)}function E(t,e,n={}){const l=Object.keys(e||{}),o=Object.keys(n);let r,c;for(r=0,c=o.length;r<c;r++){const i=o[r];!i||i==="undefined"||e[i]||(Q(t,i,!1),delete n[i])}for(r=0,c=l.length;r<c;r++){const i=l[r],a=!!e[i];!i||i==="undefined"||n[i]===a||!a||(Q(t,i,!0),n[i]=a)}return n}function j(t,e,n){if(!e)return n?_(t,"style"):e;const l=t.style;if(typeof e=="string")return l.cssText=e;typeof n=="string"&&(l.cssText=n=void 0),n||(n={}),e||(e={});let o,r;for(r in n)e[r]==null&&l.removeProperty(r),delete n[r];for(r in e)o=e[r],o!==n[r]&&(l.setProperty(r,o),n[r]=o);return n}function h(t,e={},n,l){const o={};return l||s.createRenderEffect(()=>o.children=k(t,e.children,o.children)),s.createRenderEffect(()=>e.ref&&e.ref(t)),s.createRenderEffect(()=>Ae(t,e,n,!0,o,!0)),o}function S(t,e,n){return s.untrack(()=>t(e,n))}function v(t,e,n,l){if(n!==void 0&&!l&&(l=[]),typeof e!="function")return k(t,e,l,n);s.createRenderEffect(o=>k(t,e(),o,n),l)}function Ae(t,e,n,l,o={},r=!1){e||(e={});for(const c in o)if(!(c in e)){if(c==="children")continue;o[c]=J(t,c,null,o[c],n,r)}for(const c in e){if(c==="children"){l||k(t,e.children);continue}const i=e[c];o[c]=J(t,c,i,o[c],n,r)}}function xe(t){let e,n;return!s.sharedConfig.context||!(e=s.sharedConfig.registry.get(n=Ce()))?t.cloneNode(!0):(s.sharedConfig.completed&&s.sharedConfig.completed.add(e),s.sharedConfig.registry.delete(n),e)}function pe(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function Q(t,e,n){const l=e.trim().split(/\s+/);for(let o=0,r=l.length;o<r;o++)t.classList.toggle(l[o],n)}function J(t,e,n,l,o,r){let c,i,a;if(e==="style")return j(t,n,l);if(e==="classList")return E(t,n,l);if(n===l)return l;if(e==="ref")r||n(t);else if(e.slice(0,3)==="on:"){const u=e.slice(3);l&&t.removeEventListener(u,l),n&&t.addEventListener(u,n)}else if(e.slice(0,10)==="oncapture:"){const u=e.slice(10);l&&t.removeEventListener(u,l,!0),n&&t.addEventListener(u,n,!0)}else if(e.slice(0,2)==="on"){const u=e.slice(2).toLowerCase(),d=$e.has(u);if(!d&&l){const f=Array.isArray(l)?l[0]:l;t.removeEventListener(u,f)}(d||n)&&(P(t,u,n,d),d&&F([u]))}else if((a=ge.has(e))||!o&&(V[e]||(i=me.has(e)))||(c=t.nodeName.includes("-")))e==="class"||e==="className"?x(t,n):c&&!i&&!a?t[pe(e)]=n:t[V[e]||e]=n;else{const u=o&&e.indexOf(":")>-1&&be[e.split(":")[0]];u?_e(t,u,e,n):_(t,he[e]||e,n)}return n}function Ee(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}}),s.sharedConfig.registry&&!s.sharedConfig.done&&(s.sharedConfig.done=!0,document.querySelectorAll("[id^=pl-]").forEach(l=>l.remove()));n!==null;){const l=n[e];if(l&&!n.disabled){const o=n[`${e}Data`];if(o!==void 0?l.call(n,o,t):l.call(n,t),t.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function k(t,e,n,l,o){for(s.sharedConfig.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const r=typeof e,c=l!==void 0;if(t=c&&n[0]&&n[0].parentNode||t,r==="string"||r==="number"){if(s.sharedConfig.context)return n;if(r==="number"&&(e=e.toString()),c){let i=n[0];i&&i.nodeType===3?i.data=e:i=document.createTextNode(e),n=N(t,n,l,i)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||r==="boolean"){if(s.sharedConfig.context)return n;n=N(t,n,l)}else{if(r==="function")return s.createRenderEffect(()=>{let i=e();for(;typeof i=="function";)i=i();n=k(t,i,n,l)}),()=>n;if(Array.isArray(e)){const i=[],a=n&&Array.isArray(n);if(I(i,e,n,o))return s.createRenderEffect(()=>n=k(t,i,n,l,!0)),()=>n;if(s.sharedConfig.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=N(t,n,l),c)return n}else a?n.length===0?X(t,i,l):ye(t,n,i):(n&&N(t),X(t,i));n=i}else if(e instanceof Node){if(s.sharedConfig.context&&e.parentNode)return n=c?[e]:e;if(Array.isArray(n)){if(c)return n=N(t,n,l,e);N(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function I(t,e,n,l){let o=!1;for(let r=0,c=e.length;r<c;r++){let i=e[r],a=n&&n[r];if(i instanceof Node)t.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))o=I(t,i,a)||o;else if(typeof i=="function")if(l){for(;typeof i=="function";)i=i();o=I(t,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||o}else t.push(i),o=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?t.push(a):t.push(document.createTextNode(u))}}return o}function X(t,e,n=null){for(let l=0,o=e.length;l<o;l++)t.insertBefore(e[l],n)}function N(t,e,n,l){if(n===void 0)return t.textContent="";const o=l||document.createTextNode("");if(e.length){let r=!1;for(let c=e.length-1;c>=0;c--){const i=e[c];if(o!==i){const a=i.parentNode===t;!r&&!c?a?t.replaceChild(o,i):t.insertBefore(o,n):a&&i.remove()}else r=!0}}else t.insertBefore(o,n);return[o]}function Ce(){const t=s.sharedConfig.context;return`${t.id}${t.count++}`}const G=!1,we="http://www.w3.org/2000/svg";function te(t,e=!1){return e?document.createElementNS(we,t):document.createElement(t)}function K(t){const{useShadow:e}=t,n=document.createTextNode(""),l=t.mount||document.body;function o(){if(s.sharedConfig.context){const[r,c]=s.createSignal(!1);return queueMicrotask(()=>c(!0)),()=>r()&&t.children}else return()=>t.children}if(l instanceof HTMLHeadElement){const[r,c]=s.createSignal(!1),i=()=>c(!0);s.createRoot(a=>v(l,()=>r()?a():o()(),null)),s.onCleanup(()=>{s.sharedConfig.context?queueMicrotask(i):i()})}else{const r=te(t.isSVG?"g":"div",t.isSVG),c=e&&r.attachShadow?r.attachShadow({mode:"open"}):r;Object.defineProperty(r,"host",{get(){return n.parentNode},configurable:!0}),v(c,o()),l.appendChild(r),t.ref&&t.ref(r),s.onCleanup(()=>l.removeChild(r))}return n}function Me(t){const[e,n]=s.splitProps(t,["component"]),l=s.createMemo(()=>e.component);return s.createMemo(()=>{const o=l();switch(typeof o){case"function":return s.untrack(()=>o(n));case"string":const r=ve.has(o),c=s.sharedConfig.context?xe():te(o,r);return h(c,n,r),c}})}const ne=t=>{if(typeof t=="object")return t;const e={};return(t||"").replace(/([\w-]+)\s*:\s*([^;]+)/g,(n,l,o)=>(e[l]=o,"")),e},oe=(...t)=>Object.assign({},...t.map(ne)),T=(t,e)=>{if(!t)return;let n=t;for(;n&&n.nodeName!==e;)n=n.parentNode;return n},re=8;let L=0;const B=()=>{const t=1+Math.floor(Math.random()*(re-(L?1:0)));return L=L?t+(t===L?1:0):t,L},se=t=>{const e=window.matchMedia(t),[n,l]=s.createSignal(e.matches),o=r=>l(r.matches);return e.addEventListener("change",o),s.onCleanup(()=>e.removeEventListener("change",o)),n},Pe=(t,e)=>e?t?JSON.parse(t):void 0:t!=null?t:void 0,Z=(t,e)=>localStorage.setItem(t,typeof e=="string"?e:JSON.stringify(e));function le(t,e,n=!1){localStorage.getItem(t)===null&&e!==void 0&&Z(t,e);const[l,o]=s.createSignal(Pe(localStorage.getItem(t),n));return s.createEffect(()=>n&&l()===void 0?localStorage.removeItem(t):Z(t,l())),[l,o]}const Ne=(t="COLOR_SCHEME")=>{const e=se("(prefers-color-scheme: dark)"),[n,l]=le(t,void 0,!0),o=s.createMemo(()=>{var r;return(r=n())!=null?r:e()});return s.createEffect(()=>{document.body.classList.toggle("dark-mode",o())}),[o,l]},C=(t,e,n=[],l=[])=>{if(!!t){if(Array.isArray(t))t.forEach(o=>C(o,e,n,l));else if(typeof t=="function")C(t.apply(null,n),e,n,l);else{const o=t;(!e||(typeof e=="function"?e(o):o.nodeName===e))&&l.push(o)}return l}};const Se=$("<details></details>"),ke=$("<summary></summary>"),Fe=$("<section></section>"),Le=t=>{const[e,n]=s.splitProps(t,["children","ontoggle"]),[l,o]=s.createSignal(!!t.open);let r;const c=s.createMemo(()=>typeof t.children=="function"?t.children(l()):t.children),i=()=>{var a;r&&(o(r.open),(a=e.ontoggle)==null||a.call(e,r.open))};return s.onMount(()=>r==null?void 0:r.addEventListener("toggle",i)),s.onCleanup(()=>r==null?void 0:r.addEventListener("toggle",i)),(()=>{const a=Se.cloneNode(!0),u=r;return typeof u=="function"?S(u,a):r=a,h(a,n,!1,!0),v(a,c),s.createRenderEffect(d=>{var m;const f=s.mergeProps((m=t.classList)!=null?m:{},{"sb-accordion":!0}),b=!!t.open;return d._v$=E(a,f,d._v$),b!==d._v$2&&(a.open=d._v$2=b),d},{_v$:void 0,_v$2:void 0}),a})()},Be=t=>(()=>{const e=ke.cloneNode(!0);return v(e,()=>t.children),s.createRenderEffect(n=>{var l;return E(e,s.mergeProps((l=t.classList)!=null?l:{},{"sb-accordion-header":!0}),n)}),e})(),Te=t=>{const[e,n]=s.splitProps(t,["allowMultiple","allowToggle"]),l=s.createMemo(()=>r=>{var a,u;if(!r.target)return;const c=T(r.target,"DETAILS");if(!c)return;const i=(u=(a=c.parentNode)==null?void 0:a.querySelectorAll("details.sb-accordion[open]"))!=null?u:[];i.length!==0&&(!e.allowMultiple&&!c.open&&Array.prototype.forEach.call(i,d=>{d!==c&&d.removeAttribute("open")}),!e.allowToggle&&c.open&&i.length===1&&r.preventDefault())}),o=s.createMemo(()=>r=>{const c=T(r.target,"DETAILS");if(!c||!c.parentNode)return;const i=c.parentNode.querySelectorAll("details.sb-accordion"),a=Array.prototype.indexOf.call(i,c);if(a!==-1){if(r.key==="ArrowLeft"&&a!==0){const u=i[a-1],d=u.querySelector("summary");d==null||d.focus(),!u.open&&(d==null||d.click())}if(r.key==="ArrowRight"&&a+1<i.length){const u=i[a+1],d=u.querySelector("summary");d==null||d.focus(),!u.open&&(d==null||d.click())}}});return(()=>{const r=Fe.cloneNode(!0);return P(r,"keyup",o(),!0),P(r,"click",l(),!0),h(r,n,!1,!1),s.createRenderEffect(c=>{var i;return E(r,s.mergeProps((i=t.classList)!=null?i:{},{"sb-accordion-group":!0}),c)}),r})()};F(["click","keyup"]);const De=$('<div role="figure"><img><span aria-hidden="true"></span></div>'),Re=$('<div role="img"></div>'),Oe=$('<div role="img" aria-label="Unknown"></div>'),He=$("<span></span>"),Ie=$('<div role="group"></div>'),Y="[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]",Ge=new RegExp(`^.*?(${Y})(?:.*\\s+\\S*?(${Y}))?.*$`),ie=t=>t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g,"").replace(Ge,"$1$2").toUpperCase(),qe=t=>{const[e,n]=s.splitProps(t,["classList","children","img","name","fallback"]),l=s.createMemo(()=>e.name?ie(e.name):"");return e.img?(()=>{const o=De.cloneNode(!0),r=o.firstChild,c=r.nextSibling;return h(o,n,!1,!0),v(c,l),v(o,()=>e.children,null),s.createRenderEffect(i=>{var b;const a=s.mergeProps((b=e.classList)!=null?b:{},{"sb-avatar":!0}),u=B(),d=e.img,f=e.name;return i._v$=E(o,a,i._v$),u!==i._v$2&&_(o,"data-random",i._v$2=u),d!==i._v$3&&_(r,"src",i._v$3=d),f!==i._v$4&&_(r,"alt",i._v$4=f),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),o})():e.name?(()=>{const o=Re.cloneNode(!0);return h(o,n,!1,!0),v(o,l,null),v(o,()=>e.children,null),s.createRenderEffect(r=>{var u;const c=s.mergeProps((u=e.classList)!=null?u:{},{"sb-avatar":!0}),i=e.name,a=B();return r._v$5=E(o,c,r._v$5),i!==r._v$6&&_(o,"aria-label",r._v$6=i),a!==r._v$7&&_(o,"data-random",r._v$7=a),r},{_v$5:void 0,_v$6:void 0,_v$7:void 0}),o})():(()=>{const o=Oe.cloneNode(!0);return h(o,n,!1,!0),v(o,()=>{var r;return(r=e.fallback)!=null?r:"?"},null),v(o,()=>e.children,null),s.createRenderEffect(r=>{var a;const c=s.mergeProps((a=e.classList)!=null?a:{},{"sb-avatar":!0}),i=B();return r._v$8=E(o,c,r._v$8),i!==r._v$9&&_(o,"data-random",r._v$9=i),r},{_v$8:void 0,_v$9:void 0}),o})()},je=t=>{var o;const[e,n]=s.splitProps(t,["classList","borderColor","background","style"]),l=oe((o=e.style)!=null?o:{},{"border-color":e.borderColor,background:e.background});return(()=>{const r=He.cloneNode(!0);return h(r,n,!1,!1),s.createRenderEffect(c=>{var u;const i=s.mergeProps((u=e.classList)!=null?u:{},{"sb-badge":!0}),a=l;return c._v$10=E(r,i,c._v$10),c._v$11=j(r,a,c._v$11),c},{_v$10:void 0,_v$11:void 0}),r})()},Ke=t=>(()=>{const e=Ie.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(n=>{var r;const l=s.mergeProps((r=t.classList)!=null?r:{},{"sb-avatar":!0}),o=Array.isArray(t.children)&&t.children.length>3;return n._v$12=E(e,l,n._v$12),o!==n._v$13&&_(e,"aria-haspopup",n._v$13=o),n},{_v$12:void 0,_v$13:void 0}),e})();const z=$("<div></div>"),Ue=t=>{const[e,n]=s.splitProps(t,["placement","position","mount","portal"]),l=s.mergeProps(n,{class:`${e.placement}${e.position?" "+e.position:""} sb-bar ${t.class?" "+t.class:""}`});return e.portal===!1?(()=>{const o=z.cloneNode(!0);return h(o,l,!1,!1),o})():s.createComponent(K,{get mount(){return e.mount},get children(){const o=z.cloneNode(!0);return h(o,l,!1,!1),o}})};const Ve=$('<nav class="sb-breadcrumbs"><ol></ol></nav>'),We=$("<li></li>"),Qe=t=>(()=>{const e=Ve.cloneNode(!0),n=e.firstChild;return h(n,t,!1,!0),v(n,s.createComponent(s.For,{get each(){return Array.isArray(t.children)?t.children:[t.children]},children:l=>(()=>{const o=We.cloneNode(!0);return v(o,l),o})()})),e})();const Je=$("<button></button>"),ce=t=>{const[e,n]=s.splitProps(t,["variant","classList"]);return(()=>{const l=Je.cloneNode(!0);return h(l,n,!1,!1),s.createRenderEffect(o=>{var r,c;return E(l,s.mergeProps((r=e.classList)!=null?r:{},{"sb-button":!0,[(c=e.variant)!=null?c:"primary"]:!0}),o)}),l})()};const Xe=$('<label><input type="checkbox"></label>'),Ze=t=>{const[e,n,l]=s.splitProps(t,["accessKey","aria-disabled","aria-invalid","autofocus","checked","class","disabled","id","name","onclick","onkeydown","onkeypress","onkeyup","oninvalid","required","value"],["align","children","onchange","switch"]),o=r=>{var c,i;return(i=n.onchange)==null?void 0:i.call(n,(c=r.target)==null?void 0:c.checked)};return(()=>{const r=Xe.cloneNode(!0),c=r.firstChild;return h(r,l,!1,!0),v(r,s.createComponent(s.Show,{get when(){return n.align==="right"},get children(){return n.children}}),c),c.addEventListener("change",o),h(c,e,!1,!1),v(r,s.createComponent(s.Show,{get when(){return n.align!=="right"},get children(){return n.children}}),null),s.createRenderEffect(i=>{const a=`${n.align||"left"} ${n.switch?" switch":""} sb-checkbox`,u=n.switch?"switch":void 0;return a!==i._v$&&x(r,i._v$=a),u!==i._v$2&&_(c,"role",i._v$2=u),i},{_v$:void 0,_v$2:void 0}),r})()};const Ye=$("<p></p>"),ze=t=>{const[e,n]=s.splitProps(t,["type","class","inline"]),l=s.createMemo(()=>[...new Set(["sb-message",e.type,e.class,e.inline&&"inline"].filter(Boolean))].join(" "));return(()=>{const o=Ye.cloneNode(!0);return h(o,n,!1,!1),s.createRenderEffect(r=>{const c=l(),i=e.type==="error"?"alert":void 0;return c!==r._v$&&x(o,r._v$=c),i!==r._v$2&&_(o,"role",r._v$2=i),r},{_v$:void 0,_v$2:void 0}),o})()};const et=$('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'),tt=t=>(()=>{const e=et.cloneNode(!0),n=e.firstChild,l=n.firstChild;return h(e,t,!1,!0),_(e,"role","meter"),v(e,()=>t.children,null),s.createRenderEffect(o=>{var f,b,m,g,A,y;const r=t.class?`sb-meter ${t.class}`:"sb-meter",c=(f=t.value)!=null?f:t["aria-valuenow"],i=(b=t.min)!=null?b:t["aria-valuemin"],a=(m=t.max)!=null?m:t["aria-valuemax"],u=`0 0 ${(g=t.max)!=null?g:t["aria-valuemax"]} 10`,d=(y=(A=t.value)!=null?A:t["aria-valuenow"])!=null?y:0;return r!==o._v$&&x(e,o._v$=r),c!==o._v$2&&_(e,"aria-valuenow",o._v$2=c),i!==o._v$3&&_(e,"aria-valuemin",o._v$3=i),a!==o._v$4&&_(e,"aria-valuemax",o._v$4=a),u!==o._v$5&&_(n,"viewBox",o._v$5=u),d!==o._v$6&&_(l,"width",o._v$6=d),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),e})();const nt=$('<div><div tabindex="-1" role="menu"></div></div>'),ot=$('<div tabindex="0" role="menuitem"></div>'),ae=$("<p></p>"),rt=$('<div role="group"></div>'),st=$("<div></div>"),lt=$('<div tabindex="-1" role="group"></div>'),it=t=>{let e=0;return n=>{const r=(n.nodeName==="BUTTON"||n.getAttribute("role")==="button")&&n.getAttribute("aria-haspopup")==="menu"&&e++===0;return r&&(t()&&n.getAttribute("aria-expanded")!=="true"?n.setAttribute("aria-expanded","true"):!t()&&n.getAttribute("aria-expanded")==="true"&&n.setAttribute("aria-expanded","false")),r}},ct=()=>{let t=0;return e=>!((e.nodeName==="BUTTON"||e.getAttribute("role")==="button")&&e.getAttribute("aria-haspopup")==="menu"&&t++===0)},at=t=>{const[e,n]=s.createSignal(!!t.open),[l,o]=s.splitProps(t,["open","children","ontoggle","align"]),r=s.createMemo(()=>{var m;return((m=C(t.children,it(e),[e()]))!=null?m:[])[0]}),c=s.createMemo(()=>{var m;return(m=C(t.children,ct(),[e()]))!=null?m:[]});let i;s.createEffect(()=>{var g;const m=e();(g=l.ontoggle)==null||g.call(l,m),m&&c()[0].focus()});const a=m=>{const g=m.target,A=g==null?void 0:g.getAttribute("role"),y=r();!m.defaultPrevented&&y&&(m.target===y?n(p=>!p&&y.getAttribute("aria-disabled")!=="true"):!y.contains(g)&&A!=="menuitemradio"&&A!=="menuitemcheckbox"&&n(!1))};s.onMount(()=>!G&&document.addEventListener("click",a,{capture:!1})),s.onCleanup(()=>!G&&document.removeEventListener("click",a));let u;const d=m=>{var A;const g=m.target;["menuitem","menuitemradio","menuitemcheckbox"].includes((A=g==null?void 0:g.getAttribute("role"))!=null?A:"")&&(g==null?void 0:g.tabIndex)!==-1&&(g==null?void 0:g.getAttribute("aria-disabled"))!=="true"&&(u=g,u==null||u.focus())},f=m=>{const g=i.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'),A=u?Array.prototype.findIndex.call(g,p=>p===u):-1,y=A===-1?1:(g.length+m+A)%g.length;u=g[y],u.focus()},b=m=>{var y,p,w;const g=m.target;m.key==="Escape"&&e()&&(n(!1),(y=r())==null||y.focus());const A=g==null?void 0:g.getAttribute("role");if(m.key===" "&&["menuitem","menuitemradio","menuitemcheckbox"].includes(A!=null?A:"")){if(g.click(),A==="menuitemradio"){const M=(w=(p=g.parentNode)==null?void 0:p.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]'))!=null?w:[],R=Array.prototype.indexOf.call(M,g),D=(M.length+1+R)%M.length;u=M[D],u==null||u.focus()}m.preventDefault()}m.key==="ArrowDown"?(f(1),m.preventDefault()):m.key==="ArrowUp"&&(f(-1),m.preventDefault())};return(()=>{const m=nt.cloneNode(!0),g=m.firstChild;m.$$keydown=b;const A=i;return typeof A=="function"?S(A,m):i=m,h(m,o,!1,!0),v(m,r,g),g.$$mouseover=d,v(g,c),s.createRenderEffect(y=>{const p=`sb-menu${o.class?" "+o.class:""}${l.align?" "+l.align:""}`,w=!e();return p!==y._v$&&x(m,y._v$=p),w!==y._v$2&&(g.hidden=y._v$2=w),y},{_v$:void 0,_v$2:void 0}),m})()},ut=t=>s.createComponent(ce,s.mergeProps(t,{"aria-haspopup":"menu"})),dt=t=>(()=>{const e=ot.cloneNode(!0);return h(e,t,!1,!1),e})(),ft=t=>{const[e,n]=s.splitProps(t,["title","children"]);return(()=>{const l=rt.cloneNode(!0);return h(l,n,!1,!0),v(l,s.createComponent(s.Show,{get when(){return typeof t.title=="string"},get fallback(){return e.title},get children(){const o=ae.cloneNode(!0);return v(o,()=>e.title),o}}),null),v(l,()=>e.children,null),l})()},U=s.createContext([()=>[],t=>console.warn("context default!",t)]),mt=t=>{const[e,n]=s.splitProps(t,["value","onchange"]),[l,o,r]=s.useContext(U),c=s.createMemo(()=>l().includes(t.value)),i=s.createMemo(()=>()=>t["aria-disabled"]!=="true"&&o(t.value)),a=s.createMemo(()=>u=>{u.key===" "&&(u.preventDefault(),t["aria-disabled"]!=="true"&&o(t.value))});return s.createEffect(()=>{var u;(u=t.onchange)==null||u.call(t,c())}),(()=>{const u=st.cloneNode(!0);return P(u,"keypress",a()),P(u,"click",i(),!0),h(u,n,!1,!1),_(u,"role",r!=="checkbox"?"menuitemradio":"menuitemcheckbox"),s.createRenderEffect(d=>{const f=c(),b=(r==="checkbox"||!c())&&t["aria-disabled"]!=="true"?"0":"-1";return f!==d._v$3&&_(u,"aria-selected",d._v$3=f),b!==d._v$4&&_(u,"tabindex",d._v$4=b),d},{_v$3:void 0,_v$4:void 0}),u})()},gt=t=>{const[e,n]=s.splitProps(t,["title","value","onchange","children","type"]),[l,o]=s.createSignal(Array.isArray(e.value)?e.value:e.value?[e.value]:[],{equals:(c,i)=>c.length===i.length&&c[0]===i[0]}),r=s.createMemo(()=>t.type==="checkbox"?c=>o(i=>i.includes(c)?i.filter(a=>a!==c):[...i,c]):c=>o(i=>i[0]===c?i:[c]));return s.createEffect(c=>(c!==e.value&&o(Array.isArray(e.value)?e.value:e.value?[e.value]:[]),e.value),e.value),s.createEffect(c=>{var a,u;const i=l();return(t.type==="checkbox"?i.length===(c==null?void 0:c.length):i[0]===(c==null?void 0:c[0]))?c:(t.type==="checkbox"?(a=t.onchange)==null||a.call(t,i):(u=t.onchange)==null||u.call(t,i[0]),i)},l()),(()=>{const c=lt.cloneNode(!0);return h(c,n,!1,!0),v(c,s.createComponent(s.Show,{get when(){return typeof t.title=="string"},get fallback(){return e.title},get children(){const i=ae.cloneNode(!0);return v(i,()=>e.title),i}}),null),v(c,s.createComponent(U.Provider,{get value(){return[l,r(),e.type]},get children(){return e.children}}),null),c})()};F(["keydown","mouseover","click"]);const q=$("<div></div>"),ht=$("<header></header>"),$t=$("<main></main>"),vt=$("<footer></footer>");let O=0;const bt=t=>{const[e,n]=s.splitProps(t,["open","noPortal","children"]),[l,o]=s.createSignal(e.open),r=d=>o(typeof d=="boolean"?d:f=>!f),c=s.createMemo(()=>{var d;return(d=C(e.children,f=>f.className.indexOf("sb-modal-content")!==-1,[{open:l,toggle:r}]))!=null?d:[]}),i=s.createMemo(()=>C(e.children,d=>d.className.indexOf("sb-modal-content")===-1,[{open:l,toggle:r}]));let a;s.createEffect(()=>l()&&(a==null||a.focus(),a==null?void 0:a.scrollIntoView())),O++,s.createEffect(()=>{if(!a)return;const d=a.querySelector(".sb-modal-header");d&&a.setAttribute("aria-labelledby",d.id||(()=>d.id=`sb-modal-header-${O}`)());const f=a.querySelector(".sb-modal-body");f&&a.setAttribute("aria-describedby",f.id||(()=>f.id=`sb-modal-body-${O}`)())});const u=s.mergeProps(n,{role:"dialog",tabIndex:-1,class:t.class?`sb-modal ${t.class}`:"sb-modal",children:c(),onClick:s.createMemo(()=>t.closeOnClickOutside?d=>{const f=d.target;c().some(b=>b==null?void 0:b.contains(f))||r(!1)}:void 0)(),onkeyup:s.createMemo(()=>t.closeOnEsc!==!1?d=>{console.log(d),d.key==="Escape"&&!d.defaultPrevented&&o(!1)}:void 0)()});return s.createComponent(s.Switch,{get children(){return[s.createComponent(s.Match,{get when(){return!l()},get children(){return i()}}),s.createComponent(s.Match,{get when(){return l()&&e.noPortal},get children(){return[s.createMemo(i),(()=>{const d=q.cloneNode(!0),f=a;return typeof f=="function"?S(f,d):a=d,h(d,u,!1,!1),d})()]}}),s.createComponent(s.Match,{get when(){return l()&&!e.noPortal},get children(){return[s.createMemo(i),s.createComponent(K,{get mount(){return document.body},get children(){const d=q.cloneNode(!0),f=a;return typeof f=="function"?S(f,d):a=d,h(d,u,!1,!1),d}})]}})]}})},yt=t=>(()=>{const e=q.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(()=>x(e,t.class?`sb-modal-content ${t.class}`:"sb-modal-content")),e})(),_t=t=>(()=>{const e=ht.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(()=>x(e,t.class?`sb-modal-header ${t.class}`:"sb-modal-header")),e})(),At=t=>(()=>{const e=$t.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(()=>x(e,t.class?`sb-modal-body ${t.class}`:"sb-modal-body")),e})(),xt=t=>(()=>{const e=vt.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(()=>x(e,t.class?`sb-modal-footer ${t.class}`:"sb-modal-footer")),e})();const pt=$('<progress aria-live="polite"></progress>'),Et=t=>(()=>{const e=pt.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(n=>{const l=(t==null?void 0:t.value)!==(t==null?void 0:t.max),o=t.class?`sb-progress ${t.class}`:"sb-progress";return l!==n._v$&&_(e,"aria-busy",n._v$=l),o!==n._v$2&&x(e,n._v$2=o),n},{_v$:void 0,_v$2:void 0}),e})();const Ct=$('<label><input type="radio"></label>'),wt=$('<div role="radiogroup"></div>'),Mt=t=>{const[e,n,l]=s.splitProps(t,["accessKey","align","aria-disabled","aria-invalid","autofocus","checked","class","disabled","id","name","onchange","onclick","onkeydown","onkeypress","onkeyup","oninvalid","required","value"],["align","children"]);return(()=>{const o=Ct.cloneNode(!0),r=o.firstChild;return h(o,l,!1,!0),v(o,s.createComponent(s.Show,{get when(){return n.align==="right"},get children(){return n.children}}),r),h(r,e,!1,!1),v(o,s.createComponent(s.Show,{get when(){return n.align!=="right"},get children(){return n.children}}),null),s.createRenderEffect(()=>x(o,`${n.align||"left"} sb-radio${e.disabled?" disabled":""}`)),o})()};let Pt=1;const Nt=t=>{const[e,n]=s.splitProps(t,["onchange","value","children"]);let l;s.onMount(()=>{const c=l.querySelectorAll('input[type="radio"]');if(Array.prototype.some.call(c,i=>!i.hasAttribute("name"))){const i=(Array.prototype.find.call(c,a=>a.hasAttribute("name"))||{name:`sb-radio-group-${Pt++}`}).name;Array.prototype.forEach.call(c,a=>{a.setAttribute("name",i)})}}),s.createEffect(()=>{if(e.value){const c=l.querySelectorAll('input[type="radio"]');Array.prototype.forEach.call(c,i=>{i.checked=i.value===e.value})}});let o=e.value;const r=()=>{var i,a;const c=(i=l==null?void 0:l.querySelector('input[type="radio"]:checked'))==null?void 0:i.value;c&&o!==c&&((a=e.onchange)==null||a.call(e,c),o=c)};return(()=>{const c=wt.cloneNode(!0);c.$$click=r,c.$$keyup=r;const i=l;return typeof i=="function"?S(i,c):l=c,h(c,n,!1,!0),v(c,()=>e.children),s.createRenderEffect(()=>x(c,n.class?`sb-radiogroup ${n.class}`:"sb-radiogroup")),c})()};F(["keyup","click"]);const St=$('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'),kt=t=>{const[e,n]=s.splitProps(t,["label","onchange","aria-orientation"]);return(()=>{const l=St.cloneNode(!0),o=l.firstChild,r=o.nextSibling;return v(o,()=>e.label),r.addEventListener("change",c=>{var i;return(i=e.onchange)==null?void 0:i.call(e,c.target.value)}),h(r,n,!1,!1),s.createRenderEffect(c=>{const i=!!t.disabled,a=e["aria-orientation"];return i!==c._v$&&l.classList.toggle("disabled",c._v$=i),a!==c._v$2&&_(l,"aria-orientation",c._v$2=a),c},{_v$:void 0,_v$2:void 0}),l})()};const Ft=$('<progress aria-busy="true" aria-live="polite"></progress>'),Lt=t=>(()=>{const e=Ft.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(()=>x(e,t.class?`sb-spinner ${t.class}`:"sb-spinner")),e})();const Bt=$('<section><ul role="tablist"></ul></section>'),Tt=$('<li role="tab" tabindex="0"></li>'),Dt=$('<div role="tabpanel"></div>'),Rt=(t,e,n)=>{const l=e===n;(t==null?void 0:t.getAttribute)&&t.getAttribute("aria-selected")==="true"!==l&&(t.setAttribute("aria-selected",l?"true":"false"),t.setAttribute("tabIndex",l?"-1":"0"))},Ot=(t,e,n)=>{(t==null?void 0:t.hasAttribute)&&t.hasAttribute("hidden")===(e===n)&&t[e===n?"removeAttribute":"setAttribute"]("hidden","hidden")},Ht=t=>{var i;const[e,n]=s.createSignal((i=t.index)!=null?i:0),l=s.createMemo(()=>C(t.children,"LI")||[]),o=s.createMemo(()=>C(t.children,"DIV")||[]);s.createEffect(()=>{var u;l().length!==o().length&&console.warn(`solid-blocks tabs: items count mismatch: ${l().length} tabs and ${o().length}`);const a=e()%l().length;(u=t.onchange)==null||u.call(t,a),l().forEach((d,f)=>{Rt(d,f,a)}),o().forEach((d,f)=>{Ot(d,f,a)})});const r=a=>{var f;const u=T(a.target,"LI");if(!u)return;const d=Array.prototype.indexOf.call((f=u.parentNode)==null?void 0:f.childNodes,u);d!==-1&&n(Number(d))},c=a=>{var b,m;const u=T(a.target,"LI"),d=(m=(b=u==null?void 0:u.parentElement)==null?void 0:b.childNodes)!=null?m:[],f=Array.prototype.indexOf.call(d,u);f!==-1&&(a.key===" "?n(f):a.key==="ArrowLeft"&&f!==0?(n(f-1),d[f-1].focus()):a.key==="ArrowRight"&&f+1<d.length&&(n(f+1),d[f+1].focus()))};return(()=>{const a=Bt.cloneNode(!0),u=a.firstChild;return u.$$keyup=c,u.$$click=r,v(u,l),v(a,o,null),s.createRenderEffect(d=>{var m;const f=s.mergeProps((m=t.classList)!=null?m:{},{"sb-tabs":!0}),b=t.vertical?"vertical":"horizontal";return d._v$=E(a,f,d._v$),b!==d._v$2&&_(u,"aria-orientation",d._v$2=b),d},{_v$:void 0,_v$2:void 0}),a})()},It=t=>(()=>{const e=Tt.cloneNode(!0);return h(e,t,!1,!1),e})(),Gt=t=>(()=>{const e=Dt.cloneNode(!0);return h(e,t,!1,!1),e})();F(["click","keyup"]);const qt=$("<a></a>"),jt=$("<span></span>"),Kt=$("<div></div>"),Ut=t=>{const[e,n]=s.splitProps(t,["plain"]),l=s.mergeProps({"data-random":e.plain?void 0:B(),rel:t.target?"tag noopener":"tag"},n,{class:t.class?`sb-tag ${t.class}`:"sb-tag"});return s.createComponent(s.Show,{get when(){return typeof l.href=="string"},get fallback(){return(()=>{const o=jt.cloneNode(!0);return h(o,l,!1,!1),o})()},get children(){const o=qt.cloneNode(!0);return h(o,l,!1,!1),o}})},Vt=t=>(()=>{const e=Kt.cloneNode(!0);return h(e,t,!1,!1),s.createRenderEffect(()=>x(e,t.class?`sb-tag-group ${t.class}`:"sb-tag-group")),e})();const Wt=$('<label><span class="sb-textfield-label"></span></label>'),Qt=t=>{const[e,n]=s.splitProps(t,["aria-orientation","classList","label","multiline","onchange","children"]),l=s.createMemo(()=>o=>{var r;return(r=e.onchange)==null?void 0:r.call(e,o.target.value)});return(()=>{const o=Wt.cloneNode(!0),r=o.firstChild;return v(r,()=>e.label),v(o,s.createComponent(Me,s.mergeProps({get component(){return t.multiline?"textarea":"input"},get onchange(){return l()}},n,{get type(){var c;return t.multiline?void 0:(c=n.type)!=null?c:"text"}})),null),v(o,()=>e.children,null),s.createRenderEffect(c=>{var u;const i=s.mergeProps((u=e.classList)!=null?u:{},{"sb-textfield":!0}),a=t["aria-orientation"];return c._v$=E(o,i,c._v$),a!==c._v$2&&_(o,"aria-orientation",c._v$2=a),c},{_v$:void 0,_v$2:void 0}),o})()};const Jt=$("<div></div>"),Xt=["top","top-right","top-left","bottom","bottom-right","bottom-left"],ue=Xt.reduce((t,e)=>(t[e]=G?null:document.getElementById(`sb-toast-${e}`),t),{}),Zt=document.createElement("div"),Yt=(t="top-right")=>{const e=Zt.cloneNode();return e.id=`sb-toast-${t}`,ue[t]=e,document.body.appendChild(e),e},zt=t=>{const[e,n]=s.splitProps(t,["timeout","position","children","mount","onhide"]),l=s.createMemo(()=>e.mount||ue[e.position||"top-right"]||Yt(e.position)),[o,r]=s.createSignal(!0),c=()=>r(!1),[i,a]=s.createSignal(),[u,d]=s.createSignal(C(e.children,()=>!0,[{update:a,hide:c}]));return s.onMount(()=>{var f;return t.timeout!==0&&setTimeout(()=>r(!1),(f=t.timeout)!=null?f:5e3)}),s.createEffect(()=>{i()&&d(C(i(),()=>!0,[{update:a,hide:c}]))}),s.createEffect(()=>{var f;return!o()&&((f=t.onhide)==null?void 0:f.call(t))}),s.createEffect(()=>{const f=l();f!==t.mount&&(!o()&&(f==null?void 0:f.childElementCount)===0?document.body.removeChild(f):o()&&f&&!(f!=null&&f.parentNode)&&document.body.appendChild(f))}),s.createComponent(s.Show,{get when(){return o()},get children(){return s.createComponent(K,{get mount(){return l()},get children(){const f=Jt.cloneNode(!0);return h(f,n,!1,!0),v(f,u),s.createRenderEffect(()=>x(f,n.class?`sb-toast ${n.class}`:"sb-toast")),f}})}})};const ee=$('<span tabindex="0"></span>'),en=$('<span aria-haspopup="true"><span role="tooltip"></span></span>'),tn=(t,e)=>t===void 0?!1:(Array.isArray(t)?t:[t]).reduce((n,l)=>typeof l=="boolean"?l:typeof l=="function"?l():n,e!=null?e:!1),H=(t,e)=>t===void 0||t===e||Array.isArray(t)&&t.includes(e),de=t=>{if(typeof t=="function")return de(t());if(typeof t=="string")return(()=>{const e=ee.cloneNode(!0);return v(e,t),e})();if(Array.isArray(t)){const e=t.map(n=>typeof n=="function"?n():n);return e.every(n=>typeof n=="string")?(()=>{const n=ee.cloneNode(!0);return v(n,e),n})():e}return t},nn=t=>{let e;const[n,l]=s.splitProps(t,["children","position","content","trigger","arrow","nowrap"]),o=s.createMemo(()=>H(n.trigger,"focus")),r=s.createMemo(()=>H(n.trigger,"hover")),c=s.createMemo(()=>H(n.trigger,"focus")?de(n.children):n.children),[i,a]=s.createSignal(!1);s.createEffect(()=>a(tn(n.trigger)));const[u,d]=s.createSignal(),f=s.createMemo(()=>m=>o()&&a(m.type==="focus")),b=s.createMemo(()=>m=>{var g;return r()&&a(e.contains((g=m.toElement)!=null?g:m.target))});return s.createEffect(()=>{if(!i()||!(e!=null&&e.offsetHeight))return{top:"10px"};d(n.position==="nw"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft}px`}:n.position==="n"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft+(e.offsetWidth>>1)}px`}:n.position==="ne"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="e"?{top:`${e.offsetTop+(e.offsetHeight>>1)}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="se"?{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="sw"?{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft}px`}:n.position==="w"?{top:`${e.offsetTop+(e.offsetHeight>>1)}px`,left:`${e.offsetLeft}px`}:{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft+(e.offsetWidth>>1)}px`})}),(()=>{const m=en.cloneNode(!0),g=m.firstChild;P(m,"mouseleave",b()),P(m,"mouseover",b(),!0);const A=e;return typeof A=="function"?S(A,m):e=m,m.addEventListener("focus",f(),!0),m.addEventListener("blur",f(),!0),v(m,c,g),h(g,l,!1,!0),v(g,()=>n.content),s.createRenderEffect(y=>{var D;const p=i(),w=`sb-tooltip-wrapper position-${(D=n.position)!=null?D:"s"}${n.arrow===!1?"":" arrow"}${n.nowrap?" nowrap":""}`,M=!i(),R=u();return p!==y._v$&&_(m,"aria-expanded",y._v$=p),w!==y._v$2&&x(m,y._v$2=w),M!==y._v$3&&(g.hidden=y._v$3=M),y._v$4=j(g,R,y._v$4),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),m})()};F(["mouseover"]);exports.Accordion=Le;exports.AccordionGroup=Te;exports.AccordionHeader=Be;exports.Avatar=qe;exports.AvatarBadge=je;exports.AvatarGroup=Ke;exports.Bar=Ue;exports.Breadcrumbs=Qe;exports.Button=ce;exports.Checkbox=Ze;exports.Menu=at;exports.MenuButton=ut;exports.MenuItem=dt;exports.MenuItemGroup=ft;exports.MenuOption=mt;exports.MenuOptionGroup=gt;exports.MenuOptionsContext=U;exports.Message=ze;exports.Meter=tt;exports.Modal=bt;exports.ModalBody=At;exports.ModalContent=yt;exports.ModalFooter=xt;exports.ModalHeader=_t;exports.Progress=Et;exports.Radio=Mt;exports.RadioGroup=Nt;exports.Select=kt;exports.Spinner=Lt;exports.Tab=It;exports.TabContainer=Gt;exports.Tabs=Ht;exports.Tag=Ut;exports.TagGroup=Vt;exports.TextField=Qt;exports.Toast=zt;exports.Tooltip=nn;exports.composeStyles=oe;exports.createLocalStorageSignal=le;exports.getElements=C;exports.getInitials=ie;exports.getNearestNode=T;exports.getRandom=B;exports.maxRandom=re;exports.toStyleObject=ne;exports.useDarkMode=Ne;exports.useMediaQuery=se;
//# sourceMappingURL=solid-blocks.js.map
