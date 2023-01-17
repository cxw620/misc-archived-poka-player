import{j as w,i as f,I as T,k as N,r as c,o as x,c as R,e as j,b as i,t as v,T as B,f as e,w as a,F,q as P,m as b}from"./index-e2ba9829.js";const $=i("i",{class:"bx bx-edit"},null,-1),E=i("i",{class:"bx bx-revision"},null,-1),q=i("i",{class:"bx bx-cloud-upload"},null,-1),z={style:{margin:"var(--padding) 0"}},M={style:{margin:"var(--padding) 0"}},G={style:{display:"flex","justify-content":"flex-end","margin-top":"var(--padding)",gap:"var(--padding)"}},H={style:{margin:"var(--padding) 0","text-align":"center"}},O={__name:"System",setup(J){const V=w("PokaAPI"),n=w("socket"),g=f(null),r=f(null),p=f(!1),u=f(!1),o=f("Updating..."),k=T(()=>g.value&&r.value?g.value.version!=r.value.tag_name:!1);async function D(){const s=await V.getSystemInfo();g.value=s}async function S(){p.value=!1,u.value=!0,n.emit("update"),n.on("Permission Denied Desu",()=>{u.value=!1,alert("Permission Denied")}),n.on("init",()=>{o.value="Initializing..."}),n.on("git",s=>{o.value={fetch:"Fetching...",reset:"Resetting...",package_updated:"Package updated..."}[s]}),n.on("restart",()=>{o.value="Restarting..."}),n.on("hello",()=>{o.value="System updated!",setTimeout(()=>{location.reload()},1e3)}),n.on("err",async s=>{const t=l=>new Promise(d=>{setTimeout(d,l)});o.value="An error occurred, please check console.",console.error(s),await t(1e3),u.value=!1})}async function U(){!window.confirm("Are you sure you want to restart the system?")||(n.emit("restart"),u.value=!0,o.value="Loading...",n.on("restart",()=>{o.value="Restarting..."}),n.on("hello",()=>{o.value="System restarted!",setTimeout(()=>{location.reload()},1e3)}),n.on("err",async t=>{const l=d=>new Promise(m=>{setTimeout(m,d)});o.value="An error occurred, please check console.",console.error(t),await l(1e3),u.value=!1}))}async function C(){await D();let{debug:s}=g.value,t=await fetch("https://api.github.com/repos/gnehs/PokaPlayer/releases").then(l=>l.json());r.value=t.filter(l=>s||!l.prerelease)[0]}function A(){alert("Not available yet")}return N(async()=>{await C()}),(s,t)=>{const l=c("p-list-item-icon-btn"),d=c("p-list-item-content"),m=c("p-list-item"),I=c("p-list-items"),y=c("p-btn"),h=c("Dialog"),L=c("Loader");return x(),R(F,null,[(x(),j(B,{to:"#header-center"},[i("p",null,v(s.$t("settings.system.title")),1)])),e(I,{"single-row":""},{default:a(()=>[e(m,{tabindex:"0",onClick:A},{default:a(()=>[e(l,null,{default:a(()=>[$]),_:1}),e(d,{title:"Edit config"})]),_:1}),e(m,{tabindex:"0",onClick:U},{default:a(()=>[e(l,null,{default:a(()=>[E]),_:1}),e(d,{title:"Restart"})]),_:1}),e(m,{tabindex:"0",onClick:t[0]||(t[0]=_=>P(k)&&(p.value=!0))},{default:a(()=>[e(l,null,{default:a(()=>[q]),_:1}),e(d,{title:"Update PokaPlayer",description:r.value?P(k)?"New update available":"Up to date":"Loading..."},null,8,["description"])]),_:1})]),_:1}),e(h,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=_=>p.value=_)},{default:a(()=>[i("h2",null,"Update PokaPlayer to "+v(r.value.tag_name),1),i("p",z,v(r.value.body),1),i("p",M,"Release date: "+v(new Date(r.value.published_at).toLocaleString()),1),e(y,{href:r.value.html_url,target:"_blank",rel:"noopener noreferrer",outlined:""},{default:a(()=>[b("View release")]),_:1},8,["href"]),i("div",G,[e(y,{onClick:t[1]||(t[1]=_=>p.value=!1),outlined:""},{default:a(()=>[b("Cancel")]),_:1}),e(y,{onClick:S,color:"primary"},{default:a(()=>[b("Update")]),_:1})])]),_:1},8,["modelValue"]),e(h,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=_=>u.value=_),closeable:!1},{default:a(()=>[e(L,{style:{margin:"calc(var(--padding) * 4) 0"}}),i("p",H,v(o.value),1)]),_:1},8,["modelValue"])],64)}}};export{O as default};
