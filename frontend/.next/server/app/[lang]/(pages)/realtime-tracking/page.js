(()=>{var e={};e.id=948,e.ids=[948],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},12781:e=>{"use strict";e.exports=require("stream")},57590:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(11825),r(74225),r(41037),r(30754),r(35866);var s=r(23191),a=r(88716),i=r(37922),l=r.n(i),n=r(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["[lang]",{children:["(pages)",{children:["realtime-tracking",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,11825)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/realtime-tracking/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,74225)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/realtime-tracking/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,41037)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,30754)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/not-found.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/realtime-tracking/page.tsx"],x="/[lang]/(pages)/realtime-tracking/page",u={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[lang]/(pages)/realtime-tracking/page",pathname:"/[lang]/realtime-tracking",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},274:(e,t,r)=>{Promise.resolve().then(r.bind(r,25074))},92748:(e,t,r)=>{Promise.resolve().then(r.bind(r,4176))},25074:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(10326),a=r(90355);r(17577);var i=r(90434),l=r(35047);let n=({title:e,url:t})=>{let r=(0,l.usePathname)();return s.jsx(i.default,{className:`text-white ${t===r&&"bg-buttonPrimary rounded-full px-3 py-1 transition ease-linear duration-200"}`,href:`${t}`,children:e})},o=()=>s.jsx("div",{className:"w-full relative",children:s.jsx("ul",{className:"flex items-center px-2 py-2 w-fit rounded-full bg-cardDark space-x-6",children:[{id:1,title:"Live Activities",url:"/fr/realtime-tracking"},{id:2,title:"Activity",url:"/fr/realtime-tracking/activity"},{id:3,title:"Directions",url:"/fr/realtime-tracking/directions"},{id:1,title:"Information",url:"/fr/realtime-tracking/information"}].map(e=>s.jsx(n,{title:e?.title,url:e?.url},e?.id))})});var c=r(2061);function d({children:e}){let{toggleMapsValue:t,showAllRoutes:r}=(0,c.W)();return console.log("show all routes",r),(0,s.jsxs)("main",{className:"flex flex-col lg:flex-row",children:[s.jsx("div",{className:"w-7/12 overflow-y-scroll h-screen",children:e}),(0,s.jsxs)("div",{className:"w-9/12 ",children:[s.jsx("div",{className:"m-8",children:s.jsx(o,{})}),s.jsx(a.default,{})]})]})}},90355:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var s=r(10326);r(17577);var a=r(22080),i=r(89122),l=r(13334),n=r(2061),o=r(469);let c=(()=>{let e=new Set;return()=>{let t="#";do for(let e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];while(e.has(t));return e.add(t),16777216===e.size&&e.clear(),t}})();var d=r(86526);let x=()=>{let{dispatch:e,routes:t,selectedRouteId:r}=(0,n.W)(),{pointOfSales:x}=(0,o.H)();return console.log("ALL ROUTES",t),(0,s.jsxs)(a.D5,{center:{lat:61.2176,lng:-149.8997},zoom:18,mapId:process.env.NEXT_PUBLIC_MAP_ID,children:[t.map(e=>{let t=c();return s.jsx(i.Z,{route:e,color:t},e.id)}),x.map(e=>s.jsx(l.Z,{position:e.position,active:!0,markerColor:"red",children:s.jsx(d.Z,{shopDetails:e})},e.id))]})}},4176:(e,t,r)=>{"use strict";r.d(t,{default:()=>j});var s=r(10326),a=r(11599),i=r(459),l=r(17577),n=r(2061);let o=({progress:e,isActive:t})=>(0,s.jsxs)("div",{className:"w-10 h-10 p-5 border-[6px]  border-bgColorDark rounded-full flex items-center justify-center",children:[s.jsx("div",{className:"text-white text-[15px] font-medium",children:e})," "]}),c={src:"/_next/static/media/map-pin-fillIcon.da3ad70e.svg",height:22,width:18,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/arrow-right-down-fill.56c0b5bb.svg",height:24,width:24,blurWidth:0,blurHeight:0},x={src:"/_next/static/media/info-circle.b299797a.svg",height:17,width:16,blurWidth:0,blurHeight:0};var u=r(46226),p=r(68703);let m=({id:e,props:t,name:r,routeName:a,progress:i,currentRouteName:n,currentRouteLocalisation:m,nextRouteName:h,nextRouteLocalisation:g,SalesRepName:f,SalesRepPicture:v,isActive:j,viewInfo:b})=>{let[w,y]=(0,l.useState)(j);return console.log("sales rep",f),(0,s.jsxs)(p.default,{children:[s.jsx("input",{...t,id:`${e}`,type:"radio",value:e,name:r,className:"w-4 h-4 peer hidden text-buttonPrimary  focus:ring-buttonPrimary "}),s.jsx("label",{htmlFor:`${e}`,className:"w-full  lg:text-xl text-sm block cursor-pointer select-none rounded-xl text-center bg-cardDark peer-checked:bg-buttonPrimary peer-checked:font-bold peer-checked:text-white font-medium text-gray-900 ",children:(0,s.jsxs)("div",{className:"w-full min-w-xl cursor-pointer px-5 py-6 rounded-xl flex-col justify-stretch items-start gap-5 inline-flex ",children:[(0,s.jsxs)("div",{className:"w-full flex justify-between",children:[s.jsx("div",{className:"flex flex-col",children:s.jsx("span",{className:"text-neutral-300 text-sm font-bold",children:a})}),s.jsx(o,{progress:i,isActive:w})]}),(0,s.jsxs)("div",{className:"location-container w-full flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"location flex gap-2 align-middle items-center",children:[s.jsx("div",{className:" bg-green-200 rounded-[100px] justify-center items-center p-2",children:s.jsx(u.default,{src:c,className:"w-[24px] h-[24px]",alt:"Map icon"})}),(0,s.jsxs)("div",{className:"flex-col justify-start items-start inline-flex",children:[s.jsx("span",{className:"text-white text-[15px] font-medium",children:n}),s.jsx("span",{className:"text-neutral-300 text-[10px]",children:m})]})]}),(0,s.jsxs)("div",{className:"location flex gap-2 align-middle items-center",children:[s.jsx("div",{className:"bg-rose-200 rounded-[100px] justify-center items-center p-2",children:s.jsx(u.default,{src:d,className:"w-[24px] h-[24px]",alt:"Arrow icon"})}),(0,s.jsxs)("div",{className:"flex-col justify-start items-start inline-flex",children:[s.jsx("span",{className:"text-white text-[15px] font-medium",children:h}),s.jsx("span",{className:"text-neutral-300 text-[10px]",children:g})]})]}),(0,s.jsxs)("div",{className:"location flex  gap-2 align-middle items-center",children:[f&&s.jsx("div",{className:"flex",children:s.jsx("span",{className:"text-buttonPrimary text-sm",children:f})})||"unassigned",s.jsx("div",{className:"flex-col space-x-8 justify-between items-start inline-flex",children:(0,s.jsxs)("a",{className:"flex gap-1 items-center",onClick:()=>b&&b(),children:[s.jsx("span",{className:"text-neutral-300 text-[14px]",children:"View Info"}),s.jsx(u.default,{src:x,className:"w-[16px] h-[16px]",alt:"Info Circle"})]})})]})]})]})})]})};var h=r(74723),g=r(76054);let f=()=>{let{routes:e,dispatch:t}=(0,n.W)(),{register:r,watch:a}=(0,h.cI)(),i=a("activeRoute");return(0,l.useEffect)(()=>{t((0,g.e2)({selectedRouteId:i}))},[i]),s.jsx("form",{className:"mt-24 grid grid-cols-2 gap-4",children:e?.map(e=>s.jsx(m,{id:e?.id,name:"activeRoute",props:r("activeRoute"),progress:"4/10",routeName:e?.routeName,currentRouteName:e?.pointOfSales[0]?.name,currentRouteLocalisation:e?.pointOfSales[0]?.shopLocation,nextRouteName:e?.pointOfSales[1]?.name,nextRouteLocalisation:e?.pointOfSales[1]?.shopLocation,SalesRepName:e?.salesRepresentative&&e?.salesRepresentative[0],SalesRepPicture:"",isActive:!1},e?.id))})};var v=r(82286);let j=()=>(0,s.jsxs)("div",{className:"w-full relative",children:[s.jsx("h1",{className:"font-bold text-xl p-8",children:"Realtime tracking"}),s.jsx("div",{className:" w-full px-8 top-[6rem]",children:(0,s.jsxs)(a.n,{radius:"full",color:"primary",classNames:{tabList:"gap-4  bg-transparent w-full relative rounded-none p-0 ",cursor:"w-full bg-buttonPrimary",tab:"max-w-fit bg-cardDark px-4 h-10 ",tabContent:"group-data-[selected=true]:text-white"},variant:"solid","aria-label":"Tabs variants",children:[s.jsx(i.r,{title:"View all",children:s.jsx(f,{})},"all"),s.jsx(i.r,{title:"Active",children:s.jsx("div",{className:"mt-24",children:"Active"})},"active"),s.jsx(i.r,{title:"Completed",children:s.jsx("div",{className:"mt-24",children:"Completed"})},"completed")]})}),s.jsx("div",{className:"px-8 absolute w-full top-[11rem] -mt-8 py-2",children:s.jsx(v.Z,{})})]})},82286:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(10326),a=r(84668);r(17577);var i=r(49665),l=r(2061),n=r(76054);let o=({handleOnFocus:e,handleOnHover:t,handleOnSearch:r})=>{let{dispatch:o,routes:c,selectedRouteId:d}=(0,l.W)();return s.jsx(i.ReactSearchAutocomplete,{items:a.h,onSearch:r,onHover:t,showItemsOnFocus:!1,onSelect:e=>{o((0,n.l9)({routeId:d,posId:e?.id}))},onFocus:e,inputSearchString:"",placeholder:"Search POS by name",formatResult:e=>s.jsx(s.Fragment,{children:(0,s.jsxs)("span",{style:{display:"flex",cursor:"pointer",alignItems:"center",textAlign:"left"},children:[e?.name," - ",e?.shopLocation," - ",e?.shopOwner]})}),styling:{height:"50px",border:"1px solid #414C50",zIndex:20,boxShadow:"rgba(32, 33, 36, 0) 0px 1px 6px 0px",hoverBackgroundColor:"#414C50",backgroundColor:"#414C50",color:"white",fontSize:"16px",fontFamily:"",iconColor:"white",lineColor:"rgb(232, 234, 237)",placeholderColor:"grey",clearIconMargin:"3px 14px 0 0",searchIconMargin:"0 0 0 .4rem"}})}},469:(e,t,r)=>{"use strict";r.d(t,{H:()=>a});var s=r(25842);let a=()=>({pointOfSales:(0,s.v9)(e=>e?.pointOfSaleViewReducer.pointOfSales),dispatch:(0,s.I0)()})},74225:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var s=r(68570);let a=(0,s.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/realtime-tracking/layout.tsx`),{__esModule:i,$$typeof:l}=a;a.default;let n=(0,s.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/realtime-tracking/layout.tsx#default`)},11825:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(19510),a=r(68570);let i=(0,a.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/common/components/realtime-tracking/tab-navigation/TabNavigation.tsx`),{__esModule:l,$$typeof:n}=i;i.default;let o=(0,a.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/common/components/realtime-tracking/tab-navigation/TabNavigation.tsx#default`);r(71159);let c=()=>s.jsx(o,{})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[377,471,231,86,626,621,723,665,11,126,373],()=>r(57590));module.exports=s})();