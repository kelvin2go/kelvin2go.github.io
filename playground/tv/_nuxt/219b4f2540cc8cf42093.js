(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{190:function(t,e,n){},191:function(t,e,n){"use strict";(function(t){var i,s=n(199),a=n.n(s),o=(n(44),n(4)),r=n.n(o),c=n(195);e.a={layout:"tv",components:{YoutubeList:c.a},props:["defaultList"],asyncData:(i=r()(regeneratorRuntime.mark(function e(n){var i,s,a,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.params,s=n.app,a=i.id||"PLxY9LoSnhGg3JTPFNOaPxuFzN95Q2DscP",console.log("***"),console.log(a),e.prev=4,e.next=7,s.$axios.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:a,maxResults:50,key:t.env.YOUTUBE_KEY},useCache:!0});case 7:if(o=e.sent,r=o.data,console.log(r),!(r&&r.items.length>0)){e.next=14;break}return e.abrupt("return",{tvList:r});case 14:return e.abrupt("return",{tvList:r});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[4,17]])})),function(t){return i.apply(this,arguments)}),data:function(){return{clipped:!1,hover:!1,videoId:"u5X_hiHtKkM",inputVID:"",currentIndex:0,playerVars:{autoplay:1},tvList:{items:{}}}},computed:{allList:function(){return this.tvList.items.length>0?this.tvList:this.defaultList},drawer:{get:function(){return this.$store.state.sidebar},set:function(t){this.$store.commit("toggleSidebar")}},currentVideo:function(){return this.allList.items.length>0?{id:this.allList.items[this.currentIndex].snippet.resourceId.videoId}:{id:"u5X_hiHtKkM",index:0}}},methods:{redirectVID:function(e){console.log("***!!!"+e);var n="".concat(location.protocol,"//").concat(window.location.hostname,":").concat(location.port,"/");"GH_PAGES"===t.env.DEPLOY_ENV&&(n+=(a()("HOST_BASE"),"playground/tv/")),window.location.href="".concat(n).concat(e)},changeChannel:function(t){this.currentIndex=t},mouseOver:function(){this.hover=!0,this.$store.commit("openSidebar")},mouseLeave:function(){this.hover=!1,this.clipped||this.$store.commit("closeSidebar")},toggleDrawer:function(){this.clipped=!this.clipped,this.$store.commit("openSidebar")},playing:function(){console.log("o/ we are watching!!!")}}}}).call(this,n(16))},192:function(t,e,n){},193:function(t,e,n){"use strict";var i=n(190);n.n(i).a},195:function(t,e,n){"use strict";var i={components:{},props:["tvList"],methods:{changeChannel:function(t){console.log(t),this.$emit("changeChannel",t)}}},s=(n(193),n(12)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[t.tvList.length>0?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"display-2"},[t._v(" \n      TV list "+t._s(t.tvList.length)+" channels\n    ")]),t._v(" "),t._l(t.tvList,function(e,i){return n("v-card",{key:"tv_"+e.id,staticClass:"tv-card"},[e.snippet&&e.snippet.thumbnails.medium?n("v-img",{attrs:{src:e.snippet.thumbnails.medium.url,height:"180px",width:"320px"},on:{click:function(e){t.changeChannel(i)}}},[n("v-layout",{attrs:{column:"","fill-height":""}},[n("v-btn",{staticClass:"tv-title",attrs:{icon:"",disabled:""}},[t._v("\n            "+t._s(i+1)+"\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"tv-title"},[t._v(" "+t._s(e.snippet.title))])],1)],1):t._e()],1)})],2):n("v-flex",{attrs:{xs12:""}},[t._v(" \n    No channels\n  ")])],1)},[],!1,null,null,null);a.options.__file="tvList.vue";e.a=a.exports},199:function(t,e){t.exports=function(t){throw new Error('"'+t+'" is read-only')}},200:function(t,e,n){"use strict";var i=n(192);n.n(i).a},88:function(t,e,n){"use strict";n.r(e);var i=n(191).a,s=(n(200),n(12)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"fullscreen",attrs:{column:"","justify-center":"","align-center":""},on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave}},[n("v-navigation-drawer",{staticClass:"toolbar",attrs:{clipped:t.clipped,app:"",value:t.drawer,width:"330"}},[n("YoutubeList",{attrs:{"tv-list":t.allList.items},on:{changeChannel:t.changeChannel}})],1),t._v(" "),n("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:t.drawer||t.hover,expression:"drawer || hover "}],staticClass:"menuBar",attrs:{absolute:""}},[n("v-toolbar-side-icon",{on:{click:t.toggleDrawer}}),t._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md3:"","white--text":""}},[t._v("\n      "+t._s(t.currentIndex)+"\n      "),n("v-text-field",{attrs:{label:"Watch youtube playlist",placeholder:"playlist ID","append-icon":"search"},on:{"click:append":function(e){t.redirectVID(t.inputVID)}},model:{value:t.inputVID,callback:function(e){t.inputVID=e},expression:"inputVID"}})],1)],1),t._v(" "),n("v-flex",{attrs:{"xs-12":""}},[n("div",{staticClass:"videoContainer"},[n("youtube",{attrs:{width:"100%",height:"100%","video-id":t.currentVideo.id,"player-vars":t.playerVars},on:{playing:t.playing,ended:function(e){t.currentIndex++}}})],1)])],1)},[],!1,null,null,null);a.options.__file="_id.vue";e.default=a.exports}}]);