(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{289:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},290:function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},291:function(t,n,r){var e=r(320)("wks"),o=r(321),i=r(289).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},292:function(t,n,r){var e=r(305),o=r(318);t.exports=r(295)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},293:function(t,n){t.exports={}},294:function(t,n,r){var e=r(306);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},295:function(t,n,r){t.exports=!r(307)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},296:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},298:function(t,n,r){var e=r(300),o=r(301),i=r(302);t.exports=function(t,n){return e(t)||o(t,n)||i()}},300:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},301:function(t,n){t.exports=function(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(r.push(u.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return r}},302:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},303:function(t,n,r){var e=r(335),o=r(304);t.exports=function(t){return e(o(t))}},304:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},305:function(t,n,r){var e=r(294),o=r(338),i=r(339),u=Object.defineProperty;n.f=r(295)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},306:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},307:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},308:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},309:function(t,n,r){var e=r(320)("keys"),o=r(321);t.exports=function(t){return e[t]||(e[t]=o(t))}},313:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},314:function(t,n,r){"use strict";var e=r(315),o=r(316),i=r(340),u=r(292),c=r(293),s=r(341),a=r(323),f=r(349),l=r(291)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,h,y,_,d){s(r,n,h);var x,g,m,b=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=n+" Iterator",S="values"==y,O=!1,j=t.prototype,L=j[l]||j["@@iterator"]||y&&j[y],T=L||b(y),P=y?S?b("entries"):T:void 0,k="Array"==n&&j.entries||L;if(k&&(m=f(k.call(new t)))!==Object.prototype&&m.next&&(a(m,w,!0),e||"function"==typeof m[l]||u(m,l,v)),S&&L&&"values"!==L.name&&(O=!0,T=function(){return L.call(this)}),e&&!d||!p&&!O&&j[l]||u(j,l,T),c[n]=T,c[w]=v,y)if(x={values:S?T:b("values"),keys:_?T:b("keys"),entries:P},d)for(g in x)g in j||i(j,g,x[g]);else o(o.P+o.F*(p||O),n,x);return x}},315:function(t,n){t.exports=!0},316:function(t,n,r){var e=r(289),o=r(290),i=r(336),u=r(292),c=r(296),s=function(t,n,r){var a,f,l,p=t&s.F,v=t&s.G,h=t&s.S,y=t&s.P,_=t&s.B,d=t&s.W,x=v?o:o[n]||(o[n]={}),g=x.prototype,m=v?e:h?e[n]:(e[n]||{}).prototype;for(a in v&&(r=n),r)(f=!p&&m&&void 0!==m[a])&&c(x,a)||(l=f?m[a]:r[a],x[a]=v&&"function"!=typeof m[a]?r[a]:_&&f?i(l,e):d&&m[a]==l?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((x.virtual||(x.virtual={}))[a]=l,t&s.R&&g&&!g[a]&&u(g,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},317:function(t,n,r){var e=r(306),o=r(289).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},318:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},319:function(t,n,r){var e=r(344),o=r(322);t.exports=Object.keys||function(t){return e(t,o)}},320:function(t,n,r){var e=r(290),o=r(289),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(315)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},321:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},322:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},323:function(t,n,r){var e=r(305).f,o=r(296),i=r(291)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},324:function(t,n,r){var e=r(304);t.exports=function(t){return Object(e(t))}},331:function(t,n,r){r(332);for(var e=r(289),o=r(292),i=r(293),u=r(291)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=e[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},332:function(t,n,r){"use strict";var e=r(333),o=r(334),i=r(293),u=r(303);t.exports=r(314)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},333:function(t,n){t.exports=function(){}},334:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},335:function(t,n,r){var e=r(313);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},336:function(t,n,r){var e=r(337);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},337:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},338:function(t,n,r){t.exports=!r(295)&&!r(307)(function(){return 7!=Object.defineProperty(r(317)("div"),"a",{get:function(){return 7}}).a})},339:function(t,n,r){var e=r(306);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},340:function(t,n,r){t.exports=r(292)},341:function(t,n,r){"use strict";var e=r(342),o=r(318),i=r(323),u={};r(292)(u,r(291)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},342:function(t,n,r){var e=r(294),o=r(343),i=r(322),u=r(309)("IE_PROTO"),c=function(){},s=function(){var t,n=r(317)("iframe"),e=i.length;for(n.style.display="none",r(348).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;e--;)delete s.prototype[i[e]];return s()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=s(),void 0===n?r:o(r,n)}},343:function(t,n,r){var e=r(305),o=r(294),i=r(319);t.exports=r(295)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,s=0;c>s;)e.f(t,r=u[s++],n[r]);return t}},344:function(t,n,r){var e=r(296),o=r(303),i=r(345)(!1),u=r(309)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),s=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>s;)e(c,r=n[s++])&&(~i(a,r)||a.push(r));return a}},345:function(t,n,r){var e=r(303),o=r(346),i=r(347);t.exports=function(t){return function(n,r,u){var c,s=e(n),a=o(s.length),f=i(u,a);if(t&&r!=r){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},346:function(t,n,r){var e=r(308),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},347:function(t,n,r){var e=r(308),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},348:function(t,n,r){var e=r(289).document;t.exports=e&&e.documentElement},349:function(t,n,r){var e=r(296),o=r(324),i=r(309)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},350:function(t,n,r){"use strict";var e=r(351)(!0);r(314)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},351:function(t,n,r){var e=r(308),o=r(304);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),s=e(r),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},352:function(t,n,r){var e=r(294),o=r(353);t.exports=r(290).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},353:function(t,n,r){var e=r(354),o=r(291)("iterator"),i=r(293);t.exports=r(290).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},354:function(t,n,r){var e=r(313),o=r(291)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},355:function(t,n,r){var e=r(324),o=r(319);r(356)("keys",function(){return function(t){return o(e(t))}})},356:function(t,n,r){var e=r(316),o=r(290),i=r(307);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*i(function(){r(1)}),"Object",u)}},367:function(t,n,r){},368:function(t,n,r){},369:function(t,n,r){},370:function(t,n,r){},378:function(t,n,r){r(331),r(350),t.exports=r(352)},379:function(t,n,r){r(355),t.exports=r(290).Object.keys},494:function(t,n,r){"use strict";var e=r(367);r.n(e).a},495:function(t,n,r){"use strict";var e=r(368);r.n(e).a},496:function(t,n,r){"use strict";var e=r(369);r.n(e).a},497:function(t,n,r){"use strict";var e=r(370);r.n(e).a},501:function(t,n,r){"use strict";r.r(n);var e=r(298),o=r.n(e),i=(r(36),r(85),r(55)),u={props:["author"],created:function(){},computed:{},filters:{toDate:function(t){return new Date(t).toDateString()},company:function(t){return t?" @ "+t:""}}},c=(r(494),r(8)),s=Object(c.a)(u,function(){var t=this,n=t.$createElement,r=t._self._c||n;return t.author?r("v-list",{attrs:{"three-line":""}},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",[t.author.image?r("img",{attrs:{src:t.author.image.fields.file.url+"?fit=scale&w=120&h=120"}}):t._e()]),t._v(" "),r("v-list-tile-content",[t.author.name?r("v-list-tile-title",[t._v(t._s(t.author.name)+" ")]):t._e(),t._v(" "),t.author.title?r("v-list-tile-sub-title",[t._v(t._s(t.author.title)+t._s(t._f("company")(t.author.company)))]):t._e(),t._v(" "),t.author.shortBio?r("v-list-tile-sub-title",[t._v(t._s(t.author.shortBio))]):t._e()],1)],1)],1):t._e()},[],!1,null,"26eef576",null);s.options.__file="author.vue";var a=s.exports,f=r(312),l={props:["post"],created:function(){},computed:{author:function(){if(this.post)return this.post.fields.author.fields},content:function(){return this.post&&this.post.fields||{}}},filters:{toDate:function(t){return new Date(t).toDateString()},company:function(t){return t?" in "+t:""}},components:{Author:a,VMarkdown:r.n(f).a}},p=(r(495),Object(c.a)(l,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("Author",{attrs:{author:t.author}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticClass:"section-content",attrs:{flat:""}},[r("h1",[t._v(t._s(t.content.title))]),t._v(" "),t.content.heroImage?r("img",{staticClass:"responsive",attrs:{src:t.content.heroImage.fields.file.url,alt:"avatar"}}):t._e(),t._v(" "),t.content.body?r("div",{staticClass:"content"},[r("VMarkdown",[t._v(t._s(t.content.body))])],1):t._e()])],1)],1)},[],!1,null,null,null));p.options.__file="article.vue";var v=p.exports,h=Object(i.createClient)(),y={asyncData:function(t){var n=t.env,r=t.params;return Promise.all([h.getEntries({content_type:n.CTF_BLOG_POST_TYPE_ID,"sys.id[slug]":r.slug})]).then(function(t){return{post:o()(t,1)[0].items[0]}}).catch(console.error)},components:{Article:v}},_=(r(496),r(497),Object(c.a)(y,function(){var t=this.$createElement;return(this._self._c||t)("Article",{attrs:{post:this.post}})},[],!1,null,"0214f5f5",null));_.options.__file="_slug.vue";n.default=_.exports}}]);