import{_ as c,r as i,o as u,c as m,b as a,x as _,f as l,w as g,m as b,t as f,p as w,g as h}from"./index-62808526.js";const v="/img/icon.svg";const y={name:"LoginDialog",data(){return{username:localStorage.getItem("username")||"",password:localStorage.getItem("password")||""}},methods:{async login(){(await this.$PokaAPI.login(this.username,this.password)).success&&this.$router.push("/")}}},d=e=>(w("data-v-db9fdb8c"),e=e(),h(),e),V={class:"login-container"},I={class:"login-form"},S=d(()=>a("img",{class:"logo",src:v,alt:"logo"},null,-1)),k=d(()=>a("h1",null,"PokaPlayer",-1));function x(e,o,P,B,t,n){const r=i("p-input"),p=i("p-btn");return u(),m("div",V,[a("div",I,[S,k,a("form",{onSubmit:o[2]||(o[2]=_((...s)=>n.login&&n.login(...s),["prevent"]))},[l(r,{label:e.$t("username"),modelValue:t.username,"onUpdate:modelValue":o[0]||(o[0]=s=>t.username=s),required:""},null,8,["label","modelValue"]),l(r,{label:e.$t("password"),modelValue:t.password,"onUpdate:modelValue":o[1]||(o[1]=s=>t.password=s),type:"password",required:""},null,8,["label","modelValue"]),l(p,{type:"submit",block:"",style:{"margin-top":"calc(var(--padding) * 2)"},color:"primary"},{default:g(()=>[b(f(e.$t("login")),1)]),_:1})],32)])])}const N=c(y,[["render",x],["__scopeId","data-v-db9fdb8c"]]);export{N as default};
