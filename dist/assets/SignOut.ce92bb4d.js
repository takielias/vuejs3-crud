import{d as s,u as a,l as n,e,f as o,o as t,c as r}from"./index.6a068096.js";var u=s({setup(){const s=a(),{loading:t,get:r}=n("/api/v1/signout");r().then((a=>{s.success(a.msg)}));const{logout:u}=e(),i=o();return u().then((()=>i.push({name:"Home"}))),{loading:t}}});const i={class:"loading"};u.render=function(s,a,n,e,o,u){return t(),r("div",i)};export default u;
