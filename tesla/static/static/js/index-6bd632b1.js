import{V as f,o as r,c as p,w as l,H as m,l as g,S as u,U as y,K as h,W as _,d as w,a as i,I as k,X as x}from"./index-58cc6334.js";import{E,a as b}from"./el-col-2cbdfc36.js";import{_ as C,E as A}from"./_plugin-vue_export-helper-1541cf8f.js";const T=(e,t)=>{const a=e[t];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((c,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})};const B=["src"],D={style:{padding:"14px","text-align":"center"}},V={__name:"AppCard",props:{data:{}},setup(e){const t=e,a=f(()=>t.data.avatar?"":T(Object.assign({"../assets/svg/logo/Disney+.svg":()=>_(()=>import("./Disney_-194a27f8.js"),["static/js/Disney_-194a27f8.js","static/js/index-58cc6334.js","static/css/index-e62be7ba.css"]),"../assets/svg/logo/Netflix.svg":()=>_(()=>import("./Netflix-b0121a29.js"),["static/js/Netflix-b0121a29.js","static/js/index-58cc6334.js","static/css/index-e62be7ba.css"]),"../assets/svg/logo/YouTube.svg":()=>_(()=>import("./YouTube-a849141c.js"),["static/js/YouTube-a849141c.js","static/js/index-58cc6334.js","static/css/index-e62be7ba.css"])}),`../assets/svg/logo/${t.data.name}.svg`)),c=o=>{window.open(o,"_blank")};return(o,s)=>{const d=A;return Object.keys(e.data).length>0?(r(),p(d,{key:0,"body-style":{padding:"0px",minWidth:"220px",border:"none"},shadow:"hover",onClick:s[0]||(s[0]=n=>c(e.data.href))},{default:l(()=>{var n;return[(n=e.data)!=null&&n.avatar?(r(),m("img",{key:0,src:e.data.avatar,class:"image"},null,8,B)):(r(),p(g(a),{key:1,class:"image"})),u("div",D,[u("span",null,y(e.data.name),1)])]}),_:1})):h("",!0)}}},I=C(V,[["__scopeId","data-v-6f877271"]]),P={class:"container mt-10"},R=w({__name:"index",setup(e){const t=[{name:"YouTube",types:["movie","video","music","entertain"],href:"https://www.youtube.com/?gl=TW&hl=zh-TW"},{name:"Netflix",types:["movie","video","entertain"],href:"https://www.netflix.com/tw/"},{name:"Disney+",types:["movie","video","entertain"],href:"https://www.disneyplus.com/zh-hant/home"},{name:"\u5ABD\u7239\u8B1B\u6545\u4E8B",types:["podCast","kids","story"],href:"https://open.firstory.me/user/momdadstory",avatar:"https://d3mww1g1pfq2pt.cloudfront.net/Avatar/ckgvv1m2ah8re0903njm7tcun/1613297552523.jpeg"}];return(a,c)=>{const o=I,s=E,d=b;return r(),m("div",P,[i(d,null,{default:l(()=>[(r(),m(k,null,x(t,(n,v)=>i(s,{key:n.name,span:4,offset:v>0?1:0},{default:l(()=>[i(o,{data:n},null,8,["data"])]),_:2},1032,["offset"])),64)),i(s,{span:4})]),_:1})])}}});export{R as default};
