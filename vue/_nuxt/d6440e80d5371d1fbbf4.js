(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{311:function(t,e,n){},312:function(t,e,n){},364:function(t,e,n){"use strict";var r=n(311);n.n(r).a},365:function(t,e,n){"use strict";var r=n(312);n.n(r).a},366:function(t,e,n){},374:function(t,e,n){"use strict";n(92);var r=n(313),o={props:["portfolio"],data:function(){return{imageHeight:0}},created:function(){},mounted:function(){this.imageHeight=this.$refs.img.clientHeight},filters:{getFullYear:function(t){return new Date(t).getFullYear()},toDate:function(t){return new Date(t).toDateString()},company:function(t){return t?" in "+t:""},cap:function(t){return t.replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}},components:{VMarkdown:n.n(r).a}},c=(n(364),n(365),n(9)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{style:{"min-height":t.imageHeight+"px"},attrs:{raised:""}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"bar"},[n("h3",[t._v(t._s(t._f("cap")(t.portfolio.fields.title)))]),t._v(" "),n("i",{staticClass:"bar-icon"}),t._v(" "),n("a",{attrs:{href:t.portfolio.fields.url,target:"_blanknv"}},[n("v-icon",{staticClass:"pink--text"},[t._v("launch")])],1)]),t._v(" "),n("div",{staticClass:"img"},[n("img",{ref:"img",staticStyle:{width:"500px"},attrs:{src:t.portfolio.fields.heroImage.fields.file.url+"?fit=scale&w=500"}})]),t._v(" "),n("div",{staticClass:"card-content"},[n("p",[n("v-icon",{staticClass:"grey--text"},[t._v("work")]),t._v(" "+t._s(t.portfolio.fields.company)+"  "),n("v-icon",{staticClass:"grey--text"},[t._v("date_range")]),t._v(t._s(t._f("getFullYear")(t.portfolio.fields.date))+"\n        "),n("a",{attrs:{href:t.portfolio.fields.url,target:"_blanknv"}},[n("v-icon",{staticClass:"pink--text"},[t._v("launch")])],1)],1),t._v(" "),n("div",[n("VMarkdown",{attrs:{source:t.portfolio.fields.description}})],1)]),t._v(" "),n("v-card-actions",t._l(t.portfolio.fields.tags,function(e){return n("v-btn",{key:e,staticClass:"tag",attrs:{flat:"",color:"orange"}},[t._v("\n        "+t._s(e)+"\n      ")])}),1)],1)],1)},[],!1,null,"b0670e16",null);e.a=component.exports},492:function(t,e,n){"use strict";var r=n(366);n.n(r).a},503:function(t,e,n){"use strict";n.r(e);var r=n(91),o=(n(375),n(90),n(377),n(57),n(30),n(93),n(313)),c=n.n(o),l=n(58),f=n(374),d=Object(l.createClient)(),h={data:function(){var t=this;return{slideIndex:0,long:!1,showFilter:!1,pickedTags:[],swiperOption:{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0},on:{slideChange:function(){t.slideIndex=this.activeIndex}}}}},computed:{filtersCase:function(){var t=this,e=[];return this.pickedTags.length>0?(Object.keys(this.showcases).forEach(function(n){(t.pickedTags.indexOf(t.showcases[n].fields.company)>-1||t.showcases[n].fields.tags.filter(function(e){return-1!==t.pickedTags.indexOf(e)}).length>0)&&e.push(t.showcases[n])}),e):this.showcases},filterTags:function(){var t=[],e=[];return this.showcases.forEach(function(n){-1===t.indexOf(n.fields.company)&&t.push(n.fields.company),e=e.concat(n.fields.tags)}),{company:t,tags:Array.from(new Set(e)).sort()}},currentCase:function(){return this.showcases[this.slideIndex]||null}},mounted:function(){this.mySwiper.slideTo(parseInt(this.showcases.length/2),1e3,!1)},asyncData:function(t){var e=t.env;return Promise.all([d.getEntries({content_type:e.CTF_PROTFOLIO_TYPE_ID,"fields.company[exists]":"true",order:"-fields.date"})]).then(function(t){return{showcases:Object(r.a)(t,1)[0].items}}).catch(console.error)},methods:{pushTags:function(t){-1===this.pickedTags.indexOf(t)?this.pickedTags.push(t):this.pickedTags.splice(this.pickedTags.indexOf(t),1)}},components:{Portfolio:f.a,VMarkdown:c.a}},v=(n(492),n(9)),component=Object(v.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticStyle:{"min-height":"50px",position:"relative"},attrs:{xs12:"",sm12:"",md12:""}},[n("v-btn",{attrs:{absolute:"",dark:"",fab:"",top:"",right:"",color:"pink"},on:{click:function(e){t.showFilter=!t.showFilter}}},[n("v-icon",[t._v("filter_list")])],1),t._v(" "),t.showFilter?n("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[t._l(t.filterTags.company,function(e){return n("v-chip",{key:e.id,attrs:{close:-1!==t.pickedTags.indexOf(e),outline:-1===t.pickedTags.indexOf(e),color:"orange"},on:{click:function(n){return t.pushTags(e)}}},[n("v-icon",{attrs:{left:""}},[t._v("work")]),t._v(" "+t._s(e))],1)}),t._v(" "),t._l(t.filterTags.tags,function(e){return n("v-chip",{key:e.id,attrs:{close:-1!==t.pickedTags.indexOf(e),outline:-1===t.pickedTags.indexOf(e),color:"blue"},on:{click:function(n){return t.pushTags(e)}}},[t._v(t._s(e))])})],2):t._e()],1),t._v(" "),n("v-flex",{staticClass:"swiper-inner",attrs:{xs12:"",sm12:"",md12:""}},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-pagination swiper-pagination-bullets"}),t._v(" "),n("div",{staticClass:"swiper-wrapper"},t._l(t.filtersCase,function(t){return n("div",{key:t.id,staticClass:"swiper-slide"},[n("Portfolio",{directives:[{name:"show",rawName:"v-show",value:t.fields.show,expression:"showcase.fields.show"}],attrs:{portfolio:t}})],1)}),0)])])],1)},[],!1,null,"d0a40452",null);e.default=component.exports}}]);