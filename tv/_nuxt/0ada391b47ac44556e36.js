(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{190:function(t,e,n){},191:function(t,e,n){"use strict";(function(t){n(44);var s,i=n(4),a=n.n(i),r=n(195);e.a={layout:"tv",components:{YoutubeList:r.a},props:["defaultList"],asyncData:(s=a()(regeneratorRuntime.mark(function e(n){var s,i,a,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.params,i=n.app,a=s.id||"PLxY9LoSnhGg3JTPFNOaPxuFzN95Q2DscP",console.log("***"),console.log(a),e.prev=4,e.next=7,i.$axios.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:a,maxResults:50,key:t.env.YOUTUBE_KEY},useCache:!0});case 7:if(r=e.sent,o=r.data,console.log(o),!(o&&o.items.length>0)){e.next=14;break}return e.abrupt("return",{tvList:o});case 14:return e.abrupt("return",{tvList:o});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}},e,this,[[4,17]])})),function(t){return s.apply(this,arguments)}),data:function(){return{clipped:!1,hover:!1,videoId:"u5X_hiHtKkM",inputVID:"",currentIndex:0,playerVars:{autoplay:1},tvList:{items:{}}}},computed:{allList:function(){return this.tvList.items.length>0?this.tvList:this.defaultList},drawer:{get:function(){return this.$store.state.sidebar},set:function(t){this.$store.commit("toggleSidebar")}},currentVideo:function(){return this.tvList.items.length>0?{id:this.tvList.items[this.currentIndex].snippet.resourceId.videoId}:{id:"u5X_hiHtKkM",index:0}}},methods:{redirectVID:function(t){console.log("***!!!"+t),window.location.href="".concat(location.protocol,"//").concat(window.location.hostname,":").concat(location.port,"/").concat(t)},changeChannel:function(t){this.currentIndex=t},mouseOver:function(){this.hover=!0,this.$store.commit("openSidebar")},mouseLeave:function(){this.hover=!1,this.clipped||this.$store.commit("closeSidebar")},toggleDrawer:function(){this.clipped=!this.clipped,this.$store.commit("openSidebar")},playing:function(){console.log("o/ we are watching!!!")}}}}).call(this,n(16))},192:function(t,e,n){},193:function(t,e,n){"use strict";var s=n(190);n.n(s).a},195:function(t,e,n){"use strict";var s={components:{},props:["tvList"],methods:{changeChannel:function(t){console.log(t),this.$emit("changeChannel",t)}}},i=(n(193),n(12)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:""}},[t.tvList.length>0?n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"display-2"},[t._v(" \n      TV list "+t._s(t.tvList.length)+" channels\n    ")]),t._v(" "),t._l(t.tvList,function(e,s){return n("v-card",{key:"tv_"+e.id,staticClass:"tv-card"},[e.snippet&&e.snippet.thumbnails.medium?n("v-img",{attrs:{src:e.snippet.thumbnails.medium.url,height:"180px",width:"320px"},on:{click:function(e){t.changeChannel(s)}}},[n("v-layout",{attrs:{column:"","fill-height":""}},[n("v-btn",{staticClass:"tv-title",attrs:{icon:"",disabled:""}},[t._v("\n            "+t._s(s+1)+"\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"tv-title"},[t._v(" "+t._s(e.snippet.title))])],1)],1):t._e()],1)})],2):n("v-flex",{attrs:{xs12:""}},[t._v(" \n    No channels\n  ")])],1)},[],!1,null,null,null);a.options.__file="tvList.vue";e.a=a.exports},198:function(t,e,n){"use strict";(function(t){n(44);var s,i=n(4),a=n.n(i),r=n(85);e.a={layout:"tv",components:{tv:r.default},asyncData:(s=a()(regeneratorRuntime.mark(function e(n){var s,i,a,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.params,i=n.app,a=s.id||"PLxY9LoSnhGg3JTPFNOaPxuFzN95Q2DscP",console.log("***"),console.log(a),e.next=6,i.$axios.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:a,maxResults:50,key:t.env.YOUTUBE_KEY},useCache:!0});case 6:if(r=e.sent,o=r.data,console.log(o),!(o&&o.items.length>0)){e.next=13;break}return e.abrupt("return",{tvList:o});case 13:return e.abrupt("return",{tvList:o});case 14:case"end":return e.stop()}},e,this)})),function(t){return s.apply(this,arguments)})}}).call(this,n(16))},199:function(t,e,n){"use strict";var s=n(192);n.n(s).a},204:function(t,e,n){"use strict";n.r(e);var s=n(198).a,i=n(12),a=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("tv",{attrs:{defaultList:this.tvList}})},[],!1,null,null,null);a.options.__file="index.vue";e.default=a.exports},85:function(t,e,n){"use strict";n.r(e);var s=n(191).a,i=(n(199),n(12)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"fullscreen",attrs:{column:"","justify-center":"","align-center":""},on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave}},[n("v-navigation-drawer",{staticClass:"toolbar",attrs:{clipped:t.clipped,app:"",value:t.drawer,width:"330"}},[n("YoutubeList",{attrs:{"tv-list":t.allList.items},on:{changeChannel:t.changeChannel}})],1),t._v(" "),n("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:t.drawer||t.hover,expression:"drawer || hover "}],staticClass:"menuBar",attrs:{absolute:""}},[n("v-toolbar-side-icon",{on:{click:t.toggleDrawer}}),t._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"",md3:"","white--text":""}},[n("v-text-field",{attrs:{label:"Watch youtube playlist",placeholder:"playlist ID","append-icon":"search"},on:{"click:append":function(e){t.redirectVID(t.inputVID)}},model:{value:t.inputVID,callback:function(e){t.inputVID=e},expression:"inputVID"}})],1)],1),t._v(" "),n("v-flex",{attrs:{"xs-12":""}},[n("div",{staticClass:"videoContainer"},[n("youtube",{attrs:{width:"100%",height:"100%","video-id":t.currentVideo.id,"player-vars":t.playerVars},on:{playing:t.playing}})],1)])],1)},[],!1,null,null,null);a.options.__file="_id.vue";e.default=a.exports}}]);