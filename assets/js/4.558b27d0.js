(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{346:function(t,e,n){},347:function(t,e,n){},351:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var i=e.prototype;n.utc=function(t){return new e({date:t,utc:!0,args:arguments})},i.utc=function(t){var e=n(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),"minute"):e},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var r=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),r.call(this,t)};var o=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var s=i.utcOffset;i.utcOffset=function(t,e){var n=this.$utils().u;if(n(t))return this.$u?0:n(this.$offset)?s.call(this):this.$offset;var i=Math.abs(t)<=16?60*t:t,r=this;if(e)return r.$offset=i,r.$u=0===t,r;if(0!==t){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(r=this.local().add(i+o,"minute")).$offset=i,r.$x.$localOffset=o}else r=this.utc();return r};var a=i.format;i.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return a.call(this,e)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var u=i.toDate;i.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var c=i.diff;i.diff=function(t,e,i){var r=this.local(),o=n(t).local();return c.call(r,o,e,i)}}}()},354:function(t,e,n){"use strict";var i=n(346);n.n(i).a},355:function(t,e,n){"use strict";var i=n(347);n.n(i).a},356:function(t,e,n){var i=n(207),r=n(200),o=n(357),s=n(361);t.exports=function(t,e){if(null==t)return{};var n=i(s(t),(function(t){return[t]}));return e=r(e),o(t,n,(function(t,n){return e(t,n[0])}))}},357:function(t,e,n){var i=n(130),r=n(358),o=n(125);t.exports=function(t,e,n){for(var s=-1,a=e.length,u={};++s<a;){var c=e[s],p=i(t,c);n(p,c)&&r(u,o(c,t),p)}return u}},358:function(t,e,n){var i=n(359),r=n(125),o=n(128),s=n(85),a=n(54);t.exports=function(t,e,n,u){if(!s(t))return t;for(var c=-1,p=(e=r(e,t)).length,f=p-1,l=t;null!=l&&++c<p;){var h=a(e[c]),m=n;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(c!=f){var v=l[h];void 0===(m=u?u(v,h,l):void 0)&&(m=s(v)?v:o(e[c+1])?[]:{})}i(l,h,m),l=l[h]}return t}},359:function(t,e,n){var i=n(360),r=n(127),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&r(s,n)&&(void 0!==n||e in t)||i(t,e,n)}},360:function(t,e,n){var i=n(208);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},361:function(t,e,n){var i=n(201),r=n(362),o=n(364);t.exports=function(t){return i(t,o,r)}},362:function(t,e,n){var i=n(126),r=n(363),o=n(202),s=n(203),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,o(t)),t=r(t);return e}:s;t.exports=a},363:function(t,e,n){var i=n(206)(Object.getPrototypeOf,Object);t.exports=i},364:function(t,e,n){var i=n(204),r=n(365),o=n(129);t.exports=function(t){return o(t)?i(t,!0):r(t)}},365:function(t,e,n){var i=n(85),r=n(205),o=n(366),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return o(t);var e=r(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},366:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},375:function(t,e,n){},380:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l}));n(17);var i={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,405,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(n(354),n(9)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(355),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(210),n(87)),u=n.n(a),c=n(356),p=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},395:function(t,e,n){"use strict";var i=n(375);n.n(i).a},410:function(t,e,n){"use strict";n.r(e);n(53),n(2);var i=n(131),r=n.n(i),o=n(351),s=n.n(o),a=n(8),u=n(380);r.a.extend(s.a);var c={components:{NavigationIcon:a.n,ClockIcon:a.a,TagIcon:a.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return u.b},resolvePostDate:function(t){return r.a.utc(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},p=(n(395),n(9)),f=Object(p.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt?n("client-only",[n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(e.excerpt)}})]):n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n      ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])],1)})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=f.exports}}]);