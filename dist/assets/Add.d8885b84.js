var e=Object.assign;import{d as s,k as r,r as t,l as o,t as a,e as l,f as i,o as d,c as n,a as c,w as m,g as u,h as p,v as g}from"./index.74eb5de6.js";import{_ as f}from"./FormValidation.cf3c48ab.js";import{_ as x}from"./product.ad92dd02.js";var b=s({name:"AddProduct",components:{FormValidation:f},setup(){const s=r(),i=t({title:"",description:"",price:"",image:!1}),{loading:d,post:n,errorMessage:c,errorDetails:m,errorFields:u}=o("/api/v1/products"),p=l(),g=e=>{let s=new FileReader;s.onload=e=>{i.image=e.target.result},s.readAsDataURL(e)};return e(e({},a(i)),{addProduct:()=>{n(i).then((e=>{s.success(e.msg),p.push({name:"ProductList"})}))},loading:d,errorMessage:c,errorFields:u,errorDetails:m,onImageChange:e=>{let s=e.target.files||e.dataTransfer.files;s.length&&(i.image=s[0],g(s[0]))}})}});const y={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},h={class:"max-w-md w-full space-y-8"},v=c("div",null,[c("img",{class:"mx-auto h-12 w-auto",src:x,alt:"Workflow"})],-1),w={class:"shadow sm:rounded-md sm:overflow-hidden"},k={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},P={class:"col-span-6 sm:col-span-4"},j=c("label",{for:"email_address",class:"block text-sm font-medium text-gray-700"},"Title",-1),D={class:"col-span-6 sm:col-span-4"},M=c("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Price",-1),C={class:"mt-1 relative rounded-md shadow-sm"},F=c("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[c("span",{class:"text-gray-500 sm:text-sm"}," ৳ ")],-1),V=c("div",{class:"absolute inset-y-0 right-0 flex items-center"},[c("label",{for:"currency",class:"sr-only"},"Currency"),c("select",{id:"currency",name:"currency",class:"focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"},[c("option",null,"BDT")])],-1),U=c("label",{for:"about",class:"block text-sm font-medium text-gray-700"}," Description ",-1),B={class:"mt-1"},L=c("p",{class:"mt-2 text-sm text-gray-500"}," Brief description for your product. ",-1),_={key:0,class:"md:flex shadow-lg  mx-6 md:mx-auto my-40 h-64"},I=c("label",{class:"block text-sm font-medium text-gray-700"}," Product photo ",-1),T={class:"mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},A={class:"space-y-1 text-center"},G=c("svg",{class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},[c("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),H={class:"flex text-sm text-gray-600"},R={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},S=c("span",null,"Upload a file",-1),J=c("p",{class:"pl-1"},"or drag and drop",-1),N=c("p",{class:"text-xs text-gray-500"}," PNG, JPG up to 1MB ",-1),O=c("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[c("button",{type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Save ")],-1);b.render=function(e,s,r,t,o,a){const l=i("FormValidation");return d(),n("div",y,[c("div",h,[v,c("form",{onSubmit:s[5]||(s[5]=m(((...s)=>e.addProduct&&e.addProduct(...s)),["prevent"])),enctype:"multipart/form-data"},[e.errorMessage?(d(),n(l,{key:0,errorMessage:e.errorMessage,errorDetails:e.errorDetails},null,8,["errorMessage","errorDetails"])):u("",!0),c("div",w,[c("div",k,[c("div",P,[j,p(c("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=s=>e.title=s),id:"product_title",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[g,e.title]])]),c("div",D,[M,c("div",C,[F,p(c("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=s=>e.price=s),id:"price",class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"0.00"},null,512),[[g,e.price]]),V])]),c("div",null,[U,c("div",B,[p(c("textarea",{id:"about",name:"about",rows:"3","onUpdate:modelValue":s[3]||(s[3]=s=>e.description=s),class:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"Product Description"},null,512),[[g,e.description]])]),L]),e.image?(d(),n("div",_,[c("img",{class:"h-full w-full  object-cover rounded-lg rounded-r-none pb-5/6",src:e.image,alt:"bag"},null,8,["src"])])):u("",!0),c("div",null,[I,c("div",T,[c("div",A,[G,c("div",H,[c("label",R,[S,c("input",{id:"file-upload",name:"file-upload",onChange:s[4]||(s[4]=(...s)=>e.onImageChange&&e.onImageChange(...s)),type:"file",accept:"image/*",class:"sr-only"},null,32)]),J]),N])])])]),O])],32)])])};export default b;