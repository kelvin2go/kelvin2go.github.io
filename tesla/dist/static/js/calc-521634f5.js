import{e as L,Y as ee,Z as U,d as f,C as W,h as k,B as I,g as E,o as p,c as b,w as h,$ as te,S as C,n as y,l as r,J as Y,q as se,K as A,H as m,r as w,b as F,U as P,I as N,a as _,a0 as le,a1 as ae,_ as x,a2 as ne,s as M,p as V,N as R,a3 as re,a4 as ue,a5 as B,j as T,f as z,a6 as X,a7 as oe,a8 as ce,a9 as $,aa as j,ab as ie,X as Z,ac as pe,ad as de}from"./index-936a8dbc.js";import{E as ve,a as fe}from"./el-col-f3978a00.js";import{_ as _e,E as me}from"./VDepartureBoard-81f71f9f.js";import{_ as he,E as ye}from"./_plugin-vue_export-helper-ec604c39.js";const ge=["light","dark"],Se=L({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:ee(U),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:ge,default:"light"}}),Ee={close:e=>e instanceof MouseEvent},Ce=f({name:"ElAlert"}),we=f({...Ce,props:Se,emits:Ee,setup(e,{emit:u}){const l=e,{Close:c}=ne,o=W(),a=k("alert"),n=I(!0),t=E(()=>U[l.type]),i=E(()=>[a.e("icon"),{[a.is("big")]:!!l.description||!!o.default}]),v=E(()=>({[a.is("bold")]:l.description||o.default})),d=s=>{n.value=!1,u("close",s)};return(s,g)=>(p(),b(ae,{name:r(a).b("fade"),persisted:""},{default:h(()=>[te(C("div",{class:y([r(a).b(),r(a).m(s.type),r(a).is("center",s.center),r(a).is(s.effect)]),role:"alert"},[s.showIcon&&r(t)?(p(),b(r(Y),{key:0,class:y(r(i))},{default:h(()=>[(p(),b(se(r(t))))]),_:1},8,["class"])):A("v-if",!0),C("div",{class:y(r(a).e("content"))},[s.title||s.$slots.title?(p(),m("span",{key:0,class:y([r(a).e("title"),r(v)])},[w(s.$slots,"title",{},()=>[F(P(s.title),1)])],2)):A("v-if",!0),s.$slots.default||s.description?(p(),m("p",{key:1,class:y(r(a).e("description"))},[w(s.$slots,"default",{},()=>[F(P(s.description),1)])],2)):A("v-if",!0),s.closable?(p(),m(N,{key:2},[s.closeText?(p(),m("div",{key:0,class:y([r(a).e("close-btn"),r(a).is("customed")]),onClick:d},P(s.closeText),3)):(p(),b(r(Y),{key:1,class:y(r(a).e("close-btn")),onClick:d},{default:h(()=>[_(r(c))]),_:1},8,["class"]))],64)):A("v-if",!0)],2)],2),[[le,n.value]])]),_:3},8,["name"]))}});var $e=x(we,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const ke=M($e),be=f({name:"ElContainer"}),xe=f({...be,props:{direction:{type:String}},setup(e){const u=e,l=W(),c=k("container"),o=E(()=>u.direction==="vertical"?!0:u.direction==="horizontal"?!1:l&&l.default?l.default().some(n=>{const t=n.type.name;return t==="ElHeader"||t==="ElFooter"}):!1);return(a,n)=>(p(),m("section",{class:y([r(c).b(),r(c).is("vertical",r(o))])},[w(a.$slots,"default")],2))}});var Ae=x(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Be=f({name:"ElAside"}),Ie=f({...Be,props:{width:{type:String,default:null}},setup(e){const u=e,l=k("aside"),c=E(()=>u.width?l.cssVarBlock({width:u.width}):{});return(o,a)=>(p(),m("aside",{class:y(r(l).b()),style:V(r(c))},[w(o.$slots,"default")],6))}});var q=x(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const ze=f({name:"ElFooter"}),Te=f({...ze,props:{height:{type:String,default:null}},setup(e){const u=e,l=k("footer"),c=E(()=>u.height?l.cssVarBlock({height:u.height}):{});return(o,a)=>(p(),m("footer",{class:y(r(l).b()),style:V(r(c))},[w(o.$slots,"default")],6))}});var G=x(Te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Fe=f({name:"ElHeader"}),Ne=f({...Fe,props:{height:{type:String,default:null}},setup(e){const u=e,l=k("header"),c=E(()=>u.height?l.cssVarBlock({height:u.height}):{});return(o,a)=>(p(),m("header",{class:y(r(l).b()),style:V(r(c))},[w(o.$slots,"default")],6))}});var K=x(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Ve=f({name:"ElMain"}),Re=f({...Ve,setup(e){const u=k("main");return(l,c)=>(p(),m("main",{class:y(r(u).b())},[w(l.$slots,"default")],2))}});var Q=x(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);M(Ae,{Aside:q,Footer:G,Header:K,Main:Q});R(q);const Pe=R(G);R(K);R(Q);const Le=L({prefixCls:{type:String}}),H=f({name:"ElSpaceItem",props:Le,setup(e,{slots:u}){const l=k("space"),c=E(()=>`${e.prefixCls||l.b()}__item`);return()=>re("div",{class:c.value},w(u,"default"))}}),J={small:8,default:12,large:16};function Me(e){const u=k("space"),l=E(()=>[u.b(),u.m(e.direction),e.class]),c=I(0),o=I(0),a=E(()=>{const t=e.wrap||e.fill?{flexWrap:"wrap",marginBottom:`-${o.value}px`}:{},i={alignItems:e.alignment};return[t,i,e.style]}),n=E(()=>{const t={paddingBottom:`${o.value}px`,marginRight:`${c.value}px`},i=e.fill?{flexGrow:1,minWidth:`${e.fillRatio}%`}:{};return[t,i]});return ue(()=>{const{size:t="small",wrap:i,direction:v,fill:d}=e;if(B(t)){const[s=0,g=0]=t;c.value=s,o.value=g}else{let s;T(t)?s=t:s=J[t||"small"]||J.small,(i||d)&&v==="horizontal"?c.value=o.value=s:v==="horizontal"?(c.value=s,o.value=0):(o.value=s,c.value=0)}}),{classes:l,containerStyle:a,itemStyle:n}}const Oe=L({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},class:{type:z([String,Object,Array]),default:""},style:{type:z([String,Array,Object]),default:""},alignment:{type:z(String),default:"center"},prefixCls:{type:String},spacer:{type:z([Object,String,Number,Array]),default:null,validator:e=>X(e)||T(e)||oe(e)},wrap:Boolean,fill:Boolean,fillRatio:{type:Number,default:100},size:{type:[String,Array,Number],values:ce,validator:e=>T(e)||B(e)&&e.length===2&&e.every(T)}}),De=f({name:"ElSpace",props:Oe,setup(e,{slots:u}){const{classes:l,containerStyle:c,itemStyle:o}=Me(e);function a(n,t="",i=[]){const{prefixCls:v}=e;return n.forEach((d,s)=>{j(d)?B(d.children)&&d.children.forEach((g,S)=>{j(g)&&B(g.children)?a(g.children,`${t+S}-`,i):i.push(_(H,{style:o.value,prefixCls:v,key:`nested-${t+S}`},{default:()=>[g]},$.PROPS|$.STYLE,["style","prefixCls"]))}):ie(d)&&i.push(_(H,{style:o.value,prefixCls:v,key:`LoopKey${t+s}`},{default:()=>[d]},$.PROPS|$.STYLE,["style","prefixCls"]))}),i}return()=>{var n;const{spacer:t,direction:i}=e,v=w(u,"default",{key:0},()=>[]);if(((n=v.children)!=null?n:[]).length===0)return null;if(B(v.children)){let d=a(v.children);if(t){const s=d.length-1;d=d.reduce((g,S,O)=>{const D=[...g,S];return O!==s&&D.push(_("span",{style:[o.value,i==="vertical"?"width: 100%":null],key:O},[X(t)?t:F(t,$.TEXT)],$.STYLE)),D},[])}return _("div",{class:l.value,style:c.value},d,$.STYLE|$.CLASS)}return v.children}}}),Ye=M(De);const je=e=>(pe("data-v-7a68d907"),e=e(),de(),e),He={class:"card-header"},Je=je(()=>C("h1",null,"\u8ECA\u724C",-1)),Ue={__name:"ResultCard",props:{data:{licenceNum:0,results:[]}},setup(e){const u=l=>l.includes("\u51F6")?"error":l.includes("\u5E36")?"warning":"success";return(l,c)=>{const o=ke,a=ye;return p(),b(a,{class:"box-card"},{header:h(()=>[C("div",He,[Je,_(r(_e),{displayStr:e.data.licenceNum,size:30},null,8,["displayStr"])])]),default:h(()=>[(p(!0),m(N,null,Z(e.data.results,n=>(p(),m("div",{key:n.index,class:"text item"},[_(o,{title:`\u6578: ${n.index}`,type:u(n.result),description:n.value,"show-icon":"",closable:!1},null,8,["title","type","description"])]))),128))]),_:1})}}},We=he(Ue,[["__scopeId","data-v-7a68d907"]]),Xe={1:{value:"\u5927\u5C55\u9D3B\u5716\uFF0C\u4FE1\u7528\u5F97\u56FA\uFF0C\u7121\u904B\u5F17\u7570\uFF0C\u53EF\u7372\u6210\u529F",result:"\u5409"},2:{value:"\u6839\u57FA\u4E0D\u56FA\uFF0C\u6416\u6416\u6B32\u58AE\uFF0C\u4E00\u76DB\u4E00\u8870\uFF0C\u52DE\u800C\u7121\u529F",result:"\u51F6"},3:{value:"\u6839\u6DF1\u8482\u56FA\uFF0C\u84B8\u84B8\u65E5\u4E0A\uFF0C\u5982\u610F\u5409\u7965\uFF0C\u767E\u4E8B\u9858\u9042",result:"\u5409"},4:{value:"\u574E\u5777\u524D\u9014\uFF0C\u82E6\u96E3\u6298\u78E8\uFF0C\u975E\u6709\u6BC5\u529B\uFF0C\u96E3\u5FD8\u6210\u529F",result:"\u51F6"},5:{value:"\u9670\u967D\u548C\u5408\uFF0C\u751F\u610F\u6B23\u69AE\uFF0C\u540D\u5229\u96D9\u6536\uFF0C\u5F8C\u798F\u91CD\u91CD",result:"\u5409"},6:{value:"\u842C\u5BF6\u96F2\u96C6\uFF0C\u5929\u964D\u5E78\u904B\uFF0C\u7ACB\u5FD7\u596E\u767C\uFF0C\u53EF\u6210\u5927\u529F",result:"\u5409"},7:{value:"\u5C08\u5FC3\u7D93\u71DF\uFF0C\u548C\u6C23\u81F4\u7965\uFF0C\u6392\u9664\u842C\u96E3\uFF0C\u5FC5\u7372\u6210\u529F",result:"\u5409"},8:{value:"\u52AA\u529B\u767C\u9054\uFF0C\u8CAB\u5FB9\u5FD7\u671B\uFF0C\u4E0D\u5FD8\u9032\u9000\uFF0C\u6210\u529F\u53EF\u671F",result:"\u5409"},9:{value:"\u96D6\u5305\u5947\u624D\uFF0C\u6709\u624D\u7121\u547D\uFF0C\u7368\u71DF\u7121\u529B\uFF0C\u8CA1\u5229\u7121\u671B",result:"\u51F6"},10:{value:"\u70CF\u96F2\u906E\u6708\uFF0C\u6697\u6DE1\u7121\u5149\uFF0C\u7A7A\u8CBB\u5FC3\u529B\uFF0C\u5F92\u52DE\u7121\u529F",result:"\u51F6"},11:{value:"\u8349\u6728\u9022\u6625\uFF0C\u67AF\u6728\u6F54\u9732\uFF0C\u7A69\u5065\u8457\u5BE6\uFF0C\u5FC5\u5F97\u4EBA\u671B",result:"\u5409"},12:{value:"\u8584\u5F31\u7121\u529B\uFF0C\u5B64\u7ACB\u7121\u6416\uFF0C\u5916\u7965\u5167\u82E6\uFF0C\u8B00\u4E8B\u96E3\u6210",result:"\u51F6"},13:{value:"\u5929\u8CE6\u5409\u904B\uFF0C\u80FD\u5F97\u4EBA\u671B\uFF0C\u5584\u7528\u667A\u6167\uFF0C\u5FC5\u7372\u6210\u529F",result:"\u5409"},14:{value:"\u5FCD\u5F97\u82E6\u96E3\uFF0C\u5FC5\u6709\u5F8C\u798F\uFF0C\u662F\u6210\u662F\u6557\uFF0C\u60DF\u9760\u5805\u6BC5",result:"\u51F6"},15:{value:"\u8B19\u606D\u505A\u4E8B\uFF0C\u5FC5\u5F97\u4EBA\u548C\uFF0C\u5927\u4E8B\u6210\u5C31\uFF0C\u4E00\u5B9A\u8208\u9686",result:"\u5409"},16:{value:"\u80FD\u7372\u773E\u671B\uFF0C\u6210\u5C31\u5927\u696D\uFF0C\u540D\u5229\u96D9\u6536\uFF0C\u76DF\u4E3B\u56DB\u65B9",result:"\u5409"},17:{value:"\u6392\u9664\u842C\u96E3\uFF0C\u6709\u8CB4\u4EBA\u52A9\uFF0C\u628A\u63E1\u6642\u6A5F\uFF0C\u53EF\u5F97\u6210\u529F",result:"\u5409"},18:{value:"\u7D93\u5546\u505A\u4E8B\uFF0C\u9806\u5229\u660C\u9686\uFF0C\u5982\u80FD\u614E\u59CB\uFF0C\u767E\u4E8B\u4EA8\u901A",result:"\u5409"},19:{value:"\u6210\u529F\u96D6\u65E9\uFF0C\u614E\u9632\u7A7A\u616E\uFF0C\u5167\u5916\u4E0D\u5408\uFF0C\u969C\u7919\u91CD\u91CD",result:"\u51F6"},20:{value:"\u667A\u9AD8\u5FD7\u5927\uFF0C\u6B77\u76E1\u8271\u96E3\uFF0C\u7126\u5FC3\u6182\u52DE\uFF0C\u9032\u9000\u5169\u96E3",result:"\u51F6"},21:{value:"\u5C08\u5FC3\u7D93\u71DF\uFF0C\u5584\u7528\u667A\u6167\uFF0C\u971C\u82B1\u6885\u82B1\uFF0C\u6625\u4F86\u6012\u653E",result:"\u5409"},22:{value:"\u79CB\u8349\u9022\u971C\uFF0C\u61F7\u624D\u4E0D\u9047\uFF0C\u6182\u6101\u6028\u82E6\uFF0C\u4E8B\u4E0D\u5982\u610F",result:"\u51F6"},23:{value:"\u65ED\u65E5\u5347\u5929\uFF0C\u540D\u986F\u56DB\u65B9\uFF0C\u6F38\u6B21\u9032\u5C55\uFF0C\u7D42\u6210\u5927\u696D",result:"\u5409"},24:{value:"\u9326\u7E61\u524D\u7A0B\uFF0C\u9808\u9760\u81EA\u529B\uFF0C\u591A\u9059\u667A\u8B00\uFF0C\u80FD\u594F\u5927\u529F",result:"\u5409"},25:{value:"\u5929\u6642\u5730\u5229\uFF0C\u518D\u9020\u4EBA\u683C\uFF0C\u8B1B\u4FE1\u4FEE\u7766\uFF0C\u5373\u53EF\u6210\u529F",result:"\u5409"},26:{value:"\u6CE2\u703E\u8D77\u4F0F\uFF0C\u5343\u8B8A\u842C\u5316\uFF0C\u6DE9\u99D5\u842C\u96E3\uFF0C\u5FC5\u53EF\u6210\u529F",result:"\u51F6"},27:{value:"\u4E00\u6210\u4E00\u6557\uFF0C\u4E00\u76DB\u4E00\u8870\uFF0C\u60DF\u9760\u8B39\u614E\uFF0C\u53EF\u5B88\u6210\u529F",result:"\u51F6\u5E36\u5409"},28:{value:"\u9B5A\u81E8\u65F1\u5730\uFF0C\u96E3\u9003\u60E1\u904B\uFF0C\u6B64\u6578\u5927\u51F6\uFF0C\u4E0D\u5982\u66F4\u540D",result:"\u51F6"},29:{value:"\u5982\u9F8D\u5F97\u96F2\uFF0C\u9752\u96F2\u76F4\u4E0A\uFF0C\u667A\u8B00\u596E\u9032\uFF0C\u624D\u7565\u594F\u529F",result:"\u5409"},30:{value:"\u5409\u51F6\u53C3\u534A\uFF0C\u5F97\u5931\u76F8\u4F34\uFF0C\u6295\u6A5F\u53D6\u5DE7\uFF0C\u5982\u8CFD\u4E00\u6A23",result:"\u51F6"},31:{value:"\u6B64\u6578\u5927\u5409\uFF0C\u540D\u5229\u96D9\u6536\uFF0C\u6F38\u9032\u5411\u4E0A\uFF0C\u5927\u696D\u6210\u5C31",result:"\u5409"},32:{value:"\u6C60\u4E2D\u4E4B\u9F8D\uFF0C\u98A8\u96F2\u969B\u6703\uFF0C\u4E00\u8E8D\u4E0A\u5929\uFF0C\u6210\u529F\u53EF\u671B",result:"\u5409"},33:{value:"\u4E0D\u53EF\u610F\u6C23\uFF0C\u5584\u7528\u667A\u6167\uFF0C\u5982\u80FD\u614E\u59CB\uFF0C\u5FC5\u53EF\u660C\u9686",result:"\u5409"},34:{value:"\u707D\u96E3\u4E0D\u7D55\uFF0C\u96E3\u671B\u6210\u529F\uFF0C\u6B64\u6578\u5927\u51F6\uFF0C\u4E0D\u5982\u66F4\u540D",result:"\u51F6"},35:{value:"\u4E2D\u5409\u4E4B\u6578\uFF0C\u9032\u9000\u4FDD\u5B88\uFF0C\u751F\u610F\u5B89\u7A69\uFF0C\u6210\u5C31\u53EF\u671F",result:"\u5409"},36:{value:"\u6CE2\u703E\u91CD\u758A\uFF0C\u9577\u9677\u7AAE\u56F0\uFF0C\u52D5\u4E0D\u5982\u975C\uFF0C\u6709\u624D\u7121\u547D",result:"\u51F6"},37:{value:"\u9022\u51F6\u5316\u5409\uFF0C\u5409\u4EBA\u5929\u76F8\uFF0C\u98A8\u8ABF\u96E8\u9806\uFF0C\u751F\u610F\u8208\u9686",result:"\u5409"},38:{value:"\u540D\u96D6\u53EF\u5F97\uFF0C\u5229\u5247\u96E3\u7372\uFF0C\u85DD\u754C\u767C\u5C55\uFF0C\u53EF\u671B\u6210\u529F",result:"\u51F6\u5E36\u5409"},39:{value:"\u96F2\u9593\u898B\u6708\uFF0C\u96D6\u6709\u52DE\u788C\uFF0C\u5149\u660E\u5766\u9014\uFF0C\u6307\u65E5\u53EF\u671F",result:"\u5409"},40:{value:"\u4E00\u76DB\u4E00\u8870\uFF0C\u6D6E\u6C89\u4E0D\u5B9A\uFF0C\u77E5\u96E3\u800C\u9000\uFF0C\u81EA\u7372\u5929\u4FE1",result:"\u5409\u5E36\u51F6"},41:{value:"\u5929\u8CE6\u5409\u904B\uFF0C\u5FB7\u671B\u517C\u5099\uFF0C\u7E7C\u7E8C\u52AA\u529B\uFF0C\u524D\u9014\u7121\u9650",result:"\u5409"},42:{value:"\u4E8B\u696D\u4E0D\u5C08\uFF0C\u5341\u4E5D\u4E0D\u6210\uFF0C\u5C08\u5FC3\u9032\u53D6\uFF0C\u53EF\u671B\u6210\u529F",result:"\u5409\u5E36\u51F6"},43:{value:"\u96E8\u591C\u4E4B\u82B1\uFF0C\u5916\u7965\u5167\u82E6\uFF0C\u5FCD\u8010\u81EA\u91CD\uFF0C\u8F49\u51F6\u5316\u5409",result:"\u5409\u5E36\u51F6"},44:{value:"\u96D6\u7528\u5FC3\u8A08\uFF0C\u4E8B\u96E3\u9042\u9858\uFF0C\u8CAA\u529F\u597D\u9032\uFF0C\u5FC5\u62DB\u5931\u6557",result:"\u51F6"},45:{value:"\u694A\u67F3\u9047\u6625\uFF0C\u7DA0\u8449\u767C\u679D\uFF0C\u885D\u7834\u96E3\u95DC\uFF0C\u4E00\u8209\u6210\u540D",result:"\u5409"},46:{value:"\u574E\u5777\u4E0D\u5E73\uFF0C\u8271\u96E3\u91CD\u91CD\uFF0C\u82E5\u7121\u8010\u5FC3\uFF0C\u96E3\u671B\u6709\u6210",result:"\u51F6"},47:{value:"\u6709\u8CB4\u4EBA\u52A9\uFF0C\u53EF\u6210\u5927\u696D\uFF0C\u96D6\u9047\u4E0D\u5E78\uFF0C\u6D6E\u6C89\u4E0D\u5927",result:"\u5409"},48:{value:"\u7F8E\u5316\u8C50\u5BF6\uFF0C\u9DB4\u7ACB\u96DE\u7FA4\uFF0C\u540D\u5229\u4FF1\u5168\uFF0C\u7E41\u69AE\u5BCC\u8CB4",result:"\u5409"},49:{value:"\u9047\u5409\u5247\u5409\uFF0C\u9047\u51F6\u5247\u51F6\uFF0C\u552F\u9760\u8B39\u614E\uFF0C\u9022\u51F6\u5316\u5409",result:"\u51F6"},50:{value:"\u51F6\u5409\u4E92\u898B\uFF0C\u4E00\u6210\u4E00\u6557\uFF0C\u51F6\u4E2D\u6709\u5409\uFF0C\u5409\u4E2D\u6709\u51F6",result:"\u5409\u5E36\u51F6"},51:{value:"\u4E00\u76DB\u4E00\u8870\uFF0C\u6D6E\u6C89\u4E0D\u5E38\uFF0C\u81EA\u91CD\u81EA\u616E\uFF0C\u53EF\u4FDD\u5E73\u5B89",result:"\u5409\u5E36\u51F6"},52:{value:"\u8349\u6728\u9022\u6625\uFF0C\u96E8\u904E\u5929\u6674\uFF0C\u6E21\u904E\u96E3\u95DC\uFF0C\u5373\u7372\u6210\u529F",result:"\u5409"},53:{value:"\u76DB\u8877\u53C3\u534A\uFF0C\u5916\u7965\u5167\u82E6\uFF0C\u5148\u5409\u5F8C\u51F6\uFF0C\u5148\u51F6\u5F8C\u5409",result:"\u5409\u5E36\u51F6"},54:{value:"\u96D6\u50BE\u5168\u529B\uFF0C\u96E3\u671B\u6210\u529F\uFF0C\u6B64\u6578\u5927\u51F6\uFF0C\u6700\u597D\u6539\u540D",result:"\u51F6"},55:{value:"\u5916\u89C0\u660C\u9686\uFF0C\u5167\u96B1\u798D\u60A3\uFF0C\u514B\u670D\u96E3\u95DC\uFF0C\u9593\u51FA\u6CF0\u904B",result:"\u5409\u5E36\u51F6"},56:{value:"\u4E8B\u8207\u9858\u9055\uFF0C\u7D42\u96E3\u6210\u529F\uFF0C\u6B32\u901F\u4E0D\u9054\uFF0C\u6709\u59CB\u6709\u7D42",result:"\u51F6"},57:{value:"\u52AA\u529B\u7D93\u71DF\uFF0C\u6642\u4F86\u904B\u8F49\uFF0C\u66E0\u91CE\u67AF\u8349\uFF0C\u6625\u4F86\u82B1\u958B",result:"\u5409"},58:{value:"\u534A\u51F6\u534A\u5409\uFF0C\u6D6E\u6C89\u591A\u7AEF\uFF0C\u59CB\u51F6\u7D42\u5409\uFF0C\u80FD\u4FDD\u6210\u529F",result:"\u51F6\u5E36\u5409"},59:{value:"\u9047\u4E8B\u9072\u7591\uFF0C\u96E3\u671B\u6210\u4E8B\uFF0C\u5927\u5200\u95CA\u65A7\uFF0C\u59CB\u53EF\u6709\u6210",result:"\u51F6"},60:{value:"\u9ED1\u6697\u7121\u5149\uFF0C\u5FC3\u8FF7\u610F\u4E82\uFF0C\u51FA\u723E\u53CD\u723E\uFF0C\u96E3\u5B9A\u65B9\u91DD",result:"\u51F6"},61:{value:"\u96F2\u906E\u534A\u6708\uFF0C\u767E\u96B1\u98A8\u6CE2\uFF0C\u61C9\u81EA\u8B39\u614E\uFF0C\u59CB\u4FDD\u5E73\u5B89",result:"\u5409\u5E36\u51F6"},62:{value:"\u7169\u60B6\u61CA\u60F1\uFF0C\u4E8B\u4E8B\u96E3\u5C55\uFF0C\u81EA\u9632\u707D\u798D\uFF0C\u59CB\u514D\u56F0\u5883",result:"\u51F6"},63:{value:"\u842C\u7269\u5316\u76F2\uFF0C\u7E41\u69AE\u4E4B\u6E90\uFF0C\u5C08\u5FC3\u4E00\u610F\uFF0C\u59CB\u80FD\u6210\u529F",result:"\u5409"},64:{value:"\u898B\u7570\u601D\u9077\uFF0C\u5341\u4E5D\u4E0D\u6210\uFF0C\u5F92\u52DE\u7121\u529F\uFF0C\u4E0D\u5982\u66F4\u540D",result:"\u51F6"},65:{value:"\u5409\u904B\u81EA\u4F86\uFF0C\u80FD\u4EAB\u76DB\u540D\uFF0C\u628A\u63E1\u6A5F\u6703\uFF0C\u5FC5\u7372\u6210\u529F",result:"\u5409"},66:{value:"\u9ED1\u591C\u6F2B\u9577\uFF0C\u9032\u9000\u7DAD\u8C37\uFF0C\u5167\u5916\u4E0D\u548C\uFF0C\u4FE1\u7528\u7F3A\u4E4F",result:"\u51F6"},67:{value:"\u6642\u4F86\u904B\u8F49\uFF0C\u4E8B\u4E8B\u5982\u610F\uFF0C\u529F\u6210\u540D\u5C31\uFF0C\u5BCC\u8CB4\u81EA\u4F86",result:"\u5409"},68:{value:"\u601D\u616E\u5468\u8A73\uFF0C\u8A08\u756B\u6709\u529B\uFF0C\u4E0D\u5931\u5148\u6A5F\uFF0C\u6E34\u671B\u6210\u529F",result:"\u5409"},69:{value:"\u52D5\u6416\u4E0D\u5B89\uFF0C\u5E38\u9677\u9006\u5883\uFF0C\u4E0D\u5F97\u6642\u904B\uFF0C\u96E3\u5F97\u5229\u6F64",result:"\u51F6"},70:{value:"\u6158\u6FB9\u7D93\u71DF\uFF0C\u96E3\u514D\u8CA7\u56F0\uFF0C\u6B64\u6578\u4E0D\u5409\uFF0C\u6700\u597D\u66F4\u540D",result:"\u51F6"},71:{value:"\u5409\u51F6\u53C3\u534A\uFF0C\u60DF\u8CF4\u52C7\u6C23\uFF0C\u8CAB\u5FB9\u529B\u884C\uFF0C\u59CB\u53EF\u6210\u529F",result:"\u5409\u5E36\u51F6"},72:{value:"\u51F6\u5409\u96E3\u6E2C\uFF0C\u51F6\u591A\u5409\u5C11\uFF0C\u5F97\u800C\u5F97\u5931\uFF0C\u96E3\u4EE5\u5B89\u7F6E",result:"\u51F6"},73:{value:"\u5B89\u6A02\u81EA\u4F86\uFF0C\u81EA\u7136\u5409\u7965\uFF0C\u529B\u884C\u4E0D\u61C8\uFF0C\u7D42\u5FC5\u6210\u529F",result:"\u5409"},74:{value:"\u5BCC\u4E0D\u53CA\u8CB4\uFF0C\u5750\u98DF\u5C71\u7A7A\uFF0C\u5982\u7121\u667A\u8B00\uFF0C\u96E3\u671B\u6210\u529F",result:"\u51F6"},75:{value:"\u5409\u4E2D\u5E36\u51F6\uFF0C\u6B32\u901F\u4E0D\u9054\uFF0C\u9032\u4E0D\u5982\u5B88\uFF0C\u53EF\u4FDD\u5B89\u8A73",result:"\u5409\u5E36\u51F6"},76:{value:"\u6B64\u6578\u5927\u51F6\uFF0C\u7834\u7522\u4E4B\u8C61\uFF0C\u5B9C\u901F\u6539\u540D\uFF0C\u4EE5\u907F\u5384\u904B",result:"\u51F6"},77:{value:"\u5148\u82E6\u5F8C\u751C\uFF0C\u5148\u7518\u5F8C\u82E6\uFF0C\u5982\u80FD\u5B88\u6210\uFF0C\u4E0D\u81F4\u5931\u6557",result:"\u5409\u5E36\u51F6"},78:{value:"\u6709\u5F97\u6709\u5931\uFF0C\u83EF\u800C\u4E0D\u5BE6\uFF0C\u9808\u4FDD\u52AB\u8CA1\uFF0C\u59CB\u4FDD\u5E73\u5B89",result:"\u5409\u5E36\u51F6"},79:{value:"\u5982\u8D70\u591C\u8DEF\uFF0C\u524D\u9014\u7121\u5149\uFF0C\u5E0C\u671B\u4E0D\u5927\uFF0C\u52DE\u800C\u7121\u529F",result:"\u51F6"},80:{value:"\u5F97\u800C\u5FA9\u5931\uFF0C\u6789\u8CBB\u5FC3\u6A5F\uFF0C\u5B88\u6210\u7121\u8CAA\uFF0C\u53EF\u4FDD\u5B89\u7A69",result:"\u5409\u5E36\u51F6"},81:{value:"\u6700\u6975\u4E4B\u6578\uFF0C\u9084\u672C\u6B78\u5143\uFF0C\u80FD\u5F97\u7E41\u69AE\uFF0C\u767C\u9054\u6210\u529F",result:"\u5409"}},Ze={class:"mt-4"},qe=C("span",{class:"text-gray-600 inline-flex items-center"},"\u8ECA\u724C",-1),Ge=C("a",{href:"https://arger0204.pixnet.net/blog/post/338914103"}," \u8ECA\u724C\u865F\u78BC ",-1),Ke=C("br",null,null,-1),Qe=C("a",{href:"http://www.3322.online/shengxiao/sxzs/201704/101621.html"}," \u5341\u4E8C\u751F\u8096\u8ECA\u724C\u865F\u78BC\u5409\u51F6\u5C0D\u7167\u8868 ",-1),at=f({__name:"calc",setup(e){const u=I("");I("");const l=n=>{const t=parseInt(n);if(!t)return 0;const i=t-Math.floor(t/80)*80;return i!=null?i:0},c=n=>{const t=n.split("").reduce(function(i,v){return i+=parseInt(v)},0);return t!=null?t:0},o=n=>{const t=`${n}`;return{index:n,...Xe[t]}},a=n=>({licenceNum:n,results:[o(l(n)),o(c(n))]});return(n,t)=>{const i=ve,v=me,d=fe,s=Ye,g=Pe;return p(),m(N,null,[C("div",Ze,[_(d,{align:"middle"},{default:h(()=>[_(i,{span:3},{default:h(()=>[qe]),_:1}),_(i,{span:20},{default:h(()=>[_(v,{class:"m-2",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=S=>u.value=S),autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"\u8ECA\u724C\u6578\u5B57 (\u53EF\u591A\u884C, \u7A7A\u683C)"},null,8,["modelValue"])]),_:1})]),_:1}),_(s,{wrap:"",style:{"padding-top":"20px"}},{default:h(()=>[(p(!0),m(N,null,Z(u.value.split(/\s+/),S=>(p(),b(d,null,{default:h(()=>[_(i,{span:8},{default:h(()=>[S&&parseInt(S)&&S.length===4?(p(),b(We,{key:0,class:"grid-content ep-bg-purple",data:a(S)},null,8,["data"])):A("",!0)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_(g,{style:V("font-size: var(--el-font-size-extra-small)")},{default:h(()=>[Ge,F(),Ke,Qe]),_:1},8,["style"])],64)}}});export{at as default};
