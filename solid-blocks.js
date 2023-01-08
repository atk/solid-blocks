"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("solid-js"),me=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],he=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...me]),be=new Set(["innerHTML","textContent","innerText","children"]),$e=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),V=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),ye=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),pe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ve(t,e,n){let s=n.length,r=e.length,i=s,a=0,l=0,c=e[r-1].nextSibling,d=null;for(;a<r||l<i;){if(e[a]===n[l]){a++,l++;continue}for(;e[r-1]===n[i-1];)r--,i--;if(r===a){const f=i<s?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)t.insertBefore(n[l++],f)}else if(i===l)for(;a<r;)(!d||!d.has(e[a]))&&e[a].remove(),a++;else if(e[a]===n[i-1]&&n[l]===e[r-1]){const f=e[--r].nextSibling;t.insertBefore(n[l++],e[a++].nextSibling),t.insertBefore(n[--i],f),e[r]=n[i]}else{if(!d){d=new Map;let u=l;for(;u<i;)d.set(n[u],u++)}const f=d.get(e[a]);if(f!=null)if(l<f&&f<i){let u=a,y=1,g;for(;++u<r&&u<i&&!((g=d.get(e[u]))==null||g!==f+y);)y++;if(y>f-l){const m=e[a];for(;l<f;)t.insertBefore(n[l++],m)}else t.replaceChild(n[l++],e[a++])}else a++;else e[a++].remove()}}}const U="_$DX_DELEGATE";function b(t,e,n){const s=document.createElement("template");s.innerHTML=t;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function L(t,e=window.document){const n=e[U]||(e[U]=new Set);for(let s=0,r=t.length;s<r;s++){const i=t[s];n.has(i)||(n.add(i),e.addEventListener(i,Ae))}}function _(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function _e(t,e,n,s){s==null?t.removeAttributeNS(e,n):t.setAttributeNS(e,n,s)}function z(t,e){e==null?t.removeAttribute("class"):t.className=e}function F(t,e,n,s){if(s)Array.isArray(n)?(t[`$$${e}`]=n[0],t[`$$${e}Data`]=n[1]):t[`$$${e}`]=n;else if(Array.isArray(n)){const r=n[0];t.addEventListener(e,n[0]=i=>r.call(t,n[1],i))}else t.addEventListener(e,n)}function R(t,e,n={}){const s=Object.keys(e||{}),r=Object.keys(n);let i,a;for(i=0,a=r.length;i<a;i++){const l=r[i];!l||l==="undefined"||e[l]||(K(t,l,!1),delete n[l])}for(i=0,a=s.length;i<a;i++){const l=s[i],c=!!e[l];!l||l==="undefined"||n[l]===c||!c||(K(t,l,!0),n[l]=c)}return n}function xe(t,e,n){if(!e)return n?_(t,"style"):e;const s=t.style;if(typeof e=="string")return s.cssText=e;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),e||(e={});let r,i;for(i in n)e[i]==null&&s.removeProperty(i),delete n[i];for(i in e)r=e[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function h(t,e={},n,s){const r={};return s||o.createRenderEffect(()=>r.children=M(t,e.children,r.children)),o.createRenderEffect(()=>e.ref&&e.ref(t)),o.createRenderEffect(()=>Ce(t,e,n,!0,r,!0)),r}function P(t,e,n){return o.untrack(()=>t(e,n))}function $(t,e,n,s){if(n!==void 0&&!s&&(s=[]),typeof e!="function")return M(t,e,s,n);o.createRenderEffect(r=>M(t,e(),r,n),s)}function Ce(t,e,n,s,r={},i=!1){e||(e={});for(const a in r)if(!(a in e)){if(a==="children")continue;r[a]=W(t,a,null,r[a],n,i)}for(const a in e){if(a==="children"){s||M(t,e.children);continue}const l=e[a];r[a]=W(t,a,l,r[a],n,i)}}function Pe(t){return t.toLowerCase().replace(/-([a-z])/g,(e,n)=>n.toUpperCase())}function K(t,e,n){const s=e.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)t.classList.toggle(s[r],n)}function W(t,e,n,s,r,i){let a,l,c;if(e==="style")return xe(t,n,s);if(e==="classList")return R(t,n,s);if(n===s)return s;if(e==="ref")i||n(t);else if(e.slice(0,3)==="on:"){const d=e.slice(3);s&&t.removeEventListener(d,s),n&&t.addEventListener(d,n)}else if(e.slice(0,10)==="oncapture:"){const d=e.slice(10);s&&t.removeEventListener(d,s,!0),n&&t.addEventListener(d,n,!0)}else if(e.slice(0,2)==="on"){const d=e.slice(2).toLowerCase(),f=ye.has(d);if(!f&&s){const u=Array.isArray(s)?s[0]:s;t.removeEventListener(d,u)}(f||n)&&(F(t,d,n,f),f&&L([d]))}else if((c=be.has(e))||!r&&(V[e]||(l=he.has(e)))||(a=t.nodeName.includes("-")))e==="class"||e==="className"?z(t,n):a&&!l&&!c?t[Pe(e)]=n:t[V[e]||e]=n;else{const d=r&&e.indexOf(":")>-1&&pe[e.split(":")[0]];d?_e(t,d,e,n):_(t,$e[e]||e,n)}return n}function Ae(t){const e=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}}),o.sharedConfig.registry&&!o.sharedConfig.done&&(o.sharedConfig.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[e];if(s&&!n.disabled){const r=n[`${e}Data`];if(r!==void 0?s.call(n,r,t):s.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function M(t,e,n,s,r){for(o.sharedConfig.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const i=typeof e,a=s!==void 0;if(t=a&&n[0]&&n[0].parentNode||t,i==="string"||i==="number"){if(o.sharedConfig.context)return n;if(i==="number"&&(e=e.toString()),a){let l=n[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),n=E(t,n,s,l)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||i==="boolean"){if(o.sharedConfig.context)return n;n=E(t,n,s)}else{if(i==="function")return o.createRenderEffect(()=>{let l=e();for(;typeof l=="function";)l=l();n=M(t,l,n,s)}),()=>n;if(Array.isArray(e)){const l=[],c=n&&Array.isArray(n);if(O(l,e,n,r))return o.createRenderEffect(()=>n=M(t,l,n,s,!0)),()=>n;if(o.sharedConfig.context){if(!l.length)return n;for(let d=0;d<l.length;d++)if(l[d].parentNode)return n=l}if(l.length===0){if(n=E(t,n,s),a)return n}else c?n.length===0?Q(t,l,s):ve(t,n,l):(n&&E(t),Q(t,l));n=l}else if(e instanceof Node){if(o.sharedConfig.context&&e.parentNode)return n=a?[e]:e;if(Array.isArray(n)){if(a)return n=E(t,n,s,e);E(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}}return n}function O(t,e,n,s){let r=!1;for(let i=0,a=e.length;i<a;i++){let l=e[i],c=n&&n[i];if(l instanceof Node)t.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))r=O(t,l,c)||r;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();r=O(t,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else t.push(l),r=!0;else{const d=String(l);c&&c.nodeType===3&&c.data===d?t.push(c):t.push(document.createTextNode(d))}}return r}function Q(t,e,n=null){for(let s=0,r=e.length;s<r;s++)t.insertBefore(e[s],n)}function E(t,e,n,s){if(n===void 0)return t.textContent="";const r=s||document.createTextNode("");if(e.length){let i=!1;for(let a=e.length-1;a>=0;a--){const l=e[a];if(r!==l){const c=l.parentNode===t;!i&&!a?c?t.replaceChild(r,l):t.insertBefore(r,n):c&&l.remove()}else i=!0}}else t.insertBefore(r,n);return[r]}const I=!1,we="http://www.w3.org/2000/svg";function Ee(t,e=!1){return e?document.createElementNS(we,t):document.createElement(t)}function j(t){const{useShadow:e}=t,n=document.createTextNode(""),s=t.mount||document.body;function r(){if(o.sharedConfig.context){const[i,a]=o.createSignal(!1);return queueMicrotask(()=>a(!0)),()=>i()&&t.children}else return()=>t.children}if(s instanceof HTMLHeadElement){const[i,a]=o.createSignal(!1),l=()=>a(!0);o.createRoot(c=>$(s,()=>i()?c():r()(),null)),o.onCleanup(()=>{o.sharedConfig.context?queueMicrotask(l):l()})}else{const i=Ee(t.isSVG?"g":"div",t.isSVG),a=e&&i.attachShadow?i.attachShadow({mode:"open"}):i;Object.defineProperty(i,"_$host",{get(){return n.parentNode},configurable:!0}),$(a,r()),s.appendChild(i),t.ref&&t.ref(i),o.onCleanup(()=>s.removeChild(i))}return n}const ee=t=>{if(typeof t=="object")return t;const e={};return(t||"").replace(/([\w-]+)\s*:\s*([^;]+)/g,(n,s,r)=>(e[s]=r,"")),e},te=(...t)=>Object.assign({},...t.map(ee)),Me=(t,e)=>{if(!t)return;let n=t;for(;n&&n.nodeName!==e;)n=n.parentNode;return n},ne=8;let S=0;const k=()=>{const t=1+Math.floor(Math.random()*(ne-(S?1:0)));return S=S?t+(t===S?1:0):t,S},oe=t=>{const e=window.matchMedia(t),[n,s]=o.createSignal(e.matches),r=i=>s(i.matches);return e.addEventListener("change",r),o.onCleanup(()=>e.removeEventListener("change",r)),n},Ne=(t,e)=>e?t?JSON.parse(t):void 0:t!=null?t:void 0,J=(t,e)=>localStorage.setItem(t,typeof e=="string"?e:JSON.stringify(e));function re(t,e,n=!1){localStorage.getItem(t)===null&&e!==void 0&&J(t,e);const[s,r]=o.createSignal(Ne(localStorage.getItem(t),n));return o.createEffect(()=>n&&s()===void 0?localStorage.removeItem(t):J(t,s())),[s,r]}const Se=(t="COLOR_SCHEME")=>{const e=oe("(prefers-color-scheme: dark)"),[n,s]=re(t,void 0,!0),r=o.createMemo(()=>{var i;return(i=n())!=null?i:e()});return o.createEffect(()=>{document.body.classList.toggle("dark-mode",r())}),[r,s]},C=(t,e,n=[],s=[])=>{if(!!t){if(Array.isArray(t))t.forEach(r=>C(r,e,n,s));else if(typeof t=="function")C(t.apply(null,n),e,n,s);else{const r=t;(!e||(typeof e=="function"?e(r):r.nodeName===e))&&s.push(r)}return s}},A=(t,e)=>{Array.isArray(e)?e[1](e[0],t):typeof e=="function"&&e(t)};const ke=b("<details></details>"),Fe=b("<summary></summary>"),Le=b("<div></div>"),se=o.createContext([]),Te=t=>{const[e,n]=o.splitProps(t,["setOpen"]),[s,r]=o.createSignal(),[i,a,l,c]=o.useContext(se),d=a?a():0;return i&&l&&c&&(o.onMount(()=>{t.open&&c(i.allowMultiple?l()+1:d)}),o.createEffect(o.on([l,s],([f,u])=>{u&&i.allowMultiple===!1&&f!==d&&(u.open=!1)},{defer:!0}))),(()=>{const f=ke.cloneNode(!0);return P(r,f,()=>!0),h(f,o.mergeProps(n,{get classList(){var u;return o.mergeProps((u=t.classList)!=null?u:{},{"sb-accordion":!0})},get onClick(){return i&&l?u=>{var y;A(u,u.currentTarget),((y=s())==null?void 0:y.open)&&!i.allowToggle&&(!i.allowMultiple||l()===1)&&u.preventDefault()}:t.onClick},onToggle:u=>{var y;i&&l&&c&&(i.allowMultiple===!0?c(l()+(u.currentTarget.open?1:-1)):u.currentTarget.open&&c(d)),A(u,u.currentTarget),(y=e.setOpen)==null||y.call(e,u.currentTarget.open)},get open(){return!!t.open}}),!1,!1),f})()},Be=t=>(()=>{const e=Fe.cloneNode(!0);return h(e,o.mergeProps(t,{get classList(){var n;return o.mergeProps((n=t.classList)!=null?n:{},{"sb-accordion-header":!0})}}),!1,!1),e})(),De=t=>{const[e,n]=o.splitProps(t,["allowMultiple","allowToggle"]);let s=-1;const[r,i]=o.createSignal(0);return o.createComponent(se.Provider,{value:[e,()=>++s,r,i],get children(){const a=Le.cloneNode(!0);return h(a,o.mergeProps(n,{get classList(){var l;return o.mergeProps((l=t.classList)!=null?l:{},{"sb-accordion-group":!0})}}),!1,!1),a}})};const Oe=b('<div role="figure"><img><span aria-hidden="true"></span></div>'),Ie=b('<div role="img"></div>'),He=b('<div role="img" aria-label="Unknown"></div>'),Re=b("<span></span>"),je=b("<div></div>"),X="[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u0484\u0487-\u052F\u1C80-\u1C88\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2071\u207F\u2090-\u209C\u2126\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\u2DE0-\u2DFF\uA640-\uA69F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB67\uFB00-\uFB06\uFE2E\uFE2F\uFF21-\uFF3A\uFF41-\uFF5A]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]",Ge=new RegExp(`^.*?(${X})(?:.*\\s+\\S*?(${X}))?.*$`),le=t=>t.replace(/^\s+|\(.*?\)|\{.*?\}|\[.*\]|<.*?>|\s+$/g,"").replace(Ge,"$1$2").toUpperCase(),qe=t=>{const[e,n]=o.splitProps(t,["classList","children","img","name","fallback"]),s=o.createMemo(()=>e.name?le(e.name):"");return e.img?(()=>{const r=Oe.cloneNode(!0),i=r.firstChild,a=i.nextSibling;return h(r,o.mergeProps({get classList(){var l;return o.mergeProps((l=e.classList)!=null?l:{},{"sb-avatar":!0})},get["data-random"](){return k()}},n),!1,!0),$(a,s),$(r,()=>e.children,null),o.createRenderEffect(l=>{const c=e.img,d=e.name;return c!==l._v$&&_(i,"src",l._v$=c),d!==l._v$2&&_(i,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),r})():e.name?(()=>{const r=Ie.cloneNode(!0);return h(r,o.mergeProps({get classList(){var i;return o.mergeProps((i=e.classList)!=null?i:{},{"sb-avatar":!0})},get["aria-label"](){return e.name},get["data-random"](){return k()}},n),!1,!0),$(r,s,null),$(r,()=>e.children,null),r})():(()=>{const r=He.cloneNode(!0);return h(r,o.mergeProps({get classList(){var i;return o.mergeProps((i=e.classList)!=null?i:{},{"sb-avatar":!0})},get["data-random"](){return k()}},n),!1,!0),$(r,()=>{var i;return(i=e.fallback)!=null?i:"?"},null),$(r,()=>e.children,null),r})()},Ve=t=>{var r;const[e,n]=o.splitProps(t,["classList","borderColor","background","style"]),s=te((r=e.style)!=null?r:{},{"border-color":e.borderColor,background:e.background});return(()=>{const i=Re.cloneNode(!0);return h(i,o.mergeProps({get classList(){var a;return o.mergeProps((a=e.classList)!=null?a:{},{"sb-badge":!0})}},n,{style:s}),!1,!1),i})()},Ue=t=>(()=>{const e=je.cloneNode(!0);return h(e,o.mergeProps(t,{get classList(){var n;return o.mergeProps((n=t.classList)!=null?n:{},{"sb-avatar":!0})},role:"group",get["aria-haspopup"](){return Array.isArray(t.children)&&t.children.length>3}}),!1,!1),e})();const Z=b("<div></div>"),Ke=t=>{const[e,n]=o.splitProps(t,["placement","position","mount","portal"]),s=o.mergeProps(n,{class:`${e.placement}${e.position?" "+e.position:""} sb-bar ${t.class?" "+t.class:""}`});return e.portal===!1?(()=>{const r=Z.cloneNode(!0);return h(r,s,!1,!1),r})():o.createComponent(j,{get mount(){return e.mount},get children(){const r=Z.cloneNode(!0);return h(r,s,!1,!1),r}})};const We=b('<nav class="sb-breadcrumbs"><ol></ol></nav>'),Qe=b("<li></li>"),Je=t=>(()=>{const e=We.cloneNode(!0),n=e.firstChild;return h(n,t,!1,!0),$(n,o.createComponent(o.For,{get each(){return Array.isArray(t.children)?t.children:[t.children]},children:s=>(()=>{const r=Qe.cloneNode(!0);return $(r,s),r})()})),e})();const Xe=b("<button></button>"),ie=t=>{const[e,n]=o.splitProps(t,["variant","classList"]);return(()=>{const s=Xe.cloneNode(!0);return h(s,o.mergeProps(n,{get classList(){var r,i;return o.mergeProps((r=e.classList)!=null?r:{},{"sb-button":!0,[(i=e.variant)!=null?i:"primary"]:!0})}}),!1,!1),s})()};const Ze=b('<label><input type="checkbox"></label>'),Ye=t=>{const[e,n,s]=o.splitProps(t,["accessKey","aria-disabled","aria-invalid","autofocus","checked","class","disabled","id","name","onclick","onkeydown","onkeypress","onkeyup","oninvalid","required","value"],["align","children","onChange","setChecked","switch"]);return(()=>{const r=Ze.cloneNode(!0),i=r.firstChild;h(r,o.mergeProps({get class(){return`${n.align||"left"} ${n.switch?" switch":""} sb-checkbox`}},s),!1,!0),$(r,o.createComponent(o.Show,{get when(){return n.align==="right"},get children(){return n.children}}),i);const a=t.ref;return typeof a=="function"?P(a,i):t.ref=i,h(i,o.mergeProps({get role(){return n.switch?"switch":void 0}},e,{onChange:l=>{var c;A(l,n.onChange),(c=n.setChecked)==null||c.call(n,l.currentTarget.checked)}}),!1,!1),$(r,o.createComponent(o.Show,{get when(){return n.align!=="right"},get children(){return n.children}}),null),r})()};const ze=b("<p></p>"),et=t=>{const[e,n]=o.splitProps(t,["type","class","inline"]),s=o.createMemo(()=>[...new Set(["sb-message",e.type,e.class,e.inline&&"inline"].filter(Boolean))].join(" "));return(()=>{const r=ze.cloneNode(!0);return h(r,o.mergeProps({get class(){return s()},get role(){return e.type==="error"?"alert":void 0}},n),!1,!1),r})()};const tt=b('<div><svg aria-hidden="true"><rect x="0" y="0" height="10"></rect></svg></div>'),nt=t=>(()=>{const e=tt.cloneNode(!0),n=e.firstChild,s=n.firstChild;return h(e,o.mergeProps(t,{role:"meter",get class(){return t.class?`sb-meter ${t.class}`:"sb-meter"},get["aria-valuenow"](){var r;return(r=t.value)!=null?r:t["aria-valuenow"]},get["aria-valuemin"](){var r;return(r=t.min)!=null?r:t["aria-valuemin"]},get["aria-valuemax"](){var r;return(r=t.max)!=null?r:t["aria-valuemax"]}}),!1,!0),$(e,()=>t.children,null),o.createRenderEffect(r=>{var l,c,d;const i=`0 0 ${(l=t.max)!=null?l:t["aria-valuemax"]} 10`,a=(d=(c=t.value)!=null?c:t["aria-valuenow"])!=null?d:0;return i!==r._v$&&_(n,"viewBox",r._v$=i),a!==r._v$2&&_(s,"width",r._v$2=a),r},{_v$:void 0,_v$2:void 0}),e})();const ot=b('<div><div tabindex="-1" role="menu"></div></div>'),rt=b('<div tabindex="0"></div>'),ae=b("<p></p>"),ce=b("<div></div>"),st=b('<div tabindex="-1" role="group"></div>'),lt=t=>{let e=0;return n=>{const i=(n.nodeName==="BUTTON"||n.getAttribute("role")==="button")&&n.getAttribute("aria-haspopup")==="menu"&&e++===0;return i&&(t()&&n.getAttribute("aria-expanded")!=="true"?n.setAttribute("aria-expanded","true"):!t()&&n.getAttribute("aria-expanded")==="true"&&n.setAttribute("aria-expanded","false")),i}},it=()=>{let t=0;return e=>!((e.nodeName==="BUTTON"||e.getAttribute("role")==="button")&&e.getAttribute("aria-haspopup")==="menu"&&t++===0)},at=t=>{const[e,n]=o.createSignal(!!t.open),[s,r]=o.splitProps(t,["open","children","ontoggle","align"]),i=o.createMemo(()=>{var g;return((g=C(t.children,lt(e),[e()]))!=null?g:[])[0]}),a=o.createMemo(()=>{var g;return(g=C(t.children,it(),[e()]))!=null?g:[]});let l;o.createEffect(()=>{var m;const g=e();(m=s.ontoggle)==null||m.call(s,g),g&&a()[0].focus()});const c=g=>{const m=g.target,p=m==null?void 0:m.getAttribute("role"),v=i();!g.defaultPrevented&&v&&(g.target===v?n(x=>!x&&v.getAttribute("aria-disabled")!=="true"):!v.contains(m)&&p!=="menuitemradio"&&p!=="menuitemcheckbox"&&n(!1))};o.onMount(()=>!I&&document.addEventListener("click",c,{capture:!1})),o.onCleanup(()=>!I&&document.removeEventListener("click",c));let d;const f=g=>{var p;const m=g.target;["menuitem","menuitemradio","menuitemcheckbox"].includes((p=m==null?void 0:m.getAttribute("role"))!=null?p:"")&&(m==null?void 0:m.tabIndex)!==-1&&(m==null?void 0:m.getAttribute("aria-disabled"))!=="true"&&(d=m,d==null||d.focus())},u=g=>{const m=l.querySelectorAll('[role^=menuitem]:not([aria-disabled], [tabIndex="-1"])'),p=d?Array.prototype.findIndex.call(m,x=>x===d):-1,v=p===-1?1:(m.length+g+p)%m.length;d=m[v],d.focus()},y=g=>{var v,x,N;const m=g.target;g.key==="Escape"&&e()&&(n(!1),(v=i())==null||v.focus());const p=m==null?void 0:m.getAttribute("role");if(g.key===" "&&["menuitem","menuitemradio","menuitemcheckbox"].includes(p!=null?p:"")){if(m.click(),p==="menuitemradio"){const w=(N=(x=m.parentNode)==null?void 0:x.querySelectorAll('[role="menuitemradio"]:not([aria-disabled], [tabIndex="-1"]'))!=null?N:[],fe=Array.prototype.indexOf.call(w,m),ge=(w.length+1+fe)%w.length;d=w[ge],d==null||d.focus()}g.preventDefault()}g.key==="ArrowDown"?(u(1),g.preventDefault()):g.key==="ArrowUp"&&(u(-1),g.preventDefault())};return(()=>{const g=ot.cloneNode(!0),m=g.firstChild,p=l;return typeof p=="function"?P(p,g):l=g,h(g,o.mergeProps(r,{get class(){return`sb-menu${r.class?" "+r.class:""}${s.align?" "+s.align:""}`},onkeydown:y}),!1,!0),$(g,i,m),m.$$mouseover=f,$(m,a),o.createRenderEffect(()=>m.hidden=!e()),g})()},ct=t=>o.createComponent(ie,o.mergeProps(t,{"aria-haspopup":"menu"})),ut=t=>(()=>{const e=rt.cloneNode(!0);return h(e,o.mergeProps(t,{role:"menuitem"}),!1,!1),e})(),dt=t=>{const[e,n]=o.splitProps(t,["title","children"]);return(()=>{const s=ce.cloneNode(!0);return h(s,o.mergeProps(n,{role:"group"}),!1,!0),$(s,o.createComponent(o.Show,{get when(){return typeof t.title=="string"},get fallback(){return e.title},get children(){const r=ae.cloneNode(!0);return $(r,()=>e.title),r}}),null),$(s,()=>e.children,null),s})()},G=o.createContext([()=>[],t=>console.warn("context default!",t)]),ft=t=>{const[e,n]=o.splitProps(t,["value","onchange"]),[s,r,i]=o.useContext(G),a=o.createMemo(()=>s().includes(t.value)),l=o.createMemo(()=>()=>t["aria-disabled"]!=="true"&&r(t.value)),c=o.createMemo(()=>d=>{d.key===" "&&(d.preventDefault(),t["aria-disabled"]!=="true"&&r(t.value))});return o.createEffect(()=>{var d;(d=t.onchange)==null||d.call(t,a())}),(()=>{const d=ce.cloneNode(!0);return h(d,o.mergeProps({get["aria-selected"](){return a()},get tabIndex(){return(i==="checkbox"||!a())&&t["aria-disabled"]!=="true"?"0":"-1"}},n,{role:i!=="checkbox"?"menuitemradio":"menuitemcheckbox",get onclick(){return l()},get onkeypress(){return c()}}),!1,!1),d})()},gt=t=>{const[e,n]=o.splitProps(t,["title","value","onchange","children","type"]),[s,r]=o.createSignal(Array.isArray(e.value)?e.value:e.value?[e.value]:[],{equals:(a,l)=>a.length===l.length&&a[0]===l[0]}),i=o.createMemo(()=>t.type==="checkbox"?a=>r(l=>l.includes(a)?l.filter(c=>c!==a):[...l,a]):a=>r(l=>l[0]===a?l:[a]));return o.createEffect(a=>(a!==e.value&&r(Array.isArray(e.value)?e.value:e.value?[e.value]:[]),e.value),e.value),o.createEffect(a=>{var c,d;const l=s();return(t.type==="checkbox"?l.length===(a==null?void 0:a.length):l[0]===(a==null?void 0:a[0]))?a:(t.type==="checkbox"?(c=t.onchange)==null||c.call(t,l):(d=t.onchange)==null||d.call(t,l[0]),l)},s()),(()=>{const a=st.cloneNode(!0);return h(a,n,!1,!0),$(a,o.createComponent(o.Show,{get when(){return typeof t.title=="string"},get fallback(){return e.title},get children(){const l=ae.cloneNode(!0);return $(l,()=>e.title),l}}),null),$(a,o.createComponent(G.Provider,{get value(){return[s,i(),e.type]},get children(){return e.children}}),null),a})()};L(["mouseover"]);const H=b("<div></div>"),mt=b("<header></header>"),ht=b("<main></main>"),bt=b("<footer></footer>");let B=0;const $t=t=>{const[e,n]=o.splitProps(t,["open","noPortal","children"]),[s,r]=o.createSignal(e.open),i=f=>r(typeof f=="boolean"?f:u=>!u),a=o.createMemo(()=>{var f;return(f=C(e.children,u=>u.className.indexOf("sb-modal-content")!==-1,[{open:s,toggle:i}]))!=null?f:[]}),l=o.createMemo(()=>C(e.children,f=>f.className.indexOf("sb-modal-content")===-1,[{open:s,toggle:i}]));let c;o.createEffect(()=>s()&&(c==null||c.focus(),c==null?void 0:c.scrollIntoView())),B++,o.createEffect(()=>{if(!c)return;const f=c.querySelector(".sb-modal-header");f&&c.setAttribute("aria-labelledby",f.id||(()=>f.id=`sb-modal-header-${B}`)());const u=c.querySelector(".sb-modal-body");u&&c.setAttribute("aria-describedby",u.id||(()=>u.id=`sb-modal-body-${B}`)())});const d=o.mergeProps(n,{role:"dialog",tabIndex:-1,class:t.class?`sb-modal ${t.class}`:"sb-modal",children:a(),onClick:o.createMemo(()=>t.closeOnClickOutside?f=>{const u=f.target;a().some(y=>y==null?void 0:y.contains(u))||i(!1)}:void 0)(),onkeyup:o.createMemo(()=>t.closeOnEsc!==!1?f=>{console.log(f),f.key==="Escape"&&!f.defaultPrevented&&r(!1)}:void 0)()});return o.createComponent(o.Switch,{get children(){return[o.createComponent(o.Match,{get when(){return!s()},get children(){return l()}}),o.createComponent(o.Match,{get when(){return s()&&e.noPortal},get children(){return[o.createMemo(l),(()=>{const f=H.cloneNode(!0),u=c;return typeof u=="function"?P(u,f):c=f,h(f,d,!1,!1),f})()]}}),o.createComponent(o.Match,{get when(){return s()&&!e.noPortal},get children(){return[o.createMemo(l),o.createComponent(j,{get mount(){return document.body},get children(){const f=H.cloneNode(!0),u=c;return typeof u=="function"?P(u,f):c=f,h(f,d,!1,!1),f}})]}})]}})},yt=t=>(()=>{const e=H.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-content ${t.class}`:"sb-modal-content"}}),!1,!1),e})(),pt=t=>(()=>{const e=mt.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-header ${t.class}`:"sb-modal-header"}}),!1,!1),e})(),vt=t=>(()=>{const e=ht.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-body ${t.class}`:"sb-modal-body"}}),!1,!1),e})(),_t=t=>(()=>{const e=bt.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-modal-footer ${t.class}`:"sb-modal-footer"}}),!1,!1),e})();const xt=b('<progress aria-live="polite"></progress>'),Ct=t=>(()=>{const e=xt.cloneNode(!0);return h(e,o.mergeProps({get["aria-busy"](){return(t==null?void 0:t.value)!==(t==null?void 0:t.max)}},t,{get class(){return t.class?`sb-progress ${t.class}`:"sb-progress"}}),!1,!1),e})();const Pt=b('<label><input type="radio"></label>'),At=b('<div role="radiogroup"></div>'),q=o.createContext([]),wt=t=>{const[e,n,s]=o.splitProps(t,["accessKey","align","aria-disabled","aria-invalid","autofocus","checked","class","disabled","id","name","onchange","onclick","onkeydown","onkeypress","onkeyup","oninvalid","required","value"],["align","checked","onChange","setChecked","children"]),[r,i,a]=o.useContext(q);return(()=>{const l=Pt.cloneNode(!0),c=l.firstChild;h(l,o.mergeProps({get class(){return`${n.align||"left"} sb-radio${e.disabled?" disabled":""}`}},s),!1,!0),$(l,o.createComponent(o.Show,{get when(){return n.align==="right"},get children(){return n.children}}),c);const d=t.ref;return typeof d=="function"?P(d,c):t.ref=c,h(c,o.mergeProps(e,{get checked(){return a?a(e.value||""):n.checked},onChange:f=>{var u;A(f,n.onChange),(u=n.setChecked)==null||u.call(n,f.currentTarget.checked),f.currentTarget.checked&&(i==null||i(t.value||""))}}),!1,!1),$(l,o.createComponent(o.Show,{get when(){return n.align!=="right"},get children(){return n.children}}),null),l})()},Et=t=>{const[e,n]=o.splitProps(t,["setValue","value","children"]),[s,r]=o.createSignal(typeof t.value=="function"?t.value():"");return o.createEffect(()=>r(typeof t.value=="function"?t.value():"")),o.createEffect(o.on([s],([i])=>{var a;return(a=e.setValue)==null?void 0:a.call(e,i)},{defer:!0})),o.createComponent(q.Provider,{get value(){return[s,r,o.createSelector(s)]},get children(){const i=At.cloneNode(!0);return h(i,o.mergeProps(n,{get class(){return n.class?`sb-radiogroup ${n.class}`:"sb-radiogroup"}}),!1,!0),$(i,()=>e.children),i}})};const Mt=b('<label class="sb-select"><span class="sb-select-label"></span><select></select></label>'),Nt=t=>{const[e,n]=o.splitProps(t,["aria-orientation","label","onChange","setValue","value"]);return(()=>{const s=Mt.cloneNode(!0),r=s.firstChild,i=r.nextSibling;return $(r,()=>e.label),h(i,o.mergeProps(n,{onChange:a=>{var l;A(a,e.onChange),(l=e.setValue)==null||l.call(e,a.currentTarget.value)}}),!1,!1),o.createRenderEffect(a=>{const l=!!t.disabled,c=e["aria-orientation"];return l!==a._v$&&s.classList.toggle("disabled",a._v$=l),c!==a._v$2&&_(s,"aria-orientation",a._v$2=c),a},{_v$:void 0,_v$2:void 0}),s})()};const St=b('<progress aria-busy="true" aria-live="polite"></progress>'),kt=t=>(()=>{const e=St.cloneNode(!0);return h(e,o.mergeProps({get class(){return t.class?`sb-spinner ${t.class}`:"sb-spinner"}},t),!1,!1),e})();const Ft=b("<div></div>"),Lt=b('<div role="tablist"></div>'),Tt=b('<button role="tab" type="button"></button>'),Bt=b('<div role="tabpanel"></div>'),T=o.createContext([]),Dt=t=>{const[e,n]=o.createSignal(t.index||0),s=o.createSelector(e),r={tabs:-1,container:-1},i=t.id||o.createUniqueId();return o.createEffect(o.on(e,a=>{var l;return(l=t.setIndex)==null?void 0:l.call(t,a)},{defer:!0})),o.createComponent(T.Provider,{value:[e,a=>a>r.tabs?n(r.tabs):a>=0?n(a):n(0),s,a=>a?++r.container:++r.tabs,i],get children(){const a=Ft.cloneNode(!0);return $(a,()=>t.children),o.createRenderEffect(l=>{var c;return R(a,o.mergeProps((c=t.classList)!=null?c:{},{"sb-tabs":!0}),l)}),a}})},Ot=o.createContext(""),It=t=>(()=>{const e=Lt.cloneNode(!0);return h(e,o.mergeProps(t,{get["aria-orientation"](){return t["aria-orientation"]}}),!1,!1),e})(),Ht=t=>{const[e,n,s,r,i]=o.useContext(T),[a,l]=o.createSignal(),c=r?r(!1):-1,d=()=>s&&s(c);return o.createEffect(o.on(()=>s&&s(c),f=>{var u;return f&&((u=a())==null?void 0:u.focus())},{defer:!0})),(()=>{const f=Tt.cloneNode(!0);return F(f,"keydown",n&&[(u,y)=>y.key==="Home"?(y.preventDefault(),y.stopPropagation(),n(0)):y.key==="End"?(y.preventDefault(),y.stopPropagation(),n(1/0)):y.key==="ArrowLeft"?n(u-1):y.key==="ArrowRight"?n(u+1):0,c],!0),F(f,"click",n&&[u=>n(u),c],!0),P(l,f),_(f,"aria-controls",`${i}-container${c}`),_(f,"id",`${i}-tab${c}`),h(f,o.mergeProps({get["aria-selected"](){return d()},get tabIndex(){return d()?void 0:-1}},()=>d()?{}:{tabIndex:-1},t),!1,!1),f})()},Rt=t=>{const[e,n,s,r,i]=o.useContext(T),a=r?r(!0):-1;return(()=>{const l=Bt.cloneNode(!0);return _(l,"id",`${i}-container${a}`),_(l,"aria-labelledby",`${i}-tab${a}`),h(l,o.mergeProps({get tabIndex(){return s&&s(a)?0:void 0},get hidden(){return!s||s(a)?void 0:!0}},t),!1,!1),l})()};L(["click","keydown"]);const jt=b("<a></a>"),Gt=b("<span></span>"),qt=b("<div></div>"),Vt=t=>{const[e,n]=o.splitProps(t,["plain"]),s=o.mergeProps({"data-random":e.plain?void 0:k(),rel:t.target?"tag noopener":"tag"},n,{class:t.class?`sb-tag ${t.class}`:"sb-tag"});return o.createComponent(o.Show,{get when(){return typeof s.href=="string"},get fallback(){return(()=>{const r=Gt.cloneNode(!0);return h(r,s,!1,!1),r})()},get children(){const r=jt.cloneNode(!0);return h(r,s,!1,!1),r}})},Ut=t=>(()=>{const e=qt.cloneNode(!0);return h(e,o.mergeProps(t,{get class(){return t.class?`sb-tag-group ${t.class}`:"sb-tag-group"}}),!1,!1),e})();const Kt=b("<textarea></textarea>"),Wt=b('<label><span class="sb-textfield-label"></span></label>'),Qt=b("<input>"),Jt=t=>{const[e,n]=o.splitProps(t,["aria-orientation","classList","label","multiline","onInput","children","setValue"]);return(()=>{const s=Wt.cloneNode(!0),r=s.firstChild;return $(r,()=>e.label),$(s,o.createComponent(o.Show,{get when(){return e.multiline},get fallback(){return(()=>{const i=Qt.cloneNode(!0);return h(i,o.mergeProps(n,{onInput:a=>{var l;A(a,e.onInput),(l=e.setValue)==null||l.call(e,a.currentTarget.value)}}),!1,!1),i})()},get children(){const i=Kt.cloneNode(!0);return h(i,o.mergeProps(n,{onInput:a=>{var l;A(a,e.onInput),(l=e.setValue)==null||l.call(e,a.currentTarget.value)}}),!1,!1),i}}),null),$(s,()=>e.children,null),o.createRenderEffect(i=>{var c;const a=o.mergeProps((c=e.classList)!=null?c:{},{"sb-textfield":!0}),l=t["aria-orientation"];return i._v$=R(s,a,i._v$),l!==i._v$2&&_(s,"aria-orientation",i._v$2=l),i},{_v$:void 0,_v$2:void 0}),s})()};const Xt=b("<div></div>"),Zt=["top","top-right","top-left","bottom","bottom-right","bottom-left"],ue=Zt.reduce((t,e)=>(t[e]=I?null:document.getElementById(`sb-toast-${e}`),t),{}),Yt=document.createElement("div"),zt=(t="top-right")=>{const e=Yt.cloneNode();return e.id=`sb-toast-${t}`,ue[t]=e,document.body.appendChild(e),e},en=t=>{const[e,n]=o.splitProps(t,["timeout","position","children","mount","onhide"]),s=o.createMemo(()=>e.mount||ue[e.position||"top-right"]||zt(e.position)),[r,i]=o.createSignal(!0),a=()=>i(!1),[l,c]=o.createSignal(),[d,f]=o.createSignal(C(e.children,()=>!0,[{update:c,hide:a}]));return o.onMount(()=>{var u;return t.timeout!==0&&setTimeout(()=>i(!1),(u=t.timeout)!=null?u:5e3)}),o.createEffect(()=>{l()&&f(C(l(),()=>!0,[{update:c,hide:a}]))}),o.createEffect(()=>{var u;return!r()&&((u=t.onhide)==null?void 0:u.call(t))}),o.createEffect(()=>{const u=s();u!==t.mount&&(!r()&&(u==null?void 0:u.childElementCount)===0?document.body.removeChild(u):r()&&u&&!(u!=null&&u.parentNode)&&document.body.appendChild(u))}),o.createComponent(o.Show,{get when(){return r()},get children(){return o.createComponent(j,{get mount(){return s()},get children(){const u=Xt.cloneNode(!0);return h(u,o.mergeProps(n,{get class(){return n.class?`sb-toast ${n.class}`:"sb-toast"}}),!1,!0),$(u,d),u}})}})};const Y=b('<span tabindex="0"></span>'),tn=b('<span aria-haspopup="true"><span></span></span>'),nn=(t,e)=>t===void 0?!1:(Array.isArray(t)?t:[t]).reduce((n,s)=>typeof s=="boolean"?s:typeof s=="function"?s():n,e!=null?e:!1),D=(t,e)=>t===void 0||t===e||Array.isArray(t)&&t.includes(e),de=t=>{if(typeof t=="function")return de(t());if(typeof t=="string")return(()=>{const e=Y.cloneNode(!0);return $(e,t),e})();if(Array.isArray(t)){const e=t.map(n=>typeof n=="function"?n():n);return e.every(n=>typeof n=="string")?(()=>{const n=Y.cloneNode(!0);return $(n,e),n})():e}return t},on=t=>{let e;const[n,s]=o.splitProps(t,["children","position","content","trigger","arrow","nowrap"]),r=o.createMemo(()=>D(n.trigger,"focus")),i=o.createMemo(()=>D(n.trigger,"hover")),a=o.createMemo(()=>D(n.trigger,"focus")?de(n.children):n.children),[l,c]=o.createSignal(!1);o.createEffect(()=>c(nn(n.trigger)));const[d,f]=o.createSignal(),u=o.createMemo(()=>g=>r()&&c(g.type==="focus")),y=o.createMemo(()=>g=>{var m;return i()&&c(e.contains((m=g.toElement)!=null?m:g.target))});return o.createEffect(()=>{if(!l()||!(e!=null&&e.offsetHeight))return{top:"10px"};f(n.position==="nw"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft}px`}:n.position==="n"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft+(e.offsetWidth>>1)}px`}:n.position==="ne"?{top:`${e.offsetTop}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="e"?{top:`${e.offsetTop+(e.offsetHeight>>1)}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="se"?{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft+e.offsetWidth}px`}:n.position==="sw"?{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft}px`}:n.position==="w"?{top:`${e.offsetTop+(e.offsetHeight>>1)}px`,left:`${e.offsetLeft}px`}:{top:`${e.offsetTop+e.offsetHeight}px`,left:`${e.offsetLeft+(e.offsetWidth>>1)}px`})}),(()=>{const g=tn.cloneNode(!0),m=g.firstChild;F(g,"mouseleave",y()),F(g,"mouseover",y(),!0);const p=e;return typeof p=="function"?P(p,g):e=g,g.addEventListener("focus",u(),!0),g.addEventListener("blur",u(),!0),$(g,a,m),h(m,o.mergeProps(s,{role:"tooltip",get hidden(){return!l()},get style(){return d()}}),!1,!0),$(m,()=>n.content),o.createRenderEffect(v=>{var w;const x=l(),N=`sb-tooltip-wrapper position-${(w=n.position)!=null?w:"s"}${n.arrow===!1?"":" arrow"}${n.nowrap?" nowrap":""}`;return x!==v._v$&&_(g,"aria-expanded",v._v$=x),N!==v._v$2&&z(g,v._v$2=N),v},{_v$:void 0,_v$2:void 0}),g})()};L(["mouseover"]);exports.Accordion=Te;exports.AccordionGroup=De;exports.AccordionHeader=Be;exports.Avatar=qe;exports.AvatarBadge=Ve;exports.AvatarGroup=Ue;exports.Bar=Ke;exports.Breadcrumbs=Je;exports.Button=ie;exports.Checkbox=Ye;exports.Menu=at;exports.MenuButton=ct;exports.MenuItem=ut;exports.MenuItemGroup=dt;exports.MenuOption=ft;exports.MenuOptionGroup=gt;exports.MenuOptionsContext=G;exports.Message=et;exports.Meter=nt;exports.Modal=$t;exports.ModalBody=vt;exports.ModalContent=yt;exports.ModalFooter=_t;exports.ModalHeader=pt;exports.Progress=Ct;exports.Radio=wt;exports.RadioGroup=Et;exports.Select=Nt;exports.Spinner=kt;exports.Tab=Ht;exports.TabContainer=Rt;exports.TabList=It;exports.Tabs=Dt;exports.Tag=Vt;exports.TagGroup=Ut;exports.TextField=Jt;exports.Toast=en;exports.Tooltip=on;exports.composeStyles=te;exports.createLocalStorageSignal=re;exports.getElements=C;exports.getInitials=le;exports.getNearestNode=Me;exports.getRandom=k;exports.maxRandom=ne;exports.radioContext=q;exports.runEvent=A;exports.tabListContext=Ot;exports.tabsContext=T;exports.toStyleObject=ee;exports.useDarkMode=Se;exports.useMediaQuery=oe;
//# sourceMappingURL=solid-blocks.js.map
