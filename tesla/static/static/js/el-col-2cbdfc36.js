import{e as b,f as r,m as u,d as p,i as k,g as o,h as _,j as g,k as O,o as h,c as w,w as $,r as v,n as j,l as c,p as N,q as C,_ as x,s as E,t as S}from"./index-58cc6334.js";const R=Symbol("rowContextKey"),K=b({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),P=p({name:"ElCol"}),B=p({...P,props:K,setup(f){const t=f,{gutter:l}=k(R,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const e={};return l.value&&(e.paddingLeft=e.paddingRight=`${l.value/2}px`),e}),m=o(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];g(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{g(t[s])?e.push(a.b(`${s}-${t[s]}`)):O(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),l.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var L=x(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const H=E(L),q=["start","center","end","space-around","space-between","space-evenly"],A=["top","middle","bottom"],D=b({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:q,default:"start"},align:{type:String,values:A,default:"top"}}),I=p({name:"ElRow"}),J=p({...I,props:D,setup(f){const t=f,l=_("row"),a=o(()=>t.gutter);S(R,{gutter:a});const i=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=o(()=>[l.b(),l.is(`justify-${t.justify}`,t.justify!=="start"),l.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>(h(),w(C(e.tag),{class:j(c(m)),style:N(c(i))},{default:$(()=>[v(e.$slots,"default")]),_:3},8,["class","style"]))}});var T=x(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const M=E(T);export{H as E,M as a};
