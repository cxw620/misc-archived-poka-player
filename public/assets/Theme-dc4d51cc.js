import{q as x,i as A,l as P,C as re,D as se,E as ae,G as K,r as U,o as S,c as V,e as ie,b as r,t as l,T as le,z as v,A as O,F as k,H as C,s as ue,f as Q,w as de,d as pe}from"./index-62808526.js";var W;const b=typeof window<"u",ce=e=>typeof e=="function",fe=e=>typeof e=="string",_e=()=>{};b&&((W=window==null?void 0:window.navigator)==null?void 0:W.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function X(e){return typeof e=="function"?e():x(e)}function ve(e,o){function t(...n){e(()=>o.apply(this,n),{fn:o,thisArg:this,args:n})}return t}const Y=e=>e();function me(e=Y){const o=A(!0);function t(){o.value=!1}function n(){o.value=!0}return{isActive:o,pause:t,resume:n,eventFilter:(...u)=>{o.value&&e(...u)}}}function he(e){return e}function ge(e){return re()?(se(e),!0):!1}var B=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Oe=(e,o)=>{var t={};for(var n in e)ye.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&B)for(var n of B(e))o.indexOf(n)<0&&we.call(e,n)&&(t[n]=e[n]);return t};function be(e,o,t={}){const n=t,{eventFilter:s=Y}=n,u=Oe(n,["eventFilter"]);return P(e,ve(s,o),u)}var $e=Object.defineProperty,Se=Object.defineProperties,xe=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,R=(e,o,t)=>o in e?$e(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Pe=(e,o)=>{for(var t in o||(o={}))Z.call(o,t)&&R(e,t,o[t]);if(E)for(var t of E(o))ee.call(o,t)&&R(e,t,o[t]);return e},Ee=(e,o)=>Se(e,xe(o)),Ie=(e,o)=>{var t={};for(var n in e)Z.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&E)for(var n of E(e))o.indexOf(n)<0&&ee.call(e,n)&&(t[n]=e[n]);return t};function Ve(e,o,t={}){const n=t,{eventFilter:s}=n,u=Ie(n,["eventFilter"]),{eventFilter:f,pause:a,resume:w,isActive:_}=me(s);return{stop:be(e,o,Ee(Pe({},u),{eventFilter:f})),pause:a,resume:w,isActive:_}}function ke(e){var o;const t=X(e);return(o=t==null?void 0:t.$el)!=null?o:t}const N=b?window:void 0;b&&window.document;b&&window.navigator;b&&window.location;function Ce(...e){let o,t,n,s;if(fe(e[0])||Array.isArray(e[0])?([t,n,s]=e,o=N):[o,t,n,s]=e,!o)return _e;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const u=[],f=()=>{u.forEach(p=>p()),u.length=0},a=(p,c,g)=>(p.addEventListener(c,g,s),()=>p.removeEventListener(c,g,s)),w=P(()=>ke(o),p=>{f(),p&&u.push(...t.flatMap(c=>n.map(g=>a(p,c,g))))},{immediate:!0,flush:"post"}),_=()=>{w(),f()};return ge(_),_}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";j[T]=j[T]||{};const Ne=j[T];function je(e,o){return Ne[e]||o}function Te(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ae=Object.defineProperty,z=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,J=(e,o,t)=>o in e?Ae(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,M=(e,o)=>{for(var t in o||(o={}))Fe.call(o,t)&&J(e,t,o[t]);if(z)for(var t of z(o))Le.call(o,t)&&J(e,t,o[t]);return e};const De={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ue(e,o,t,n={}){var s;const{flush:u="pre",deep:f=!0,listenToStorageChanges:a=!0,writeDefaults:w=!0,mergeDefaults:_=!1,shallow:p,window:c=N,eventFilter:g,onError:I=i=>{console.error(i)}}=n,y=(p?ae:A)(o);if(!t)try{t=je("getDefaultStorage",()=>{var i;return(i=N)==null?void 0:i.localStorage})()}catch(i){I(i)}if(!t)return y;const m=X(o),F=Te(m),$=(s=n.serializer)!=null?s:De[F],{pause:te,resume:L}=Ve(y,()=>oe(y.value),{flush:u,deep:f,eventFilter:g});return c&&a&&Ce(c,"storage",D),D(),y;function oe(i){try{if(i==null)t.removeItem(e);else{const d=$.write(i),h=t.getItem(e);h!==d&&(t.setItem(e,d),c&&(c==null||c.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:h,newValue:d,storageArea:t}))))}}catch(d){I(d)}}function ne(i){const d=i?i.newValue:t.getItem(e);if(d==null)return w&&m!==null&&t.setItem(e,$.write(m)),m;if(!i&&_){const h=$.read(d);return ce(_)?_(h,m):F==="object"&&!Array.isArray(h)?M(M({},m),h):h}else return typeof d!="string"?d:$.read(d)}function D(i){if(!(i&&i.storageArea!==t)){if(i&&i.key==null){y.value=m;return}if(!(i&&i.key!==e)){te();try{y.value=ne(i)}catch(d){I(d)}finally{i?K(L):L()}}}}}var H;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(H||(H={}));var Qe=Object.defineProperty,G=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,q=(e,o,t)=>o in e?Qe(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Re=(e,o)=>{for(var t in o||(o={}))We.call(o,t)&&q(e,t,o[t]);if(G)for(var t of G(o))Be.call(o,t)&&q(e,t,o[t]);return e};const ze={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Re({linear:he},ze);const Je={style:{"margin-bottom":"var(--padding)"}},Me={class:"setting-item"},He={class:"content"},Ge={class:"title"},qe={class:"control"},Ke={value:"light"},Xe={value:"dark"},Ye={value:"red"},Ze={value:"custom"},et={class:"setting-item"},tt={class:"content"},ot={class:"title"},nt={class:"control"},rt=r("optgroup",{label:"🌑"},null,-1),st=r("option",{value:"0,0,0"},"0 ",-1),at=r("option",{value:"25,25,25"},"25 ",-1),it={value:"51,51,51"},lt=r("option",{value:"200,200,200"},"200",-1),ut=r("option",{value:"230,230,230"},"230 ",-1),dt=r("option",{value:"255,255,255"},"255 ",-1),pt=r("optgroup",{label:"☀️"},null,-1),ct={class:"setting-item"},ft={class:"content"},_t={class:"title"},vt={class:"control"},mt=r("datalist",{id:"presetColors"},[r("option",null,"#ffffff"),r("option",null,"#f2f2f2"),r("option",null,"#eeeeee"),r("option",null,"#333333"),r("option",null,"#2e2e2e"),r("option",null,"#222222"),r("option",null,"#1e1e1e"),r("option",null,"#111111")],-1),ht={style:{"margin-bottom":"var(--padding)"}},gt={style:{"margin-bottom":"var(--padding)"}},yt={class:"setting-item"},wt={class:"content"},Ot={class:"title"},bt={class:"control"},$t=r("option",{value:"72px"},"72px ",-1),St=r("option",{value:"96px"},"96px ",-1),xt={value:"128px"},Pt=r("option",{value:"160px"},"160px ",-1),Et=r("option",{value:"192px"},"192px ",-1),It={class:"setting-item"},Vt={class:"content"},kt={class:"title"},Ct={class:"control"},Nt=r("option",{value:"4px"},"4px ",-1),jt=r("option",{value:"8px"},"8px ",-1),Tt={value:"12px"},At=r("option",{value:"16px"},"16px ",-1),Ft=r("option",{value:"24px"},"24px ",-1),Lt={class:"setting-item"},Dt={class:"content"},Ut={class:"title"},Qt={class:"control"},Wt=r("option",{value:"4px"},"4px ",-1),Bt={value:"8px"},Rt=r("option",{value:"10px"},"10px ",-1),zt=r("option",{value:"12px"},"12px ",-1),Jt=r("option",{value:"16px"},"16px ",-1),Ht={__name:"Theme",setup(e){const o=Ue("poka.theme",{theme:"light",cssText:""}),t=A({"--border-radius":"12px","--padding":"8px","--min-card-width":"128px","--primary-color":"#007bff","--background-layer-1":"#ffffff","--background-layer-2":"#f8f9fa","--text-color-value":"51,51,51"});for(let n in t.value)t.value[n]=document.documentElement.style.getPropertyValue(n)||t.value[n];return P(o,n=>{let s={light:{backgroundLayer1:"#fff",backgroundLayer2:"#f2f2f2",textColorValue:"51,51,51"},dark:{backgroundLayer1:"#1e1e1e",backgroundLayer2:"#2e2e2e",textColorValue:"255,255,255"},red:{backgroundLayer1:"#f52547",backgroundLayer2:"#d61837",textColorValue:"255,255,255"}};Object.keys(s).includes(n.theme)&&(t.value["--background-layer-1"]=s[n.theme].backgroundLayer1,t.value["--background-layer-2"]=s[n.theme].backgroundLayer2,t.value["--text-color-value"]=s[n.theme].textColorValue)}),P(t,n=>{for(let s in n)document.documentElement.style.setProperty(s,n[s]);K(()=>{o.value.cssText=document.documentElement.style.cssText})},{deep:!0}),(n,s)=>{const u=U("p-card"),f=U("p-cards");return S(),V(k,null,[(S(),ie(le,{to:"#header-center"},[r("p",null,l(n.$t("settings.theme.title")),1)])),r("h4",Je,l(n.$t("settings.theme.themeAndColor")),1),r("div",Me,[r("div",He,[r("div",Ge,l(n.$t("settings.theme.title")),1)]),r("div",qe,[v(r("select",{"onUpdate:modelValue":s[0]||(s[0]=a=>x(o).theme=a)},[r("option",Ke,l(n.$t("settings.theme.preset.light")),1),r("option",Xe,l(n.$t("settings.theme.preset.dark")),1),r("option",Ye,l(n.$t("settings.theme.preset.red")),1),r("option",Ze,l(n.$t("settings.theme.preset.custom")),1)],512),[[O,x(o).theme]])])]),x(o).theme=="custom"?(S(),V(k,{key:0},[r("div",et,[r("div",tt,[r("div",ot,l(n.$t("settings.theme.textColor")),1)]),r("div",nt,[v(r("select",{"onUpdate:modelValue":s[1]||(s[1]=a=>t.value["--text-color-value"]=a)},[rt,st,at,r("option",it,"51 ("+l(n.$t("settings.theme.default"))+") ",1),lt,ut,dt,pt],512),[[O,t.value["--text-color-value"]]])])]),r("div",ct,[r("div",ft,[r("div",_t,l(n.$t("settings.theme.color")),1)]),r("div",vt,[v(r("input",{type:"color","onUpdate:modelValue":s[2]||(s[2]=a=>t.value["--primary-color"]=a)},null,512),[[C,t.value["--primary-color"]]]),v(r("input",{type:"color","onUpdate:modelValue":s[3]||(s[3]=a=>t.value["--background-layer-1"]=a),list:"presetColors"},null,512),[[C,t.value["--background-layer-1"]]]),v(r("input",{type:"color","onUpdate:modelValue":s[4]||(s[4]=a=>t.value["--background-layer-2"]=a),list:"presetColors"},null,512),[[C,t.value["--background-layer-2"]]]),mt])])],64)):ue("",!0),r("h4",ht,l(n.$t("settings.theme.preview")),1),Q(f,{style:{margin:"calc(var(--padding) * 2) 0"}},{default:de(()=>[(S(),V(k,null,pe(4,a=>Q(u,{imgSrc:"/img/pwa-512x512.png",title:n.$t("settings.theme.preview"),source:n.$t("settings.theme.preview")},null,8,["title","source"])),64))]),_:1}),r("h4",gt,l(n.$t("settings.theme.style")),1),r("div",yt,[r("div",wt,[r("div",Ot,l(n.$t("settings.theme.cardWidth")),1)]),r("div",bt,[v(r("select",{"onUpdate:modelValue":s[5]||(s[5]=a=>t.value["--min-card-width"]=a)},[$t,St,r("option",xt,"128px ("+l(n.$t("settings.theme.default"))+") ",1),Pt,Et],512),[[O,t.value["--min-card-width"]]])])]),r("div",It,[r("div",Vt,[r("div",kt,l(n.$t("settings.theme.borderRadius")),1)]),r("div",Ct,[v(r("select",{"onUpdate:modelValue":s[6]||(s[6]=a=>t.value["--border-radius"]=a)},[Nt,jt,r("option",Tt,"12px ("+l(n.$t("settings.theme.default"))+")",1),At,Ft],512),[[O,t.value["--border-radius"]]])])]),r("div",Lt,[r("div",Dt,[r("div",Ut,l(n.$t("settings.theme.padding")),1)]),r("div",Qt,[v(r("select",{"onUpdate:modelValue":s[7]||(s[7]=a=>t.value["--padding"]=a)},[Wt,r("option",Bt,"8px ("+l(n.$t("settings.theme.default"))+")",1),Rt,zt,Jt],512),[[O,t.value["--padding"]]])])])],64)}}};export{Ht as default};
