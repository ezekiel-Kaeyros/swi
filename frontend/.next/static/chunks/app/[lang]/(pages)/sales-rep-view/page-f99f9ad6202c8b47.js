(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9499],{42791:function(e,t,l){Promise.resolve().then(l.bind(l,14512))},87138:function(e,t,l){"use strict";l.d(t,{default:function(){return i.a}});var n=l(231),i=l.n(n)},16463:function(e,t,l){"use strict";var n=l(71169);l.o(n,"usePathname")&&l.d(t,{usePathname:function(){return n.usePathname}}),l.o(n,"useRouter")&&l.d(t,{useRouter:function(){return n.useRouter}})},71726:function(e,t,l){"use strict";var n=l(57437);l(2265);var i=l(95724);t.default=e=>{let{children:t}=e;return(0,n.jsx)(i.E.div,{className:"cursor-pointer w-full",whileHover:{scale:1},whileTap:{scale:.98},children:t})}},87464:function(e,t,l){"use strict";l.d(t,{z:function(){return c}});var n=l(57437),i=l(12218);l(2265);var s=l(87138),r=l(66648),a=l(69548),d=l(71726);let o=(0,i.j)("w-full  text-white font-medium py-4 flex justify-center px-4  rounded-full focus:outline-none focus:shadow-outline",{variants:{variant:{default:"bg-buttonPrimary  text-white hover:opacity-90",primary:"bg-indigo-700 hover:bg-indigo-900",secondary:"bg-[#EEF3FB] hover:opacity-90 text-[#2C353A]",danger:"bg-red-500 w-full text-white hover:bg-red-600",outline:"bg-white w-full text-gray-700 border border-slate-300 hover:bg-greenpale hover:text-white hover:border-greenpale",disabled:"bg-buttonPrimary opacity-50 w-full text-white"}},defaultVariants:{variant:"default"}}),c=e=>{let{variant:t,className:l,href:i,icon:c,children:u,...f}=e;return i?(0,n.jsx)(d.default,{children:c?(0,n.jsxs)(s.default,{href:i,className:(0,a.cn)(o({variant:t,className:l})),children:[(0,n.jsx)("span",{className:"mr-2",children:c?(0,n.jsx)(r.default,{src:c,alt:"Icon"}):""}),u]}):(0,n.jsx)(s.default,{href:i,className:(0,a.cn)(o({variant:t,className:l})),children:u})}):(0,n.jsx)(d.default,{children:(0,n.jsx)("button",{...f,className:(0,a.cn)(o({variant:t,className:l})),children:(0,n.jsxs)("div",{className:"flex items-center justify-center whitespace-nowrap font-medium text-[13px]",children:[(0,n.jsx)("span",{className:"mr-2",children:c?(0,n.jsx)(r.default,{width:15,src:c,alt:"Icon"}):""}),(0,n.jsx)("div",{className:"mt-[.2rem] font-bold font-articulat",children:u})]})})})}},72914:function(e,t,l){"use strict";l.d(t,{default:function(){return h}});var n=l(57437),i=l(2929),s=l(2265),r=l(66648),a=l(26214),d={src:"/_next/static/media/statusIconActivity.cb7ff46b.svg",height:24,width:24,blurWidth:0,blurHeight:0},o=l(87464),c=l(16463),u=l(76077),f=e=>{let{activityName:t,duration:l,idActivity:a,status:f,shopId:v}=e,{selectedRouteId:h,routes:x,dispatch:m}=(0,i.W)(),p=e=>{m((0,u.o3)({routeId:h,posId:v,activityId:e}))};(0,s.useEffect)(()=>{},[f]),console.log("status",f);let g=(0,c.usePathname)();return(0,n.jsxs)("div",{className:"flex my-4 space-x-4",children:[(0,n.jsx)("div",{className:"w-8 h-8 p-1 rounded-full ".concat(f?"bg-green-900":"bg-orange-500"),children:(0,n.jsx)(r.default,{src:d,alt:"ActivityIcon"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-sm font-bold",children:t}),(null==g?void 0:g.includes("sales-rep-view"))?f?(0,n.jsx)("div",{className:"mt-2  w-fit text-xs px-2 py-1 rounded-full bg-green-900",children:f?"Completed":"Pending"}):(0,n.jsx)(o.z,{className:"py-1 mt-4 px-2 w-fit text-xs",onClick:()=>p(a),children:(0,n.jsx)("h1",{children:!f&&"completed"||"Mark completed"})}):(0,n.jsx)("div",{className:"mt-2  w-fit text-xs px-2 py-1 rounded-full ".concat(f?"bg-green-900":"bg-orange-500"),children:f?"Completed":"Pending"})]})]})},v=e=>{let{shopLocation:t,shopName:l,tasks:i,shopId:s}=e;return(0,n.jsxs)("div",{className:"bg-cardDark p-4 rounded-xl",children:[(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)(r.default,{className:"w-10",src:a.Z,alt:"Shop image"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"font-bold",children:l}),(0,n.jsx)("h3",{className:"text-sm italic text-slate-400 mt-1",children:t})]})]}),(0,n.jsx)("div",{className:"my-6",children:null==i?void 0:i.map(e=>(0,n.jsx)(f,{shopId:s,status:null==e?void 0:e.status,idActivity:null==e?void 0:e.id,activityName:null==e?void 0:e.name,duration:null==e?void 0:e.duration},null==e?void 0:e.id))})]})},h=()=>{var e;let{selectedRouteId:t,routes:l}=(0,i.W)();console.log("selected route id",t);let s=null==l?void 0:l.find(e=>{var l;return(null==e?void 0:null===(l=e.id)||void 0===l?void 0:l.toString())===(null==t?void 0:t.toString())});return console.log("activeRoute",s),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"mb-8 font-bold text-xl",children:"Activities "}),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4",children:null==s?void 0:null===(e=s.pointOfSales)||void 0===e?void 0:e.map(e=>(0,n.jsx)(v,{shopId:null==e?void 0:e.id,shopName:null==e?void 0:e.name,shopLocation:null==e?void 0:e.shopLocation,tasks:null==e?void 0:e.tasks},null==e?void 0:e.id))})]})}},14512:function(e,t,l){"use strict";var n=l(57437),i=l(2929);l(2265);var s=l(90906),r=l(34191),a=l(72914),d=l(22592);t.default=()=>{let{routes:e,selectedRouteId:t}=(0,i.W)();return console.log("routes",e),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"w-full relative",children:[(0,n.jsx)("h1",{className:"font-bold text-xl p-8",children:"Sales Rep"}),(0,n.jsx)("div",{className:" w-full px-8 top-[6rem]",children:(0,n.jsxs)(s.n,{radius:"full",color:"primary",classNames:{tabList:"gap-4  bg-transparent w-full relative rounded-none p-0 ",cursor:"w-full bg-buttonPrimary",tab:"max-w-fit bg-cardDark px-4 h-10 ",tabContent:"group-data-[selected=true]:text-white"},variant:"solid","aria-label":"Tabs variants",children:[(0,n.jsx)(r.r,{title:"Map",children:(0,n.jsx)("div",{className:"w-full h-[70vh]",children:(0,n.jsx)(d.default,{})})},"map"),(0,n.jsx)(r.r,{title:"Activities",children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)(a.default,{})})},"activities")]})})]})})}},69548:function(e,t,l){"use strict";l.d(t,{cn:function(){return s}});var n=l(44839),i=l(21150);function s(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,i.m)((0,n.W)(t))}},26214:function(e,t){"use strict";t.Z={src:"/_next/static/media/pointOfSale.ee923ce2.svg",height:24,width:24,blurWidth:0,blurHeight:0}},12218:function(e,t,l){"use strict";l.d(t,{j:function(){return s}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,t,l=0,n="";l<arguments.length;)(e=arguments[l++])&&(t=function e(t){var l,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(l=0;l<t.length;l++)t[l]&&(n=e(t[l]))&&(i&&(i+=" "),i+=n);else for(l in t)t[l]&&(i&&(i+=" "),i+=l)}return i}(e))&&(n&&(n+=" "),n+=t);return n},s=(e,t)=>l=>{var s;if((null==t?void 0:t.variants)==null)return i(e,null==l?void 0:l.class,null==l?void 0:l.className);let{variants:r,defaultVariants:a}=t,d=Object.keys(r).map(e=>{let t=null==l?void 0:l[e],i=null==a?void 0:a[e];if(null===t)return null;let s=n(t)||n(i);return r[e][s]}),o=l&&Object.entries(l).reduce((e,t)=>{let[l,n]=t;return void 0===n||(e[l]=n),e},{});return i(e,d,null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:l,className:n,...i}=t;return Object.entries(i).every(e=>{let[t,l]=e;return Array.isArray(l)?l.includes({...a,...o}[t]):({...a,...o})[t]===l})?[...e,l,n]:e},[]),null==l?void 0:l.class,null==l?void 0:l.className)}}},function(e){e.O(0,[6648,1264,231,1444,738,1150,1084,4695,6736,2232,1482,6077,2592,2971,7023,1744],function(){return e(e.s=42791)}),_N_E=e.O()}]);