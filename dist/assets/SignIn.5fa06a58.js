var e=Object.assign;import{d as r,u as s,b as a,e as o,r as l,t as n,f as t,g as i,o as d,c as u,h as m,a as c,w as p,i as g,v as f,F as b,j as x}from"./index.ddf33d96.js";import{_ as v}from"./FormValidation.5a3b8dc3.js";var y=r({components:{FormValidation:v},setup(){const r=s(),{loading:i,post:d,errorMessage:u,errorDetails:m,errorFields:c}=a("/api/v1/signin"),{setUser:p}=o(),g=t(),f=l({email:"admin@gmail.com",password:"123456",rememberMe:!0});return e(e({},n(f)),{submit:()=>{d(f).then((e=>{e&&(p(e,f.rememberMe),r.success(e.msg),g.push({name:"ProductList"}))}))},loading:i,errorMessage:u,errorFields:c,errorDetails:m})}});const w={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},h={class:"max-w-md w-full space-y-8"},M=c("div",null,[c("img",{class:"mx-auto h-12 w-auto",src:"/assets/user-signin.493d86a2.svg",alt:"Workflow"}),c("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Sign in to your account ")],-1),V=c("input",{type:"hidden",name:"remember",value:"true"},null,-1),j={class:"rounded-md shadow-sm -space-y-px"},F=c("label",{for:"email-address",class:"sr-only"},"Email address",-1),k=c("label",{for:"password",class:"sr-only"},"Password",-1),D=c("div",null,[c("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},[c("span",{class:"absolute left-0 inset-y-0 flex items-center pl-3"},[c("svg",{class:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[c("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"})])]),x(" Sign in ")])],-1);y.render=function(e,r,s,a,o,l){const n=i("loading"),t=i("FormValidation");return d(),u(b,null,[e.loading?(d(),u(n,{key:0})):m("",!0),c("div",w,[c("div",h,[M,c("form",{class:"mt-8 space-y-6",onSubmit:r[3]||(r[3]=p(((...r)=>e.submit&&e.submit(...r)),["prevent"]))},[e.errorMessage?(d(),u(t,{key:0,errorMessage:e.errorMessage,errorDetails:e.errorDetails},null,8,["errorMessage","errorDetails"])):m("",!0),V,c("div",j,[c("div",null,[F,g(c("input",{id:"email-address",name:"email","onUpdate:modelValue":r[1]||(r[1]=r=>e.email=r),type:"email",autocomplete:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"},null,512),[[f,e.email]])]),c("div",null,[k,g(c("input",{id:"password",name:"password","onUpdate:modelValue":r[2]||(r[2]=r=>e.password=r),type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password"},null,512),[[f,e.password]])])]),D],32)])])],64)};export default y;