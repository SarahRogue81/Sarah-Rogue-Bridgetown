(()=>{var tl=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var $r=tl((Na,Bo)=>{(function(t,o){typeof Na=="object"&&typeof Bo<"u"?Bo.exports=o():typeof define=="function"&&define.amd?define(o):(t=typeof globalThis<"u"?globalThis:t||self,t.hotkeys=o())})(Na,function(){"use strict";let t=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function o(b,p,w,L){b.addEventListener?b.addEventListener(p,w,L):b.attachEvent&&b.attachEvent(`on${p}`,w)}function e(b,p,w,L){b&&(b.removeEventListener?b.removeEventListener(p,w,L):b.detachEvent&&b.detachEvent(`on${p}`,w))}function a(b,p){let w=p.slice(0,p.length-1),L=[];for(let F=0;F<w.length;F++)L.push(b[w[F].toLowerCase()]);return L}function i(b){typeof b!="string"&&(b=""),b=b.replace(/\s/g,"");let p=b.split(","),w=p.lastIndexOf("");for(;w>=0;)p[w-1]+=",",p.splice(w,1),w=p.lastIndexOf("");return p}function r(b,p){let w=b.length>=p.length?b:p,L=b.length>=p.length?p:b,F=!0;for(let Z=0;Z<w.length;Z++)L.indexOf(w[Z])===-1&&(F=!1);return F}function l(b){let p=b.keyCode||b.which||b.charCode;return b.key&&/^[a-z]$/i.test(b.key)?b.key.toUpperCase().charCodeAt(0):(b.code&&/^Key[A-Z]$/.test(b.code)&&(p=b.code.charCodeAt(3)),p)}let s={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":t?173:189,"=":t?61:187,";":t?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},n={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,meta:91,command:91},g={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},h={16:!1,18:!1,17:!1,91:!1},u={};for(let b=1;b<20;b++)s[`f${b}`]=111+b;let m=[],C=null,I=null,Q="all",v=new Map,y=b=>s[b.toLowerCase()]||n[b.toLowerCase()]||b.toUpperCase().charCodeAt(0),W=b=>Object.keys(s).find(p=>s[p]===b),k=b=>Object.keys(n).find(p=>n[p]===b),E=b=>{Q=b||"all"},$=()=>Q||"all",z=()=>m.slice(0),rt=()=>m.map(b=>W(b)||k(b)||String.fromCharCode(b)),ut=()=>{let b=[];return Object.keys(u).forEach(p=>{u[p].forEach(({key:w,scope:L,mods:F,shortcut:Z})=>{b.push({scope:L,shortcut:Z,mods:F,keys:w.split("+").map(H=>y(H))})})}),b},mt=b=>{let p=b.target||b.srcElement,{tagName:w}=p,L=!0,F=w==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(p.type);return(p.isContentEditable||(F||w==="TEXTAREA"||w==="SELECT")&&!p.readOnly)&&(L=!1),L},ot=b=>(typeof b=="string"&&(b=y(b)),m.indexOf(b)!==-1),io=(b,p)=>{let w,L;b||(b=$());for(let F in u)if(Object.prototype.hasOwnProperty.call(u,F))for(w=u[F],L=0;L<w.length;)w[L].scope===b?w.splice(L,1).forEach(({element:H})=>Lt(H)):L++;$()===b&&E(p||"all")};function ro(b){let p=l(b);b.key&&b.key.toLowerCase()==="capslock"&&(p=y(b.key));let w=m.indexOf(p);if(w>=0&&m.splice(w,1),b.key&&b.key.toLowerCase()==="meta"&&m.splice(0,m.length),(p===93||p===224)&&(p=91),p in h){h[p]=!1;for(let L in n)n[L]===p&&(et[L]=!1)}}let It=(b,...p)=>{if(typeof b>"u")Object.keys(u).forEach(w=>{Array.isArray(u[w])&&u[w].forEach(L=>lt(L)),delete u[w]}),Lt(null);else if(Array.isArray(b))b.forEach(w=>{w.key&&lt(w)});else if(typeof b=="object")b.key&&lt(b);else if(typeof b=="string"){let[w,L]=p;typeof w=="function"&&(L=w,w=""),lt({key:b,scope:w,method:L,splitKey:"+"})}},lt=({key:b,scope:p,method:w,splitKey:L="+"})=>{i(b).forEach(Z=>{let H=Z.split(L),at=H.length,A=H[at-1],it=A==="*"?"*":y(A);if(!u[it])return;p||(p=$());let Ot=at>1?a(n,H):[],kt=[];u[it]=u[it].filter(ct=>{let Y=(w?ct.method===w:!0)&&ct.scope===p&&r(ct.mods,Ot);return Y&&kt.push(ct.element),!Y}),kt.forEach(ct=>Lt(ct))})};function Xt(b,p,w,L){if(p.element!==L)return;let F;if(p.scope===w||p.scope==="all"){F=p.mods.length>0;for(let Z in h)Object.prototype.hasOwnProperty.call(h,Z)&&(!h[Z]&&p.mods.indexOf(+Z)>-1||h[Z]&&p.mods.indexOf(+Z)===-1)&&(F=!1);(p.mods.length===0&&!h[16]&&!h[18]&&!h[17]&&!h[91]||F||p.shortcut==="*")&&(p.keys=[],p.keys=p.keys.concat(m),p.method(b,p)===!1&&(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),b.cancelBubble&&(b.cancelBubble=!0)))}}function Qt(b,p){let w=u["*"],L=l(b);if(b.key&&b.key.toLowerCase()==="capslock"||!(et.filter||mt).call(this,b))return;if((L===93||L===224)&&(L=91),m.indexOf(L)===-1&&L!==229&&m.push(L),["metaKey","ctrlKey","altKey","shiftKey"].forEach(A=>{let it=g[A];b[A]&&m.indexOf(it)===-1?m.push(it):!b[A]&&m.indexOf(it)>-1?m.splice(m.indexOf(it),1):A==="metaKey"&&b[A]&&(m=m.filter(Ot=>Ot in g||Ot===L))}),L in h){h[L]=!0;for(let A in n)if(Object.prototype.hasOwnProperty.call(n,A)){let it=g[n[A]];et[A]=b[it]}if(!w)return}for(let A in h)Object.prototype.hasOwnProperty.call(h,A)&&(h[A]=b[g[A]]);b.getModifierState&&!(b.altKey&&!b.ctrlKey)&&b.getModifierState("AltGraph")&&(m.indexOf(17)===-1&&m.push(17),m.indexOf(18)===-1&&m.push(18),h[17]=!0,h[18]=!0);let Z=$();if(w)for(let A=0;A<w.length;A++)w[A].scope===Z&&(b.type==="keydown"&&w[A].keydown||b.type==="keyup"&&w[A].keyup)&&Xt(b,w[A],Z,p);if(!(L in u))return;let H=u[L],at=H.length;for(let A=0;A<at;A++)if((b.type==="keydown"&&H[A].keydown||b.type==="keyup"&&H[A].keyup)&&H[A].key){let it=H[A],{splitKey:Ot}=it,kt=it.key.split(Ot),ct=[];for(let lo=0;lo<kt.length;lo++)ct.push(y(kt[lo]));ct.sort().join("")===m.sort().join("")&&Xt(b,it,Z,p)}}let et=function b(p,w,L){m=[];let F=i(p),Z=[],H="all",at=document,A=0,it=!1,Ot=!0,kt="+",ct=!1,lo=!1;if(L===void 0&&typeof w=="function"&&(L=w),Object.prototype.toString.call(w)==="[object Object]"){let Y=w;Y.scope&&(H=Y.scope),Y.element&&(at=Y.element),Y.keyup&&(it=Y.keyup),Y.keydown!==void 0&&(Ot=Y.keydown),Y.capture!==void 0&&(ct=Y.capture),typeof Y.splitKey=="string"&&(kt=Y.splitKey),Y.single===!0&&(lo=!0)}for(typeof w=="string"&&(H=w),lo&&It(p,H);A<F.length;A++){let Y=F[A].split(kt);Z=[],Y.length>1&&(Z=a(n,Y));let vt=Y[Y.length-1];vt=vt==="*"?"*":y(vt),vt in u||(u[vt]=[]),u[vt].push({keyup:it,keydown:Ot,scope:H,mods:Z,shortcut:F[A],method:L,key:F[A],splitKey:kt,element:at})}if(typeof at<"u"&&typeof window<"u"){if(!v.has(at)){let Y=(co=window.event)=>Qt(co,at),vt=(co=window.event)=>{Qt(co,at),ro(co)};v.set(at,{keydownListener:Y,keyupListenr:vt,capture:ct}),o(at,"keydown",Y,ct),o(at,"keyup",vt,ct)}if(!C){let Y=()=>{m=[]};C={listener:Y,capture:ct},o(window,"focus",Y,ct)}if(!I&&typeof document<"u"){let Y=()=>{m=[];for(let je in h)h[je]=!1;for(let je in n)b[je]=!1},vt=Y,co=Y;document.addEventListener("fullscreenchange",vt),document.addEventListener("webkitfullscreenchange",co),I={fullscreen:vt,webkit:co}}}};function Ct(b,p="all"){Object.keys(u).forEach(w=>{u[w].filter(F=>F.scope===p&&F.shortcut===b).forEach(F=>{F&&F.method&&F.method({},F)})})}function Lt(b){let p=Object.values(u).flat();if(p.findIndex(({element:L})=>L===b)<0&&b){let{keydownListener:L,keyupListenr:F,capture:Z}=v.get(b)||{};L&&F&&(e(b,"keyup",F,Z),e(b,"keydown",L,Z),v.delete(b))}if(p.length<=0||v.size<=0){if(Array.from(v.keys()).forEach(F=>{let{keydownListener:Z,keyupListenr:H,capture:at}=v.get(F)||{};Z&&H&&(e(F,"keyup",H,at),e(F,"keydown",Z,at),v.delete(F))}),v.clear(),Object.keys(u).forEach(F=>delete u[F]),C){let{listener:F,capture:Z}=C;e(window,"focus",F,Z),C=null}I&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",I.fullscreen),document.removeEventListener("webkitfullscreenchange",I.webkit),I=null)}}let Oo={getPressedKeyString:rt,setScope:E,getScope:$,deleteScope:io,getPressedKeyCodes:z,getAllKeyCodes:ut,isPressed:ot,filter:mt,trigger:Ct,unbind:It,keyMap:s,modifier:n,modifierMap:g};for(let b in Oo){let p=b;Object.prototype.hasOwnProperty.call(Oo,p)&&(et[p]=Oo[p])}if(typeof window<"u"){let b=window.hotkeys;et.noConflict=p=>(p&&window.hotkeys===et&&(window.hotkeys=b),et),window.hotkeys=et}return et});typeof Bo=="object"&&Bo.exports&&(Bo.exports.default=Bo.exports);typeof define=="function"&&define.amd&&define([],function(){return hotkeys})});var ge=globalThis,be=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),ka=new WeakMap,ko=class{constructor(o,e,a){if(this._$cssResult$=!0,a!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=e}get styleSheet(){let o=this.o,e=this.t;if(be&&o===void 0){let a=e!==void 0&&e.length===1;a&&(o=ka.get(e)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),a&&ka.set(e,o))}return o}toString(){return this.cssText}},Ra=t=>new ko(typeof t=="string"?t:t+"",void 0,Te),G=(t,...o)=>{let e=t.length===1?t[0]:o.reduce((a,i,r)=>a+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new ko(e,t,Te)},Ea=(t,o)=>{if(be)t.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of o){let a=document.createElement("style"),i=ge.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=e.cssText,t.appendChild(a)}},He=be?t=>t:t=>t instanceof CSSStyleSheet?(o=>{let e="";for(let a of o.cssRules)e+=a.cssText;return Ra(e)})(t):t;var{is:ol,defineProperty:el,getOwnPropertyDescriptor:al,getOwnPropertyNames:il,getOwnPropertySymbols:rl,getPrototypeOf:ll}=Object,Jt=globalThis,Da=Jt.trustedTypes,cl=Da?Da.emptyScript:"",nl=Jt.reactiveElementPolyfillSupport,Ro=(t,o)=>t,Eo={toAttribute(t,o){switch(o){case Boolean:t=t?cl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,o){let e=t;switch(o){case Boolean:e=t!==null;break;case Number:e=t===null?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch{e=null}}return e}},he=(t,o)=>!ol(t,o),Va={attribute:!0,type:String,converter:Eo,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Jt.litPropertyMetadata??(Jt.litPropertyMetadata=new WeakMap);var Rt=class extends HTMLElement{static addInitializer(o){this._$Ei(),(this.l??(this.l=[])).push(o)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(o,e=Va){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(o)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(o,e),!e.noAccessor){let a=Symbol(),i=this.getPropertyDescriptor(o,a,e);i!==void 0&&el(this.prototype,o,i)}}static getPropertyDescriptor(o,e,a){let{get:i,set:r}=al(this.prototype,o)??{get(){return this[e]},set(l){this[e]=l}};return{get:i,set(l){let s=i?.call(this);r?.call(this,l),this.requestUpdate(o,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(o){return this.elementProperties.get(o)??Va}static _$Ei(){if(this.hasOwnProperty(Ro("elementProperties")))return;let o=ll(this);o.finalize(),o.l!==void 0&&(this.l=[...o.l]),this.elementProperties=new Map(o.elementProperties)}static finalize(){if(this.hasOwnProperty(Ro("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ro("properties"))){let e=this.properties,a=[...il(e),...rl(e)];for(let i of a)this.createProperty(i,e[i])}let o=this[Symbol.metadata];if(o!==null){let e=litPropertyMetadata.get(o);if(e!==void 0)for(let[a,i]of e)this.elementProperties.set(a,i)}this._$Eh=new Map;for(let[e,a]of this.elementProperties){let i=this._$Eu(e,a);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(o){let e=[];if(Array.isArray(o)){let a=new Set(o.flat(1/0).reverse());for(let i of a)e.unshift(He(i))}else o!==void 0&&e.push(He(o));return e}static _$Eu(o,e){let a=e.attribute;return a===!1?void 0:typeof a=="string"?a:typeof o=="string"?o.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(o=>o(this))}addController(o){(this._$EO??(this._$EO=new Set)).add(o),this.renderRoot!==void 0&&this.isConnected&&o.hostConnected?.()}removeController(o){this._$EO?.delete(o)}_$E_(){let o=new Map,e=this.constructor.elementProperties;for(let a of e.keys())this.hasOwnProperty(a)&&(o.set(a,this[a]),delete this[a]);o.size>0&&(this._$Ep=o)}createRenderRoot(){let o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ea(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(o=>o.hostConnected?.())}enableUpdating(o){}disconnectedCallback(){this._$EO?.forEach(o=>o.hostDisconnected?.())}attributeChangedCallback(o,e,a){this._$AK(o,a)}_$ET(o,e){let a=this.constructor.elementProperties.get(o),i=this.constructor._$Eu(o,a);if(i!==void 0&&a.reflect===!0){let r=(a.converter?.toAttribute!==void 0?a.converter:Eo).toAttribute(e,a.type);this._$Em=o,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(o,e){let a=this.constructor,i=a._$Eh.get(o);if(i!==void 0&&this._$Em!==i){let r=a.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Eo;this._$Em=i;let s=l.fromAttribute(e,r.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(o,e,a,i=!1,r){if(o!==void 0){let l=this.constructor;if(i===!1&&(r=this[o]),a??(a=l.getPropertyOptions(o)),!((a.hasChanged??he)(r,e)||a.useDefault&&a.reflect&&r===this._$Ej?.get(o)&&!this.hasAttribute(l._$Eu(o,a))))return;this.C(o,e,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(o,e,{useDefault:a,reflect:i,wrapped:r},l){a&&!(this._$Ej??(this._$Ej=new Map)).has(o)&&(this._$Ej.set(o,l??e??this[o]),r!==!0||l!==void 0)||(this._$AL.has(o)||(this.hasUpdated||a||(e=void 0),this._$AL.set(o,e)),i===!0&&this._$Em!==o&&(this._$Eq??(this._$Eq=new Set)).add(o))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let o=this.scheduleUpdate();return o!=null&&await o,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[i,r]of a){let{wrapped:l}=r,s=this[i];l!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,r,s)}}let o=!1,e=this._$AL;try{o=this.shouldUpdate(e),o?(this.willUpdate(e),this._$EO?.forEach(a=>a.hostUpdate?.()),this.update(e)):this._$EM()}catch(a){throw o=!1,this._$EM(),a}o&&this._$AE(e)}willUpdate(o){}_$AE(o){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(o)),this.updated(o)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(o){return!0}update(o){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(o){}firstUpdated(o){}};Rt.elementStyles=[],Rt.shadowRootOptions={mode:"open"},Rt[Ro("elementProperties")]=new Map,Rt[Ro("finalized")]=new Map,nl?.({ReactiveElement:Rt}),(Jt.reactiveElementVersions??(Jt.reactiveElementVersions=[])).push("2.1.2");var Vo=globalThis,za=t=>t,ue=Vo.trustedTypes,Ma=ue?ue.createPolicy("lit-html",{createHTML:t=>t}):void 0,qe="$lit$",Et=`lit$${Math.random().toFixed(9).slice(2)}$`,$e="?"+Et,sl=`<${$e}>`,go=document,zo=()=>go.createComment(""),Mo=t=>t===null||typeof t!="object"&&typeof t!="function",_e=Array.isArray,qa=t=>_e(t)||typeof t?.[Symbol.iterator]=="function",Ke=`[ 	
\f\r]`,Do=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ja=/-->/g,ja=/>/g,no=RegExp(`>|${Ke}(?:([^\\s"'>=/]+)(${Ke}*=${Ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ta=/'/g,Ha=/"/g,$a=/^(?:script|style|textarea|title)$/i,Pe=t=>(o,...e)=>({_$litType$:t,strings:o,values:e}),U=Pe(1),_a=Pe(2),Pa=Pe(3),nt=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Ka=new WeakMap,so=go.createTreeWalker(go,129);function ti(t,o){if(!_e(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ma!==void 0?Ma.createHTML(o):o}var oi=(t,o)=>{let e=t.length-1,a=[],i,r=o===2?"<svg>":o===3?"<math>":"",l=Do;for(let s=0;s<e;s++){let n=t[s],g,h,u=-1,m=0;for(;m<n.length&&(l.lastIndex=m,h=l.exec(n),h!==null);)m=l.lastIndex,l===Do?h[1]==="!--"?l=Ja:h[1]!==void 0?l=ja:h[2]!==void 0?($a.test(h[2])&&(i=RegExp("</"+h[2],"g")),l=no):h[3]!==void 0&&(l=no):l===no?h[0]===">"?(l=i??Do,u=-1):h[1]===void 0?u=-2:(u=l.lastIndex-h[2].length,g=h[1],l=h[3]===void 0?no:h[3]==='"'?Ha:Ta):l===Ha||l===Ta?l=no:l===Ja||l===ja?l=Do:(l=no,i=void 0);let C=l===no&&t[s+1].startsWith("/>")?" ":"";r+=l===Do?n+sl:u>=0?(a.push(g),n.slice(0,u)+qe+n.slice(u)+Et+C):n+Et+(u===-2?s:C)}return[ti(t,r+(t[e]||"<?>")+(o===2?"</svg>":o===3?"</math>":"")),a]},Jo=class t{constructor({strings:o,_$litType$:e},a){let i;this.parts=[];let r=0,l=0,s=o.length-1,n=this.parts,[g,h]=oi(o,e);if(this.el=t.createElement(g,a),so.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=so.nextNode())!==null&&n.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(qe)){let m=h[l++],C=i.getAttribute(u).split(Et),I=/([.?@])?(.*)/.exec(m);n.push({type:1,index:r,name:I[2],strings:C,ctor:I[1]==="."?Ie:I[1]==="?"?Ce:I[1]==="@"?pe:ho}),i.removeAttribute(u)}else u.startsWith(Et)&&(n.push({type:6,index:r}),i.removeAttribute(u));if($a.test(i.tagName)){let u=i.textContent.split(Et),m=u.length-1;if(m>0){i.textContent=ue?ue.emptyScript:"";for(let C=0;C<m;C++)i.append(u[C],zo()),so.nextNode(),n.push({type:2,index:++r});i.append(u[m],zo())}}}else if(i.nodeType===8)if(i.data===$e)n.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(Et,u+1))!==-1;)n.push({type:7,index:r}),u+=Et.length-1}r++}}static createElement(o,e){let a=go.createElement("template");return a.innerHTML=o,a}};function bo(t,o,e=t,a){if(o===nt)return o;let i=a!==void 0?e._$Co?.[a]:e._$Cl,r=Mo(o)?void 0:o._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(t),i._$AT(t,e,a)),a!==void 0?(e._$Co??(e._$Co=[]))[a]=i:e._$Cl=i),i!==void 0&&(o=bo(t,i._$AS(t,o.values),i,a)),o}var me=class{constructor(o,e){this._$AV=[],this._$AN=void 0,this._$AD=o,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(o){let{el:{content:e},parts:a}=this._$AD,i=(o?.creationScope??go).importNode(e,!0);so.currentNode=i;let r=so.nextNode(),l=0,s=0,n=a[0];for(;n!==void 0;){if(l===n.index){let g;n.type===2?g=new Fo(r,r.nextSibling,this,o):n.type===1?g=new n.ctor(r,n.name,n.strings,this,o):n.type===6&&(g=new we(r,this,o)),this._$AV.push(g),n=a[++s]}l!==n?.index&&(r=so.nextNode(),l++)}return so.currentNode=go,i}p(o){let e=0;for(let a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(o,a,e),e+=a.strings.length-2):a._$AI(o[e])),e++}},Fo=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(o,e,a,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=o,this._$AB=e,this._$AM=a,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let o=this._$AA.parentNode,e=this._$AM;return e!==void 0&&o?.nodeType===11&&(o=e.parentNode),o}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(o,e=this){o=bo(this,o,e),Mo(o)?o===J||o==null||o===""?(this._$AH!==J&&this._$AR(),this._$AH=J):o!==this._$AH&&o!==nt&&this._(o):o._$litType$!==void 0?this.$(o):o.nodeType!==void 0?this.T(o):qa(o)?this.k(o):this._(o)}O(o){return this._$AA.parentNode.insertBefore(o,this._$AB)}T(o){this._$AH!==o&&(this._$AR(),this._$AH=this.O(o))}_(o){this._$AH!==J&&Mo(this._$AH)?this._$AA.nextSibling.data=o:this.T(go.createTextNode(o)),this._$AH=o}$(o){let{values:e,_$litType$:a}=o,i=typeof a=="number"?this._$AC(o):(a.el===void 0&&(a.el=Jo.createElement(ti(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new me(i,this),l=r.u(this.options);r.p(e),this.T(l),this._$AH=r}}_$AC(o){let e=Ka.get(o.strings);return e===void 0&&Ka.set(o.strings,e=new Jo(o)),e}k(o){_e(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,a,i=0;for(let r of o)i===e.length?e.push(a=new t(this.O(zo()),this.O(zo()),this,this.options)):a=e[i],a._$AI(r),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(o=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);o!==this._$AB;){let a=za(o).nextSibling;za(o).remove(),o=a}}setConnected(o){this._$AM===void 0&&(this._$Cv=o,this._$AP?.(o))}},ho=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(o,e,a,i,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=o,this.name=e,this._$AM=i,this.options=r,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=J}_$AI(o,e=this,a,i){let r=this.strings,l=!1;if(r===void 0)o=bo(this,o,e,0),l=!Mo(o)||o!==this._$AH&&o!==nt,l&&(this._$AH=o);else{let s=o,n,g;for(o=r[0],n=0;n<r.length-1;n++)g=bo(this,s[a+n],e,n),g===nt&&(g=this._$AH[n]),l||(l=!Mo(g)||g!==this._$AH[n]),g===J?o=J:o!==J&&(o+=(g??"")+r[n+1]),this._$AH[n]=g}l&&!i&&this.j(o)}j(o){o===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,o??"")}},Ie=class extends ho{constructor(){super(...arguments),this.type=3}j(o){this.element[this.name]=o===J?void 0:o}},Ce=class extends ho{constructor(){super(...arguments),this.type=4}j(o){this.element.toggleAttribute(this.name,!!o&&o!==J)}},pe=class extends ho{constructor(o,e,a,i,r){super(o,e,a,i,r),this.type=5}_$AI(o,e=this){if((o=bo(this,o,e,0)??J)===nt)return;let a=this._$AH,i=o===J&&a!==J||o.capture!==a.capture||o.once!==a.once||o.passive!==a.passive,r=o!==J&&(a===J||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,o),this._$AH=o}handleEvent(o){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,o):this._$AH.handleEvent(o)}},we=class{constructor(o,e,a){this.element=o,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(o){bo(this,o)}},ei={M:qe,P:Et,A:$e,C:1,L:oi,R:me,D:qa,V:bo,I:Fo,H:ho,N:Ce,U:pe,B:Ie,F:we},dl=Vo.litHtmlPolyfillSupport;dl?.(Jo,Fo),(Vo.litHtmlVersions??(Vo.litHtmlVersions=[])).push("3.3.3");var ai=(t,o,e)=>{let a=e?.renderBefore??o,i=a._$litPart$;if(i===void 0){let r=e?.renderBefore??null;a._$litPart$=i=new Fo(o.insertBefore(zo(),r),r,void 0,e??{})}return i._$AI(t),i};var jo=globalThis,jt=class extends Rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let o=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=o.firstChild),o}update(o){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(o),this._$Do=ai(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};jt._$litElement$=!0,jt.finalized=!0,jo.litElementHydrateSupport?.({LitElement:jt});var gl=jo.litElementPolyfillSupport;gl?.({LitElement:jt});(jo.litElementVersions??(jo.litElementVersions=[])).push("4.2.2");var ii=G`
  :host {
    display: flex;
    position: relative;
    align-items: stretch;
    border-radius: var(--wa-panel-border-radius);
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
    border-style: var(--wa-panel-border-style);
    border-width: var(--wa-panel-border-width);
    color: var(--wa-color-text-normal);
    padding: 1em;
  }

  /* Appearance modifiers */
  :host([appearance~='plain']) {
    background-color: transparent;
    border-color: transparent;
  }

  :host([appearance~='outlined']) {
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance~='filled']) {
    background-color: var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet));
    border-color: transparent;
  }

  :host([appearance~='filled-outlined']) {
    border-color: var(--wa-color-border-quiet, var(--wa-color-brand-border-quiet));
  }

  :host([appearance~='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;

    [part~='icon'] {
      color: currentColor;
    }
  }

  [part~='icon'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--wa-color-on-quiet);
    font-size: 1.25em;
  }

  ::slotted([slot='icon']) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  [part~='message'] {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;var ri={small:"s",medium:"m",large:"l"},li=new Set;function Tt(t,o){o in ri&&!li.has(`${t}:${o}`)&&(li.add(`${t}:${o}`),console.warn(`[${t}] size="${o}" is deprecated. Use size="${ri[o]}" instead. The long-form value will be removed in the next major version.`))}var Ht=G`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;var Qe=G`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;function X(t,o){let e={waitUntilFirstUpdate:!1,...o};return(a,i)=>{let{update:r}=a,l=Array.isArray(t)?t:[t];a.update=function(s){l.forEach(n=>{let g=n;if(s.has(g)){let h=s.get(g),u=this[g];h!==u&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,u)}}),r.call(this,s)}}}var bl=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,ci=t=>{throw TypeError(t)},c=(t,o,e,a)=>{for(var i=a>1?void 0:a?hl(o,e):o,r=t.length-1,l;r>=0;r--)(l=t[r])&&(i=(a?l(o,e,i):l(i))||i);return a&&i&&bl(o,e,i),i},ni=(t,o,e)=>o.has(t)||ci("Cannot "+e),si=(t,o,e)=>(ni(t,o,"read from private field"),e?e.call(t):o.get(t)),di=(t,o,e)=>o.has(t)?ci("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(t):o.set(t,e),gi=(t,o,e,a)=>(ni(t,o,"write to private field"),a?a.call(t,e):o.set(t,e),e);var j=t=>(o,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,o)}):customElements.define(t,o)};var ul={attribute:!0,type:String,converter:Eo,reflect:!1,hasChanged:he},ml=(t=ul,o,e)=>{let{kind:a,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(e.name,t),a==="accessor"){let{name:l}=e;return{set(s){let n=o.get.call(this);o.set.call(this,s),this.requestUpdate(l,n,t,!0,s)},init(s){return s!==void 0&&this.C(l,void 0,t,s),s}}}if(a==="setter"){let{name:l}=e;return function(s){let n=this[l];o.call(this,s),this.requestUpdate(l,n,t,!0,s)}}throw Error("Unsupported decorator location: "+a)};function d(t){return(o,e)=>typeof e=="object"?ml(t,o,e):((a,i,r)=>{let l=i.hasOwnProperty(r);return i.constructor.createProperty(r,a),l?Object.getOwnPropertyDescriptor(i,r):void 0})(t,o,e)}function R(t){return d({...t,state:!0,attribute:!1})}function bi(t){return(o,e)=>{let a=typeof o=="function"?o:o[e];Object.assign(a,t)}}var uo=(t,o,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof o!="object"&&Object.defineProperty(t,o,e),e);function S(t,o){return(e,a,i)=>{let r=l=>l.renderRoot?.querySelector(t)??null;if(o){let{get:l,set:s}=typeof a=="object"?e:i??(()=>{let n=Symbol();return{get(){return this[n]},set(g){this[n]=g}}})();return uo(e,a,{get(){let n=l.call(this);return n===void 0&&(n=r(this),(n!==null||this.hasUpdated)&&s.call(this,n)),n}})}return uo(e,a,{get(){return r(this)}})}}var ta=G`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,Il=/;\s+$/;function Cl(t){return t.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}function hi(t){let{property:o,value:e,element:a}=t;if(e){let i=a.getAttribute("style")||"";i&&(i.match(Il)||(i+=";"),i+=" ");let r=`${o}: ${e}`;return i.includes(r)?void 0:`${i}${r};`}return null}var Le,K=class extends jt{constructor(){super(),di(this,Le,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(o,e)=>{if(this.internals?.states)try{e?this.internals.states.add(o):this.internals.states.delete(o)}catch(a){if(String(a).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw a}},has:o=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(o)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[o,e]of t.elementProperties)e.default==="inherit"&&e.initial!==void 0&&typeof o=="string"&&this.customStates.set(`initial-${o}-${e.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[ta,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,o,e){si(this,Le)||(this.constructor.elementProperties.forEach((a,i)=>{a.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),gi(this,Le,!0)),super.attributeChangedCallback(t,o,e)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((o,e)=>{t.has(e)&&this[e]==null&&(this[e]=o)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(o=>{o.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(o){if(this.didSSR&&!this.hasUpdated){let e=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});e.error=o,this.dispatchEvent(e)}throw o}}setStyle(t,o){if(!this.style){let e=hi({property:Cl(t),value:o,element:this});e&&this.setAttribute("style",e);return}this.style[t]=o}setStyleProperty(t,o){if(!this.style){let e=hi({property:t,value:o,element:this});e&&this.setAttribute("style",e);return}this.style.setProperty(t,o)}relayNativeEvent(t,o){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...o}))}};Le=new WeakMap;c([d()],K.prototype,"dir",2);c([d()],K.prototype,"lang",2);c([d({type:Boolean,reflect:!0,attribute:"did-ssr"})],K.prototype,"didSSR",2);var Kt=class extends K{constructor(){super(...arguments),this.variant="brand",this.size="m"}handleSizeChange(){Tt(this.localName,this.size)}render(){return U`
      <div part="icon">
        <slot name="icon"></slot>
      </div>

      <div part="message">
        <slot></slot>
      </div>
    `}};Kt.css=[ii,Qe,Ht];c([d({reflect:!0})],Kt.prototype,"variant",2);c([d({reflect:!0})],Kt.prototype,"appearance",2);c([d({reflect:!0})],Kt.prototype,"size",2);c([X("size")],Kt.prototype,"handleSizeChange",1);Kt=c([j("wa-callout")],Kt);function ve(t,o){function e(i){let r=t.getBoundingClientRect(),l=t.ownerDocument.defaultView,s=r.left+l.pageXOffset,n=r.top+l.pageYOffset,g=i.pageX-s,h=i.pageY-n;o?.onMove&&o.onMove(g,h)}function a(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",a),o?.onStop&&o.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",a),o?.initialEvent instanceof PointerEvent&&e(o.initialEvent)}var Pn=typeof window<"u"&&"ontouchstart"in window;var ye=G`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var mo=[];function fo(t){mo.push(t)}function Io(t){for(let o=mo.length-1;o>=0;o--)if(mo[o]===t){mo.splice(o,1);break}}function qt(t){return mo.length>0&&mo[mo.length-1]===t}var ui=(t={})=>{let{validationElement:o,validationProperty:e}=t;o||typeof document<"u"&&"createElement"in document&&(o=Object.assign(document.createElement("input"),{required:!0})),e||(e="value");let a={observedAttributes:["required"],message:o?.validationMessage,checkValidity(i){let r={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[e]&&(r.message=typeof a.message=="function"?a.message(i):a.message||"",r.isValid=!1,r.invalidKeys.push("valueMissing")),r}};return a};var Be=G`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;var mi=G`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      border: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      padding: 0 !important;
    }
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`;var Ii="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var Ci=(t=21)=>{let o="",e=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)o+=Ii[e[t]&63];return o};function pt(t,o,e){let a=i=>Object.is(i,-0)?0:i;return t<o?a(o):t>e?a(e):a(t)}function Fe(t=""){return`${t}${Ci()}`}var Ao=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var pl=()=>({observedAttributes:["custom-error"],checkValidity(t){let o={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(o.message=t.customError,o.isValid=!1,o.invalidKeys=["customError"]),o}}),st=class extends K{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ao))},this.handleInteraction=t=>{let o=this.emittedEvents;o.includes(t.type)||o.push(t.type),o.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[pl()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let o of this.validators)if(o.observedAttributes)for(let e of o.observedAttributes)t.add(e);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let o=this.value;this.updateFormValue(o)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let o=new FormData;for(let e of t)o.append(this.name,e);this.setValue(o,o)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let o=t[0],e=t[1],a=t[2];a||(a=this.validationTarget),this.internals.setValidity(o,e,a||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,o=this.internals.validity.valid,e=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!o),this.customStates.set("valid",o),this.customStates.set("user-invalid",!o&&e),this.customStates.set("user-valid",o&&e)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,o){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,o==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=t,o==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...t){let[o,e]=t;this.internals.setFormValue(o,e)}get allValidators(){let t=this.constructor.validators||[],o=this.validators||[];return[...t,...o]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!t?.length)return;let o={customError:!!this.customError},e=this.validationTarget||this.input||void 0,a="";for(let i of t){let{isValid:r,message:l,invalidKeys:s}=i.checkValidity(this);r||(a||(a=l),s?.length>=0&&s.forEach(n=>o[n]=!0))}a||(a=this.validationMessage),this.setValidity(o,a,e)}};st.formAssociated=!0;c([d({reflect:!0})],st.prototype,"name",2);c([d({type:Boolean})],st.prototype,"disabled",2);c([d({state:!0,attribute:!1})],st.prototype,"valueHasChanged",2);c([d({state:!0,attribute:!1})],st.prototype,"hasInteracted",2);c([d({attribute:"custom-error",reflect:!0})],st.prototype,"customError",2);c([d({attribute:!1,state:!0,type:Object})],st.prototype,"validity",1);var $t=class{constructor(t,...o){this.slotNames=[],this.handleSlotChange=e=>{let a=e.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=o}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let o=t;if(o.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,o){return o&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[o]:t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}};function Uo(t,o){return new Promise(e=>{function a(i){i.target===t&&(t.removeEventListener(o,a),e())}t.addEventListener(o,a)})}function dt(t,o){return new Promise(e=>{let a=new AbortController,{signal:i}=a;if(t.classList.contains(o))return;t.classList.add(o);let r=!1,l=()=>{r||(r=!0,t.classList.remove(o),e(),a.abort())};t.addEventListener("animationend",l,{once:!0,signal:i}),t.addEventListener("animationcancel",l,{once:!0,signal:i}),requestAnimationFrame(()=>{!r&&t.getAnimations().length===0&&l()})})}var oa=new Set,xo=new Map,Co,ea="ltr",aa="en",pi=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(pi){let t=new MutationObserver(wi);ea=document.documentElement.dir||"ltr",aa=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function To(...t){t.map(o=>{let e=o.$code.toLowerCase();xo.has(e)?xo.set(e,Object.assign(Object.assign({},xo.get(e)),o)):xo.set(e,o),Co||(Co=o)}),wi()}function wi(){pi&&(ea=document.documentElement.dir||"ltr",aa=document.documentElement.lang||navigator.language),[...oa.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var fe=class{constructor(o){this.host=o,this.host.addController(this)}hostConnected(){oa.add(this.host)}hostDisconnected(){oa.delete(this.host)}dir(){return`${this.host.dir||ea}`.toLowerCase()}lang(){return`${this.host.lang||aa}`.toLowerCase()}getTranslationData(o){var e,a;let i;try{i=new Intl.Locale(o.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let r=i.language.toLowerCase(),l=(a=(e=i.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&a!==void 0?a:"",s=xo.get(`${r}-${l}`),n=xo.get(r);return{locale:i,language:r,region:l,primary:s,secondary:n}}exists(o,e){var a;let{primary:i,secondary:r}=this.getTranslationData((a=e.lang)!==null&&a!==void 0?a:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[o]||r&&r[o]||e.includeFallback&&Co&&Co[o])}term(o,...e){let{primary:a,secondary:i}=this.getTranslationData(this.lang()),r;if(a&&a[o])r=a[o];else if(i&&i[o])r=i[o];else if(Co&&Co[o])r=Co[o];else return console.error(`No translation found for: ${String(o)}`),String(o);return typeof r=="function"?r(...e):r}date(o,e){return o=new Date(o),new Intl.DateTimeFormat(this.lang(),e).format(o)}number(o,e){return o=Number(o),isNaN(o)?"":new Intl.NumberFormat(this.lang(),e).format(o)}relativeTime(o,e,a){return new Intl.RelativeTimeFormat(this.lang(),a).format(o,e)}};var Qi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a valid date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,o)=>`Go to slide ${t} of ${o}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,o)=>`${t} of ${o}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};To(Qi);var Li=Qi;var bt=class extends fe{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};To(Li);function _(t,o){wl(t)&&(t="100%");let e=Ql(t);return t=o===360?t:Math.min(o,Math.max(0,parseFloat(t))),e&&(t=parseInt(String(t*o),10)/100),Math.abs(t-o)<1e-6?1:(o===360?t=(t<0?t%o+o:t%o)/parseFloat(String(o)):t=t%o/parseFloat(String(o)),t)}function Ho(t){return Math.min(1,Math.max(0,t))}function wl(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ql(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Ae(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Ko(t){return Number(t)<=1?`${Number(t)*100}%`:t}function _t(t){return t.length===1?"0"+t:String(t)}function vi(t,o,e){return{r:_(t,255)*255,g:_(o,255)*255,b:_(e,255)*255}}function ra(t,o,e){t=_(t,255),o=_(o,255),e=_(e,255);let a=Math.max(t,o,e),i=Math.min(t,o,e),r=0,l=0,s=(a+i)/2;if(a===i)l=0,r=0;else{let n=a-i;switch(l=s>.5?n/(2-a-i):n/(a+i),a){case t:r=(o-e)/n+(o<e?6:0);break;case o:r=(e-t)/n+2;break;case e:r=(t-o)/n+4;break;default:break}r/=6}return{h:r,s:l,l:s}}function ia(t,o,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+(o-t)*(6*e):e<1/2?o:e<2/3?t+(o-t)*(2/3-e)*6:t}function yi(t,o,e){let a,i,r;if(t=_(t,360),o=_(o,100),e=_(e,100),o===0)i=e,r=e,a=e;else{let l=e<.5?e*(1+o):e+o-e*o,s=2*e-l;a=ia(s,l,t+1/3),i=ia(s,l,t),r=ia(s,l,t-1/3)}return{r:a*255,g:i*255,b:r*255}}function la(t,o,e){t=_(t,255),o=_(o,255),e=_(e,255);let a=Math.max(t,o,e),i=Math.min(t,o,e),r=0,l=a,s=a-i,n=a===0?0:s/a;if(a===i)r=0;else{switch(a){case t:r=(o-e)/s+(o<e?6:0);break;case o:r=(e-t)/s+2;break;case e:r=(t-o)/s+4;break;default:break}r/=6}return{h:r,s:n,v:l}}function Bi(t,o,e){t=_(t,360)*6,o=_(o,100),e=_(e,100);let a=Math.floor(t),i=t-a,r=e*(1-o),l=e*(1-i*o),s=e*(1-(1-i)*o),n=a%6,g=[e,l,r,r,s,e][n],h=[s,e,e,l,r,r][n],u=[r,r,s,e,e,l][n];return{r:g*255,g:h*255,b:u*255}}function ca(t,o,e,a){let i=[_t(Math.round(t).toString(16)),_t(Math.round(o).toString(16)),_t(Math.round(e).toString(16))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Fi(t,o,e,a,i){let r=[_t(Math.round(t).toString(16)),_t(Math.round(o).toString(16)),_t(Math.round(e).toString(16)),_t(Ll(a))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function fi(t,o,e,a){let i=t/100,r=o/100,l=e/100,s=a/100,n=255*(1-i)*(1-s),g=255*(1-r)*(1-s),h=255*(1-l)*(1-s);return{r:n,g,b:h}}function na(t,o,e){let a=1-t/255,i=1-o/255,r=1-e/255,l=Math.min(a,i,r);return l===1?(a=0,i=0,r=0):(a=(a-l)/(1-l)*100,i=(i-l)/(1-l)*100,r=(r-l)/(1-l)*100),l*=100,{c:Math.round(a),m:Math.round(i),y:Math.round(r),k:Math.round(l)}}function Ll(t){return Math.round(parseFloat(t)*255).toString(16)}function sa(t){return ht(t)/255}function ht(t){return parseInt(t,16)}function Ai(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var qo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ui(t){let o={r:0,g:0,b:0},e=1,a=null,i=null,r=null,l=!1,s=!1;return typeof t=="string"&&(t=Bl(t)),typeof t=="object"&&(wt(t.r)&&wt(t.g)&&wt(t.b)?(o=vi(t.r,t.g,t.b),l=!0,s=String(t.r).substr(-1)==="%"?"prgb":"rgb"):wt(t.h)&&wt(t.s)&&wt(t.v)?(a=Ko(t.s),i=Ko(t.v),o=Bi(t.h,a,i),l=!0,s="hsv"):wt(t.h)&&wt(t.s)&&wt(t.l)?(a=Ko(t.s),r=Ko(t.l),o=yi(t.h,a,r),l=!0,s="hsl"):wt(t.c)&&wt(t.m)&&wt(t.y)&&wt(t.k)&&(o=fi(t.c,t.m,t.y,t.k),l=!0,s="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(e=t.a)),e=Ae(e),{ok:l,format:t.format||s,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:e}}var vl="[-\\+]?\\d+%?",yl="[-\\+]?\\d*\\.\\d+%?",Pt="(?:"+yl+")|(?:"+vl+")",da="[\\s|\\(]+("+Pt+")[,|\\s]+("+Pt+")[,|\\s]+("+Pt+")\\s*\\)?",Ue="[\\s|\\(]+("+Pt+")[,|\\s]+("+Pt+")[,|\\s]+("+Pt+")[,|\\s]+("+Pt+")\\s*\\)?",Bt={CSS_UNIT:new RegExp(Pt),rgb:new RegExp("rgb"+da),rgba:new RegExp("rgba"+Ue),hsl:new RegExp("hsl"+da),hsla:new RegExp("hsla"+Ue),hsv:new RegExp("hsv"+da),hsva:new RegExp("hsva"+Ue),cmyk:new RegExp("cmyk"+Ue),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Bl(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let o=!1;if(qo[t])t=qo[t],o=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=Bt.rgb.exec(t);return e?{r:e[1],g:e[2],b:e[3]}:(e=Bt.rgba.exec(t),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=Bt.hsl.exec(t),e?{h:e[1],s:e[2],l:e[3]}:(e=Bt.hsla.exec(t),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=Bt.hsv.exec(t),e?{h:e[1],s:e[2],v:e[3]}:(e=Bt.hsva.exec(t),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=Bt.cmyk.exec(t),e?{c:e[1],m:e[2],y:e[3],k:e[4]}:(e=Bt.hex8.exec(t),e?{r:ht(e[1]),g:ht(e[2]),b:ht(e[3]),a:sa(e[4]),format:o?"name":"hex8"}:(e=Bt.hex6.exec(t),e?{r:ht(e[1]),g:ht(e[2]),b:ht(e[3]),format:o?"name":"hex"}:(e=Bt.hex4.exec(t),e?{r:ht(e[1]+e[1]),g:ht(e[2]+e[2]),b:ht(e[3]+e[3]),a:sa(e[4]+e[4]),format:o?"name":"hex8"}:(e=Bt.hex3.exec(t),e?{r:ht(e[1]+e[1]),g:ht(e[2]+e[2]),b:ht(e[3]+e[3]),format:o?"name":"hex"}:!1))))))))))}function wt(t){return typeof t=="number"?!Number.isNaN(t):Bt.CSS_UNIT.test(t)}var $o=class t{constructor(o="",e={}){if(o instanceof t)return o;typeof o=="number"&&(o=Ai(o)),this.originalInput=o;let a=Ui(o);this.originalInput=o,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??a.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let o=this.toRgb();return(o.r*299+o.g*587+o.b*114)/1e3}getLuminance(){let o=this.toRgb(),e,a,i,r=o.r/255,l=o.g/255,s=o.b/255;return r<=.03928?e=r/12.92:e=Math.pow((r+.055)/1.055,2.4),l<=.03928?a=l/12.92:a=Math.pow((l+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),.2126*e+.7152*a+.0722*i}getAlpha(){return this.a}setAlpha(o){return this.a=Ae(o),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:o}=this.toHsl();return o===0}toHsv(){let o=la(this.r,this.g,this.b);return{h:o.h*360,s:o.s,v:o.v,a:this.a}}toHsvString(){let o=la(this.r,this.g,this.b),e=Math.round(o.h*360),a=Math.round(o.s*100),i=Math.round(o.v*100);return this.a===1?`hsv(${e}, ${a}%, ${i}%)`:`hsva(${e}, ${a}%, ${i}%, ${this.roundA})`}toHsl(){let o=ra(this.r,this.g,this.b);return{h:o.h*360,s:o.s,l:o.l,a:this.a}}toHslString(){let o=ra(this.r,this.g,this.b),e=Math.round(o.h*360),a=Math.round(o.s*100),i=Math.round(o.l*100);return this.a===1?`hsl(${e}, ${a}%, ${i}%)`:`hsla(${e}, ${a}%, ${i}%, ${this.roundA})`}toHex(o=!1){return ca(this.r,this.g,this.b,o)}toHexString(o=!1){return"#"+this.toHex(o)}toHex8(o=!1){return Fi(this.r,this.g,this.b,this.a,o)}toHex8String(o=!1){return"#"+this.toHex8(o)}toHexShortString(o=!1){return this.a===1?this.toHexString(o):this.toHex8String(o)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let o=Math.round(this.r),e=Math.round(this.g),a=Math.round(this.b);return this.a===1?`rgb(${o}, ${e}, ${a})`:`rgba(${o}, ${e}, ${a}, ${this.roundA})`}toPercentageRgb(){let o=e=>`${Math.round(_(e,255)*100)}%`;return{r:o(this.r),g:o(this.g),b:o(this.b),a:this.a}}toPercentageRgbString(){let o=e=>Math.round(_(e,255)*100);return this.a===1?`rgb(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%)`:`rgba(${o(this.r)}%, ${o(this.g)}%, ${o(this.b)}%, ${this.roundA})`}toCmyk(){return{...na(this.r,this.g,this.b)}}toCmykString(){let{c:o,m:e,y:a,k:i}=na(this.r,this.g,this.b);return`cmyk(${o}, ${e}, ${a}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let o="#"+ca(this.r,this.g,this.b,!1);for(let[e,a]of Object.entries(qo))if(o===a)return e;return!1}toString(o){let e=!!o;o=o??this.format;let a=!1,i=this.a<1&&this.a>=0;return!e&&i&&(o.startsWith("hex")||o==="name")?o==="name"&&this.a===0?this.toName():this.toRgbString():(o==="rgb"&&(a=this.toRgbString()),o==="prgb"&&(a=this.toPercentageRgbString()),(o==="hex"||o==="hex6")&&(a=this.toHexString()),o==="hex3"&&(a=this.toHexString(!0)),o==="hex4"&&(a=this.toHex8String(!0)),o==="hex8"&&(a=this.toHex8String()),o==="name"&&(a=this.toName()),o==="hsl"&&(a=this.toHslString()),o==="hsv"&&(a=this.toHsvString()),o==="cmyk"&&(a=this.toCmykString()),a||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(o=10){let e=this.toHsl();return e.l+=o/100,e.l=Ho(e.l),new t(e)}brighten(o=10){let e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(o/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(o/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(o/100)))),new t(e)}darken(o=10){let e=this.toHsl();return e.l-=o/100,e.l=Ho(e.l),new t(e)}tint(o=10){return this.mix("white",o)}shade(o=10){return this.mix("black",o)}desaturate(o=10){let e=this.toHsl();return e.s-=o/100,e.s=Ho(e.s),new t(e)}saturate(o=10){let e=this.toHsl();return e.s+=o/100,e.s=Ho(e.s),new t(e)}greyscale(){return this.desaturate(100)}spin(o){let e=this.toHsl(),a=(e.h+o)%360;return e.h=a<0?360+a:a,new t(e)}mix(o,e=50){let a=this.toRgb(),i=new t(o).toRgb(),r=e/100,l={r:(i.r-a.r)*r+a.r,g:(i.g-a.g)*r+a.g,b:(i.b-a.b)*r+a.b,a:(i.a-a.a)*r+a.a};return new t(l)}analogous(o=6,e=30){let a=this.toHsl(),i=360/e,r=[this];for(a.h=(a.h-(i*o>>1)+720)%360;--o;)a.h=(a.h+i)%360,r.push(new t(a));return r}complement(){let o=this.toHsl();return o.h=(o.h+180)%360,new t(o)}monochromatic(o=6){let e=this.toHsv(),{h:a}=e,{s:i}=e,{v:r}=e,l=[],s=1/o;for(;o--;)l.push(new t({h:a,s:i,v:r})),r=(r+s)%1;return l}splitcomplement(){let o=this.toHsl(),{h:e}=o;return[this,new t({h:(e+72)%360,s:o.s,l:o.l}),new t({h:(e+216)%360,s:o.s,l:o.l})]}onBackground(o){let e=this.toRgb(),a=new t(o).toRgb(),i=e.a+a.a*(1-e.a);return new t({r:(e.r*e.a+a.r*a.a*(1-e.a))/i,g:(e.g*e.a+a.g*a.a*(1-e.a))/i,b:(e.b*e.a+a.b*a.a*(1-e.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(o){let e=this.toHsl(),{h:a}=e,i=[this],r=360/o;for(let l=1;l<o;l++)i.push(new t({h:(a+l*r)%360,s:e.s,l:e.l}));return i}equals(o){let e=new t(o);return this.format==="cmyk"||e.format==="cmyk"?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}};var ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Go=t=>(...o)=>({_$litDirective$:t,values:o}),to=class{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,e,a){this._$Ct=o,this._$AM=e,this._$Ci=a}_$AS(o,e){return this.update(o,e)}update(o,e){return this.render(...e)}};var q=Go(class extends to{constructor(t){if(super(t),t.type!==ft.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(o=>t[o]).join(" ")+" "}update(t,[o]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in o)o[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(o)}let e=t.element.classList;for(let a of this.st)a in o||(e.remove(a),this.st.delete(a));for(let a in o){let i=!!o[a];i===this.st.has(a)||this.nt?.has(a)||(i?(e.add(a),this.st.add(a)):(e.remove(a),this.st.delete(a)))}return nt}});var O=t=>t??J;var xi="important",Fl=" !"+xi,Dt=Go(class extends to{constructor(t){if(super(t),t.type!==ft.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((o,e)=>{let a=t[e];return a==null?o:o+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(t,[o]){let{style:e}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(o)),this.render(o);for(let a of this.ft)o[a]==null&&(this.ft.delete(a),a.includes("-")?e.removeProperty(a):e[a]=null);for(let a in o){let i=o[a];if(i!=null){this.ft.add(a);let r=typeof i=="string"&&i.endsWith(Fl);a.includes("-")||r?e.setProperty(a,r?i.slice(0,-11):i,r?xi:""):e[a]=i}}return nt}});var B=class extends st{constructor(){super(),this.hasSlotController=new $t(this,"hint","label"),this.isSafeValue=!1,this.localize=new bt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue="",this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="m",this.placement="bottom-start",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&qt(this)&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&qt(this)){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{let o=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||o?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{let e=t.composedPath().some(a=>a instanceof Element&&(a.closest(".color-picker")||a===this.trigger));this&&!e&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.handleValueChange("",this.value||"")}static get validators(){let t=[ui()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Tt(this.localName,this.size)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],o=(t.indexOf(this.format)+1)%t.length;this.format=t[o],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){let o=this.shadowRoot.querySelector(".slider.alpha"),e=o.querySelector(".slider-handle"),{width:a}=o.getBoundingClientRect(),i=this.value,r=this.value;e.focus(),t.preventDefault(),ve(o,{onMove:l=>{this.alpha=pt(l/a*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){let o=this.shadowRoot.querySelector(".slider.hue"),e=o.querySelector(".slider-handle"),{width:a}=o.getBoundingClientRect(),i=this.value,r=this.value;e.focus(),t.preventDefault(),ve(o,{onMove:l=>{this.hue=pt(l/a*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){let o=this.shadowRoot.querySelector(".grid"),e=o.querySelector(".grid-handle"),{width:a,height:i}=o.getBoundingClientRect(),r=this.value,l=this.value;e.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ve(o,{onMove:(s,n)=>{this.saturation=pt(s/a*100,0,100),this.brightness=pt(100-n/i*100,0,100),this.syncValues(),this.value!==l&&(l=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){let o=t.shiftKey?10:1,e=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=pt(this.alpha-o,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=pt(this.alpha+o,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){let o=t.shiftKey?10:1,e=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=pt(this.hue-o,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=pt(this.hue+o,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){let o=t.shiftKey?10:1,e=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=pt(this.saturation-o,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=pt(this.saturation+o,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=pt(this.brightness+o,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=pt(this.brightness-o,0,100),this.syncValues()),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){let o=t.target,e=this.value;t.stopPropagation(),this.input.value?(this.setColor(o.value),o.value=this.value||""):this.value="",this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let o=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;let o=new $o(t);if(!o.isValid)return null;let e=o.toHsl(),a=o.toRgb(),i=o.toHsv();if(!a||a.r==null||a.g==null||a.b==null)return null;let r={h:e.h||0,s:(e.s||0)*100,l:(e.l||0)*100,a:e.a||0},l=o.toHexString(),s=o.toHex8String(),n={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:n.h,s:n.s,v:n.v,string:this.setLetterCase(`hsv(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%)`)},hsva:{h:n.h,s:n.s,v:n.v,a:n.a,string:this.setLetterCase(`hsva(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.v)}%, ${n.a.toFixed(2).toString()})`)},rgb:{r:a.r,g:a.g,b:a.b,string:this.setLetterCase(`rgb(${Math.round(a.r)}, ${Math.round(a.g)}, ${Math.round(a.b)})`)},rgba:{r:a.r,g:a.g,b:a.b,a:a.a||0,string:this.setLetterCase(`rgba(${Math.round(a.r)}, ${Math.round(a.g)}, ${Math.round(a.b)}, ${(a.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(l),hexa:this.setLetterCase(s)}}setColor(t){let o=this.parseColor(t);return o===null?!1:(this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=this.opacity?o.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(o=>{let e=this.value;this.setColor(o.sRGBHex),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){let o=this.value;this.disabled||(this.setColor(t),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,o,e,a=100){let i=new $o(`hsva(${t}, ${o}%, ${e}%, ${a/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){(t.has("value")||t.has("defaultValue"))&&this.handleValueChange(t.get("value")||"",this.value||""),super.willUpdate(t)}handleValueChange(t,o){if(this.isEmpty=!o,o||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let e=this.parseColor(o);e!==null?(this.inputValue=this.value||"",this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=e.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){let t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){let o=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(o===null)return"";switch(t){case"hex":return o.hex;case"hexa":return o.hexa;case"rgb":return o.rgb.string;case"rgba":return o.rgba.string;case"hsl":return o.hsl.string;case"hsla":return o.hsla.string;case"hsv":return o.hsv.string;case"hsva":return o.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Ao),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){let t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,Uo(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Uo(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),fo(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),Io(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await dt(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await dt(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){let t=this.isEmpty,o=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),a=this.label?!0:!!o,i=this.hint?!0:!!e,r=this.saturation,l=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches.map(g=>typeof g=="string"?{color:g,label:g}:g):this.swatches.split(";").filter(g=>g.trim()!=="").map(g=>({color:g.trim(),label:g.trim()})),n=U`
      <div
        part="base"
        class=${q({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${Dt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${q({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${Dt({top:`${l}%`,left:`${r}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${O(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${Dt({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${O(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?U`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${Dt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${Dt({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${O(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Dt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="s"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${t?"":this.inputValue}
            value=${t?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":U`
                  <wa-button
                    part="format-button"
                    size="s"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?U`
                  <wa-button
                    part="eyedropper-button"
                    size="s"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${s.length>0?U`
              <div part="swatches" class="swatches">
                ${s.map(g=>{let h=this.parseColor(g.color);return h?U`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${O(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${g.label}
                      @click=${()=>this.selectSwatch(g.color)}
                      @keydown=${u=>!this.disabled&&u.key==="Enter"&&this.setColor(h.hexa)}
                    >
                      <div class="swatch-color" style=${Dt({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return U`
      <div
        class=${q({container:!0,"form-control":!0,"form-control-has-label":a})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${q({label:!0,"has-label":a})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${q({trigger:!0,"trigger-empty":t,"transparent-bg":!0,"form-control-input":!0})}
          style=${Dt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${q({"has-slotted":i})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement=${this.placement}
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${n}
      </wa-popup>
    `}};B.css=[ye,Ht,Be,mi];B.shadowRootOptions={...st.shadowRootOptions,delegatesFocus:!0};c([S('[part~="base"]')],B.prototype,"base",2);c([S('[part~="input"]')],B.prototype,"input",2);c([S('[part~="form-control-label"]')],B.prototype,"triggerLabel",2);c([S('[part~="form-control-input"]')],B.prototype,"triggerButton",2);c([S(".color-popup")],B.prototype,"popup",2);c([S('[part~="preview"]')],B.prototype,"previewButton",2);c([S('[part~="trigger"]')],B.prototype,"trigger",2);c([R()],B.prototype,"hasFocus",2);c([R()],B.prototype,"isDraggingGridHandle",2);c([R()],B.prototype,"inputValue",2);c([R()],B.prototype,"hue",2);c([R()],B.prototype,"isEmpty",2);c([R()],B.prototype,"saturation",2);c([R()],B.prototype,"brightness",2);c([R()],B.prototype,"alpha",2);c([R()],B.prototype,"value",1);c([d({attribute:"value",reflect:!0})],B.prototype,"defaultValue",2);c([d({attribute:"with-label",reflect:!0,type:Boolean})],B.prototype,"withLabel",2);c([d({attribute:"with-hint",reflect:!0,type:Boolean})],B.prototype,"withHint",2);c([R()],B.prototype,"hasEyeDropper",2);c([d()],B.prototype,"label",2);c([d({attribute:"hint"})],B.prototype,"hint",2);c([d()],B.prototype,"format",2);c([d({reflect:!0})],B.prototype,"size",2);c([X("size")],B.prototype,"handleSizeChange",1);c([d({reflect:!0})],B.prototype,"placement",2);c([d({attribute:"without-format-toggle",type:Boolean})],B.prototype,"withoutFormatToggle",2);c([d({reflect:!0})],B.prototype,"name",2);c([d({type:Boolean})],B.prototype,"disabled",2);c([d({type:Boolean,reflect:!0})],B.prototype,"open",2);c([d({type:Boolean})],B.prototype,"opacity",2);c([d({type:Boolean})],B.prototype,"uppercase",2);c([d()],B.prototype,"swatches",2);c([d({type:Boolean,reflect:!0})],B.prototype,"required",2);c([bi({passive:!1})],B.prototype,"handleTouchMove",1);c([X("format",{waitUntilFirstUpdate:!0})],B.prototype,"handleFormatChange",1);c([X("opacity")],B.prototype,"handleOpacityChange",1);c([X("value")],B.prototype,"handleValueChange",1);c([X("open",{waitUntilFirstUpdate:!0})],B.prototype,"handleOpenChange",1);B=c([j("wa-color-picker")],B);B.disableWarning?.("change-in-update");var Gi=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function Xi(t,o){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&fl(o)})}function fl(t){let o=null;if("form"in t&&(o=t.form),!o&&"getForm"in t&&(o=t.getForm()),!o)return;let e=[...o.elements];if(e.length===1){o.requestSubmit(null);return}let a=e.find(i=>i.type==="submit"&&!i.matches(":disabled"));a&&(["input","button"].includes(a.localName)?o.requestSubmit(a):a.click())}var Wi=G`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var xe=()=>({checkValidity(t){let o=t.input,e={message:"",isValid:!0,invalidKeys:[]};if(!o)return e;let a=!0;if("checkValidity"in o&&(a=o.checkValidity()),a)return e;if(e.isValid=!1,"validationMessage"in o&&(e.message=o.validationMessage),!("validity"in o))return e.invalidKeys.push("customError"),e;for(let i in o.validity){if(i==="valid")continue;let r=i;o.validity[r]&&e.invalidKeys.push(r)}return e}});var{I:zd}=ei;var Zi=(t,o)=>o===void 0?t?._$litType$!==void 0:t?._$litType$===o;var Yi=t=>t.strings===void 0;var Al={},Si=(t,o=Al)=>t._$AH=o;var Ni=Go(class extends to{constructor(t){if(super(t),t.type!==ft.PROPERTY&&t.type!==ft.ATTRIBUTE&&t.type!==ft.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Yi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[o]){if(o===nt||o===J)return o;let e=t.element,a=t.name;if(t.type===ft.PROPERTY){if(o===e[a])return nt}else if(t.type===ft.BOOLEAN_ATTRIBUTE){if(!!o===e.hasAttribute(a))return nt}else if(t.type===ft.ATTRIBUTE&&e.getAttribute(a)===o+"")return nt;return Si(t),o}});var f=class extends st{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new $t(this,"hint","label"),this.localize=new bt(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,xe()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleSizeChange(){Tt(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Gi),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){Xi(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){if(super.updated(t),t.has("value")||t.has("defaultValue")||t.has("type")){let o=["number","date","time","datetime-local"];this.input&&o.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,o,e="none"){this.input.setSelectionRange(t,o,e)}setRangeText(t,o,e,a="preserve"){let i=o??this.input.selectionStart,r=e??this.input.selectionEnd;this.input.setRangeText(t,i,r,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),o=this.hasSlotController.test("hint","withHint"),e=this.label?!0:!!t,a=this.hint?!0:!!o,i=this.withClear&&!this.disabled&&!this.readonly,r=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value=="number"||this.value&&this.value.length>0);return U`
      <label
        part="form-control-label label"
        class=${q({label:!0,"has-label":e})}
        for="input"
        aria-hidden=${e?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${O(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${O(this.placeholder)}
          minlength=${O(this.minlength)}
          maxlength=${O(this.maxlength)}
          min=${O(this.min)}
          max=${O(this.max)}
          step=${O(this.step)}
          .value=${Ni(this.value??"")}
          autocapitalize=${O(this.autocapitalize)}
          autocomplete=${O(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${O(this.pattern)}
          enterkeyhint=${O(this.enterkeyhint)}
          inputmode=${O(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${r?U`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?U`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?U`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:U`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${q({"has-slotted":a})}
        aria-hidden=${a?"false":"true"}
        >${this.hint}</slot
      >
    `}};f.css=[Ht,Be,Wi];f.shadowRootOptions={...st.shadowRootOptions,delegatesFocus:!0};c([S("input")],f.prototype,"input",2);c([d()],f.prototype,"title",2);c([d({reflect:!0})],f.prototype,"type",2);c([R()],f.prototype,"value",1);c([d({attribute:"value",reflect:!0})],f.prototype,"defaultValue",2);c([d({reflect:!0})],f.prototype,"size",2);c([X("size")],f.prototype,"handleSizeChange",1);c([d({reflect:!0})],f.prototype,"appearance",2);c([d({type:Boolean,reflect:!0})],f.prototype,"pill",2);c([d()],f.prototype,"label",2);c([d({attribute:"hint"})],f.prototype,"hint",2);c([d({attribute:"with-clear",type:Boolean})],f.prototype,"withClear",2);c([d()],f.prototype,"placeholder",2);c([d({type:Boolean,reflect:!0})],f.prototype,"readonly",2);c([d({attribute:"password-toggle",type:Boolean})],f.prototype,"passwordToggle",2);c([d({attribute:"password-visible",type:Boolean})],f.prototype,"passwordVisible",2);c([d({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],f.prototype,"withoutSpinButtons",2);c([d({type:Boolean,reflect:!0})],f.prototype,"required",2);c([d()],f.prototype,"pattern",2);c([d({type:Number})],f.prototype,"minlength",2);c([d({type:Number})],f.prototype,"maxlength",2);c([d()],f.prototype,"min",2);c([d()],f.prototype,"max",2);c([d()],f.prototype,"step",2);c([d()],f.prototype,"autocapitalize",2);c([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],f.prototype,"autocorrect",2);c([d()],f.prototype,"autocomplete",2);c([d({type:Boolean})],f.prototype,"autofocus",2);c([d()],f.prototype,"enterkeyhint",2);c([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],f.prototype,"spellcheck",2);c([d()],f.prototype,"inputmode",2);c([d({attribute:"with-label",type:Boolean})],f.prototype,"withLabel",2);c([d({attribute:"with-hint",type:Boolean})],f.prototype,"withHint",2);c([X("step",{waitUntilFirstUpdate:!0})],f.prototype,"handleStepChange",1);f=c([j("wa-input")],f);f.disableWarning?.("change-in-update");var Oi=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var ki=G`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var Wt=Math.min,At=Math.max,Po=Math.round,te=Math.floor,Zt=t=>({x:t,y:t}),Ul={left:"right",right:"left",bottom:"top",top:"bottom"};function ga(t,o,e){return At(t,Wt(o,e))}function po(t,o){return typeof t=="function"?t(o):t}function oo(t){return t.split("-")[0]}function wo(t){return t.split("-")[1]}function ba(t){return t==="x"?"y":"x"}function Xe(t){return t==="y"?"height":"width"}function Yt(t){let o=t[0];return o==="t"||o==="b"?"y":"x"}function We(t){return ba(Yt(t))}function Di(t,o,e){e===void 0&&(e=!1);let a=wo(t),i=We(t),r=Xe(i),l=i==="x"?a===(e?"end":"start")?"right":"left":a==="start"?"bottom":"top";return o.reference[r]>o.floating[r]&&(l=_o(l)),[l,_o(l)]}function Vi(t){let o=_o(t);return[Ge(t),o,Ge(o)]}function Ge(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var Ri=["left","right"],Ei=["right","left"],xl=["top","bottom"],Gl=["bottom","top"];function Xl(t,o,e){switch(t){case"top":case"bottom":return e?o?Ei:Ri:o?Ri:Ei;case"left":case"right":return o?xl:Gl;default:return[]}}function zi(t,o,e,a){let i=wo(t),r=Xl(oo(t),e==="start",a);return i&&(r=r.map(l=>l+"-"+i),o&&(r=r.concat(r.map(Ge)))),r}function _o(t){let o=oo(t);return Ul[o]+t.slice(o.length)}function Wl(t){var o,e,a,i;return{top:(o=t.top)!=null?o:0,right:(e=t.right)!=null?e:0,bottom:(a=t.bottom)!=null?a:0,left:(i=t.left)!=null?i:0}}function ha(t){return typeof t!="number"?Wl(t):{top:t,right:t,bottom:t,left:t}}function Qo(t){let{x:o,y:e,width:a,height:i}=t;return{width:a,height:i,top:e,left:o,right:o+a,bottom:e+i,x:o,y:e}}function Mi(t,o,e){let{reference:a,floating:i}=t,r=Yt(o),l=We(o),s=Xe(l),n=oo(o),g=r==="y",h=a.x+a.width/2-i.width/2,u=a.y+a.height/2-i.height/2,m=a[s]/2-i[s]/2,C;switch(n){case"top":C={x:h,y:a.y-i.height};break;case"bottom":C={x:h,y:a.y+a.height};break;case"right":C={x:a.x+a.width,y:u};break;case"left":C={x:a.x-i.width,y:u};break;default:C={x:a.x,y:a.y}}let I=wo(o);return I&&(C[l]+=m*(I==="end"?1:-1)*(e&&g?-1:1)),C}async function Ji(t,o){var e;o===void 0&&(o={});let{x:a,y:i,platform:r,rects:l,elements:s,strategy:n}=t,{boundary:g="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:m=!1,padding:C=0}=po(o,t),I=ha(C),v=s[m?u==="floating"?"reference":"floating":u],y=Qo(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(v)))==null||e?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(s.floating)),boundary:g,rootBoundary:h,strategy:n})),W=u==="floating"?{x:a,y:i,width:l.floating.width,height:l.floating.height}:l.reference,k=await(r.getOffsetParent==null?void 0:r.getOffsetParent(s.floating)),E=await(r.isElement==null?void 0:r.isElement(k))&&await(r.getScale==null?void 0:r.getScale(k))||{x:1,y:1},$=Qo(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:W,offsetParent:k,strategy:n}):W);return{top:(y.top-$.top+I.top)/E.y,bottom:($.bottom-y.bottom+I.bottom)/E.y,left:(y.left-$.left+I.left)/E.x,right:($.right-y.right+I.right)/E.x}}var Zl=50,ji=async(t,o,e)=>{let{placement:a="bottom",strategy:i="absolute",middleware:r=[],platform:l}=e,s=l.detectOverflow?l:{...l,detectOverflow:Ji},n=await(l.isRTL==null?void 0:l.isRTL(o)),g=await l.getElementRects({reference:t,floating:o,strategy:i}),{x:h,y:u}=Mi(g,a,n),m=a,C=0,I={};for(let Q=0;Q<r.length;Q++){let v=r[Q];if(!v)continue;let{name:y,fn:W}=v,{x:k,y:E,data:$,reset:z}=await W({x:h,y:u,initialPlacement:a,placement:m,strategy:i,middlewareData:I,rects:g,platform:s,elements:{reference:t,floating:o}});h=k??h,u=E??u,I[y]={...I[y],...$},z&&C<Zl&&(C++,typeof z=="object"&&(z.placement&&(m=z.placement),z.rects&&(g=z.rects===!0?await l.getElementRects({reference:t,floating:o,strategy:i}):z.rects),{x:h,y:u}=Mi(g,m,n)),Q=-1)}return{x:h,y:u,placement:m,strategy:i,middlewareData:I}},Ti=t=>({name:"arrow",options:t,async fn(o){let{x:e,y:a,placement:i,rects:r,platform:l,elements:s,middlewareData:n}=o,{element:g,padding:h=0}=po(t,o)||{};if(g==null)return{};let u=ha(h),m={x:e,y:a},C=We(i),I=Xe(C),Q=await l.getDimensions(g),v=C==="y",y=v?"top":"left",W=v?"bottom":"right",k=v?"clientHeight":"clientWidth",E=r.reference[I]+r.reference[C]-m[C]-r.floating[I],$=m[C]-r.reference[C],z=await(l.getOffsetParent==null?void 0:l.getOffsetParent(g)),rt=z?z[k]:0;(!rt||!await(l.isElement==null?void 0:l.isElement(z)))&&(rt=s.floating[k]||r.floating[I]);let ut=E/2-$/2,mt=rt/2-Q[I]/2-1,ot=Wt(u[y],mt),io=Wt(u[W],mt),ro=rt-Q[I]-io,It=rt/2-Q[I]/2+ut,lt=ga(ot,It,ro),Xt=!n.arrow&&wo(i)!=null&&It!==lt&&r.reference[I]/2-(It<ot?ot:io)-Q[I]/2<0,Qt=Xt?It<ot?It-ot:It-ro:0;return{[C]:m[C]+Qt,data:{[C]:lt,centerOffset:It-lt-Qt,...Xt&&{alignmentOffset:Qt}},reset:Xt}}});var Hi=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(o){var e,a;let{placement:i,middlewareData:r,rects:l,initialPlacement:s,platform:n,elements:g}=o,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:I="none",flipAlignment:Q=!0,...v}=po(t,o);if((e=r.arrow)!=null&&e.alignmentOffset)return{};let y=oo(i),W=Yt(s),k=oo(s)===s,E=await(n.isRTL==null?void 0:n.isRTL(g.floating)),$=m||(k||!Q?[_o(s)]:Vi(s)),z=I!=="none";!m&&z&&$.push(...zi(s,Q,I,E));let rt=[s,...$],ut=await n.detectOverflow(o,v),mt=[],ot=((a=r.flip)==null?void 0:a.overflows)||[];if(h&&mt.push(ut[y]),u){let lt=Di(i,l,E);mt.push(ut[lt[0]],ut[lt[1]])}if(ot=[...ot,{placement:i,overflows:mt}],!mt.every(lt=>lt<=0)){var io,ro;let lt=(((io=r.flip)==null?void 0:io.index)||0)+1,Xt=rt[lt];if(Xt&&(!(u==="alignment"?W!==Yt(Xt):!1)||ot.every(Ct=>Yt(Ct.placement)===W?Ct.overflows[0]>0:!0)))return{data:{index:lt,overflows:ot},reset:{placement:Xt}};let Qt=(ro=ot.filter(et=>et.overflows[0]<=0).sort((et,Ct)=>et.overflows[1]-Ct.overflows[1])[0])==null?void 0:ro.placement;if(!Qt)switch(C){case"bestFit":{var It;let et=(It=ot.filter(Ct=>{if(z){let Lt=Yt(Ct.placement);return Lt===W||Lt==="y"}return!0}).map(Ct=>[Ct.placement,Ct.overflows.filter(Lt=>Lt>0).reduce((Lt,Oo)=>Lt+Oo,0)]).sort((Ct,Lt)=>Ct[1]-Lt[1])[0])==null?void 0:It[0];et&&(Qt=et);break}case"initialPlacement":Qt=s;break}if(i!==Qt)return{reset:{placement:Qt}}}return{}}}};var Yl=new Set(["left","top"]);async function Sl(t,o){let{placement:e,platform:a,elements:i}=t,r=await(a.isRTL==null?void 0:a.isRTL(i.floating)),l=oo(e),s=wo(e),n=Yt(e)==="y",g=Yl.has(l)?-1:1,h=r&&n?-1:1,u=po(o,t),{mainAxis:m,crossAxis:C,alignmentAxis:I}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return s&&typeof I=="number"&&(C=s==="end"?I*-1:I),n?{x:C*h,y:m*g}:{x:m*g,y:C*h}}var Ki=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(o){var e,a;let{x:i,y:r,placement:l,middlewareData:s}=o,n=await Sl(o,t);return l===((e=s.offset)==null?void 0:e.placement)&&(a=s.arrow)!=null&&a.alignmentOffset?{}:{x:i+n.x,y:r+n.y,data:{...n,placement:l}}}}},qi=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(o){let{x:e,y:a,placement:i,platform:r}=o,{mainAxis:l=!0,crossAxis:s=!1,limiter:n={fn:W=>{let{x:k,y:E}=W;return{x:k,y:E}}},...g}=po(t,o),h={x:e,y:a},u=await r.detectOverflow(o,g),m=Yt(i),C=ba(m),I=h[C],Q=h[m],v=(W,k)=>ga(k+u[W==="y"?"top":"left"],k,k-u[W==="y"?"bottom":"right"]);l&&(I=v(C,I)),s&&(Q=v(m,Q));let y=n.fn({...o,[C]:I,[m]:Q});return{...y,data:{x:y.x-e,y:y.y-a,enabled:{[C]:l,[m]:s}}}}}};var $i=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(o){let{placement:e,rects:a,platform:i,elements:r}=o,{apply:l=()=>{},...s}=po(t,o),n=await i.detectOverflow(o,s),g=oo(e),h=wo(e),u=Yt(e)==="y",{width:m,height:C}=a.floating,I,Q;g==="top"||g==="bottom"?(I=g,Q=h===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(Q=g,I=h==="end"?"top":"bottom");let v=C-n.top-n.bottom,y=m-n.left-n.right,W=Wt(C-n[I],v),k=Wt(m-n[Q],y),E=o.middlewareData.shift,$=!E,z=W,rt=k;E!=null&&E.enabled.x&&(rt=y),E!=null&&E.enabled.y&&(z=v),$&&!h&&(u?rt=m-2*At(n.left,n.right):z=C-2*At(n.top,n.bottom)),await l({...o,availableWidth:rt,availableHeight:z});let ut=await i.getDimensions(r.floating);return m!==ut.width||C!==ut.height?{reset:{rects:!0}}:{}}}};function Ze(){return typeof window<"u"}function vo(t){return Pi(t)?(t.nodeName||"").toLowerCase():"#document"}function gt(t){var o;return(t==null||(o=t.ownerDocument)==null?void 0:o.defaultView)||window}function St(t){var o;return(o=(Pi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:o.documentElement}function Pi(t){return Ze()?t instanceof Node||t instanceof gt(t).Node:!1}function Ut(t){return Ze()?t instanceof Element||t instanceof gt(t).Element:!1}function zt(t){return Ze()?t instanceof HTMLElement||t instanceof gt(t).HTMLElement:!1}function _i(t){return!Ze()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof gt(t).ShadowRoot}function oe(t){let{overflow:o,overflowX:e,overflowY:a,display:i}=xt(t);return/auto|scroll|overlay|hidden|clip/.test(o+a+e)&&i!=="inline"&&i!=="contents"}function tr(t){return/^(table|td|th)$/.test(vo(t))}function ee(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var Nl=/transform|translate|scale|rotate|perspective|filter/,Ol=/paint|layout|strict|content/,Lo=t=>!!t&&t!=="none",ua;function Xo(t){let o=Ut(t)?xt(t):t;return Lo(o.transform)||Lo(o.translate)||Lo(o.scale)||Lo(o.rotate)||Lo(o.perspective)||!Ye()&&(Lo(o.backdropFilter)||Lo(o.filter))||Nl.test(o.willChange||"")||Ol.test(o.contain||"")}function or(t){let o=eo(t);for(;zt(o)&&!Wo(o);){if(Xo(o))return o;if(ee(o))return null;o=eo(o)}return null}function Ye(){return ua==null&&(ua=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),ua}function Wo(t){return/^(html|body|#document)$/.test(vo(t))}function xt(t){return gt(t).getComputedStyle(t)}function ae(t){return Ut(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function eo(t){if(vo(t)==="html")return t;let o=t.assignedSlot||t.parentNode||_i(t)&&t.host||St(t);return _i(o)?o.host:o}function er(t){let o=eo(t);return Wo(o)?(t.ownerDocument||t).body:zt(o)&&oe(o)?o:er(o)}function Vt(t,o,e){var a;o===void 0&&(o=[]),e===void 0&&(e=!0);let i=er(t),r=i===((a=t.ownerDocument)==null?void 0:a.body),l=gt(i);if(r){let s=Se(l);return o.concat(l,l.visualViewport||[],oe(i)?i:[],s&&e?Vt(s):[])}else return o.concat(i,Vt(i,[],e))}function Se(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function rr(t){let o=xt(t),e=parseFloat(o.width)||0,a=parseFloat(o.height)||0,i=zt(t),r=i?t.offsetWidth:e,l=i?t.offsetHeight:a,s=Po(e)!==r||Po(a)!==l;return s&&(e=r,a=l),{width:e,height:a,$:s}}function Ia(t){return Ut(t)?t:t.contextElement}function Zo(t){let o=Ia(t);if(!zt(o))return Zt(1);let e=o.getBoundingClientRect(),{width:a,height:i,$:r}=rr(o),l=(r?Po(e.width):e.width)/a,s=(r?Po(e.height):e.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}var kl=Zt(0);function lr(t){let o=gt(t);return!Ye()||!o.visualViewport?kl:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function Rl(t,o,e){return o===void 0&&(o=!1),!!e&&o&&e===gt(t)}function yo(t,o,e,a){o===void 0&&(o=!1),e===void 0&&(e=!1);let i=t.getBoundingClientRect(),r=Ia(t),l=Zt(1);o&&(a?Ut(a)&&(l=Zo(a)):l=Zo(t));let s=Rl(r,e,a)?lr(r):Zt(0),n=(i.left+s.x)/l.x,g=(i.top+s.y)/l.y,h=i.width/l.x,u=i.height/l.y;if(r&&a){let m=gt(r),C=Ut(a)?gt(a):a,I=m,Q=Se(I);for(;Q&&C!==I;){let v=Zo(Q),y=Q.getBoundingClientRect(),W=xt(Q),k=y.left+(Q.clientLeft+parseFloat(W.paddingLeft))*v.x,E=y.top+(Q.clientTop+parseFloat(W.paddingTop))*v.y;n*=v.x,g*=v.y,h*=v.x,u*=v.y,n+=k,g+=E,I=gt(Q),Q=Se(I)}}return Qo({width:h,height:u,x:n,y:g})}function Ne(t,o){let e=ae(t).scrollLeft;return o?o.left+e:yo(St(t)).left+e}function cr(t,o){let e=t.getBoundingClientRect(),a=e.left+o.scrollLeft-Ne(t,e),i=e.top+o.scrollTop;return{x:a,y:i}}function El(t){let{elements:o,rect:e,offsetParent:a,strategy:i}=t,r=i==="fixed",l=St(a),s=o?ee(o.floating):!1;if(a===l||s&&r)return e;let n={scrollLeft:0,scrollTop:0},g=Zt(1),h=Zt(0),u=zt(a);if((u||!r)&&((vo(a)!=="body"||oe(l))&&(n=ae(a)),u)){let C=yo(a);g=Zo(a),h.x=C.x+a.clientLeft,h.y=C.y+a.clientTop}let m=l&&!u&&!r?cr(l,n):Zt(0);return{width:e.width*g.x,height:e.height*g.y,x:e.x*g.x-n.scrollLeft*g.x+h.x+m.x,y:e.y*g.y-n.scrollTop*g.y+h.y+m.y}}function Dl(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function Vl(t){let o=ae(t),e=t.ownerDocument.body,a=At(t.scrollWidth,t.clientWidth,e.scrollWidth,e.clientWidth),i=At(t.scrollHeight,t.clientHeight,e.scrollHeight,e.clientHeight),r=-o.scrollLeft+Ne(t),l=-o.scrollTop;return xt(e).direction==="rtl"&&(r+=At(t.clientWidth,e.clientWidth)-a),{width:a,height:i,x:r,y:l}}var zl=25;function Ml(t,o,e){e===void 0&&(e="viewport");let a=e==="layoutViewport",i=gt(t),r=St(t),l=i.visualViewport,s=r.clientWidth,n=r.clientHeight,g=0,h=0;if(l){let m=!Ye()||o==="fixed";a?m||(g=-l.offsetLeft,h=-l.offsetTop):(s=l.width,n=l.height,m&&(g=l.offsetLeft,h=l.offsetTop))}if(Ne(r)<=0){let m=r.ownerDocument,C=m.body,I=getComputedStyle(C),Q=m.compatMode==="CSS1Compat"&&parseFloat(I.marginLeft)+parseFloat(I.marginRight)||0,v=Math.abs(r.clientWidth-C.clientWidth-Q),y=getComputedStyle(r).scrollbarGutter==="stable both-edges"?v/2:v;y<=zl&&(s-=y)}return{width:s,height:n,x:g,y:h}}function Jl(t,o){let e=yo(t,!0,o==="fixed"),a=e.top+t.clientTop,i=e.left+t.clientLeft,r=Zo(t),l=t.clientWidth*r.x,s=t.clientHeight*r.y,n=i*r.x,g=a*r.y;return{width:l,height:s,x:n,y:g}}function ar(t,o,e){let a;if(o==="viewport"||o==="layoutViewport")a=Ml(t,e,o);else if(o==="document")a=Vl(St(t));else if(Ut(o))a=Jl(o,e);else{let i=lr(t);a={x:o.x-i.x,y:o.y-i.y,width:o.width,height:o.height}}return Qo(a)}function jl(t,o){let e=o.get(t);if(e)return e;let a=Vt(t,[],!1).filter(s=>Ut(s)&&vo(s)!=="body"),i=null,r=xt(t).position==="fixed",l=r?eo(t):t;for(;Ut(l)&&!Wo(l);){let s=xt(l),n=Xo(l),g=i?i.position:r?"fixed":"";!n&&(g==="fixed"||g==="absolute"&&s.position==="static")?a=a.filter(u=>u!==l):i=s,l=eo(l)}return o.set(t,a),a}function Tl(t){let{element:o,boundary:e,rootBoundary:a,strategy:i}=t,l=[...e==="clippingAncestors"?ee(o)?[]:jl(o,this._c):[].concat(e),a],s=ar(o,l[0],i),n=s.top,g=s.right,h=s.bottom,u=s.left;for(let m=1;m<l.length;m++){let C=ar(o,l[m],i);n=At(C.top,n),g=Wt(C.right,g),h=Wt(C.bottom,h),u=At(C.left,u)}return{width:g-u,height:h-n,x:u,y:n}}function Hl(t){let{width:o,height:e}=rr(t);return{width:o,height:e}}function Kl(t,o,e){let a=zt(o),i=St(o),r=e==="fixed",l=yo(t,!0,r,o),s={scrollLeft:0,scrollTop:0},n=Zt(0);if((a||!r)&&((vo(o)!=="body"||oe(i))&&(s=ae(o)),a)){let m=yo(o,!0,r,o);n.x=m.x+o.clientLeft,n.y=m.y+o.clientTop}!a&&i&&(n.x=Ne(i));let g=i&&!a&&!r?cr(i,s):Zt(0),h=l.left+s.scrollLeft-n.x-g.x,u=l.top+s.scrollTop-n.y-g.y;return{x:h,y:u,width:l.width,height:l.height}}function ma(t){return xt(t).position==="static"}function ir(t,o){if(!zt(t)||xt(t).position==="fixed")return null;if(o)return o(t);let e=t.offsetParent;return St(t)===e&&(e=e.ownerDocument.body),e}function nr(t,o){let e=gt(t);if(ee(t))return e;if(!zt(t)){let i=eo(t);for(;i&&!Wo(i);){if(Ut(i)&&!ma(i))return i;i=eo(i)}return e}let a=ir(t,o);for(;a&&tr(a)&&ma(a);)a=ir(a,o);return a&&Wo(a)&&ma(a)&&!Xo(a)?e:a||or(t)||e}var ql=async function(t){let o=this.getOffsetParent||nr,e=this.getDimensions,a=await e(t.floating);return{reference:Kl(t.reference,await o(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}};function $l(t){return xt(t).direction==="rtl"}var ie={convertOffsetParentRelativeRectToViewportRelativeRect:El,getDocumentElement:St,getClippingRect:Tl,getOffsetParent:nr,getElementRects:ql,getClientRects:Dl,getDimensions:Hl,getScale:Zo,isElement:Ut,isRTL:$l};function sr(t,o){return t.x===o.x&&t.y===o.y&&t.width===o.width&&t.height===o.height}function _l(t,o,e){let a=null,i,r=St(t);function l(){var h;clearTimeout(i),(h=a)==null||h.disconnect(),a=null}function s(h,u){h===void 0&&(h=!1),u===void 0&&(u=1),l();let m=t.getBoundingClientRect(),{left:C,top:I,width:Q,height:v}=m;if(h||o(),!Q||!v)return;let y=te(I),W=te(r.clientWidth-(C+Q)),k=te(r.clientHeight-(I+v)),E=te(C),z={rootMargin:-y+"px "+-W+"px "+-k+"px "+-E+"px",threshold:At(0,Wt(1,u))||1},rt=!0;function ut(mt){let ot=mt[0].intersectionRatio;if(!sr(m,t.getBoundingClientRect()))return s();if(ot!==u){if(!rt)return s();ot?s(!1,ot):i=setTimeout(()=>{s(!1,1e-7)},1e3)}rt=!1}try{a=new IntersectionObserver(ut,{...z,root:r.ownerDocument})}catch{a=new IntersectionObserver(ut,z)}a.observe(t)}let n=gt(t),g=()=>s(e);return n.addEventListener("resize",g),s(!0),()=>{n.removeEventListener("resize",g),l()}}function dr(t,o,e,a){a===void 0&&(a={});let{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:n=!1}=a,g=Ia(t),h=i||r?[...g?Vt(g):[],...o?Vt(o):[]]:[];h.forEach(y=>{i&&y.addEventListener("scroll",e),r&&y.addEventListener("resize",e)});let u=g&&s?_l(g,e,r):null,m=-1,C=null;l&&(C=new ResizeObserver(y=>{let[W]=y;W&&W.target===g&&C&&o&&(C.unobserve(o),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var k;(k=C)==null||k.observe(o)})),e()}),g&&!n&&C.observe(g),o&&C.observe(o));let I,Q=n?yo(t):null;n&&v();function v(){let y=yo(t);Q&&!sr(Q,y)&&e(),Q=y,I=requestAnimationFrame(v)}return e(),()=>{var y;h.forEach(W=>{i&&W.removeEventListener("scroll",e),r&&W.removeEventListener("resize",e)}),u?.(),(y=C)==null||y.disconnect(),C=null,n&&cancelAnimationFrame(I)}}var gr=Ki;var br=qi,hr=Hi,Ca=$i;var ur=Ti;var mr=(t,o,e)=>{let a=new Map,i=e??{},r={...ie,...i.platform,_c:a};return ji(t,o,{...i,platform:r})};function Ir(t){return Pl(t)}function pa(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Pl(t){for(let o=t;o;o=pa(o))if(o instanceof Element&&getComputedStyle(o).display==="none")return null;for(let o=pa(t);o;o=pa(o)){if(!(o instanceof Element))continue;let e=getComputedStyle(o);if(e.display!=="contents"&&(e.position!=="static"||Xo(e)||o.tagName==="BODY"))return o}return null}function Cr(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var tc=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),N=class extends K{constructor(){super(...arguments),this.localize=new bt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),o=this.popup.getBoundingClientRect(),e=this.placement.includes("top")||this.placement.includes("bottom"),a=0,i=0,r=0,l=0,s=0,n=0,g=0,h=0;e?t.top<o.top?(a=t.left,i=t.bottom,r=t.right,l=t.bottom,s=o.left,n=o.top,g=o.right,h=o.top):(a=o.left,i=o.bottom,r=o.right,l=o.bottom,s=t.left,n=t.top,g=t.right,h=t.top):t.left<o.left?(a=t.right,i=t.top,r=o.left,l=o.top,s=t.right,n=t.bottom,g=o.left,h=o.bottom):(a=o.right,i=o.top,r=t.left,l=t.top,s=o.right,n=o.bottom,g=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${a}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${g}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=tc,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Cr(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=dr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[gr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ca({apply:({rects:a})=>{let i=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${a.reference.width}px`:"",this.popup.style.height=r?`${a.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let o;this.SUPPORTS_POPOVER&&!Cr(this.anchor)&&this.boundary==="scroll"&&(o=Vt(this.anchorEl).filter(a=>a instanceof Element)),this.flip&&t.push(hr({boundary:this.flipBoundary||o,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(br({boundary:this.shiftBoundary||o,padding:this.shiftPadding})),this.autoSize?t.push(Ca({boundary:this.autoSizeBoundary||o,padding:this.autoSizePadding,apply:({availableWidth:a,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${a}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ur({element:this.arrowEl,padding:this.arrowPadding}));let e=this.SUPPORTS_POPOVER?a=>ie.getOffsetParent(a,Ir):ie.getOffsetParent;mr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...ie,getOffsetParent:e}}).then(({x:a,y:i,middlewareData:r,placement:l})=>{let s=this.localize.dir()==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];if(this.setAttribute("data-current-placement",l),Object.assign(this.popup.style,{left:`${a}px`,top:`${i}px`}),this.arrow){let g=r.arrow.x,h=r.arrow.y,u="",m="",C="",I="";if(this.arrowPlacement==="start"){let Q=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",m=s?Q:"",I=s?"":Q}else if(this.arrowPlacement==="end"){let Q=typeof g=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=s?"":Q,I=s?Q:"",C=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(I=typeof g=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(I=typeof g=="number"?`${g}px`:"",u=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:u,right:m,bottom:C,left:I,[n]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Oi)}render(){return U`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${q({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${q({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?U`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};N.css=ki;c([S(".popup")],N.prototype,"popup",2);c([S(".arrow")],N.prototype,"arrowEl",2);c([d({attribute:!1,type:Boolean})],N.prototype,"SUPPORTS_POPOVER",2);c([d()],N.prototype,"anchor",2);c([d({type:Boolean,reflect:!0})],N.prototype,"active",2);c([d({reflect:!0})],N.prototype,"placement",2);c([d()],N.prototype,"boundary",2);c([d({type:Number})],N.prototype,"distance",2);c([d({type:Number})],N.prototype,"skidding",2);c([d({type:Boolean})],N.prototype,"arrow",2);c([d({attribute:"arrow-placement"})],N.prototype,"arrowPlacement",2);c([d({attribute:"arrow-padding",type:Number})],N.prototype,"arrowPadding",2);c([d({type:Boolean})],N.prototype,"flip",2);c([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(o=>o.trim()).filter(o=>o!==""),toAttribute:t=>t.join(" ")}})],N.prototype,"flipFallbackPlacements",2);c([d({attribute:"flip-fallback-strategy"})],N.prototype,"flipFallbackStrategy",2);c([d({type:Object})],N.prototype,"flipBoundary",2);c([d({attribute:"flip-padding",type:Number})],N.prototype,"flipPadding",2);c([d({type:Boolean})],N.prototype,"shift",2);c([d({type:Object})],N.prototype,"shiftBoundary",2);c([d({attribute:"shift-padding",type:Number})],N.prototype,"shiftPadding",2);c([d({attribute:"auto-size"})],N.prototype,"autoSize",2);c([d()],N.prototype,"sync",2);c([d({type:Object})],N.prototype,"autoSizeBoundary",2);c([d({attribute:"auto-size-padding",type:Number})],N.prototype,"autoSizePadding",2);c([d({attribute:"hover-bridge",type:Boolean})],N.prototype,"hoverBridge",2);N=c([j("wa-popup")],N);var pr=G`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;var Qr=Symbol.for(""),oc=t=>{if(t?.r===Qr)return t?._$litStatic$};var wa=(t,...o)=>({_$litStatic$:o.reduce((e,a,i)=>e+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+t[i+1],t[0]),r:Qr}),wr=new Map,Qa=t=>(o,...e)=>{let a=e.length,i,r,l=[],s=[],n,g=0,h=!1;for(;g<a;){for(n=o[g];g<a&&(r=e[g],(i=oc(r))!==void 0);)n+=i+o[++g],h=!0;g!==a&&s.push(r),l.push(n),g++}if(g===a&&l.push(o[a]),h){let u=l.join("$$lit$$");(o=wr.get(u))===void 0&&(l.raw=l,wr.set(u,o=l)),e=s}return t(o,...e)},Oe=Qa(U),tb=Qa(_a),ob=Qa(Pa);var x=class extends st{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new $t(this,"[default]","start","end"),this.localize=new bt(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,xe()]}handleSizeChange(){Tt(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let o of this.attributes)o.name!=="style"&&t.setAttribute(o.name,o.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new Ao)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),o=!1,e=!1,a=!1,i=!1;[...t].forEach(r=>{if(r.nodeType===Node.ELEMENT_NODE){let l=r;l.localName==="wa-icon"?(e=!0,o||(o=l.label!==void 0)):i=!0}else r.nodeType===Node.TEXT_NODE&&(r.textContent?.trim()||"").length>0&&(a=!0)}),this.isIconButton=e&&!a&&!i,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!o&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),o=t?wa`a`:wa`button`;return Oe`
      <${o}
        part="base"
        class=${q({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${O(t?void 0:this.disabled)}
        type=${O(t?void 0:this.type)}
        title=${this.title}
        name=${O(t?void 0:this.name)}
        value=${O(t?void 0:this.value)}
        href=${O(t?this.href:void 0)}
        target=${O(t?this.target:void 0)}
        download=${O(t?this.download:void 0)}
        rel=${O(t&&this.rel?this.rel:void 0)}
        role=${O(t?void 0:"button")}
        aria-disabled=${O(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Oe`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Oe`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${o}>
    `}};x.shadowRootOptions={...st.shadowRootOptions,delegatesFocus:!0};x.css=[pr,Qe,Ht];c([S(".button")],x.prototype,"button",2);c([S("slot:not([name])")],x.prototype,"labelSlot",2);c([R()],x.prototype,"invalid",2);c([R()],x.prototype,"isIconButton",2);c([d()],x.prototype,"title",2);c([d({reflect:!0})],x.prototype,"variant",2);c([d({reflect:!0})],x.prototype,"appearance",2);c([d({reflect:!0})],x.prototype,"size",2);c([X("size")],x.prototype,"handleSizeChange",1);c([d({attribute:"with-caret",type:Boolean,reflect:!0})],x.prototype,"withCaret",2);c([d({attribute:"with-start",type:Boolean})],x.prototype,"withStart",2);c([d({attribute:"with-end",type:Boolean})],x.prototype,"withEnd",2);c([d({type:Boolean})],x.prototype,"disabled",2);c([d({type:Boolean,reflect:!0})],x.prototype,"loading",2);c([d({type:Boolean,reflect:!0})],x.prototype,"pill",2);c([d()],x.prototype,"type",2);c([d({reflect:!0})],x.prototype,"name",2);c([d({reflect:!0})],x.prototype,"value",2);c([d({reflect:!0})],x.prototype,"href",2);c([d()],x.prototype,"target",2);c([d()],x.prototype,"rel",2);c([d()],x.prototype,"download",2);c([d({attribute:"formaction"})],x.prototype,"formAction",2);c([d({attribute:"formenctype"})],x.prototype,"formEnctype",2);c([d({attribute:"formmethod"})],x.prototype,"formMethod",2);c([d({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);c([d({attribute:"formtarget"})],x.prototype,"formTarget",2);c([X("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);c([X("href")],x.prototype,"handleHrefChange",1);c([X("loading",{waitUntilFirstUpdate:!0})],x.prototype,"handleLoadingChange",1);x=c([j("wa-button")],x);x.disableWarning?.("change-in-update");var Lr=G`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;var La=class extends K{constructor(){super(...arguments),this.localize=new bt(this)}render(){return U`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};La.css=Lr;La=c([j("wa-spinner")],La);var vr=G`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`;var ao=class extends K{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(t){ke(t.target)?.classList.add("button-focus")}handleBlur(t){ke(t.target)?.classList.remove("button-focus")}handleMouseOver(t){ke(t.target)?.classList.add("button-hover")}handleMouseOut(t){ke(t.target)?.classList.remove("button-hover")}render(){return U`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};ao.css=[vr];c([S("slot")],ao.prototype,"defaultSlot",2);c([R()],ao.prototype,"disableRole",2);c([R()],ao.prototype,"hasOutlined",2);c([d()],ao.prototype,"label",2);c([d({reflect:!0})],ao.prototype,"orientation",2);ao=c([j("wa-button-group")],ao);function ke(t){let o="wa-button, wa-radio-button";return t.closest(o)??t.querySelector(o)}var Yo=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var yr=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Br=G`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    fill: currentColor;
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`;var ec="",va="";function Fr(){return ec.replace(/\/$/,"")}function ac(t){va=t}function fr(){if(!va){let t=document.querySelector("[data-fa-kit-code]");t&&ac(t.getAttribute("data-fa-kit-code")||"")}return va}var Ar="7.3.0";function ic(t,o,e){let a="solid";return o==="chisel"&&(a="chisel-regular"),o==="etch"&&(a="etch-solid"),o==="graphite"&&(a="graphite-thin"),o==="jelly"&&(a="jelly-regular",e==="duo-regular"&&(a="jelly-duo-regular"),e==="fill-regular"&&(a="jelly-fill-regular")),o==="jelly-duo"&&(a="jelly-duo-regular"),o==="jelly-fill"&&(a="jelly-fill-regular"),o==="notdog"&&(e==="solid"&&(a="notdog-solid"),e==="duo-solid"&&(a="notdog-duo-solid")),o==="notdog-duo"&&(a="notdog-duo-solid"),o==="slab"&&((e==="solid"||e==="regular")&&(a="slab-regular"),e==="press-regular"&&(a="slab-press-regular")),o==="slab-press"&&(a="slab-press-regular"),o==="slab-duo"&&(a="slab-duo-regular"),o==="slab-press-duo"&&(a="slab-press-duo-regular"),o==="thumbprint"&&(a="thumbprint-light"),o==="utility"&&(a="utility-semibold"),o==="utility-duo"&&(a="utility-duo-semibold"),o==="utility-fill"&&(a="utility-fill-semibold"),o==="whiteboard"&&(a="whiteboard-semibold"),o==="mosaic"&&(a="mosaic-solid"),o==="pixel"&&(a="pixel-regular"),o==="vellum"&&(a="vellum-solid"),o==="classic"&&(e==="thin"&&(a="thin"),e==="light"&&(a="light"),e==="regular"&&(a="regular"),e==="solid"&&(a="solid")),o==="duotone"&&(e==="thin"&&(a="duotone-thin"),e==="light"&&(a="duotone-light"),e==="regular"&&(a="duotone-regular"),e==="solid"&&(a="duotone")),o==="sharp"&&(e==="thin"&&(a="sharp-thin"),e==="light"&&(a="sharp-light"),e==="regular"&&(a="sharp-regular"),e==="solid"&&(a="sharp-solid")),o==="sharp-duotone"&&(e==="thin"&&(a="sharp-duotone-thin"),e==="light"&&(a="sharp-duotone-light"),e==="regular"&&(a="sharp-duotone-regular"),e==="solid"&&(a="sharp-duotone-solid")),o==="brands"&&(a="brands"),a}function rc(t,o,e){let a=ic(t,o,e),i=Fr();if(i)return`${i}/${a}/${t}.svg`;let r=fr();return r.length>0?`https://ka-p.fontawesome.com/releases/v${Ar}/svgs/${a}/${t}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${Ar}/svgs/${a}/${t}.svg`}var lc={name:"default",resolver:(t,o="classic",e="solid")=>rc(t,o,e),mutator:(t,o)=>{if(o?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:e,variant:a}=o;if(e==="duotone"||e==="sharp-duotone"||e==="notdog-duo"||e==="notdog"&&a==="duo-solid"||e==="jelly-duo"||e==="jelly"&&a==="duo-regular"||e==="utility-duo"||e==="slab-duo"||e==="slab-press-duo"||e==="thumbprint"){let i=[...t.querySelectorAll("path")],r=i.find(s=>!s.hasAttribute("opacity")),l=i.find(s=>s.hasAttribute("opacity"));if(!r||!l)return;if(r.setAttribute("data-duotone-primary",""),l.setAttribute("data-duotone-secondary",""),o.swapOpacity&&r&&l){let s=l.getAttribute("opacity")||"0.4";r.style.setProperty("--path-opacity",s),l.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},Ur=lc;function cc(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var ya={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},nc={name:"system",resolver:(t,o="classic",e="solid")=>{let i=ya[e][t]??ya.regular[t]??ya.regular["circle-question"];return i?cc(i):""}},xr=nc;var sc="classic",dc=[Ur,xr],Gr=new Set;function Xr(t){Gr.add(t)}function Wr(t){Gr.delete(t)}function Re(t){return dc.find(o=>o.name===t)}function Zr(){return sc}var re=Symbol(),Ee=Symbol(),Ba,Fa=new Map,P=class extends K{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,o)=>{let e;if(o?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let a=this.shadowRoot.querySelector("[part='svg']");return typeof o.mutator=="function"&&o.mutator(a,this),this.svg}try{if(e=await fetch(t,{mode:"cors"}),!e.ok)return e.status===410?re:Ee}catch{return Ee}try{let a=document.createElement("div");a.innerHTML=await e.text();let i=a.firstElementChild;if(i?.tagName?.toLowerCase()!=="svg")return re;Ba||(Ba=new DOMParser);let l=Ba.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):re}catch{return re}}}connectedCallback(){super.connectedCallback(),Xr(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Wr(this)}async getIconSource(){let t=Re(this.library),o=this.family||Zr();if(this.name&&t){let e=this.canvas==="auto"||this.autoWidth,a;try{a=await t.resolver(this.name,o,this.variant,e)}catch{a=void 0}return{url:a,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:o}=await this.getIconSource(),e=o?Re(this.library):void 0;if(!t){this.svg=null;return}let a=Fa.get(t);a||(a=this.resolveIcon(t,e),Fa.set(t,a));let i=await a;i===Ee&&Fa.delete(t);let r=await this.getIconSource();if(t===r.url){if(Zi(i)){this.svg=i;return}switch(i){case Ee:case re:this.svg=null,this.dispatchEvent(new Yo);break;default:this.svg=i.cloneNode(!0),e?.mutator?.(this.svg,this),this.dispatchEvent(new yr)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let o=Re(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let e=this.shadowRoot?.querySelector("svg");e&&o?.mutator?.(e,this)}render(){return this.hasUpdated?this.svg:U`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};P.css=Br;c([R()],P.prototype,"svg",2);c([d({reflect:!0})],P.prototype,"name",2);c([d({reflect:!0})],P.prototype,"family",2);c([d({reflect:!0})],P.prototype,"variant",2);c([d({reflect:!0})],P.prototype,"canvas",2);c([d({attribute:"auto-width",type:Boolean,reflect:!0})],P.prototype,"autoWidth",2);c([d({attribute:"swap-opacity",type:Boolean,reflect:!0})],P.prototype,"swapOpacity",2);c([d()],P.prototype,"src",2);c([d()],P.prototype,"label",2);c([d({reflect:!0})],P.prototype,"library",2);c([d({type:Number,reflect:!0})],P.prototype,"rotate",2);c([d({type:String,reflect:!0})],P.prototype,"flip",2);c([d({type:String,reflect:!0})],P.prototype,"animation",2);c([X("label")],P.prototype,"handleLabelChange",1);c([X(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],P.prototype,"setIcon",1);P=c([j("wa-icon")],P);var Yr=class extends Event{constructor(t){super("wa-copy",{bubbles:!0,cancelable:!1,composed:!0}),this.detail=t}};var Sr=G`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`;var Nr="wa-internal-tooltip",fa="__waCopyButtonAssignedId",D=class extends K{constructor(){super(...arguments),this.localize=new bt(this),this.isCopying=!1,this.status="rest",this.hasCustomTrigger=!1,this.liveAnnouncement="",this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.tooltip="full",this.handleDefaultSlotChange=()=>{let o=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement)??null;o!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=o),this.hasCustomTrigger=o!==null,o&&this.tooltip!=="none"?(o.id||(o.id=Fe("wa-copy-button-trigger-"),o[fa]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return this.status==="success"?this.successLabel||this.localize.term("copied"):this.status==="error"?this.errorLabel||this.localize.term("error"):this.copyLabel||this.localize.term("copy")}firstUpdated(){this.didSSR?this.updateComplete.then(()=>{this.handleDefaultSlotChange()}):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set("success",this.status==="success"),this.customStates.set("error",this.status==="error"),this.syncTooltipText(),this.status==="success"||this.status==="error"?this.liveAnnouncement=this.currentLabel:this.liveAnnouncement=""}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(t){this.tooltip==="none"?this.removeLightTooltip():t==="none"?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute("trigger",this.tooltip==="copy"?"manual":"hover focus")}releaseAssignedId(t){t&&t[fa]&&(t.removeAttribute("id"),delete t[fa])}ensureLightTooltip(){if(!this.customTriggerEl)return;let t=this.tooltip==="copy"?"manual":"hover focus";if(this.lightTooltip)this.lightTooltip.setAttribute("for",this.customTriggerEl.id),this.lightTooltip.setAttribute("trigger",t),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{let o=document.createElement("wa-tooltip");o.setAttribute("slot",Nr),o.setAttribute("part","feedback"),o.setAttribute("trigger",t),o.dataset.copyButtonTooltip="",o.setAttribute("for",this.customTriggerEl.id),o.placement=this.tooltipPlacement,o.disabled=this.disabled,o.textContent=this.currentLabel,this.appendChild(o),this.lightTooltip=o}}removeLightTooltip(){this.lightTooltip&&(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),this.lightTooltip=null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let o=this.getRootNode(),e=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]"),i=this.from,r="";e?[i,r]=this.from.trim().split("."):a&&([i,r]=this.from.trim().replace(/\]$/,"").split("["));let l="getElementById"in o?o.getElementById(i):null;l?a?t=l.getAttribute(r)||"":e?t=l[r]||"":t=l.textContent||"":(this.showStatus("error"),this.dispatchEvent(new Yo))}if(!t)this.showStatus("error"),this.dispatchEvent(new Yo);else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.dispatchEvent(new Yr({value:t}))}catch{this.showStatus("error"),this.dispatchEvent(new Yo)}}async showStatus(t){if(this.status=t,this.copyIcon){let a=t==="success"?this.successIcon:this.errorIcon;await dt(this.copyIcon,"hide"),this.copyIcon.hidden=!0,a.hidden=!1,await dt(a,"show")}await this.updateComplete;let o=this.tooltip==="none"?null:this.activeTooltip,e=null;o&&(o.show(),e=new Promise(a=>{o.addEventListener("wa-after-hide",()=>{this.feedbackTimeout!==null&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),a()},{once:!0})}),this.feedbackTimeout=window.setTimeout(async()=>{this.feedbackTimeout=null,await o.hide()},this.feedbackDuration)),setTimeout(async()=>{if(e&&await e,this.copyIcon){let a=t==="success"?this.successIcon:this.errorIcon;await dt(a,"hide"),a.hidden=!0,this.copyIcon.hidden=!1,await dt(this.copyIcon,"show")}this.status="rest",this.isCopying=!1},this.feedbackDuration)}render(){let o=!this.hasCustomTrigger&&this.tooltip!=="none",e=this.tooltip==="copy"?"manual":"hover focus";return this.didSSR&&!this.hasUpdated&&(o=!1),U`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${o?U`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${e}
                class=${q({"copy-button-tooltip":!0,"copy-button-tooltip-success":this.status==="success","copy-button-tooltip-error":this.status==="error"})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:""}
        <slot name="${Nr}"></slot>
        <div class="wa-visually-hidden" role="status" aria-live="polite">${this.liveAnnouncement}</div>
      </div>
    `}};D.css=[ta,ye,Sr];c([S('slot[name="copy-icon"]')],D.prototype,"copyIcon",2);c([S('slot[name="success-icon"]')],D.prototype,"successIcon",2);c([S('slot[name="error-icon"]')],D.prototype,"errorIcon",2);c([S("slot:not([name])")],D.prototype,"defaultSlot",2);c([S('wa-tooltip[part="feedback"]')],D.prototype,"shadowTooltip",2);c([R()],D.prototype,"isCopying",2);c([R()],D.prototype,"status",2);c([R()],D.prototype,"hasCustomTrigger",2);c([R()],D.prototype,"liveAnnouncement",2);c([d()],D.prototype,"value",2);c([d()],D.prototype,"from",2);c([d({type:Boolean,reflect:!0})],D.prototype,"disabled",2);c([d({attribute:"copy-label"})],D.prototype,"copyLabel",2);c([d({attribute:"success-label"})],D.prototype,"successLabel",2);c([d({attribute:"error-label"})],D.prototype,"errorLabel",2);c([d({attribute:"feedback-duration",type:Number})],D.prototype,"feedbackDuration",2);c([d({attribute:"tooltip-placement",reflect:!0})],D.prototype,"tooltipPlacement",2);c([d({reflect:!0})],D.prototype,"tooltip",2);c([X("status")],D.prototype,"handleStatusChange",1);c([X(["copyLabel","successLabel","errorLabel"])],D.prototype,"handleLabelChange",1);c([X(["tooltipPlacement","disabled"],{waitUntilFirstUpdate:!0})],D.prototype,"handleTooltipOptionsChange",1);c([X("tooltip",{waitUntilFirstUpdate:!0})],D.prototype,"handleTooltipModeChange",1);D=c([j("wa-copy-button")],D);var Or=G`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`;var De=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Ve=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var ze=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var Me=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var T=class extends K{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&qt(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=t=>{if(this.hasTrigger("hover")){let o=t.relatedTarget,e=!!(o&&this.anchor?.contains(o)),a=!!(o&&this.contains(o));if(e||a)return;clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)}}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Fe("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),Io(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,o){let a=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);a.includes(o)||(a.push(o),t.setAttribute("aria-labelledby",a.join(" ")))}removeFromAriaLabelledBy(t,o){let i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(r=>r!==o);i.length>0?t.setAttribute("aria-labelledby",i.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let t=new De;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),fo(this),this.body.hidden=!1,this.popup.active=!0,await dt(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new ze)}else{let t=new Ve;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),Io(this),await dt(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Me)}}handleForChange(){let t=this.getRootNode?.();if(!t)return;let o=this.for?t.getElementById?.(this.for):null,e=this.anchor;if(o===e)return;let{signal:a}=this.eventController;o&&(this.addToAriaLabelledBy(o,this.id),o.addEventListener("blur",this.handleBlur,{capture:!0,signal:a}),o.addEventListener("focus",this.handleFocus,{capture:!0,signal:a}),o.addEventListener("click",this.handleClick,{signal:a}),o.addEventListener("mouseover",this.handleMouseOver,{signal:a}),o.addEventListener("mouseout",this.handleMouseOut,{signal:a})),e&&(this.removeFromAriaLabelledBy(e,this.id),e.removeEventListener("blur",this.handleBlur,{capture:!0}),e.removeEventListener("focus",this.handleFocus,{capture:!0}),e.removeEventListener("click",this.handleClick),e.removeEventListener("mouseover",this.handleMouseOver),e.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=o}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Uo(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,Uo(this,"wa-after-hide")}render(){return U`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${q({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};T.css=Or;T.dependencies={"wa-popup":N};c([S("slot:not([name])")],T.prototype,"defaultSlot",2);c([S(".body")],T.prototype,"body",2);c([S("wa-popup")],T.prototype,"popup",2);c([d()],T.prototype,"placement",2);c([d({type:Boolean,reflect:!0})],T.prototype,"disabled",2);c([d({type:Number})],T.prototype,"distance",2);c([d({type:Boolean,reflect:!0})],T.prototype,"open",2);c([d({type:Number})],T.prototype,"skidding",2);c([d({attribute:"show-delay",type:Number})],T.prototype,"showDelay",2);c([d({attribute:"hide-delay",type:Number})],T.prototype,"hideDelay",2);c([d()],T.prototype,"trigger",2);c([d({attribute:"without-arrow",type:Boolean,reflect:!0})],T.prototype,"withoutArrow",2);c([d()],T.prototype,"for",2);c([R()],T.prototype,"anchor",2);c([X("open",{waitUntilFirstUpdate:!0})],T.prototype,"handleOpenChange",1);c([X("for")],T.prototype,"handleForChange",1);c([X(["distance","placement","skidding"])],T.prototype,"handleOptionsChange",1);c([X("disabled")],T.prototype,"handleDisabledChange",1);T=c([j("wa-tooltip")],T);var Aa=new Set;function gc(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function bc(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Ua(t){if(Aa.add(t),!document.documentElement.classList.contains("wa-scroll-lock")){let o=gc()+bc(),e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),o<2&&(e=""),document.documentElement.style.setProperty("--wa-scroll-lock-gutter",e),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${o}px`)}}function xa(t){Aa.delete(t),Aa.size===0&&(document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size"))}function kr(t){return t.split(" ").map(o=>o.trim()).filter(o=>o!=="")}var Rr=G`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`;var Gt=class extends K{constructor(){super(...arguments),this.localize=new bt(this),this.hasSlotController=new $t(this,"footer","header-actions","label"),this.open=!1,this.label="",this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&qt(this)&&(t.preventDefault(),t.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Ua(this))}disconnectedCallback(){super.disconnectedCallback(),xa(this),this.removeOpenListeners()}async requestClose(t){let o=new Ve({source:t});if(this.dispatchEvent(o),o.defaultPrevented){this.open=!0,dt(this.dialog,"pulse");return}this.removeOpenListeners(),await dt(this.dialog,"hide"),this.open=!1,this.dialog.close(),xa(this);let e=this.originalTrigger;typeof e?.focus=="function"&&setTimeout(()=>e.focus()),this.dispatchEvent(new Me)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown),fo(this)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown),Io(this)}handleDialogCancel(t){t.preventDefault(),!this.dialog.classList.contains("hide")&&t.target===this.dialog&&qt(this)&&this.requestClose(this.dialog)}handleDialogClick(t){let e=t.target.closest('[data-dialog="close"]');e&&(t.stopPropagation(),this.requestClose(e))}async handleDialogPointerDown(t){t.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await dt(this.dialog,"pulse"))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){let t=new De;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Ua(this),requestAnimationFrame(()=>{let o=this.querySelector("[autofocus]");o&&typeof o.focus=="function"?o.focus():this.dialog.focus()}),await dt(this.dialog,"show"),this.dispatchEvent(new ze)}render(){let t=!this.withoutHeader,o=this.hasSlotController.test("footer","withFooter");return U`
      <dialog
        part="dialog"
        class=${q({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${t?U`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:"\u200B"} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <footer part="footer" class="footer" ?hidden=${!o}>
          <slot name="footer"></slot>
        </footer>
      </dialog>
    `}};Gt.css=Rr;c([S(".dialog")],Gt.prototype,"dialog",2);c([d({type:Boolean,reflect:!0})],Gt.prototype,"open",2);c([d({reflect:!0})],Gt.prototype,"label",2);c([d({attribute:"without-header",type:Boolean,reflect:!0})],Gt.prototype,"withoutHeader",2);c([d({attribute:"light-dismiss",type:Boolean})],Gt.prototype,"lightDismiss",2);c([d({attribute:"with-footer",type:Boolean})],Gt.prototype,"withFooter",2);c([X("open",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleOpenChange",1);Gt=c([j("wa-dialog")],Gt);document.addEventListener("click",t=>{let o=t.target.closest("[data-dialog]");if(o instanceof Element){let[e,a]=kr(o.getAttribute("data-dialog")||"");if(e==="open"&&a?.length){let r=o.getRootNode().getElementById(a);r?.localName==="wa-dialog"?r.open=!0:console.warn(`A dialog with an ID of "${a}" could not be found in this document.`)}}}),document.addEventListener("pointerdown",()=>{});var Ga=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Xa(t,o,e,a){t.addEventListener?t.addEventListener(o,e,a):t.attachEvent&&t.attachEvent(`on${o}`,e)}function le(t,o,e,a){t&&(t.removeEventListener?t.removeEventListener(o,e,a):t.detachEvent&&t.detachEvent(`on${o}`,e))}function Vr(t,o){let e=o.slice(0,o.length-1),a=[];for(let i=0;i<e.length;i++)a.push(t[e[i].toLowerCase()]);return a}function zr(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");let o=t.split(","),e=o.lastIndexOf("");for(;e>=0;)o[e-1]+=",",o.splice(e,1),e=o.lastIndexOf("");return o}function hc(t,o){let e=t.length>=o.length?t:o,a=t.length>=o.length?o:t,i=!0;for(let r=0;r<e.length;r++)a.indexOf(e[r])===-1&&(i=!1);return i}function Mr(t){let o=t.keyCode||t.which||t.charCode;return t.key&&/^[a-z]$/i.test(t.key)?t.key.toUpperCase().charCodeAt(0):(t.code&&/^Key[A-Z]$/.test(t.code)&&(o=t.code.charCodeAt(3)),o)}var se={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,arrowup:38,arrowdown:40,arrowleft:37,arrowright:39,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ga?173:189,"=":Ga?61:187,";":Ga?59:186,"'":222,"{":219,"}":221,"[":219,"]":221,"\\":220},Ft={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,meta:91,command:91},ce={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},tt={16:!1,18:!1,17:!1,91:!1},M={};for(let t=1;t<20;t++)se[`f${t}`]=111+t;var V=[],ne=null,So=null,Jr="all",Mt=new Map,No=t=>se[t.toLowerCase()]||Ft[t.toLowerCase()]||t.toUpperCase().charCodeAt(0),uc=t=>Object.keys(se).find(o=>se[o]===t),mc=t=>Object.keys(Ft).find(o=>Ft[o]===t),jr=t=>{Jr=t||"all"},de=()=>Jr||"all",Ic=()=>V.slice(0),Cc=()=>V.map(t=>uc(t)||mc(t)||String.fromCharCode(t)),pc=()=>{let t=[];return Object.keys(M).forEach(o=>{M[o].forEach(({key:e,scope:a,mods:i,shortcut:r})=>{t.push({scope:a,shortcut:r,mods:i,keys:e.split("+").map(l=>No(l))})})}),t},Tr=t=>{let o=t.target||t.srcElement,{tagName:e}=o,a=!0,i=e==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(o.type);return(o.isContentEditable||(i||e==="TEXTAREA"||e==="SELECT")&&!o.readOnly)&&(a=!1),a},wc=t=>(typeof t=="string"&&(t=No(t)),V.indexOf(t)!==-1),Qc=(t,o)=>{let e,a;t||(t=de());for(let i in M)if(Object.prototype.hasOwnProperty.call(M,i))for(e=M[i],a=0;a<e.length;)e[a].scope===t?e.splice(a,1).forEach(({element:l})=>Za(l)):a++;de()===t&&jr(o||"all")};function Lc(t){let o=Mr(t);t.key&&t.key.toLowerCase()==="capslock"&&(o=No(t.key));let e=V.indexOf(o);if(e>=0&&V.splice(e,1),t.key&&t.key.toLowerCase()==="meta"&&V.splice(0,V.length),(o===93||o===224)&&(o=91),o in tt){tt[o]=!1;for(let a in Ft)Ft[a]===o&&(Nt[a]=!1)}}var Hr=(t,...o)=>{if(typeof t>"u")Object.keys(M).forEach(e=>{Array.isArray(M[e])&&M[e].forEach(a=>Je(a)),delete M[e]}),Za(null);else if(Array.isArray(t))t.forEach(e=>{e.key&&Je(e)});else if(typeof t=="object")t.key&&Je(t);else if(typeof t=="string"){let[e,a]=o;typeof e=="function"&&(a=e,e=""),Je({key:t,scope:e,method:a,splitKey:"+"})}},Je=({key:t,scope:o,method:e,splitKey:a="+"})=>{zr(t).forEach(r=>{let l=r.split(a),s=l.length,n=l[s-1],g=n==="*"?"*":No(n);if(!M[g])return;o||(o=de());let h=s>1?Vr(Ft,l):[],u=[];M[g]=M[g].filter(m=>{let I=(e?m.method===e:!0)&&m.scope===o&&hc(m.mods,h);return I&&u.push(m.element),!I}),u.forEach(m=>Za(m))})};function Er(t,o,e,a){if(o.element!==a)return;let i;if(o.scope===e||o.scope==="all"){i=o.mods.length>0;for(let r in tt)Object.prototype.hasOwnProperty.call(tt,r)&&(!tt[r]&&o.mods.indexOf(+r)>-1||tt[r]&&o.mods.indexOf(+r)===-1)&&(i=!1);(o.mods.length===0&&!tt[16]&&!tt[18]&&!tt[17]&&!tt[91]||i||o.shortcut==="*")&&(o.keys=[],o.keys=o.keys.concat(V),o.method(t,o)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}function Dr(t,o){let e=M["*"],a=Mr(t);if(t.key&&t.key.toLowerCase()==="capslock"||!(Nt.filter||Tr).call(this,t))return;if((a===93||a===224)&&(a=91),V.indexOf(a)===-1&&a!==229&&V.push(a),["metaKey","ctrlKey","altKey","shiftKey"].forEach(n=>{let g=ce[n];t[n]&&V.indexOf(g)===-1?V.push(g):!t[n]&&V.indexOf(g)>-1?V.splice(V.indexOf(g),1):n==="metaKey"&&t[n]&&(V=V.filter(h=>h in ce||h===a))}),a in tt){tt[a]=!0;for(let n in Ft)if(Object.prototype.hasOwnProperty.call(Ft,n)){let g=ce[Ft[n]];Nt[n]=t[g]}if(!e)return}for(let n in tt)Object.prototype.hasOwnProperty.call(tt,n)&&(tt[n]=t[ce[n]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(V.indexOf(17)===-1&&V.push(17),V.indexOf(18)===-1&&V.push(18),tt[17]=!0,tt[18]=!0);let r=de();if(e)for(let n=0;n<e.length;n++)e[n].scope===r&&(t.type==="keydown"&&e[n].keydown||t.type==="keyup"&&e[n].keyup)&&Er(t,e[n],r,o);if(!(a in M))return;let l=M[a],s=l.length;for(let n=0;n<s;n++)if((t.type==="keydown"&&l[n].keydown||t.type==="keyup"&&l[n].keyup)&&l[n].key){let g=l[n],{splitKey:h}=g,u=g.key.split(h),m=[];for(let C=0;C<u.length;C++)m.push(No(u[C]));m.sort().join("")===V.sort().join("")&&Er(t,g,r,o)}}var Nt=function t(o,e,a){V=[];let i=zr(o),r=[],l="all",s=document,n=0,g=!1,h=!0,u="+",m=!1,C=!1;if(a===void 0&&typeof e=="function"&&(a=e),Object.prototype.toString.call(e)==="[object Object]"){let I=e;I.scope&&(l=I.scope),I.element&&(s=I.element),I.keyup&&(g=I.keyup),I.keydown!==void 0&&(h=I.keydown),I.capture!==void 0&&(m=I.capture),typeof I.splitKey=="string"&&(u=I.splitKey),I.single===!0&&(C=!0)}for(typeof e=="string"&&(l=e),C&&Hr(o,l);n<i.length;n++){let I=i[n].split(u);r=[],I.length>1&&(r=Vr(Ft,I));let Q=I[I.length-1];Q=Q==="*"?"*":No(Q),Q in M||(M[Q]=[]),M[Q].push({keyup:g,keydown:h,scope:l,mods:r,shortcut:i[n],method:a,key:i[n],splitKey:u,element:s})}if(typeof s<"u"&&typeof window<"u"){if(!Mt.has(s)){let I=(v=window.event)=>Dr(v,s),Q=(v=window.event)=>{Dr(v,s),Lc(v)};Mt.set(s,{keydownListener:I,keyupListenr:Q,capture:m}),Xa(s,"keydown",I,m),Xa(s,"keyup",Q,m)}if(!ne){let I=()=>{V=[]};ne={listener:I,capture:m},Xa(window,"focus",I,m)}if(!So&&typeof document<"u"){let I=()=>{V=[];for(let y in tt)tt[y]=!1;for(let y in Ft)t[y]=!1},Q=I,v=I;document.addEventListener("fullscreenchange",Q),document.addEventListener("webkitfullscreenchange",v),So={fullscreen:Q,webkit:v}}}};function vc(t,o="all"){Object.keys(M).forEach(e=>{M[e].filter(i=>i.scope===o&&i.shortcut===t).forEach(i=>{i&&i.method&&i.method({},i)})})}function Za(t){let o=Object.values(M).flat();if(o.findIndex(({element:a})=>a===t)<0&&t){let{keydownListener:a,keyupListenr:i,capture:r}=Mt.get(t)||{};a&&i&&(le(t,"keyup",i,r),le(t,"keydown",a,r),Mt.delete(t))}if(o.length<=0||Mt.size<=0){if(Array.from(Mt.keys()).forEach(i=>{let{keydownListener:r,keyupListenr:l,capture:s}=Mt.get(i)||{};r&&l&&(le(i,"keyup",l,s),le(i,"keydown",r,s),Mt.delete(i))}),Mt.clear(),Object.keys(M).forEach(i=>delete M[i]),ne){let{listener:i,capture:r}=ne;le(window,"focus",i,r),ne=null}So&&typeof document<"u"&&(document.removeEventListener("fullscreenchange",So.fullscreen),document.removeEventListener("webkitfullscreenchange",So.webkit),So=null)}}var Wa={getPressedKeyString:Cc,setScope:jr,getScope:de,deleteScope:Qc,getPressedKeyCodes:Ic,getAllKeyCodes:pc,isPressed:wc,filter:Tr,trigger:vc,unbind:Hr,keyMap:se,modifier:Ft,modifierMap:ce};for(let t in Wa){let o=t;Object.prototype.hasOwnProperty.call(Wa,o)&&(Nt[o]=Wa[o])}if(typeof window<"u"){let t=window.hotkeys;Nt.noConflict=o=>(o&&window.hotkeys===Nt&&(window.hotkeys=t),Nt),window.hotkeys=Nt}var Ya=class Ya extends HTMLElement{connectedCallback(){this._previousScrollPosition=window.scrollY,this._scroller=this.scrollHandler.bind(this),document.addEventListener("scroll",this._scroller),this.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),this.removeAttribute("active")})}disconnectedCallback(){document.removeEventListener("scroll",this._scroller)}scrollHandler(o){let e=window.scrollY;window.requestAnimationFrame(()=>{e>400&&e<this._previousScrollPosition-100?(this._previousScrollPosition=e,this.removeAttribute("active")):e>this._previousScrollPosition+100&&(this._previousScrollPosition=e,this.setAttribute("active",!0))})}};customElements.define("wll-back-to-top",Ya);var Kr=Ya;var Sa=class Sa extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){document.body.classList.contains("wll-code-dark")&&this.classList.add("wa-dark"),this.shadowRoot.innerHTML=`
      <style>
        :host {
          border: 1px solid var(--wa-color-brand-border-quiet);
          border-radius: var(--wa-border-radius-m);
          overflow: hidden;
          background: var(--wll-main-background);
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top-left-radius: var(--wa-border-radius-m);
          border-top-right-radius: var(--wa-border-radius-m);
          border-bottom: 1px solid var(--wa-color-brand-border-quiet);
          background: var(--wa-color-brand-fill-quiet);
          font-size: var(--wa-font-size-s);
          text-transform: uppercase;
          padding-block: 2px;
          padding-inline: var(--wa-space-s);
          font-weight: var(--wa-font-weight-bold);
        }
      </style>

      <header><span>${this.getAttribute("class").split(" ")[0].split("-")[1]}</span> <slot name="copy-button"></slot></header>
      <slot></slot>
    `,this.firstElementChild.id=crypto.randomUUID();let o=document.createElement("wa-copy-button");o.slot="copy-button",o.from=this.firstElementChild.id,this.append(o)}};customElements.define("wll-code",Sa);var qr=Sa;var{default:I2}=$r(),Oa=class Oa extends HTMLElement{connectedCallback(){setTimeout(()=>{this.querySelector(":scope > wa-dialog").addEventListener("wa-show",this),this.querySelector(":scope > wa-dialog").addEventListener("wa-after-hide",this)})}handleEvent(o){o.type==="wa-show"?this.handleShow():o.type=="wa-after-hide"&&this.handleHide()}async handleShow(){let o=await(await fetch("/search")).text();this.querySelector("wll-dialog-inner").replaceWith(Document.parseHTMLUnsafe(o).querySelector("wll-search-page")),setTimeout(()=>this.querySelector("wa-input").focus());let e=this.querySelector("script").textContent;this.querySelector("script").remove();let a=document.createElement("script");a.type="module",a.textContent=e,document.body.append(a)}handleHide(){this.querySelector("wll-search-page").replaceWith(document.createElement("wll-dialog-inner"))}};customElements.define("wll-search-dialog",Oa);var _r=Oa;customElements.define("wll-search-page",class extends HTMLElement{connectedCallback(){this.addEventListener("input",this),this.addEventListener("keydown",t=>{if(t.key==="ArrowDown")document.activeElement.localName==="wa-input"?(t.preventDefault(),this.querySelector("a")?.focus()):document.activeElement.localName==="a"&&(t.preventDefault(),document.activeElement.closest("li").nextElementSibling?.querySelector("a")?.focus());else if(t.key==="ArrowUp"&&document.activeElement.localName==="a"){t.preventDefault();let o=document.activeElement.closest("li").previousElementSibling;o?o.querySelector("a").focus():this.querySelector("wa-input").focus()}}),this.tmpl=this.querySelector("template#search-result-template")}async handleEvent(t){console.log(t.target.value);let o=this.querySelector("wll-search-results > ul"),e=await pagefind.debouncedSearch(t.target.value);e===null||(o.replaceChildren(),e.results.length>0?e.results.forEach(async a=>{let i=await a.data(),r=this.tmpl.content.cloneNode(!0);r.querySelector("[data-title]").innerHTML=`<a href="${i.url}">${i.meta.title}</a>`,r.querySelector("[data-excerpt").innerHTML=i.excerpt,this.querySelector("wll-search-results > ul").append(r)}):o.setHTMLUnsafe(`
          <li><p><wa-icon name="search"></wa-icon> <em>No results could be found.</em></p></li>
        `))}});var Pr={init:function(){let t="auto",o=window.matchMedia("(prefers-color-scheme: dark)"),e=function(s=o){let n=t==="auto"?s.matches:t==="dark";document.documentElement.classList.toggle("wa-dark",n)};o.addEventListener("change",e),e();let a=document.querySelector("#markdown-toc");a&&(this.relocateTOC(a),this.setupScrollListener(a));let i=document.querySelector("#explore-menu");i&&i.addEventListener("toggle",()=>{localStorage.setItem("explore-menu-opened",i.open?"true":"false")}),window.matchMedia("(max-width: 767px)").matches&&document.querySelectorAll("aside > details").forEach(s=>{s.id==="explore-menu"&&localStorage.getItem("explore-menu-opened")==="true"||(s.open=!1)});let l=document.querySelector("body > header a[slot=search]");l&&(Nt("cmd+k,ctrl+k",s=>{s.preventDefault(),this.openSearch()}),l.addEventListener("click",s=>{s.preventDefault(),this.openSearch()})),console.debug("Success! Willamette has been loaded.")},openSearch(){document.querySelector("#search-dialog").open=!0},relocateTOC(t){document.querySelector("main > .show-mid-screen").hidden=!1;let o=document.querySelector("aside[slot=sidebar-end]");o.hidden=!1,o.append(t),o.addEventListener("click",e=>{e.target.localName==="a"&&document.body.classList.toggle("sidebar-end-open",!1)})},setupScrollListener(t){let o=document.querySelector("main").querySelectorAll(":is(h2,h3,h4):not(.no_toc)"),e=t.querySelectorAll("li > a");window.addEventListener("scroll",a=>{if(typeof o<"u"&&o!=null&&typeof e<"u"&&e!=null){let i=window.scrollY;e.forEach(r=>{r.classList.remove("scrolled-in-view")});for(let r=o.length-1;r>=0;r--)if(i>o[r].offsetTop-25){e[r].classList.add("scrolled-in-view");break}}})}};Pr.init();console.info("Bridgetown is loaded!");})();
/*! Bundled license information:

hotkeys-js/dist/hotkeys-js.umd.cjs:
  (*!
  * hotkeys-js v4.0.4
  * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
  * 
  * @author kenny wong <wowohoo@qq.com>
  * @license MIT
  * @homepage https://jaywcjlove.github.io/hotkeys-js
  *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@awesome.me/webawesome/dist/chunks/chunk.LCEGCF5S.js:
@awesome.me/webawesome/dist/chunks/chunk.RPQJAXXR.js:
@awesome.me/webawesome/dist/chunks/chunk.G5ZZIGWB.js:
@awesome.me/webawesome/dist/chunks/chunk.XNTP7DEQ.js:
@awesome.me/webawesome/dist/chunks/chunk.PZAN6FPN.js:
@awesome.me/webawesome/dist/chunks/chunk.7VGCIHDG.js:
@awesome.me/webawesome/dist/chunks/chunk.AOKMSJXD.js:
@awesome.me/webawesome/dist/chunks/chunk.C6MKRB3S.js:
@awesome.me/webawesome/dist/components/callout/callout.js:
@awesome.me/webawesome/dist/chunks/chunk.WYNTFJHW.js:
@awesome.me/webawesome/dist/chunks/chunk.2ZAJEMB4.js:
@awesome.me/webawesome/dist/chunks/chunk.52WA2DJO.js:
@awesome.me/webawesome/dist/chunks/chunk.GWSUX3V5.js:
@awesome.me/webawesome/dist/chunks/chunk.5LXXXELE.js:
@awesome.me/webawesome/dist/chunks/chunk.XZOAK3IQ.js:
@awesome.me/webawesome/dist/chunks/chunk.KNJT7KBU.js:
@awesome.me/webawesome/dist/chunks/chunk.VC3BPUZJ.js:
@awesome.me/webawesome/dist/chunks/chunk.KBXNFZQL.js:
@awesome.me/webawesome/dist/chunks/chunk.RWNXKUCF.js:
@awesome.me/webawesome/dist/chunks/chunk.F25QOBDY.js:
@awesome.me/webawesome/dist/chunks/chunk.L6CIKOFQ.js:
@awesome.me/webawesome/dist/chunks/chunk.HK4J654O.js:
@awesome.me/webawesome/dist/chunks/chunk.CDGKIW7Y.js:
@awesome.me/webawesome/dist/chunks/chunk.PLRDBFRA.js:
@awesome.me/webawesome/dist/chunks/chunk.JTOY5KP3.js:
@awesome.me/webawesome/dist/chunks/chunk.DOFHHKB4.js:
@awesome.me/webawesome/dist/chunks/chunk.ODECC6XW.js:
@awesome.me/webawesome/dist/chunks/chunk.R7QX4M6R.js:
@awesome.me/webawesome/dist/chunks/chunk.APJ42YJ7.js:
@awesome.me/webawesome/dist/chunks/chunk.ZWQCGLB5.js:
@awesome.me/webawesome/dist/chunks/chunk.HS5AYC6E.js:
@awesome.me/webawesome/dist/chunks/chunk.7MPIABXH.js:
@awesome.me/webawesome/dist/chunks/chunk.3CFUTVFX.js:
@awesome.me/webawesome/dist/chunks/chunk.N2SS4JTL.js:
@awesome.me/webawesome/dist/chunks/chunk.W7A2VLCT.js:
@awesome.me/webawesome/dist/chunks/chunk.JBGB3CLX.js:
@awesome.me/webawesome/dist/chunks/chunk.BBOO36QE.js:
@awesome.me/webawesome/dist/chunks/chunk.IB5IGK3H.js:
@awesome.me/webawesome/dist/chunks/chunk.YDQCS2HK.js:
@awesome.me/webawesome/dist/chunks/chunk.WDIIGUNP.js:
@awesome.me/webawesome/dist/chunks/chunk.W6JCCVOH.js:
@awesome.me/webawesome/dist/chunks/chunk.HGBRCPUS.js:
@awesome.me/webawesome/dist/chunks/chunk.D4VAJWKJ.js:
@awesome.me/webawesome/dist/chunks/chunk.XTA2JDH4.js:
@awesome.me/webawesome/dist/chunks/chunk.L2IYIH2C.js:
@awesome.me/webawesome/dist/chunks/chunk.4TFM52NM.js:
@awesome.me/webawesome/dist/components/color-picker/color-picker.js:
@awesome.me/webawesome/dist/chunks/chunk.NY2PQ35L.js:
@awesome.me/webawesome/dist/chunks/chunk.YDWBRJAR.js:
@awesome.me/webawesome/dist/chunks/chunk.FXXRVH6C.js:
@awesome.me/webawesome/dist/chunks/chunk.TKL7YZKI.js:
@awesome.me/webawesome/dist/chunks/chunk.4ZAKP7NY.js:
@awesome.me/webawesome/dist/chunks/chunk.MQODJ75V.js:
@awesome.me/webawesome/dist/chunks/chunk.PX3HMKF7.js:
@awesome.me/webawesome/dist/chunks/chunk.3NKIHICW.js:
@awesome.me/webawesome/dist/chunks/chunk.ULEOIS5V.js:
@awesome.me/webawesome/dist/components/copy-button/copy-button.js:
@awesome.me/webawesome/dist/components/button/button.js:
@awesome.me/webawesome/dist/chunks/chunk.VQZ46MYI.js:
@awesome.me/webawesome/dist/chunks/chunk.RMZ7BVDM.js:
@awesome.me/webawesome/dist/chunks/chunk.XTG2LNFG.js:
@awesome.me/webawesome/dist/chunks/chunk.Q4MSGKHB.js:
@awesome.me/webawesome/dist/components/dialog/dialog.js:
@awesome.me/webawesome/dist/components/icon/icon.js:
  (*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
lit-html/directives/if-defined.js:
lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/live.js:
lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

hotkeys-js/dist/hotkeys-js.js:
  (*!
   * hotkeys-js v4.0.4
   * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
   * 
   * @author kenny wong <wowohoo@qq.com>
   * @license MIT
   * @homepage https://jaywcjlove.github.io/hotkeys-js
   *)
*/
//# sourceMappingURL=/_bridgetown/static/index.XQWQNKVJ.js.map
