import{V as v,o as n,c as d,w as m,H as u,l as w,S as _,U as h,K as f,W as i,d as y,a as l,X as E,I as x}from"./index-77846cde.js";import{E as b,a as k}from"./el-col-8b828f02.js";import{_ as A,E as C}from"./_plugin-vue_export-helper-c3ed3bca.js";import{E as T}from"./index-f48388a3.js";const I=(e,t)=>{const a=e[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((c,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t)))})};const V=["src"],B={style:{padding:"14px","text-align":"center"}},D={__name:"AppCard",props:{data:{}},setup(e){const t=e,a=v(()=>t.data.avatar?"":I(Object.assign({"../assets/svg/logo/Apple TV+.svg":()=>i(()=>import("./Apple TV_-b82c011a.js"),["static/js/Apple TV_-b82c011a.js","static/js/index-77846cde.js","static/css/index-388fa6e6.css"]),"../assets/svg/logo/Disney+.svg":()=>i(()=>import("./Disney_-52ae9092.js"),["static/js/Disney_-52ae9092.js","static/js/index-77846cde.js","static/css/index-388fa6e6.css"]),"../assets/svg/logo/Netflix.svg":()=>i(()=>import("./Netflix-069d17a4.js"),["static/js/Netflix-069d17a4.js","static/js/index-77846cde.js","static/css/index-388fa6e6.css"]),"../assets/svg/logo/YouTube.svg":()=>i(()=>import("./YouTube-2ad20cae.js"),["static/js/YouTube-2ad20cae.js","static/js/index-77846cde.js","static/css/index-388fa6e6.css"])}),`../assets/svg/logo/${t.data.name}.svg`)),c=s=>{window.open(s,"_blank")};return(s,r)=>{const p=C;return Object.keys(e.data).length>0?(n(),d(p,{key:0,"body-style":{padding:"0px",minWidth:"220px",border:"none"},shadow:"hover",onClick:r[0]||(r[0]=o=>c(e.data.href))},{default:m(()=>{var o;return[(o=e.data)!=null&&o.avatar?(n(),u("img",{key:0,src:e.data.avatar,class:"image"},null,8,V)):(n(),d(w(a),{key:1,class:"image"})),_("div",B,[_("span",null,h(e.data.name),1)])]}),_:1})):f("",!0)}}},O=A(D,[["__scopeId","data-v-9db0c99c"]]),q=y({__name:"index",setup(e){const t=[{name:"YouTube",types:["movie","video","music","entertain"],href:"https://www.youtube.com/?gl=TW&hl=zh-TW"},{name:"Netflix",types:["movie","video","entertain"],href:"https://www.netflix.com/tw/"},{name:"Disney+",types:["movie","video","entertain"],href:"https://www.disneyplus.com/zh-hant/home"},{name:"Apple TV+",types:["movie","tv","video","entertain"],href:"https://www.apple.com/tw/apple-tv-plus/"},{name:"\u5ABD\u7239\u8B1B\u6545\u4E8B",types:["podCast","kids","story"],href:"https://open.firstory.me/user/momdadstory",avatar:"https://d3mww1g1pfq2pt.cloudfront.net/Avatar/ckgvv1m2ah8re0903njm7tcun/1613297552523.jpeg"},{name:"Wordle",types:["game"],href:"https://www.nytimes.com/games/wordle/index.html",avatar:"https://www.nytimes.com/games-assets/v2/assets/wordle/nav-icons/SpellingBee-Icon-Normalized-Color.svg"},{name:"POWERLINE.IO",types:["game"],href:"http://powerline.io/",avatar:"http://powerline.io/images/logo.png"},{name:"GeoGusser",types:["game"],href:"https://www.geoguessr.com/",avatar:"https://www.geoguessr.com/_next/static/images/logo-e108dab37292e7fec6148eb5f19bf484.svg"},{name:"Gartic",types:["game"],href:"https://gartic.io/",avatar:"https://gartic.io/static/images/new/gartic.svg"},{name:"Quickdraw with google",types:["game"],href:"https://quickdraw.withgoogle.com/",avatar:"https://quickdraw.withgoogle.com/static/svg/sprite.svg#banner-usage"}];return(a,c)=>{const s=O,r=b,p=k,o=T;return n(),d(o,null,{default:m(()=>[l(p,null,{default:m(()=>[(n(),u(x,null,E(t,(g,P)=>l(r,{key:g.name,lg:4,md:6,sm:24,style:{"margin-bottom":"12px","margin-right":"12px"}},{default:m(()=>[l(s,{data:g},null,8,["data"])]),_:2},1024)),64))]),_:1})]),_:1})}}});export{q as default};
