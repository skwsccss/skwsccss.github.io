(function(t){function e(e){for(var s,n,c=e[0],l=e[1],o=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},i={app:0},r=[];function c(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-162ef2da":"f68169b8","chunk-2d0b9062":"e15e10f6","chunk-2d0ba2e9":"676c19fc","chunk-2d0c18ec":"6bb7f7b2","chunk-2d0c1b96":"f1bf26d5","chunk-2d0ccf69":"1c89940c","chunk-2d0e2534":"30c4870c","chunk-2d20febb":"28f64ee2","chunk-2d217b0a":"cfb54ace","chunk-2d21e985":"bb258d89","chunk-2d22db47":"b21118af","chunk-4ab62850":"11b56af4"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-162ef2da":1,"chunk-4ab62850":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-162ef2da":"0e433876","chunk-2d0b9062":"31d6cfe0","chunk-2d0ba2e9":"31d6cfe0","chunk-2d0c18ec":"31d6cfe0","chunk-2d0c1b96":"31d6cfe0","chunk-2d0ccf69":"31d6cfe0","chunk-2d0e2534":"31d6cfe0","chunk-2d20febb":"31d6cfe0","chunk-2d217b0a":"31d6cfe0","chunk-2d21e985":"31d6cfe0","chunk-2d22db47":"31d6cfe0","chunk-4ab62850":"48f556ca"}[t]+".css",i=l.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var o=r[c],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],u=o.getAttribute("data-href");if(u===s||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],m.parentNode.removeChild(m),a(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(t);var d=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}i[t]=void 0}};var m=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0df4":function(t,e,a){t.exports=a.p+"img/logo-mini.c949e51e.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"app",components:{}},c=r,l=(a("5c0b"),a("2877")),o=Object(l["a"])(c,n,i,!1,null,null,null),u=o.exports,d=(a("d3b7"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main-view"},[a("div",{staticClass:"container-scroller"},[a("Sidebar"),a("div",{staticClass:"container-fluid page-body-wrapper"},[a("Header"),a("div",{staticClass:"main-panel"},[a("div",{staticClass:"content-wrapper"},[a("router-view")],1),t._v(" "),a("Footer")],1)],1)],1)])},p=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{staticClass:"p-0 fixed-top d-flex flex-row",attrs:{id:"template-header",toggleable:"lg"}},[s("div",{staticClass:"navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center"},[s("router-link",{staticClass:"navbar-brand brand-logo-mini",attrs:{to:"/"}},[s("img",{attrs:{src:a("0df4"),alt:"logo"}})])],1),s("div",{staticClass:"navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0"},[s("button",{staticClass:"navbar-toggler navbar-toggler align-self-center d-lg-block",attrs:{type:"button"},on:{click:function(e){return t.toggleSidebar()}}},[s("span",{staticClass:"mdi mdi-format-line-spacing"})]),s("ul",{staticClass:"navbar-nav w-100"},[s("li",{staticClass:"nav-item w-100"},[s("form",{staticClass:"nav-link mt-2 mt-md-0 d-none d-lg-flex search"},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search Here.."}})])])]),s("b-navbar-nav",{staticClass:"navbar-nav-right ml-auto"},[s("b-nav-item-dropdown",{staticClass:"preview-list",attrs:{right:""}},[s("template",{slot:"button-content"},[s("div",{staticClass:"count-indicator"},[s("i",{staticClass:"mdi mdi-email"}),s("span",{staticClass:"count-symbol bg-danger"},[t._v("5")])])]),s("h6",{staticClass:"p-3 mb-0"},[t._v("Messages")]),s("b-dropdown-item",{staticClass:"preview-item"},[s("div",{staticClass:"preview-thumbnail"},[s("img",{staticClass:"profile-pic rounded-circle",attrs:{src:a("fb64"),alt:"image"}})]),s("div",{staticClass:"preview-item-content d-flex align-items-start flex-column justify-content-center"},[s("p",{staticClass:"preview-subject ellipsis mb-1 font-weight-normal"},[t._v("Cregh send you a message")]),s("p",{staticClass:"text-gray mb-0"},[t._v("15 Minutes ago")])])]),s("b-dropdown-item",{staticClass:"preview-item"},[s("div",{staticClass:"preview-thumbnail"},[s("img",{staticClass:"profile-pic rounded-circle",attrs:{src:a("9cd9"),alt:"image"}})]),s("div",{staticClass:"preview-item-content d-flex align-items-start flex-column justify-content-center"},[s("p",{staticClass:"preview-subject ellipsis mb-1 font-weight-normal"},[t._v("Profile picture updated")]),s("p",{staticClass:"text-gray mb-0"},[t._v("18 Minutes ago")])])]),s("b-dropdown-item",{staticClass:"preview-item"},[s("div",{staticClass:"preview-thumbnail"},[s("img",{staticClass:"profile-pic rounded-circle",attrs:{src:a("ff93"),alt:"image"}})]),s("div",{staticClass:"preview-item-content d-flex align-items-start flex-column justify-content-center"},[s("p",{staticClass:"preview-subject ellipsis mb-1 font-weight-normal"},[t._v("Mark send you a message")]),s("p",{staticClass:"text-gray mb-0"},[t._v("1 Minutes ago")])])]),s("p",{staticClass:"p-3 mb-0 text-center border-top"},[t._v("4 new messages")])],2),s("b-nav-item-dropdown",{staticClass:"preview-list border-left",attrs:{right:""}},[s("template",{slot:"button-content"},[s("div",{staticClass:"count-indicator"},[s("i",{staticClass:"mdi mdi-bell"}),s("span",{staticClass:"count-symbol bg-danger"},[t._v("7")])])]),s("h6",{staticClass:"p-3 mb-0"},[t._v("Notifications")]),s("b-dropdown-item",{staticClass:"preview-item"},[s("div",{staticClass:"preview-thumbnail"},[s("div",{staticClass:"preview-icon bg-dark rounded-circle"},[s("i",{staticClass:"mdi mdi-calendar text-success"})])]),s("div",{staticClass:"preview-item-content d-flex align-items-start flex-column justify-content-center"},[s("p",{staticClass:"preview-subject font-weight-normal mb-1"},[t._v("Event today")]),s("p",{staticClass:"text-gray ellipsis mb-0"},[t._v(" Just a reminder that you have an event today ")])])]),s("b-dropdown-item",{staticClass:"preview-item"},[s("div",{staticClass:"preview-thumbnail"},[s("div",{staticClass:"preview-icon bg-dark rounded-circle"},[s("i",{staticClass:"mdi mdi-settings text-danger"})])]),s("div",{staticClass:"preview-item-content d-flex align-items-start flex-column justify-content-center"},[s("p",{staticClass:"preview-subject font-weight-normal mb-1"},[t._v("Settings")]),s("p",{staticClass:"text-gray ellipsis mb-0"},[t._v(" Update dashboard ")])])]),s("b-dropdown-item",{staticClass:"preview-item"},[s("div",{staticClass:"preview-thumbnail"},[s("div",{staticClass:"preview-icon bg-dark rounded-circle"},[s("i",{staticClass:"mdi mdi-link-variant text-warning"})])]),s("div",{staticClass:"preview-item-content d-flex align-items-start flex-column justify-content-center"},[s("p",{staticClass:"preview-subject font-weight-normal mb-1"},[t._v("Launch Admin")]),s("p",{staticClass:"text-gray ellipsis mb-0"},[t._v(" New admin wow! ")])])]),s("p",{staticClass:"p-3 mb-0 text-center border-top"},[t._v("See all notifications")])],2),s("b-nav-item-dropdown",{staticClass:"preview-list nav-profile",attrs:{right:""}},[s("template",{slot:"button-content"},[s("div",{staticClass:"navbar-profile"},[s("img",{staticClass:"img-xs rounded-circle",attrs:{src:a("a583"),alt:""}})])])],2),s("b-nav-item",{staticClass:"nav-logout d-none d-lg-block"},[s("i",{staticClass:"mdi mdi-view-grid"})])],1),s("button",{staticClass:"navbar-toggler navbar-toggler-right align-self-center",attrs:{type:"button"},on:{click:function(e){return t.toggleMobileSidebar()}}},[s("span",{staticClass:"mdi mdi-menu"})])],1)])},b=[],f={name:"app-header",methods:{toggleSidebar:function(){document.querySelector("body").classList.toggle("sidebar-icon-only")},toggleMobileSidebar:function(){document.querySelector("#sidebar").classList.toggle("active")}}},h=f,g=Object(l["a"])(h,v,b,!1,null,"2bd0d640",null),C=g.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"app-sidebar"},[s("nav",{staticClass:"sidebar sidebar-offcanvas",attrs:{id:"sidebar"}},[s("div",{staticClass:"sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top text-center"},[s("router-link",{staticClass:"sidebar-brand brand-logo",attrs:{to:"/"}},[s("img",{attrs:{src:a("e347"),alt:"logo"}})]),s("router-link",{staticClass:"sidebar-brand brand-logo-mini",attrs:{to:"/"}},[s("img",{attrs:{src:a("0df4"),alt:"logo"}})])],1),s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item account-dropdown"},[s("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"account-dropdown",expression:"'account-dropdown'"}],staticClass:"nav-link"},[s("img",{staticClass:"img-xs rounded-circle",attrs:{src:a("a583"),alt:""}}),s("p",{staticClass:"mb-0 text-light"},[t._v("Stella Johnson")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"account-dropdown"}},[s("ul",{staticClass:"nav flex-column sub-menu pl-0"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link pl-5",attrs:{href:"#"}},[s("span",{staticClass:"menu-icon"},[s("i",{staticClass:"mdi mdi-account"})]),s("span",{staticClass:"menu-title"},[t._v("Profile")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link pl-5",attrs:{href:"#"}},[s("span",{staticClass:"menu-icon"},[s("i",{staticClass:"mdi mdi-email"})]),s("span",{staticClass:"menu-title"},[t._v("Inbox")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link pl-5",attrs:{href:"#"}},[s("span",{staticClass:"menu-icon"},[s("i",{staticClass:"mdi mdi-wrench"})]),s("span",{staticClass:"menu-title"},[t._v("Settings")])])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link pl-5",attrs:{href:"#"}},[s("span",{staticClass:"menu-icon"},[s("i",{staticClass:"mdi mdi-power"})]),s("span",{staticClass:"menu-title"},[t._v("Logout")])])])])])],1),t._m(0),s("li",{staticClass:"nav-item menu-items",on:{click:t.collapseAll}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("span",{staticClass:"menu-icon"},[s("i",{staticClass:"mdi mdi-speedometer"})]),s("span",{staticClass:"menu-title"},[t._v("Dashboard")])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"ui-basic",expression:"'ui-basic'"}],staticClass:"nav-link",class:{active:t.subIsActive("/basic-ui")}},[t._m(1),s("span",{staticClass:"menu-title"},[t._v("Basic UI Elements")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"ui-basic"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/basic-ui/buttons/"}},[t._v("Buttons")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/basic-ui/dropdowns/"}},[t._v("Dropdowns")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/basic-ui/typography/"}},[t._v("Typography")])],1)])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"charts-dropdown",expression:"'charts-dropdown'"}],staticClass:"nav-link",class:{active:t.subIsActive("/charts")}},[t._m(2),s("span",{staticClass:"menu-title"},[t._v("Charts")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"charts-dropdown"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/charts/chartjs/"}},[t._v("ChartJS")])],1)])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"table-dropdown",expression:"'table-dropdown'"}],staticClass:"nav-link",class:{active:t.subIsActive("/tables")}},[t._m(3),s("span",{staticClass:"menu-title"},[t._v("Tables")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"table-dropdown"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/tables/basic-tables/"}},[t._v("Basic Table")])],1)])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"user-page-dropdown",expression:"'user-page-dropdown'"}],staticClass:"nav-link",class:{active:t.subIsActive("/auth-pages")}},[t._m(4),s("span",{staticClass:"menu-title"},[t._v("User Pages")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"user-page-dropdown"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/auth-pages/login/"}},[t._v("Login")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/auth-pages/register/"}},[t._v("Register")])],1)])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"error-page-dropdown",expression:"'error-page-dropdown'"}],staticClass:"nav-link",class:{active:t.subIsActive("/error-pages")}},[t._m(5),s("span",{staticClass:"menu-title"},[t._v("Error pages")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"error-page-dropdown"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/error-pages/error-404/"}},[t._v("404")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/error-pages/error-500/"}},[t._v("500")])],1)])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"form-elements",expression:"'form-elements'"}],staticClass:"nav-link",class:{active:t.subIsActive("/forms")}},[t._m(6),s("span",{staticClass:"menu-title"},[t._v("Forms")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"form-elements"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/forms/basic-elements/"}},[t._v("Basic Elements")])],1)])])],1),s("li",{staticClass:"nav-item menu-items"},[s("span",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"icons-dropdown",expression:"'icons-dropdown'"}],staticClass:"nav-link",class:{active:t.subIsActive("/icons")}},[t._m(7),s("span",{staticClass:"menu-title"},[t._v("Icons")]),s("i",{staticClass:"menu-arrow"})]),s("b-collapse",{attrs:{accordion:"sidebar-accordion",id:"icons-dropdown"}},[s("ul",{staticClass:"nav flex-column sub-menu"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/icons/mdi-icons/"}},[t._v("MDI")])],1)])])],1),s("li",{staticClass:"nav-item menu-items",on:{click:t.collapseAll}},[t._m(8)])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item nav-category"},[a("span",{staticClass:"nav-link"},[t._v("Navigation")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-laptop"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-chart-bar"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-table-large"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-security"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-lock"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-playlist-play"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-contacts"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link",attrs:{target:"_blank",href:"http://www.bootstrapdash.comdocumentation.html"}},[a("span",{staticClass:"menu-icon"},[a("i",{staticClass:"mdi mdi-file-document-box"})]),a("span",{staticClass:"menu-title"},[t._v("Documentation")])])}],y=(a("c975"),a("159b"),{name:"sidebar",data:function(){return{collapses:[{show:!1},{show:!1},{show:!1}]}},mounted:function(){var t=document.querySelector("body");document.querySelectorAll(".sidebar .nav-item").forEach((function(e){e.addEventListener("mouseover",(function(){t.classList.contains("sidebar-icon-only")&&e.classList.add("hover-open")})),e.addEventListener("mouseout",(function(){t.classList.contains("sidebar-icon-only")&&e.classList.remove("hover-open")}))}))},methods:{collapseAll:function(){var t=document.getElementsByClassName("show");if(t.length>0){var e=t[0].id;this.$root.$emit("bv::toggle::collapse",e)}},subIsActive:function(t){var e=this,a=Array.isArray(t)?t:[t];return a.some((function(t){return 0===e.$route.path.indexOf(t)}))}},watch:{$route:function(){document.querySelector("#sidebar").classList.toggle("active")}}}),x=y,_=Object(l["a"])(x,w,k,!1,null,null,null),A=_.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"app-footer"},[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container-fluid clearfix"},[a("span",{staticClass:"text-muted d-block text-center text-sm-left d-sm-inline-block"},[t._v("Copyright © "),a("a",{attrs:{href:"http://www.bootstrapdash.com/",target:"_blank"}},[t._v("bootstrapdash.com ")]),t._v(" 2020.")]),a("span",{staticClass:"float-none float-sm-right d-block mt-1 mt-sm-0 text-center"},[t._v("Free "),a("a",{attrs:{href:"https://www.bootstrapdash.com/vue-admin-templates/",target:"_blank"}},[t._v(" vue admin templates ")]),t._v(" from BootstrapDash.com")])])])])}],M={name:"app-footer"},I=M,N=Object(l["a"])(I,E,j,!1,null,null,null),S=N.exports,L={name:"layout",components:{Header:C,Sidebar:A,Footer:S}},O=L,D=Object(l["a"])(O,m,p,!1,null,null,null),R=D.exports;s["default"].use(d["a"]);var G=new d["a"]({linkExactActiveClass:"active",scrollBehavior:function(){return{y:0}},mode:"history",base:"/",routes:[{path:"/",component:R,children:[{path:"",name:"dashboard",component:function(){return a.e("chunk-4ab62850").then(a.bind(null,"ed52"))}}]},{path:"/basic-ui",component:R,children:[{path:"buttons",name:"buttons",component:function(){return a.e("chunk-2d0c18ec").then(a.bind(null,"470c"))}},{path:"dropdowns",name:"dropdowns",component:function(){return a.e("chunk-2d217b0a").then(a.bind(null,"c898"))}},{path:"typography",name:"typography",component:function(){return a.e("chunk-2d0e2534").then(a.bind(null,"7de6"))}}]},{path:"/charts",component:R,children:[{path:"chartjs",name:"chartjs",component:function(){return a.e("chunk-162ef2da").then(a.bind(null,"467b"))}}]},{path:"/tables",component:R,children:[{path:"basic-tables",name:"basic-tables",component:function(){return a.e("chunk-2d20febb").then(a.bind(null,"b64e"))}}]},{path:"/auth-pages",component:{render:function(t){return t("router-view")}},children:[{path:"login",name:"login",component:function(){return a.e("chunk-2d21e985").then(a.bind(null,"d5db"))}},{path:"register",name:"register",component:function(){return a.e("chunk-2d0b9062").then(a.bind(null,"30d3"))}}]},{path:"/error-pages",component:{render:function(t){return t("router-view")}},children:[{path:"error-404",name:"error-404",component:function(){return a.e("chunk-2d22db47").then(a.bind(null,"f942"))}},{path:"error-500",name:"error-500",component:function(){return a.e("chunk-2d0ccf69").then(a.bind(null,"4fbc"))}}]},{path:"/forms",component:R,children:[{path:"basic-elements",name:"basic-elements",component:function(){return a.e("chunk-2d0c1b96").then(a.bind(null,"46ec"))}}]},{path:"/icons",component:R,children:[{path:"mdi-icons",name:"mdi-icons",component:function(){return a.e("chunk-2d0ba2e9").then(a.bind(null,"35b3"))}}]},{path:"*",redirect:"/error-404",component:{render:function(t){return t("router-view")}},children:[{path:"error-404",component:function(){return a.e("chunk-2d22db47").then(a.bind(null,"f942"))}}]}]}),T=a("5f5b"),P=a("5886");s["default"].use(T["a"]),s["default"].use(P["a"]),s["default"].config.productionTip=!1,new s["default"]({router:G,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(t,e,a){},"9cd9":function(t,e,a){t.exports=a.p+"img/face2.7e0e382d.jpg"},a583:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwMEM3MUFCQkQyRTExRTdCQzIxQzA2MjY1M0JDRDdFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwMEM3MUFDQkQyRTExRTdCQzIxQzA2MjY1M0JDRDdFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjAwQzcxQTlCRDJFMTFFN0JDMjFDMDYyNjUzQkNEN0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjAwQzcxQUFCRDJFMTFFN0JDMjFDMDYyNjUzQkNEN0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7M5UYKAAAFCklEQVR42qRXa0xbZRh+z+k5p6c3OG1hMCgTua5ctsEgZDJnMkPngizZ/GGCBt0Ptx/GqD+YMU5C0MXoYrL9WEw2wy4xTH/InMyMBGfi5pbAENENGGgZl67QQWmhl9PTy6nna6UUejl1e5Om7Xfe73u+9/3e9/meg7ncHhCzgMcjt96+2WQb7G9wPBitYc2mgoDbrVrkvIBhWJCUSj3K7M2zWc/tvl785pFPKYZZFFsTSwbsXVrKmr18sdV8tftogHUrNz5HwDELChvJLKv4verjjsOqgqL7/xt4rufKW8Yzp076Xc70RJPjAUdvoLCx6ZsdbSdaUgLmfT5q/LP285a+3uaNzkEMwKkkwaUgwE9iwAV4kHh5oFa8QDnibyI9Vze1t+v7SolM7kwIjEDvffDuNdvd/oaYtFM4zGxRAEdL4gJQTh+kG5cB9/Mxz+SM2rrvam9+NDge7YAijQfK4xhM5ysTgoY2JmTCXhT/VNx2m/aX5lfuRY/h0WcaL73I7GoqFLGY+RQkcIw07rPlR6b84Y6PLq0DRtWLCinRgg4lAalaImBkxp96XndM/lMRAZ7tungsWfX6pIlTLJFIoKq6Dup37w33vCzxJoPBIPbHJ23n0W8CkYP5x+4jScOgSLRk5K+UloEmYxNkZ2ZDUbEeFIpwiw8N9UOQZ5MutTB6f6fXbs8gECPFI4doI0kSvEK1trzTCiRFCVGGo+IerxEUy7rDGSDIpMAo6r8vnD2OIxpMCpqmhOqaekhTa4CWySOgsSknhGgDsLW0AiiVIim45c5v+wnEvcmccgwvQN6e54El+OSnIWSisEgPlbW7wLjshYmeGwl9nfNzeTgi/KRkLgm3UVFZpWhFFxaUhOfgyVvPx3E0jm6ZZE5zP98Ch3Ea0hiNKLBGmwn2KRNM3xwQPWdRVuCsdhj54ivkLQosLAh3z1wCj21Z1BeXyOUOMSe/wOf2kYm1QqJVQMjVQDKbgFCqI+PW8Unws+L3O7q5cFmObjIVRjJdu7EuMoksXaj4jHWZmOy7lRK7IeGAq7aWDabijCIeO90ppN4GPOcUvqfAPTMKfpc9lNqhr78NRZyKIbWCq2vq+lLlYevgXzBy6hzYHj4E9+IicC4nOG1WGOr8DizDoynzOZJIhLZ+Tw+6J8XYK5JmPgjcynLoE536VA2dL9JluISm3TkHDp0VrUKlCqjy7VDefhJ0+94AVWkdKEpqINfQArUdXwKt3wa4QnzvmfryISQGQwoEXYsDzQfHN95QhC4fFI2HQFpRBUROXmhMq6QhT6uEBQcLXq8PcrVpMPHICnO2cHP4zCbwjP0Jjt4fwGeajonWcLl7GxKBoT6mNBpL4dvvtcYQwrEOUBgORECR2Vwc2N0cmG0uMM7bYGHFDRb7mpwic3SgerERMt9vi2U2QfytKs8IgWxuOnguq+GlruhoidwtMZN54TynFhyhLkJnOzrzODQW0zLCZkndM+tEX7TiXMdcpR+2H1bXhqtcun0nPK3RwhGtij2kNONqrtAfkvRWfn76ZRS59L9JTwVcviMU6UaFGQO8Cq5vO/Eao2E6g6wr+KSgvNsFKs51u+HK9Wc3goq+wrBLSxWmkQcX+PziakxKYzHK0eGM7XMPC4HhAYt+V+2rTEHhr0/07hS5JDxshmVk7LiL5fYH0pg8nNHSGC3DEDDPCkDWeR7mzA4lzt8pMRiO0gwzK7bmvwIMAIbML/rp1qtnAAAAAElFTkSuQmCC"},e347:function(t,e,a){t.exports=a.p+"img/logo.8d2895f5.svg"},fb64:function(t,e,a){t.exports=a.p+"img/face1.42d41e61.jpg"},ff93:function(t,e,a){t.exports=a.p+"img/face3.16c67435.jpg"}});
//# sourceMappingURL=app.be9f3d18.js.map