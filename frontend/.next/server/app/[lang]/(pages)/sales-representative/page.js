(()=>{var e={};e.id=224,e.ids=[224],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},75026:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c}),a(67680),a(41037),a(30754),a(35866);var s=a(23191),l=a(88716),r=a(37922),n=a.n(r),i=a(95231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);a.d(t,o);let c=["",{children:["[lang]",{children:["(pages)",{children:["sales-representative",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,67680)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/sales-representative/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,41037)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,30754)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/not-found.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"]}],d=["/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/sales-representative/page.tsx"],m="/[lang]/(pages)/sales-representative/page",u={require:a,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/[lang]/(pages)/sales-representative/page",pathname:"/[lang]/sales-representative",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8753:(e,t,a)=>{Promise.resolve().then(a.bind(a,13236))},3594:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var s=a(10326);a(17577);let l=({children:e})=>s.jsx("div",{className:"dark:bg-bgColorDark rounded-xl w-full py-8 px-8 overflow-y-hide",children:e})},10190:(e,t,a)=>{"use strict";function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}a.d(t,{k:()=>s}),a(17577)},13236:(e,t,a)=>{"use strict";a.d(t,{default:()=>H});var s=a(10326),l=a(17577),r=a.n(l),n=a(70308),i=a(31525),o=a(32294),c=a(36728),d=a(85686),m=a(68387),u=a(91204),x=a(74213),p=a(63157),h=a(6832),g=a(77329),f=a(71581),j=a(5267),b=a(26594),v=a(47082),y=a(56439),N=a(46226);let w=[{name:"ID",uid:"id",sortable:!0},{name:"Names",uid:"name",sortable:!0},{name:"Start date",uid:"startDate",sortable:!0},{name:"Role/Title",uid:"role",sortable:!0},{name:"Region",uid:"region"},{name:"Email",uid:"email"},{name:"Status",uid:"status",sortable:!0},{name:"ACTIONS",uid:"actions"}],C=[{name:"Active",uid:"active"},{name:"Inactive",uid:"paused"},{name:"Vacation",uid:"vacation"}],S=[{id:1,name:"Thierry Month\xe9",role:"CEO",startDate:"07/12/2023",status:"active",region:"Douala",email:"thierry.monthe@kaeyros-analytics.de",avatar:"TM"},{id:2,name:"Eric Mballa",role:"Sales Manager",startDate:"07/11/2023",status:"active",region:"Douala",email:"eric.mballa-analytics.com",avatar:"EM"},{id:3,name:"Leslie Fonepi",role:"Sales Agent",startDate:"07/12/2023",status:"active",region:"Yaound\xe9",email:"fonepi.leslie@kaeyros-analytics.de",avatar:"TM"},{id:4,name:"Cyrille Sepele",role:"Route planner",startDate:"01/04/2023",status:"inactive",region:"Douala",email:"cs.sepcy@kaeyros-analytics.com",avatar:"CS"}];var k=a(10190),P=a(3594),D=a(73906);let M={src:"/_next/static/media/informationIcon.82f1ed93.svg",height:25,width:25,blurWidth:0,blurHeight:0},A={src:"/_next/static/media/deleteIcon.b83e5314.svg",height:25,width:25,blurWidth:0,blurHeight:0},z={active:"success",paused:"danger",vacation:"warning"},Z=["name","role","status","actions"];function I(){let[e,t]=(0,l.useState)(""),[a,n]=(0,l.useState)(new Set([])),[I,_]=(0,l.useState)(new Set(Z)),[E,T]=(0,l.useState)("all"),[O,q]=(0,l.useState)(5),[R,W]=(0,l.useState)({column:"age",direction:"ascending"}),[F,G]=(0,l.useState)(1),H=Math.ceil(S.length/O),K=!!e,L=(0,l.useMemo)(()=>w.filter(e=>Array.from(I).includes(e.uid)),[I]),V=r().useMemo(()=>{let t=[...S];return K&&(t=t.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()))),"all"!==E&&Array.from(E).length!==C.length&&(t=t.filter(e=>Array.from(E).includes(e.status))),t},[S,e,E]),B=r().useMemo(()=>{let e=(F-1)*O;return V.slice(e,e+O)},[F,V,O]),J=r().useMemo(()=>[...B].sort((e,t)=>{let a=e[R.column],s=t[R.column],l=a<s?-1:a>s?1:0;return"descending"===R.direction?-l:l}),[R,B]),U=r().useCallback((e,t)=>{let a=e[t];switch(t){case"name":return s.jsx(i.z,{avatarProps:{radius:"full",size:"sm",src:e.avatar},classNames:{description:"text-default-500"},description:e.email,name:a,children:e.email});case"role":return(0,s.jsxs)("div",{className:"flex flex-col",children:[s.jsx("p",{className:"text-bold text-small capitalize",children:a}),s.jsx("p",{className:"text-bold text-tiny capitalize text-default-500",children:e.team})]});case"status":return s.jsx(o.z,{className:"capitalize border-none gap-1 text-default-600",color:z[e.status],size:"sm",variant:"dot",children:a});case"actions":return(0,s.jsxs)("div",{className:"relative flex justify-end items-center gap-2",children:[s.jsx(c.A,{isIconOnly:!0,className:"bg-cardDark",startContent:s.jsx(N.default,{src:D.Z,alt:"Icon edit"})}),s.jsx(c.A,{className:"bg-cardDark",isIconOnly:!0,startContent:s.jsx(N.default,{src:M,alt:"Icon edit"})}),s.jsx(c.A,{isIconOnly:!0,className:"bg-cardDark",startContent:s.jsx(N.default,{src:A,alt:"Icon edit"})})]});default:return a}},[]),X=r().useCallback(e=>{q(Number(e.target.value)),G(1)},[]),Y=r().useCallback(e=>{e?(t(e),G(1)):t("")},[]),$=r().useMemo(()=>(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"flex justify-between gap-3 items-end",children:[s.jsx(d.Y,{isClearable:!0,classNames:{base:"w-full focus:dark:bg-cardDark sm:max-w-[44%]",inputWrapper:"border-1"},placeholder:"Search by name...",size:"sm",value:e,variant:"bordered",onClear:()=>t(""),onValueChange:Y}),(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsxs)(m.F,{children:[s.jsx(u.S,{className:"hidden sm:flex",children:s.jsx(c.A,{size:"sm",variant:"flat",children:"Status"})}),s.jsx(x.a,{disallowEmptySelection:!0,"aria-label":"Table Columns",closeOnSelect:!1,selectedKeys:E,selectionMode:"multiple",onSelectionChange:T,children:C.map(e=>s.jsx(p.W,{className:"capitalize",children:(0,k.k)(e.name)},e.uid))})]}),(0,s.jsxs)(m.F,{children:[s.jsx(u.S,{className:"hidden sm:flex",children:"columns"}),s.jsx(x.a,{disallowEmptySelection:!0,"aria-label":"Table Columns",closeOnSelect:!1,selectedKeys:I,selectionMode:"multiple",onSelectionChange:_,children:w.map(e=>s.jsx(p.W,{className:"capitalize",children:(0,k.k)(e.name)},e.uid))})]})]})]}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("span",{className:"text-default-400 text-small",children:["Total ",S.length," users"]}),(0,s.jsxs)("label",{className:"flex items-center text-default-400 text-small",children:["Rows per page:",(0,s.jsxs)("select",{className:"bg-transparent outline-none text-default-400 text-small",onChange:X,children:[s.jsx("option",{value:"5",children:"5"}),s.jsx("option",{value:"10",children:"10"}),s.jsx("option",{value:"15",children:"15"})]})]})]})]}),[e,E,I,Y,X,S.length,K]),Q=r().useMemo(()=>(0,s.jsxs)("div",{className:"py-2 px-2 flex justify-between items-center",children:[s.jsx(h.g,{showControls:!0,classNames:{cursor:"bg-foreground text-background"},color:"default",isDisabled:K,page:F,total:H,variant:"light",onChange:G}),s.jsx("span",{className:"text-small text-default-400",children:"all"===a?"All items selected":`${a.size} of ${B.length} selected`})]}),[a,B.length,F,H,K]),ee=r().useMemo(()=>({wrapper:["max-h-[382px]","max-w-3xl"],th:["bg-transparent","text-default-500","border-b","border-divider"],td:["py-3  border-b border-divider","group-data-[first=true]:first:before:rounded-none","group-data-[first=true]:last:before:rounded-none","group-data-[middle=true]:before:rounded-none","group-data-[last=true]:first:before:rounded-none","group-data-[last=true]:last:before:rounded-none"]}),[]);return s.jsx(P.Z,{children:(0,s.jsxs)(g.b,{isCompact:!0,removeWrapper:!0,"aria-label":"Example table with custom cells, pagination and sorting",bottomContent:Q,bottomContentPlacement:"outside",checkboxesProps:{classNames:{wrapper:"after:bg-foreground after:text-background text-background"}},classNames:ee,selectedKeys:a,selectionMode:"multiple",sortDescriptor:R,topContent:$,topContentPlacement:"outside",onSelectionChange:n,onSortChange:W,children:[s.jsx(f.J,{className:"bg-bgDark",columns:L,children:e=>s.jsx(j.j,{align:"actions"===e.uid?"center":"start",allowsSorting:e.sortable,children:e.name},e.uid)}),s.jsx(b.y,{emptyContent:"No users found",items:J,children:e=>s.jsx(v.g,{className:"py-4",children:t=>s.jsx(y.X,{children:U(e,t)})},e.id)})]})})}let _={src:"/_next/static/media/addUserIcon.37102765.svg",height:24,width:24,blurWidth:0,blurHeight:0},E={src:"/_next/static/media/uploadFileIcon.856994fa.svg",height:24,width:24,blurWidth:0,blurHeight:0};var T=a(92632);let O=({content1:e,content2:t})=>(0,s.jsxs)("div",{className:"flex my-4 w-full flex-col space-y-2 lg:space-x-6 lg:space-y-0 lg:flex-row",children:[s.jsx("div",{className:"w-full",children:e}),t&&s.jsx("div",{className:"w-full",children:t})]});var q=a(8576);let R=()=>(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"",children:[s.jsx("h1",{className:"font-bold my-4",children:"Personal Information"}),s.jsx(O,{content1:s.jsx(q.Z,{name:"fullName",placeholder:"Full Name"}),content2:s.jsx(q.Z,{name:"dateOfBirth",placeholder:"Date of Birth"})}),s.jsx(O,{content1:s.jsx(q.Z,{name:"gender",placeholder:"gender"}),content2:s.jsx(q.Z,{name:"contact",placeholder:"Contact Details"})}),s.jsx(O,{content1:s.jsx(q.Z,{name:"email",placeholder:"E-mail"})}),s.jsx("h1",{className:"font-bold my-4",children:"Address Information"}),s.jsx(O,{content1:s.jsx(q.Z,{name:"streetAddress",placeholder:"Street Address"}),content2:s.jsx(q.Z,{name:"city",placeholder:"City"})}),s.jsx(O,{content1:s.jsx(q.Z,{name:"state",placeholder:"State/Province"}),content2:s.jsx(q.Z,{name:"zipCode",placeholder:"ZIP Code"})}),s.jsx(O,{content1:s.jsx(q.Z,{name:"country",placeholder:"Country"})}),s.jsx("h1",{className:"font-bold my-4",children:"Employment Information"}),s.jsx(O,{content1:s.jsx(q.Z,{name:"jobTitle",placeholder:"Job Title"}),content2:s.jsx(q.Z,{name:"department",placeholder:"Department/Team"})}),s.jsx(O,{content1:s.jsx(q.Z,{name:"reportingManager",placeholder:"Reporting Manager"}),content2:s.jsx(q.Z,{name:"startDate",placeholder:"Start Date"})})]}),s.jsx("div",{className:"w-full my-8",children:s.jsx(n.z,{icon:_,children:"Add Sales Agent"})})]}),W=({content1:e,content2:t})=>(0,s.jsxs)("div",{className:"flex  w-full flex-col  lg:space-x-4 lg:flex-row",children:[s.jsx("div",{className:"w-full",children:e}),t&&s.jsx("div",{className:"w-full",children:t})]}),F=({register:e,title:t,name:a,icon:l,placeholder:r})=>(0,s.jsxs)("div",{className:"relative w-full pt-[12px] pb-[14px]",children:[t&&s.jsx("label",{className:"font-medium block mb-1 mt-6 text-gray-700",htmlFor:a,children:t}),s.jsx("input",{className:"appearance-none relative border rounded-xl w-full py-4 pl-[0.75rem] leading-tight border-gray-300 bg-white focus:outline-none focus:border-buttonPrimary focus:white:bg-white dark:text-[#6C757D] text-color-[#6C757D]",id:a,placeholder:r,autoComplete:"off",autoFocus:!0,...e}),l&&s.jsx(N.default,{className:"absolute ml-4 mt-auto mb-auto left-0 right-0 top-0 bottom-0",src:l,alt:"Icon"})]}),G=({handleCloseModal:e})=>(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"p-2",children:[s.jsx(W,{content1:s.jsx(F,{name:"categoryName",placeholder:"Category Name",className:"rounded-lg bg-white"})}),s.jsx(W,{content1:s.jsx(F,{name:"serviceModel",placeholder:"Service Model"}),content2:s.jsx(F,{name:"serviceRole",placeholder:"Service Role"})}),s.jsx(W,{content1:s.jsx(F,{name:"estimatedTurnOverPerMonth",placeholder:"Estimated Turn Over Per Month"})}),s.jsx(W,{content1:s.jsx(F,{name:"color",placeholder:"Set Color"})})]}),s.jsx("div",{className:"w-full my-8",children:s.jsx(n.z,{icon:_,children:"Add Category"})})]}),H=()=>{let[e,t]=(0,l.useState)(!1),[a,r]=(0,l.useState)(!1);return(0,s.jsxs)("div",{className:" w-full pr-10 lg:pr-8",children:[(0,s.jsxs)("div",{className:"flex mb-8 max-w-md ml-auto items-center space-x-4 ",children:[s.jsx(n.z,{onClick:()=>t(!0),icon:_,children:"Add Agent"}),s.jsx(T.Z,{onClose:()=>t(!1),isOpen:e,title:"Create agent",classStyle:"bg-cardDark overflow-y-scroll h-8/12 xl:h-[80vh] xl:max-w-2xl",children:s.jsx(R,{})}),s.jsx(n.z,{variant:"secondary",onClick:()=>r(!0),icon:E,children:"Import CSV"}),s.jsx(T.Z,{onClose:()=>r(!1),isOpen:a,title:"Create Category",classStyle:"bg-cardDark  h-8/10 xl:h-[58vh] xl:max-w-[28rem] align-self-center",children:s.jsx(G,{})})]}),s.jsx("div",{children:s.jsx(I,{})})]})}},67680:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(19510);a(71159);var l=a(68570);let r=(0,l.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/modules/sales-representative/SalesRepresentative.tsx`),{__esModule:n,$$typeof:i}=r;r.default;let o=(0,l.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/modules/sales-representative/SalesRepresentative.tsx#default`),c=()=>s.jsx("div",{className:"mt-24",children:s.jsx(o,{})})}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[377,471,231,86,626,621,390,376,607,126,892],()=>a(75026));module.exports=s})();