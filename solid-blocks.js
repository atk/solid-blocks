"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("solid-js"),ge=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],me=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ge]),he=new Set(["innerHTML","textContent","innerText","children"]),$e=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),V=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),be=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ye={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function pe(t,e,n){let s=n.length,r=e.length,l=s,c=0,i=0,a=e[r-1].nextSibling,u=null;for(;c<r||i<l;){if(e[c]===n[i]){c++,i++;continue}for(;e[r-1]===n[l-1];)r--,l--;if(r===c){const d=l<s?i?n[i-1].nextSibling:n[l-i]:a;for(;i<l;)t.insertBefore(n[i++],d)}else if(l===i)for(;c<r;)(!u||!u.has(e[c]))&&e[c].remove(),c++;else if(e[c]===n[l-1]&&n[i]===e[r-1]){const d=e[--r].nextSibling;t.insertBefore(n[i++],e[c++].nextSibling),t.insertBefore(n[--l],d),e[r]=n[l]}else{if(!u){u=new Map;let f=i;for(;f<l;)u.set(n[f],f++)}const d=u.get(e[c]);if(d!=null)if(i<d&&d<l){let f=c,y=1,g;for(;++f<r&&f<l&&!((g=u.get(e[f]))==null||g!==d+y);)y++;if(y>d-i){const m=e[c];for(;i<d;)t.insertBefore(n[i++],m)}else t.replaceChild(n[i++],e[c++])}else c++;else e[c++].remove()}}}const U="_$DX_DELEGATE";function $(t,e,n){const s=document.createElement("template");s.innerHTML=t;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function L(t,e=window.document){const n=e[U]||(e[U]=new Set);for(let s=0,r=t.length;s<r;s++){const l=t[s];n.has(l)||(n.add(l),e.addEventListener(l,Ce))}}function A(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function ve(t,e,n,s){s==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,s)}function z(t,e){e==null?t.removeAttribute("class"):t.className=e}function O(t,e,n,s){if(s)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const r=n[0];t.addEventListener(e,n[0]=l=>r.call(t,n[1],l))}else t.addEventListener(e,n)}function T(t,e,n={}){const s=Object.keys(e||{}),r=Object.keys(n);let l,c;for(l=0,c=r.length;l<c;l++){const i=r[l];!i||i==="undefined"||e[i]||(K(t,i,!1),delete n[i])}for(l=0,c=s.length;l<c;l++){const i=s[l],a=!!e[i];!i||i==="undefined"||n[i]===a||!a||(K(t,i,!0),n[i]=a)}return n}function _e(t,e,n){if(!e)return n?A(t,"style"):e;const s=t.style;if(typeof e=="string")return s.cssText=e;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),e||(e={});let r,l;for(l in n)e[l]==null&&s.removeProperty(l),delete n[l];for(l in e)r=e[l],r!==n[l]&&(s.setProperty(l,r),n[l]=r);return n}function h(t,e={},n,s){const r={};return s||o.createRenderEffect(()=>r.children=E(t,e.children,r.children)),o.createRenderEffect(()=>e.ref&&e.ref(t)),o.createRenderEffect(()=>Ae(t,e,n,!0,r,!0)),r}function x(t,e,n){return o.untrack(()=>t(e,n))}function b(t,e,n,s){if(n!==void 0&&!s&&(s=[]),typeof e!="function")return E(t,e,s,n);o.createRenderEffect(r=>E(t,e(),r,n),s)}function Ae(t,e,n,s,r={},l=!1){e||(e={});for(const c in r)if(!(c in e)){if(c==="children")continue;r[c]=W(t,c,null,r[c],n,l)}for(const c in e){if(c==="children"){s||E(t,e.children);continue}const i=e[c];r[c]=W(t,c,i,r[c],n,l)}}function Pe(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function K(t,e,n){const s=e.trim().split(/\s+/);for(let r=0,l=s.length;r<l;r++)t.classList.toggle(s[r],n)}function W(t,e,n,s,r,l){let c,i,a;if(e==="style")return _e(t,n,s);if(e==="classList")return T(t,n,s);if(n===s)return s;if(e==="ref")l||n(t);else if(e.slice(0,3)==="on:"){const u=e.slice(3);s&&t.removeEventListener(u,s),n&&t.addEventListener(u,n)}else if(e.slice(0,10)==="oncapture:"){const u=e.slice(10);s&&t.removeEventListener(u,s,!0),n&&t.addEventListener(u,n,!0)}else if(e.slice(0,2)==="on"){const u=e.slice(2).toLowerCase(),d=be.has(u);if(!d&&s){const f=Array.isArray(s)?s[0]:s;t.removeEventListener(u,f)}(d||n)&&(O(t,u,n,d),d&&L([u]))}else if((a=he.has(e))||!r&&(V[e]||(i=me.has(e)))||(c=t.nodeName.includes("-")))e==="class"||e==="className"?z(t,n):c&&!i&&!a?t[Pe(e)]=n:t[V[e]||e]=n;else{const u=r&&e.indexOf(":")>-1&&ye[e.split(":")[0]];u?ve(t,u,e,n):A(t,$e[e]||e,n)}return n}function Ce(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}}),o.sharedConfig.registry&&!o.sharedConfig.done&&(o.sharedConfig.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[e];if(s&&!n.disabled){const r=n[`${e}Data`];if(r!==void 0?s.call(n,r,t):s.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function E(t,e,n,s,r){for(o.sharedConfig.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const l=typeof e,c=s!==void 0;if(t=c&&n[0]&&n[0].parentNode||t,l==="string"||l==="number"){if(o.sharedConfig.context)return n;if(l==="number"&&(e=e.toString()),c){let i=n[0];i&&i.nodeType===3?i.data=e:i=document.createTextNode(e),n=w(t,n,s,i)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||l==="boolean"){if(o.sharedConfig.context)return n;n=w(t,n,s)}else{if(l==="function")return o.createRenderEffect(()=>{let i=e();for(;typeof i=="function";)i=i();n=E(t,i,n,s)}),()=>n;if(Array.isArray(e)){const i=[],a=n&&Array.isArray(n);if(I(i,e,n,r))return o.createRenderEffect(()=>n=E(t,i,n,s,!0)),()=>n;if(o.sharedConfig.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=w(t,n,s),c)return n}else a?n.length===0?Q(t,i,s):pe(t,n,i):(n&&w(t),Q(t,i));n=i}else if(e instanceof Node){if(o.sharedConfig.context&&e.parentNode)return n=c?[e]:e;if(Array.isArray(n)){if(c)return n=w(t,n,s,e);w(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function I(t,e,n,s){let r=!1;for(let l=0,c=e.length;l<c;l++){let i=e[l],a=n&&n[l];if(i instanceof Node)t.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=I(t,i,a)||r;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();r=I(t,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||r}else t.push(i),r=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?t.push(a):t.push(document.createTextNode(u))}}return r}function Q(t,e,n=null){for(let s=0,r=e.length;s<r;s++)t.insertBefore(e[s],n)}function w(t,e,n,s){if(n===void 0)return t.textContent="";const r=s||document.createTextNode("");if(e.length){let l=!1;for(let c=e.length-1;c>=0;c--){const i=e[c];if(r!==i){const a=i.parentNode===t;!l&&!c?a?t.replaceChild(r,i):t.insertBefore(r,n):a&&i.remove()}else l=!0}}else t.insertBefore(r,n);return[r]}const H=!1,xe="http://www.w3.org/2000/svg";function we(t,e=!1){return e?document.createElementNS(xe,t):document.createElement(t)}function j(t){const{useShadow:e}=t,n=document.createTextNode(""),s=t.mount||document.body;function r(){if(o.sharedConfig.context){const[l,c]=o.createSignal(!1);return queueMicrotask(()=>c(!0)),()=>l()&&t.children}else return()=>t.children}if(s instanceof HTMLHeadElement){const[l,c]=o.createSignal(!1),i=()=>c(!0);o.createRoot(a=>b(s,()=>l()?a():r()(),null)),o.onCleanup(()=>{o.sharedConfig.context?queueMicrotask(i):i()})}else{const l=we(t.isSVG?"g":"div",t.isSVG),c=e&&l.attachShadow?l.attachShadow({mode:"open"}):l;Object.defineProperty(l,"_$host",{get(){return n.parentNode},configurable:!0}),b(c,r()),s.appendChild(l),t.ref&&t.ref(l),o.onCleanup(()=>s.removeChild(l))}return n}const ee=t=>{if(typeof t=="object")return t;const e={};return(t||"").replace(/([\w-]+)\s*:\s*([^;]+)/g,(n,s,r)=>(e[s]=r,"")),e},te=(...t)=>Object.assign({},...t.map(ee)),F=(t,e)=>{if(!t)return;let n=t;for(;n&&n.nodeName!==e;)n=n.parentNode;return n},ne=8;let S=0;const k=()=>{const t=1+Math.floor(Math.random()*(ne-(S?1:0)));return S=S?t+(t===S?1:0):t,S},oe=t=>{const e=window.matchMedia(t),[n,s]=o.createSignal(e.matches),r=l=>s(l.matches);return e.addEventListener("change",r),o.onCleanup(()=>e.removeEventListener("change",r)),n},Ee=(t,e)=>e?t?JSON.parse(t):void 0:t!=null?t:void 0,J=(t,e)=>localStorage.setItem(t,typeof e=="string"?e:JSON.stringify(e));function re(t,e,n=!1){localStorage.getItem(t)===null&&e!==void 0&&J(t,e);const[s,r]=o.createSignal(Ee(localStorage.getItem(t),n));return o.createEffect(()=>n&&s()===void 0?localStorage.removeItem(t):J(t,s())),[s,r]}const Ne=(t="COLOR_SCHEME")=>{const e=oe("(prefers-color-scheme: dark)"),[n,s]=re(t,void 0,!0),r=o.createMemo(()=>{var l;return(l=n())!=null?l:e()});return o.createEffect(()=>{document.body.classList.toggle("dark-mode",r())}),[r,s]},_=(t,e,n=[],s=[])=>{if(!!t){if(Array.isArray(t))t.forEach(r=>_(r,e,n,s));else if(typeof t=="function")_(t.apply(null,n),e,n,s);else{const r=t;(!e||(typeof e=="function"?e(r):r.nodeName===e))&&s.push(r)}return s}},N=(t,e)=>{Array.isArray(e)?e[1](e[0],t):typeof e=="function"&&e(t)};const Me=$("<details></details>"),Se=$("<summary></summary>"),ke=$("<section></section>"),Fe=t=>{const[e,n]=o.splitProps(t,["children","ontoggle"]),[s,r]=o.createSignal(!!t.open);let l;const c=o.createMemo(()=>typeof t.children=="function"?t.children(s()):t.children),i=()=>{var a;l&&(r(l.open),(a=e.ontoggle)==null||a.call(e,l.open))};return o.onMount(()=>l==null?void 0:l.addEventListener("toggle",i)),o.onCleanup(()=>l==null?void 0:l.addEventListener("toggle",i)),(()=>{const a=Me.cloneNode(!0),u=l;return typeof u=="function"?x(u,a):l=a,h(a,o.mergeProps(n,{get classList(){var d;return o.mergeProps((d=t.classList)!=null?d:{},{"sb-accordion":!0})},get open(){return!!t.open}}),!1,!0),b(a,c),a})()},Le=t=>(()=>{const e=Se.cloneNode(!0);return b(e,()=>t.children),o.createRenderEffect(n=>{var s;return T(e,o.mergeProps((s=t.classList)!=null?s:{},{"sb-accordion-header":!0}),n)}),e})(),Te=t=>{const[e,n]=o.splitProps(t,["allowMultiple","allowToggle"]),s=o.createMemo(()=>l=>{var a,u;if(!l.target)return;const c=F(l.target,"DETAILS");if(!c)return;const i=(u=(a=c.parentNode)==null?void 0:a.querySelectorAll("details.sb-accordion[open]"))!=null?u:[];i.length!==0&&(!e.allowMultiple&&!c.open&&Array.prototype.forEach.call(i,d=>{d!==c&&d.removeAttribute("open")}),!e.allowToggle&&c.open&&i.length===1&&l.preventDefault())}),r=o.createMemo(()=>l=>{const c=F(l.target,"DETAILS");if(!c||!c.parentNode)return;const i=c.parentNode.querySelectorAll("details.sb-accordion"),a=Array.prototype.indexOf.call(i,c);if(a!==-1){if(l.key==="ArrowLeft"&&a!==0){const u=i[a-1],d=u.querySelector("summary");d==null||d.focus(),!u.open&&(d==null||d.click())}if(l.key==="ArrowRight"&&a+1<i.length){const u=i[a+1],d=u.querySelector("summary");d==null||d.focus(),!u.open&&(d==null||d.click())}}});return(()=>{const l=ke.cloneNode(!0);return h(l,o.mergeProps(n,{get classList(){var c;return o.mergeProps((c=t.classList)!=null?c:{},{"sb-accordion-group":!0})},get onclick(){return s()},get onkeyup(){return r()}}),!1,!1),l})()};const Be=$('<div role="figure"><img><span aria-hidden="true"></span></div>'),De=$('<div role="img"></div>'),Oe=$('<div role="img" aria-label="Unknown"></div>'),Ie=$("<span></span>"),He=$("<div></div>"),X="[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]",Re=new RegExp(`^.*?(${X})(?:.*\\s+\\S*?(${X}))?.*$`),se=t=>t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g,"").replace(Re,"$1$2").toUpperCase(),je=t=>{const[e,n]=o.splitProps(t,["classList","children","img","name","fallback"]),s=o.createMemo(()=>e.name?se(e.name):"");return e.img?(()=>{const r=Be.cloneNode(!0),l=r.firstChild,c=l.nextSibling;return h(r,o.mergeProps({get classList(){var i;return o.mergeProps((i=e.classList)!=null?i:{},{"sb-avatar":!0})},get["data-random"](){return k()}},n),!1,!0),b(c,s),b(r,()=>e.children,null),o.createRenderEffect(i=>{const a=e.img,u=e.name;return a!==i._v$&&A(l,"src",i._v$=a),u!==i._v$2&&A(l,"alt",i._v$2=u),i},{_v$:void 0,_v$2:void 0}),r})():e.name?(()=>{const r=De.cloneNode(!0);return h(r,o.mergeProps({get classList(){var l;return o.mergeProps((l=e.classList)!=null?l:{},{"sb-avatar":!0})},get["aria-label"](){return e.name},get["data-random"](){return k()}},n),!1,!0),b(r,s,null),b(r,()=>e.children,null),r})():(()=>{const r=Oe.cloneNode(!0);return h(r,o.mergeProps({get classList(){var l;return o.mergeProps((l=e.classList)!=null?l:{},{"sb-avatar":!0})},get["data-random"](){return k()}},n),!1,!0),b(r,()=>{var l;return(l=e.fallback)!=null?l:"?"},null),b(r,()=>e.children,null),r})()},qe=t=>{var r;const[e,n]=o.splitProps(t,["classList","borderColor","background","style"]),s=te((r=e.style)!=null?r:{},{"border-color":e.borderColor,background:e.background});return(()=>{const l=Ie.cloneNode(!0);return h(l,o.mergeProps({get classList(){var c;return o.mergeProps((c=e.classList)!=null?c:{},{"sb-badge":!0})}},n,{style:s}),!1,!1),l})()},Ge=t=>(()=>{const e=He.cloneNode(!0);return h(e,o.mergeProps(t,{get classList(){var n;return o.mergeProps((n=t.classList)!=null?n:{},{"sb-avatar":!0})},role:"group",get["aria-haspopup"](){return Array.isArray(t.children)&&t.children.length>3}}),!1,!1),e})();const Z=$("<div></div>"),Ve=t=>{const[e,n]=o.splitProps(t,["placement","position","mount","portal"]),s=o.mergeProps(n,{class:`${e.placement}${e.position?" "+e.position:""} sb-bar ${t.class?" "+t.class:""}`});return e.portal===!1?(()=>{const r=Z.cloneNode(!0);return h(r,s,!1,!1),r})():o.createComponent(j,{get mount(){return e.mount},get children(){const r=Z.cloneNode(!0);return h(r,s,!1,!1),r}})};const Ue=$('<nav class="sb-breadcrumbs"><ol></ol></nav>'),Ke=$("<li></li>"),We=t=>(()=>{const e=Ue.cloneNode(!0),n=e.firstChild;return h(n,t,!1,!0),b(n,o.createComponent(o.For,{get each(){return Array.isArray(t.children)?t.children:[t.children]},children:s=>(()=>{const r=Ke.cloneNode(!0);return b(r,s),r})()})),e})();const Qe=$("<button></button>"),le=t=>{const[e,n]=o.splitProps(t,["variant","classList"]);return(()=>{const s=Qe.cloneNode(!0);return h(s,o.mergeProps(n,{get classList(){var r,l;return o.mergeProps((r=e.classList)!=null?r:{},{"sb-button":!0,[(l=e.variant)!=null?l:"primary"]:!0})}}),!1,!1),s})()};const Je=$('<label><input type="checkbox"></label>'),Xe=t=>{const[e,n,s]=o.splitProps(t,["accessKey","aria-disabled","aria-invalid","autofocus","checked","class","disabled","id","name","onclick","onkeydown","onkeypress","onkeyup","oninvalid","required","value"],["align","children","onChange","setChecked","switch"]);return(()=>{const r=Je.cloneNode(!0),l=r.firstChild;h(r,o.mergeProps({get class(){return`${n.align||"left"} ${n.switch?" switch":""} sb-checkbox`}},s),!1,!0),b(r,o.createComponent(o.Show,{get when(){return n.align==="right"},get children(){return n.children}}),l);const c=t.ref;return typeof c=="function"?x(c,l):t.ref=l,h(l,o.mergeProps({get role(){return n.switch?"switch":void 0}},e,{onChange:i=>{var a;N(i,n.onChange),(a=n.setChecked)==null||a.call(n,i.currentTarget.checked)}}),!1,!1),b(r,o.createComponent(o.Show,{get when(){return n.align!=="right"},get children(){return n.children}}),null),r})()};const Ze=$("<p></p>"),Ye=t=>{const[e,n]=o.splitProps(t,["type","class","inline"]),s=o.createMemo(()=>[...new Set(["sb-message",e.type,e.class,e.inline&&"inline"].filter(Boolean))].join(" "));return(()=>{const r=Ze.cloneNode(!0);return h(r,o.mergeProps({get class(){return s()},get role(){return e.type==="error"?"alert":void 0}},n),!1,!1),r})()};const ze=$('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'),et=t=>(()=>{const e=ze.cloneNode(!0),n=e.firstChild,s=n.firstChild;return h(e,o.mergeProps(t,{role:"meter",get class(){return t.class?`sb-meter ${t.class}`:"sb-meter"},get["aria-valuenow"](){var r;return(r=t.value)!=null?r:t["aria-valuenow"]},get["aria-valuemin"](){var r;return(r=t.min)!=null?r:t["aria-valuemin"]},get["aria-valuemax"](){var r;return(r=t.max)!=null?r:t["aria-valuemax"]}}),!1,!0),b(e,()=>t.children,null),o.createRenderEffect(r=>{var i,a,u;const l=`0 0 ${(i=t.max)!=null?i:t["aria-valuemax"]} 10`,c=(u=(a=t.value)!=null?a:t["aria-valuenow"])!=null?u:0;return l!==r._v$&&A(n,"viewBox",r._v$=l),c!==r._v$2&&A(s,"width",r._v$2=c),r},{_v$:void 0,_v$2:void 0}),e})();const tt=$('<div><div tabindex="-1" role="menu"></div></div>'),nt=$('<div tabindex="0"></div>'),ie=$("<p></p>"),ce=$("<div></div>"),ot=$('<div tabindex="-1" role="group"></div>'),rt=t=>{let e=0;return n=>{const l=(n.nodeName==="BUTTON"||n.getAttribute("role")==="button")&&n.getAttribute("aria-haspopup")==="menu"&&e++===0;return l&&(t()&&n.getAttribute("aria-expanded")!=="true"?n.setAttribute("aria-expanded","true"):!t()&&n.getAttribute("aria-expanded")==="true"&&n.setAttribute("aria-expanded","false")),l}},st=()=>{let t=0;return e=>!((e.nodeName==="BUTTON"||e.getAttribute("role")==="button")&&e.getAttribute("aria-haspopup")==="menu"&&t++===0)},lt=t=>{const[e,n]=o.createSignal(!!t.open),[s,r]=o.splitProps(t,["open","children","ontoggle","align"]),l=o.createMemo(()=>{var g;return((g=_(t.children,rt(e),[e()]))!=null?g:[])[0]}),c=o.createMemo(()=>{var g;return(g=_(t.children,st(),[e()]))!=null?g:[]});let i;o.createEffect(()=>{var m;const g=e();(m=s.ontoggle)==null||m.call(s,g),g&&c()[0].focus()});const a=g=>{const m=g.target,p=m==null?void 0:m.getAttribute("role"),v=l();!g.defaultPrevented&&v&&(g.target===v?n(P=>!P&&v.getAttribute("aria-disabled")!=="true"):!v.contains(m)&&p!=="menuitemradio"&&p!=="menuitemcheckbox"&&n(!1))};o.onMount(()=>!H&&document.addEventListener("click",a,{capture:!1})),o.onCleanup(()=>!H&&document.removeEventListener("click",a));let u;const d=g=>{var p;const m=g.target;["menuitem","menuitemradio","menuitemcheckbox"].includes((p=m==null?void 0:m.getAttribute("role"))!=null?p:"")&&(m==null?void 0:m.tabIndex)!==-1&&(m==null?void 0:m.getAttribute("aria-disabled"))!=="true"&&(u=m,u==null||u.focus())},f=g=>{const m=i.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'),p=u?Array.prototype.findIndex.call(m,P=>P===u):-1,v=p===-1?1:(m.length+g+p)%m.length;u=m[v],u.focus()},y=g=>{var v,P,M;const m=g.target;g.key==="Escape"&&e()&&(n(!1),(v=l())==null||v.focus());const p=m==null?void 0:m.getAttribute("role");if(g.key===" "&&["menuitem","menuitemradio","menuitemcheckbox"].includes(p!=null?p:"")){if(m.click(),p==="menuitemradio"){const C=(M=(P=m.parentNode)==null?void 0:P.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]'))!=null?M:[],de=Array.prototype.indexOf.call(C,m),fe=(C.length+1+de)%C.length;u=C[fe],u==null||u.focus()}g.preventDefault()}g.key==="ArrowDown"?(f(1),g.preventDefault()):g.key==="ArrowUp"&&(f(-1),g.preventDefault())};return(()=>{const g=tt.cloneNode(!0),m=g.firstChild,p=i;return typeof p=="function"?x(p,g):i=g,h(g,o.mergeProps(r,{get class(){return`sb-menu${r.class?" "+r.class:""}${s.align?" "+s.align:""}`},onkeydown:y}),!1,!0),b(g,l,m),m.$$mouseover=d,b(m,c),o.createRenderEffect(()=>m.hidden=!e()),g})()},it=t=>o.createComponent(le,o.mergeProps(t,{"aria-haspopup":"menu"})),ct=t=>(()=>{const e=nt.cloneNode(!0);return h(e,o.mergeProps(t,{role:"menuitem"}),!1,!1),e})(),at=t=>{const[e,n]=o.splitProps(t,["title","children"]);return(()=>{const s=ce.cloneNode(!0);return h(s,o.mergeProps(n,{role:"group"}),!1,!0),b(s,o.createComponent(o.Show,{get when(){return typeof t.title=="string"},get fallback(){return e.title},get children(){const r=ie.cloneNode(!0);return b(r,()=>e.title),r}}),null),b(s,()=>e.children,null),s})()},q=o.createContext([()=>[],t=>console.warn("context default!",t)]),ut=t=>{const[e,n]=o.splitProps(t,["value","onchange"]),[s,r,l]=o.useContext(q),c=o.createMemo(()=>s().includes(t.value)),i=o.createMemo(()=>()=>t["aria-disabled"]!=="true"&&r(t.value)),a=o.createMemo(()=>u=>{u.key===" "&&(u.preventDefault(),t["aria-disabled"]!=="true"&&r(t.value))});return o.createEffect(()=>{var u;(u=t.onchange)==null||u.call(t,c())}),(()=>{const u=ce.cloneNode(!0);return h(u,o.mergeProps({get["aria-selected"](){return c()},get tabIndex(){return(l==="checkbox"||!c())&&t["aria-disabled"]!=="true"?"0":"-1"}},n,{role:l!=="checkbox"?"menuitemradio":"menuitemcheckbox",get onclick(){return i()},get onkeypress(){return a()}}),!1,!1),u})()},dt=t=>{const[e,n]=o.splitProps(t,["title","value","onchange","children","type"]),[s,r]=o.createSignal(Array.isArray(e.value)?e.value:e.value?[e.value]:[],{equals:(c,i)=>c.length===i.length&&c[0]===i[0]}),l=o.createMemo(()=>t.type==="checkbox"?c=>r(i=>i.includes(c)?i.filter(a=>a!==c):[...i,c]):c=>r(i=>i[0]===c?i:[c]));return o.createEffect(c=>(c!==e.value&&r(Array.isArray(e.value)?e.value:e.value?[e.value]:[]),e.value),e.value),o.createEffect(c=>{var a,u;const i=s();return(t.type==="checkbox"?i.length===(c==null?void 0:c.length):i[0]===(c==null?void 0:c[0]))?c:(t.type==="checkbox"?(a=t.onchange)==null||a.call(t,i):(u=t.onchange)==null||u.call(t,i[0]),i)},s()),(()=>{const c=ot.cloneNode(!0);return h(c,n,!1,!0),b(c,o.createComponent(o.Show,{get when(){return typeof t.title=="string"},get fallback(){return e.title},get children(){const i=ie.cloneNode(!0);return b(i,()=>e.title),i}}),null),b(c,o.createComponent(q.Provider,{get value(){return[s,l(),e.type]},get children(){return e.children}}),null),c})()};L(["mouseover"]);const R=$("<div></div>"),ft=$("<header></header>"),gt=$("<main></main>"),mt=$("<footer></footer>");let B=0;const ht=t=>{const[e,n]=o.splitProps(t,["open","noPortal","children"]),[s,r]=o.createSignal(e.open),l=d=>r(typeof d=="boolean"?d:f=>!f),c=o.createMemo(()=>{var d;return(d=_(e.children,f=>f.className.indexOf("sb-modal-content")!==-1,[{open:s,toggle:l}]))!=null?d:[]}),i=o.createMemo(()=>_(e.children,d=>d.className.indexOf("sb-modal-content")===-1,[{open:s,toggle:l}]));let a;o.createEffect(()=>s()&&(a==null||a.focus(),a==null?void 0:a.scrollIntoView())),B++,o.createEffect(()=>{if(!a)return;const d=a.querySelector(".sb-modal-header");d&&a.setAttribute("aria-labelledby",d.id||(()=>d.id=`sb-modal-header-${B}`)());const f=a.querySelector(".sb-modal-body");f&&a.setAttribute("aria-describedby",f.id||(()=>f.id=`sb-modal-body-${B}`)())});const u=o.mergeProps(n,{role:"dialog",tabIndex:-1,class:t.class?`sb-modal ${t.class}`:"sb-modal",children:c(),onClick:o.createMemo(()=>t.closeOnClickOutside?d=>{const f=d.target;c().some(y=>y==null?void 0:y.contains(f))||l(!1)}:void 0)(),onkeyup:o.createMemo(()=>t.closeOnEsc!==!1?d=>{console.log(d),d.key==="Escape"&&!d.defaultPrevented&&r(!1)}:void 0)()});return o.createComponent(o.Switch,{get children(){return[o.createComponent(o.Match,{get when(){return!s()},get children(){return i()}}),o.createComponent(o.Match,{get when(){return s()&&e.noPortal},get children(){return[o.createMemo(i),(()=>{const d=R.cloneNode(!0),f=a;return typeof f=="function"?x(f,d):a=d,h(d,u,!1,!1),d})()]}}),o.createComponent(o.Match,{get when(){return s()&&!e.noPortal},get children(){return[o.createMemo(i),o.createComponent(j,{get mount(){return document.body},get children(){const d=R.cloneNode(!0),f=a;return typeof f=="function"?x(f,d):a=d,h(d,u,!1,!1),d}})]}})]}})},$t=t=>(()=>{const e=R.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-content ${t.class}`:"sb-modal-content"}}),!1,!1),e})(),bt=t=>(()=>{const e=ft.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-header ${t.class}`:"sb-modal-header"}}),!1,!1),e})(),yt=t=>(()=>{const e=gt.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-body ${t.class}`:"sb-modal-body"}}),!1,!1),e})(),pt=t=>(()=>{const e=mt.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-footer ${t.class}`:"sb-modal-footer"}}),!1,!1),e})();const vt=$('<progress aria-live="polite"></progress>'),_t=t=>(()=>{const e=vt.cloneNode(!0);return h(e,o.mergeProps({get["aria-busy"](){return(t==null?void 0:t.value)!==(t==null?void 0:t.max)}},t,{get class(){return t.class?`sb-progress ${t.class}`:"sb-progress"}}),!1,!1),e})();const At=$('<label><input type="radio"></label>'),Pt=$('<div role="radiogroup"></div>'),G=o.createContext([]),Ct=t=>{const[e,n,s]=o.splitProps(t,["accessKey","align","aria-disabled","aria-invalid","autofocus","checked","class","disabled","id","name","onchange","onclick","onkeydown","onkeypress","onkeyup","oninvalid","required","value"],["align","checked","onChange","setChecked","children"]),[r,l,c]=o.useContext(G);return(()=>{const i=At.cloneNode(!0),a=i.firstChild;h(i,o.mergeProps({get class(){return`${n.align||"left"} sb-radio${e.disabled?" disabled":""}`}},s),!1,!0),b(i,o.createComponent(o.Show,{get when(){return n.align==="right"},get children(){return n.children}}),a);const u=t.ref;return typeof u=="function"?x(u,a):t.ref=a,h(a,o.mergeProps(e,{get checked(){return c?c(e.value||""):n.checked},onChange:d=>{var f;N(d,n.onChange),(f=n.setChecked)==null||f.call(n,d.currentTarget.checked),d.currentTarget.checked&&(l==null||l(t.value||""))}}),!1,!1),b(i,o.createComponent(o.Show,{get when(){return n.align!=="right"},get children(){return n.children}}),null),i})()},xt=t=>{const[e,n]=o.splitProps(t,["setValue","value","children"]),[s,r]=o.createSignal(typeof t.value=="function"?t.value():"");return o.createEffect(()=>r(typeof t.value=="function"?t.value():"")),o.createEffect(o.on([s],([l])=>{var c;return(c=e.setValue)==null?void 0:c.call(e,l)},{defer:!0})),o.createComponent(G.Provider,{get value(){return[s,r,o.createSelector(s)]},get children(){const l=Pt.cloneNode(!0);return h(l,o.mergeProps(n,{get class(){return n.class?`sb-radiogroup ${n.class}`:"sb-radiogroup"}}),!1,!0),b(l,()=>e.children),l}})};const wt=$('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'),Et=t=>{const[e,n]=o.splitProps(t,["aria-orientation","label","onChange","setValue","value"]);return(()=>{const s=wt.cloneNode(!0),r=s.firstChild,l=r.nextSibling;return b(r,()=>e.label),h(l,o.mergeProps(n,{onChange:c=>{var i;N(c,e.onChange),(i=e.setValue)==null||i.call(e,c.currentTarget.value)}}),!1,!1),o.createRenderEffect(c=>{const i=!!t.disabled,a=e["aria-orientation"];return i!==c._v$&&s.classList.toggle("disabled",c._v$=i),a!==c._v$2&&A(s,"aria-orientation",c._v$2=a),c},{_v$:void 0,_v$2:void 0}),s})()};const Nt=$('<progress aria-busy="true" aria-live="polite"></progress>'),Mt=t=>(()=>{const e=Nt.cloneNode(!0);return h(e,o.mergeProps({get class(){return t.class?`sb-spinner ${t.class}`:"sb-spinner"}},t),!1,!1),e})();const St=$('<section><ul role="tablist"></ul></section>'),kt=$('<li role="tab" tabindex="0"></li>'),Ft=$('<div role="tabpanel"></div>'),Lt=(t,e,n)=>{const s=e===n;(t==null?void 0:t.getAttribute)&&t.getAttribute("aria-selected")==="true"!==s&&(t.setAttribute("aria-selected",s?"true":"false"),t.setAttribute("tabIndex",s?"-1":"0"))},Tt=(t,e,n)=>{(t==null?void 0:t.hasAttribute)&&t.hasAttribute("hidden")===(e===n)&&t[e===n?"removeAttribute":"setAttribute"]("hidden","hidden")},Bt=t=>{var i;const[e,n]=o.createSignal((i=t.index)!=null?i:0),s=o.createMemo(()=>_(t.children,"LI")||[]),r=o.createMemo(()=>_(t.children,"DIV")||[]);o.createEffect(()=>{var u;s().length!==r().length&&console.warn(`solid-blocks tabs: items count mismatch: ${s().length} tabs and ${r().length}`);const a=e()%s().length;(u=t.onchange)==null||u.call(t,a),s().forEach((d,f)=>{Lt(d,f,a)}),r().forEach((d,f)=>{Tt(d,f,a)})});const l=a=>{var f;const u=F(a.target,"LI");if(!u)return;const d=Array.prototype.indexOf.call((f=u.parentNode)==null?void 0:f.childNodes,u);d!==-1&&n(Number(d))},c=a=>{var y,g;const u=F(a.target,"LI"),d=(g=(y=u==null?void 0:u.parentElement)==null?void 0:y.childNodes)!=null?g:[],f=Array.prototype.indexOf.call(d,u);f!==-1&&(a.key===" "?n(f):a.key==="ArrowLeft"&&f!==0?(n(f-1),d[f-1].focus()):a.key==="ArrowRight"&&f+1<d.length&&(n(f+1),d[f+1].focus()))};return(()=>{const a=St.cloneNode(!0),u=a.firstChild;return u.$$keyup=c,u.$$click=l,b(u,s),b(a,r,null),o.createRenderEffect(d=>{var g;const f=o.mergeProps((g=t.classList)!=null?g:{},{"sb-tabs":!0}),y=t.vertical?"vertical":"horizontal";return d._v$=T(a,f,d._v$),y!==d._v$2&&A(u,"aria-orientation",d._v$2=y),d},{_v$:void 0,_v$2:void 0}),a})()},Dt=t=>(()=>{const e=kt.cloneNode(!0);return h(e,t,!1,!1),e})(),Ot=t=>(()=>{const e=Ft.cloneNode(!0);return h(e,t,!1,!1),e})();L(["click","keyup"]);const It=$("<a></a>"),Ht=$("<span></span>"),Rt=$("<div></div>"),jt=t=>{const[e,n]=o.splitProps(t,["plain"]),s=o.mergeProps({"data-random":e.plain?void 0:k(),rel:t.target?"tag noopener":"tag"},n,{class:t.class?`sb-tag ${t.class}`:"sb-tag"});return o.createComponent(o.Show,{get when(){return typeof s.href=="string"},get fallback(){return(()=>{const r=Ht.cloneNode(!0);return h(r,s,!1,!1),r})()},get children(){const r=It.cloneNode(!0);return h(r,s,!1,!1),r}})},qt=t=>(()=>{const e=Rt.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-tag-group ${t.class}`:"sb-tag-group"}}),!1,!1),e})();const Gt=$("<textarea></textarea>"),Vt=$('<label><span class="sb-textfield-label"></span></label>'),Ut=$("<input>"),Kt=t=>{const[e,n]=o.splitProps(t,["aria-orientation","classList","label","multiline","onInput","children","setValue"]);return(()=>{const s=Vt.cloneNode(!0),r=s.firstChild;return b(r,()=>e.label),b(s,o.createComponent(o.Show,{get when(){return e.multiline},get fallback(){return(()=>{const l=Ut.cloneNode(!0);return h(l,o.mergeProps(n,{onInput:c=>{var i;N(c,e.onInput),(i=e.setValue)==null||i.call(e,c.currentTarget.value)}}),!1,!1),l})()},get children(){const l=Gt.cloneNode(!0);return h(l,o.mergeProps(n,{onInput:c=>{var i;N(c,e.onInput),(i=e.setValue)==null||i.call(e,c.currentTarget.value)}}),!1,!1),l}}),null),b(s,()=>e.children,null),o.createRenderEffect(l=>{var a;const c=o.mergeProps((a=e.classList)!=null?a:{},{"sb-textfield":!0}),i=t["aria-orientation"];return l._v$=T(s,c,l._v$),i!==l._v$2&&A(s,"aria-orientation",l._v$2=i),l},{_v$:void 0,_v$2:void 0}),s})()};const Wt=$("<div></div>"),Qt=["top","top-right","top-left","bottom","bottom-right","bottom-left"],ae=Qt.reduce((t,e)=>(t[e]=H?null:document.getElementById(`sb-toast-${e}`),t),{}),Jt=document.createElement("div"),Xt=(t="top-right")=>{const e=Jt.cloneNode();return e.id=`sb-toast-${t}`,ae[t]=e,document.body.appendChild(e),e},Zt=t=>{const[e,n]=o.splitProps(t,["timeout","position","children","mount","onhide"]),s=o.createMemo(()=>e.mount||ae[e.position||"top-right"]||Xt(e.position)),[r,l]=o.createSignal(!0),c=()=>l(!1),[i,a]=o.createSignal(),[u,d]=o.createSignal(_(e.children,()=>!0,[{update:a,hide:c}]));return o.onMount(()=>{var f;return t.timeout!==0&&setTimeout(()=>l(!1),(f=t.timeout)!=null?f:5e3)}),o.createEffect(()=>{i()&&d(_(i(),()=>!0,[{update:a,hide:c}]))}),o.createEffect(()=>{var f;return!r()&&((f=t.onhide)==null?void 0:f.call(t))}),o.createEffect(()=>{const f=s();f!==t.mount&&(!r()&&(f==null?void 0:f.childElementCount)===0?document.body.removeChild(f):r()&&f&&!(f!=null&&f.parentNode)&&document.body.appendChild(f))}),o.createComponent(o.Show,{get when(){return r()},get children(){return o.createComponent(j,{get mount(){return s()},get children(){const f=Wt.cloneNode(!0);return h(f,o.mergeProps(n,{get class(){return n.class?`sb-toast ${n.class}`:"sb-toast"}}),!1,!0),b(f,u),f}})}})};const Y=$('<span tabindex="0"></span>'),Yt=$('<span aria-haspopup="true"><span></span></span>'),zt=(t,e)=>t===void 0?!1:(Array.isArray(t)?t:[t]).reduce((n,s)=>typeof s=="boolean"?s:typeof s=="function"?s():n,e!=null?e:!1),D=(t,e)=>t===void 0||t===e||Array.isArray(t)&&t.includes(e),ue=t=>{if(typeof t=="function")return ue(t());if(typeof t=="string")return(()=>{const e=Y.cloneNode(!0);return b(e,t),e})();if(Array.isArray(t)){const e=t.map(n=>typeof n=="function"?n():n);return e.every(n=>typeof n=="string")?(()=>{const n=Y.cloneNode(!0);return b(n,e),n})():e}return t},en=t=>{let e;const[n,s]=o.splitProps(t,["children","position","content","trigger","arrow","nowrap"]),r=o.createMemo(()=>D(n.trigger,"focus")),l=o.createMemo(()=>D(n.trigger,"hover")),c=o.createMemo(()=>D(n.trigger,"focus")?ue(n.children):n.children),[i,a]=o.createSignal(!1);o.createEffect(()=>a(zt(n.trigger)));const[u,d]=o.createSignal(),f=o.createMemo(()=>g=>r()&&a(g.type==="focus")),y=o.createMemo(()=>g=>{var m;return l()&&a(e.contains((m=g.toElement)!=null?m:g.target))});return o.createEffect(()=>{if(!i()||!(e!=null&&e.offsetHeight))return{top:"10px"};d(n.position==="nw"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft}px`}:n.position==="n"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft+(e.offsetWidth>>1)}px`}:n.position==="ne"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="e"?{top:`${e.offsetTop+(e.offsetHeight>>1)}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="se"?{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="sw"?{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft}px`}:n.position==="w"?{top:`${e.offsetTop+(e.offsetHeight>>1)}px`,left:`${e.offsetLeft}px`}:{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft+(e.offsetWidth>>1)}px`})}),(()=>{const g=Yt.cloneNode(!0),m=g.firstChild;O(g,"mouseleave",y()),O(g,"mouseover",y(),!0);const p=e;return typeof p=="function"?x(p,g):e=g,g.addEventListener("focus",f(),!0),g.addEventListener("blur",f(),!0),b(g,c,m),h(m,o.mergeProps(s,{role:"tooltip",get hidden(){return!i()},get style(){return u()}}),!1,!0),b(m,()=>n.content),o.createRenderEffect(v=>{var C;const P=i(),M=`sb-tooltip-wrapper position-${(C=n.position)!=null?C:"s"}${n.arrow===!1?"":" arrow"}${n.nowrap?" nowrap":""}`;return P!==v._v$&&A(g,"aria-expanded",v._v$=P),M!==v._v$2&&z(g,v._v$2=M),v},{_v$:void 0,_v$2:void 0}),g})()};L(["mouseover"]);exports.Accordion=Fe;exports.AccordionGroup=Te;exports.AccordionHeader=Le;exports.Avatar=je;exports.AvatarBadge=qe;exports.AvatarGroup=Ge;exports.Bar=Ve;exports.Breadcrumbs=We;exports.Button=le;exports.Checkbox=Xe;exports.Menu=lt;exports.MenuButton=it;exports.MenuItem=ct;exports.MenuItemGroup=at;exports.MenuOption=ut;exports.MenuOptionGroup=dt;exports.MenuOptionsContext=q;exports.Message=Ye;exports.Meter=et;exports.Modal=ht;exports.ModalBody=yt;exports.ModalContent=$t;exports.ModalFooter=pt;exports.ModalHeader=bt;exports.Progress=_t;exports.Radio=Ct;exports.RadioGroup=xt;exports.Select=Et;exports.Spinner=Mt;exports.Tab=Dt;exports.TabContainer=Ot;exports.Tabs=Bt;exports.Tag=jt;exports.TagGroup=qt;exports.TextField=Kt;exports.Toast=Zt;exports.Tooltip=en;exports.composeStyles=te;exports.createLocalStorageSignal=re;exports.getElements=_;exports.getInitials=se;exports.getNearestNode=F;exports.getRandom=k;exports.maxRandom=ne;exports.radioContext=G;exports.runEvent=N;exports.toStyleObject=ee;exports.useDarkMode=Ne;exports.useMediaQuery=oe;
//# sourceMappingURL=solid-blocks.js.map
