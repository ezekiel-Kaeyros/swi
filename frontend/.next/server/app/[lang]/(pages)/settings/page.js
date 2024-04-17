(()=>{var e={};e.id=677,e.ids=[677],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},51121:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>o,routeModule:()=>m,tree:()=>d}),r(4726),r(41037),r(30754),r(35866);var s=r(23191),l=r(88716),n=r(37922),a=r.n(n),i=r(95231),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let d=["",{children:["[lang]",{children:["(pages)",{children:["settings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4726)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/settings/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,41037)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,30754)),"/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/not-found.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],o=["/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/[lang]/(pages)/settings/page.tsx"],h="/[lang]/(pages)/settings/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/[lang]/(pages)/settings/page",pathname:"/[lang]/settings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},47874:(e,t,r)=>{Promise.resolve().then(r.bind(r,40157))},60809:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(10326);r(17577);let l=({title:e,options:t,name:r,register:l})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("label",{htmlFor:r,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:e}),s.jsx("select",{name:r,...l,id:r,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttonPrimary focus:border-buttonPrimary block w-full py-4 px-4 dark:bg-cardDark dark:border-gray-400 dark:placeholder-gray-100 dark:text-white dark:focus:ring-buttonPrimary dark:focus:border-buttonPrimary",children:t?.map(e=>s.jsx("option",{value:e,children:e},e?.id))})]})},24299:(e,t,r)=>{"use strict";function s(e,t){return e?.map(e=>t?e?.title:e?.name)}function l(e,t,r){return e?.filter(e=>e[t]===r)?.map(e=>e.id)}r.d(t,{m:()=>l,z:()=>s})},40157:(e,t,r)=>{"use strict";r.d(t,{default:()=>er});var s=r(10326),l=r(11599),n=r(459),a=r(17577);let i={src:"/_next/static/media/addIconGrey.0f8837ee.svg",height:25,width:24,blurWidth:0,blurHeight:0};var c=r(46226),d=r(68703);let o={src:"/_next/static/media/arrowDowIcon.0819962c.svg",height:24,width:24,blurWidth:0,blurHeight:0};var h=r(73906),u=r(92632),m=r(74723),x=r(8576),g=r(70308);let p={src:"/_next/static/media/add-circleIcon.ea7ab5ed.svg",height:24,width:24,blurWidth:0,blurHeight:0},v={src:"/_next/static/media/removeIcon.6299e7d6.svg",height:24,width:24,blurWidth:0,blurHeight:0};var b=r(95794),f=r(16788);let j=({tradeChannelId:e,clusterId:t,handleCloseModal:r})=>{let{dispatch:l}=(0,f.r)(),[n,i]=(0,a.useState)([]),{register:o,handleSubmit:h}=(0,m.cI)(),u=()=>{i([...n,{id:n?.length+1,name:`description${n?.length+1}`,placeholder:"Description"}])},j=e=>{i(function(e,t){let r=e?.findIndex(e=>e?.id.toString()===t.toString());return -1!==r?[...e?.slice(0,r),...e?.slice(r+1)]:e}(n,e))};return console.log("array"),(0,s.jsxs)("form",{onSubmit:h(s=>{let n=s?.name,a=Object?.keys(s).filter(e=>e?.startsWith("description")).map(e=>s[e]);l((0,b.ql)({channelClusterId:t,idToBeUpdated:e,name:n,description:a})),r()}),children:[(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"font-bold",children:"Name"}),s.jsx(x.Z,{placeholder:"Name of the category",name:"name",register:o("name",{required:!0,minLength:3})})]}),(0,s.jsxs)("div",{className:"flex my-4 justify-between items-center",children:[s.jsx("h1",{className:"font-bold",children:"Description"}),s.jsx("div",{children:s.jsx(g.z,{onClick:()=>u(),type:"button",icon:p,className:"py-1",children:"Add"})})]}),n?.map(e=>s.jsxs("div",{className:"flex items-center space-x-4",children:[s.jsx(x.Z,{register:o(e?.name,{required:!0}),name:e?.name,placeholder:e?.placeholder}),s.jsx("div",{children:s.jsx(d.default,{children:s.jsx(c.default,{onClick:()=>j(e?.id),src:v,alt:"remove icon"})})})]},e?.id)),s.jsx("div",{className:"mt-6",children:s.jsx(g.z,{children:"Save"})})]})},y=({id:e,clusterId:t,title:r,description:l,content:n})=>{let[m,x]=(0,a.useState)(!1),[g,p]=(0,a.useState)(!1),v=()=>{x(e=>!e)},b=e=>{p(!0),console.log("cluster",e,t)};return(0,s.jsxs)("div",{className:"relative w-fit",children:[(0,s.jsxs)("div",{className:"font-bold group transition ease-linear duration-200 cursor-pointer flex justify-between items-center",children:[s.jsx(c.default,{onClick:v,className:`${m?"rotate-0 transition ease-linear duration-200":"-rotate-90  transition ease-linear duration-200"}`,src:o,alt:"Dropdown Icon"}),s.jsx("h1",{onClick:v,className:"ml-4 transition ease-linear duration-200",children:r}),(0,s.jsxs)("div",{className:"justify-between group-hover:opacity-100 group-hover:transition group-hover:duration-200 group-hover:transition:ease-linear opacity-0 peer-hover:opacity-100  ml-4 flex items-center space-x-3",children:[s.jsx(c.default,{src:h.Z,alt:"Edit icon"}),s.jsx("div",{children:s.jsx(d.default,{children:s.jsx(c.default,{onClick:()=>b(e),src:i,alt:"Add icon"})})})]})]}),m&&(0,s.jsxs)("div",{className:"pl-[20px] w-full  h-fit left-0 transition ease-linear duration-200",children:[s.jsx("ul",{className:"pl-6 list-disc text-xs my-1 italic transition ease-linear duration-200",children:l&&l?.map((e,t)=>s.jsx("li",{className:"ml-2",children:e},t))}),n?.content?.map(e=>s.jsx(y,{id:e?.key,clusterId:t,description:e?.description,title:e?.title,content:e&&e},e.key))]}),s.jsx(u.Z,{title:"Create a subcategory",classStyle:"bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center",isOpen:g,onClose:()=>p(!1),children:s.jsx(j,{handleCloseModal:()=>p(!1),clusterId:t,tradeChannelId:e})})]})},C=({data:e,clusterId:t})=>s.jsx("div",{className:"my-4",children:e?.map(e=>s.jsx(y,{id:e?.key,clusterId:t,title:e?.title,content:e},e.key))}),N=({content1:e,content2:t})=>(0,s.jsxs)("div",{className:"flex  w-full flex-col  lg:space-x-4 lg:flex-row",children:[s.jsx("div",{className:"w-full",children:e}),t&&s.jsx("div",{className:"w-full",children:t})]}),w=({handleCloseModal:e,channelClusterId:t})=>{let{dispatch:r,channelClusters:l}=(0,f.r)(),{register:n,handleSubmit:a}=(0,m.cI)();return(0,s.jsxs)("form",{onSubmit:a(s=>{let l={...s,channelClusterId:t};r((0,b.vK)(l)),e()}),children:[s.jsx("div",{className:"",children:s.jsx(N,{content1:s.jsx(x.Z,{name:"tradeChannelName",register:n("tradeChannelName"),placeholder:"Trade channel Name"})})}),s.jsx("div",{className:"w-full pt-[2%]",children:s.jsx(g.z,{type:"submit",children:"Add Trade Channel"})})]})},k=({id:e,content:t,name:r,color:l})=>{let[n,o]=(0,a.useState)(!1),h=e=>{o(!0),console.log("id",e)};return(0,s.jsxs)("div",{className:"relative max-w-xs",children:[(0,s.jsxs)("div",{className:"relative",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 232 59",fill:"none",children:s.jsx("path",{d:"M101.583 0.5H8C3.58172 0.5 0 4.08172 0 8.5V58.5H232V24.2083C232 19.7901 228.418 16.2083 224 16.2083H129.333C127.71 16.2083 126.126 15.7147 124.79 14.793L106.126 1.9153C104.79 0.993609 103.206 0.5 101.583 0.5Z",fill:"#414C50"})}),s.jsx("h1",{className:"absolute top-[45%] pb-2 left-6 font-bold text-xl",children:r}),s.jsx("div",{style:{backgroundColor:`${l?.hex}`},className:"absolute w-5 h-5 rounded-full top-[45%] pb-2 right-6 "})]}),(0,s.jsxs)("div",{className:" py-3 px-6 -mt-2 flex justify-center w-full items-center bg-bgColorDark rounded-lg",children:[(0,s.jsxs)("div",{children:[s.jsx(C,{clusterId:e,data:t}),s.jsx("div",{className:"w-full pt-4",children:s.jsx(d.default,{children:(0,s.jsxs)("div",{onClick:()=>h(e),className:" py-2 px-3 cursor-pointer flex justify-center space-x-2 items-center rounded-md w-full border border-dashed border-slate-400",children:[s.jsx(c.default,{src:i,alt:"Add icon"}),s.jsx("h1",{children:"Add Trade channel"})]})})})]}),s.jsx(u.Z,{title:"Create a trade channel",isOpen:n,onClose:()=>o(!1),classStyle:"bg-cardDark  h-8/10 xl:h-[25vh] xl:max-w-[28rem] align-self-center",children:s.jsx(w,{channelClusterId:e,handleCloseModal:()=>{o(!1)}})})]})]})};function E(e,t){return Array.isArray(e)?e.includes(t):e}function S(){let e=(0,a.useRef)(null),[t,r]=(0,a.useState)(0);(0,a.useCallback)(()=>r(e=>e+1),[]);let s=(0,a.useMemo)(()=>{let{width:t=1,height:r=1}=e.current?.getBoundingClientRect()??{};return{width:t,height:r}},[t]),l=(0,a.useCallback)(()=>{let{left:t=1,right:r=1,top:s=1,bottom:l=1}=e.current?.getBoundingClientRect()??{};return{left:t,right:r,top:s,bottom:l}},[]);return[e,s,l]}function M(e,t,r){return e<t?t:e>r?r:e}var I=new class{convert(e,t){let r=this.toHex("#000000"),s=this.hex2rgb(r),l=this.rgb2hsv(s);return"hex"===e?(r=this.toHex(t),s=this.hex2rgb(r),r.startsWith("rgba")&&(s=this.toRgb(r),r=this.rgb2hex(s)),l=this.rgb2hsv(s)):"rgb"===e?(s=t,r=this.rgb2hex(s),l=this.rgb2hsv(s)):"hsv"===e&&(l=t,s=this.hsv2rgb(l),r=this.rgb2hex(s)),{hex:r,rgb:s,hsv:l}}toHex(e){if(e.startsWith("#")){if(4===e.length||5===e.length)return e=e.split("").map((e,t)=>t?t<4?e+e:"f"===e?void 0:e+e:"#").join("");if(7===e.length)return e;if(9===e.length)return e.endsWith("ff")?e.slice(0,7):e}else{let t=document.createElement("canvas").getContext("2d");if(!t)throw Error("2d context not supported or canvas already initialized");return t.fillStyle=e,t.fillStyle}return"#000000"}toRgb(e){let t=e.match(/\d+(\.\d+)?/gu)??[],[r,s,l,n]=Array.from({length:4}).map((e,r)=>M(+(t[r]??(r<3?0:1)),0,r<3?255:1));return{r,g:s,b:l,a:n}}toHsv(e){let t=e.match(/\d+(\.\d+)?/gu)??[],[r,s,l,n]=Array.from({length:4}).map((e,r)=>M(+(t[r]??(r<3?0:1)),0,r?r<3?100:1:360));return{h:r,s:s,v:l,a:n}}hex2rgb(e){e=e.slice(1);let[t,r,s,l]=Array.from({length:4}).map((t,r)=>parseInt(e.slice(2*r,2*r+2),16));return{r:t,g:r,b:s,a:l=Number.isNaN(l)?1:l/255}}rgb2hsv({r:e,g:t,b:r,a:s}){e/=255,t/=255,r/=255;let l=Math.max(e,t,r),n=l-Math.min(e,t,r);return{h:n?(l===e?(t-r)/n+(t<r?6:0):l===t?2+(r-e)/n:4+(e-t)/n)*60:0,s:l?n/l*100:0,v:100*l,a:s}}hsv2rgb({h:e,s:t,v:r,a:s}){t/=100;let l=~~(e/60),n=e/60-l,a=(r/=100)*(1-t),i=r*(1-t*n),c=r*(1-t*(1-n)),d=l%6;return{r:255*[r,i,a,a,c,r][d],g:255*[c,r,r,i,a,a][d],b:255*[a,a,c,r,r,i][d],a:s}}rgb2hex({r:e,g:t,b:r,a:s}){let[l,n,a,i]=[e,t,r,s].map((e,t)=>Math.round(t<3?e:255*e).toString(16).padStart(2,"0"));return["#",l,n,a,"ff"===i?void 0:i].join("")}},P=(0,a.memo)(({onCoordinateChange:e,children:t})=>{let[r,{width:s,height:l},n]=S(),i=(0,a.useCallback)(t=>{let{left:r,top:a}=n();e(M(t.clientX-r,0,s),M(t.clientY-a,0,l))},[s,l,n,e]),c=(0,a.useCallback)(e=>{if(0!==e.button)return;i(e);let t=e=>{i(e)},r=e=>{i(e),document.removeEventListener("pointermove",t,!1),document.removeEventListener("pointerup",r,!1)};document.addEventListener("pointermove",t,!1),document.addEventListener("pointerup",r,!1)},[i]);return a.createElement("div",{ref:r,className:"rcp-interactive",onPointerDown:c},t)}),A=(0,a.memo)(({color:e,onChange:t})=>{let[r,{width:s}]=S(),l=(0,a.useMemo)(()=>({x:e.hsv.a*s}),[e.hsv.a,s]),n=(0,a.useCallback)(r=>{t(I.convert("hsv",{...e.hsv,a:r/s}))},[e.hsv,s,t]),i=(0,a.useMemo)(()=>[e.rgb.r,e.rgb.g,e.rgb.b].join(" "),[e.rgb.r,e.rgb.g,e.rgb.b]),c=(0,a.useMemo)(()=>[i,e.rgb.a].join(" / "),[i,e.rgb.a]);return a.createElement(P,{onCoordinateChange:n},a.createElement("div",{ref:r,style:{background:`linear-gradient(to right, rgb(${i} / 0), rgb(${i} / 1)) top left / auto auto,
                      conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) top left / 12px 12px
                      repeat`},className:"rcp-alpha"},a.createElement("div",{style:{left:l.x,background:`linear-gradient(to right, rgb(${c}), rgb(${c})) top left / auto auto,
                        conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) ${-l.x-4}px 2px / 12px 12px
                        repeat`},className:"rcp-alpha-cursor"})))});function q(e,t){return Math.round(e*10**t)/10**t}function _({r:e,g:t,b:r,a:s}){let l=[Math.round(e),Math.round(t),Math.round(r)],n=q(s,3);return n<1&&l.push(n),l.join(", ")}function z({h:e,s:t,v:r,a:s}){let l=[`${Math.round(e)}\xb0`,`${Math.round(t)}%`,`${Math.round(r)}%`],n=q(s,3);return n<1&&l.push(n),l.join(", ")}var D=(0,a.memo)(({hideInput:e,color:t,onChange:r})=>{let[s,l]=(0,a.useState)({hex:{value:t.hex,inputted:!1},rgb:{value:_(t.rgb),inputted:!1},hsv:{value:z(t.hsv),inputted:!1}});(0,a.useEffect)(()=>{s.hex.inputted||l(e=>({...e,hex:{...e.hex,value:t.hex}}))},[s.hex.inputted,t.hex]),(0,a.useEffect)(()=>{s.rgb.inputted||l(e=>({...e,rgb:{...e.rgb,value:_(t.rgb)}}))},[s.rgb.inputted,t.rgb]),(0,a.useEffect)(()=>{s.hsv.inputted||l(e=>({...e,hsv:{...e.hsv,value:z(t.hsv)}}))},[s.hsv.inputted,t.hsv]);let n=(0,a.useCallback)(e=>t=>{let{value:s}=t.target;l(t=>({...t,[e]:{...t[e],value:s}})),r("hsv"===e?I.convert("hsv",I.toHsv(s)):"rgb"===e?I.convert("rgb",I.toRgb(s)):I.convert("hex",s))},[r]),i=(0,a.useCallback)(e=>()=>{l(t=>({...t,[e]:{...t[e],inputted:!0}}))},[]),c=(0,a.useCallback)(e=>()=>{l(t=>({...t,[e]:{...t[e],inputted:!1}}))},[]);return a.createElement("div",{className:"rcp-fields"},!E(e,"hex")&&a.createElement("div",{className:"rcp-fields-floor"},a.createElement("div",{className:"rcp-field"},a.createElement("input",{id:"hex",className:"rcp-field-input",value:s.hex.value,onChange:n("hex"),onFocus:i("hex"),onBlur:c("hex")}),a.createElement("label",{htmlFor:"hex",className:"rcp-field-label"},"HEX"))),(!E(e,"rgb")||!E(e,"hsv"))&&a.createElement("div",{className:"rcp-fields-floor"},!E(e,"rgb")&&a.createElement("div",{className:"rcp-field"},a.createElement("input",{id:"rgb",className:"rcp-field-input",value:s.rgb.value,onChange:n("rgb"),onFocus:i("rgb"),onBlur:c("rgb")}),a.createElement("label",{htmlFor:"rgb",className:"rcp-field-label"},"RGB")),!E(e,"hsv")&&a.createElement("div",{className:"rcp-field"},a.createElement("input",{id:"hsv",className:"rcp-field-input",value:s.hsv.value,onChange:n("hsv"),onFocus:i("hsv"),onBlur:c("hsv")}),a.createElement("label",{htmlFor:"hsv",className:"rcp-field-label"},"HSV"))))}),Z=(0,a.memo)(({color:e,onChange:t})=>{let[r,{width:s}]=S(),l=(0,a.useMemo)(()=>({x:e.hsv.h/360*s}),[e.hsv.h,s]),n=(0,a.useCallback)(r=>{t(I.convert("hsv",{...e.hsv,h:r/s*360}))},[e.hsv,s,t]),i=(0,a.useMemo)(()=>[e.hsv.h,"100%","50%"].join(" "),[e.hsv.h]);return a.createElement(P,{onCoordinateChange:n},a.createElement("div",{ref:r,className:"rcp-hue"},a.createElement("div",{style:{left:l.x,backgroundColor:`hsl(${i})`},className:"rcp-hue-cursor"})))}),$=(0,a.memo)(({height:e,color:t,onChange:r})=>{let[s,{width:l}]=S(),n=(0,a.useMemo)(()=>({x:t.hsv.s/100*l,y:(100-t.hsv.v)/100*e}),[t.hsv.s,t.hsv.v,l,e]),i=(0,a.useCallback)((s,n)=>{r(I.convert("hsv",{...t.hsv,s:s/l*100,v:100-n/e*100}))},[t.hsv,l,e,r]),c=(0,a.useMemo)(()=>[t.hsv.h,"100%","50%"].join(" "),[t.hsv.h]),d=(0,a.useMemo)(()=>[t.rgb.r,t.rgb.g,t.rgb.b].join(" "),[t.rgb.r,t.rgb.g,t.rgb.b]);return a.createElement(P,{onCoordinateChange:i},a.createElement("div",{ref:s,style:{height:e,backgroundColor:`hsl(${c})`},className:"rcp-saturation"},a.createElement("div",{style:{left:n.x,top:n.y,backgroundColor:`rgb(${d})`},className:"rcp-saturation-cursor"})))}),H=(0,a.memo)(({height:e=200,hideAlpha:t=!1,hideInput:r=!1,color:s,onChange:l})=>a.createElement("div",{className:"rcp-root rcp"},a.createElement($,{height:e,color:s,onChange:l}),a.createElement("div",{className:"rcp-body"},a.createElement("section",{className:"rcp-section"},a.createElement(Z,{color:s,onChange:l}),!t&&a.createElement(A,{color:s,onChange:l})),(!E(r,"hex")||!E(r,"rgb")||!E(r,"hsv"))&&a.createElement("section",{className:"rcp-section"},a.createElement(D,{hideInput:r,color:s,onChange:l})))));r(14474);let L=({handleCloseModal:e})=>{let[t,r]=function(e){let[t,r]=(0,a.useState)(I.convert("hex",e));return[t,r]}("#414C50"),{handleSubmit:l,register:n,formState:{errors:i}}=(0,m.cI)(),{dispatch:c}=(0,f.r)();return(0,s.jsxs)("form",{onSubmit:l(r=>{let s={...r,color:t};c((0,b._1)(s)),e()}),children:[(0,s.jsxs)("div",{className:"",children:[s.jsx("h1",{children:"Name"}),s.jsx("div",{className:"mt-1",children:s.jsx(x.Z,{name:"channelClusterName",register:n("name",{required:!0})})})]}),(0,s.jsxs)("div",{className:"mt-4",children:[(0,s.jsxs)("div",{className:"flex mb-4 items-center justify-between",children:[s.jsx("h1",{className:"font-bold",children:"Choose a color"}),s.jsx("div",{className:"w-7 h-7 rounded-full",style:{backgroundColor:`${t.hex}`}})]}),s.jsx("div",{children:s.jsx(H,{color:t,onChange:r})})]}),s.jsx("div",{className:"my-4",children:s.jsx(g.z,{type:"submit",variant:i.name?"disabled":"default",disabled:!!i.name,children:"Save"})})]})},F=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"flex w-full mt-6 mb-12 justify-between items-center",children:[(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"font-bold text-xl",children:"Channel cluster"}),s.jsx("p",{className:"text-slate-600",children:"Channel cluster"})]}),s.jsx("div",{children:s.jsx(g.z,{onClick:()=>t(!0),icon:p,children:"Add Channel Cluster"})}),s.jsx(u.Z,{title:"Create a channel cluster",isOpen:e,onClose:()=>t(!1),classStyle:"bg-cardDark  h-8/10 xl:h-fit xl:max-w-[28rem] align-self-center",children:s.jsx(L,{handleCloseModal:()=>{t(!1)}})})]})},T=()=>{let{channelClusters:e}=(0,f.r)();return(0,s.jsxs)("div",{className:"w-full space-x-4",children:[s.jsx(F,{}),s.jsx("div",{className:"grid pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:e?.map(e=>s.jsx(k,{id:parseInt(`${e?.id}`),name:e?.name,content:e?.tradeChannel,color:e?.color},e?.id))})]})},R={src:"/_next/static/media/InfoIcon.d7c18854.svg",height:24,width:24,blurWidth:0,blurHeight:0},W=({color:e,description:t,id:r,name:l,duration:n,tradeChannel:a,priority:i})=>(0,s.jsxs)("div",{className:"relative bg-cardDark p-4 rounded-lg",children:[s.jsx("div",{className:` bg-[${e}] h-full w-8 top-0 absolute left-0`}),(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("h1",{className:"font-bold text-xl",children:l}),(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[s.jsx("div",{children:s.jsx(d.default,{children:s.jsx(c.default,{src:R,alt:"Info icon"})})}),s.jsx("div",{children:s.jsx(d.default,{children:s.jsx(c.default,{src:h.Z,alt:"Edit icon"})})})]})]}),s.jsx("p",{className:"my-4",children:t}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("div",{className:"",children:[s.jsx("h1",{className:"text-slate-300 mb-2",children:"Trade channel"}),s.jsx("div",{className:"bg-[#CCEAF7] rounded-full py-1 px-2 text-sm text-buttonPrimary",children:a})]}),(0,s.jsxs)("div",{className:"",children:[s.jsx("h1",{className:"text-slate-300 mb-2",children:"Priority"}),(0,s.jsxs)("div",{className:"bg-[#FFCCD5] rounded-full py-1 px-2 text-sm text-[#C9184A]",children:[i," Medium"]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[s.jsx("h1",{className:"text-slate-300 mb-2",children:"Total time"}),s.jsx("h1",{className:"font-bold",children:n})]})]})]}),B={src:"/_next/static/media/closeSlideInIcon.bcc81525.svg",height:24,width:24,blurWidth:0,blurHeight:0};var O=r(63431);let G=({title:e,isOpen:t,onClose:r,children:l})=>{(0,a.useRef)(null);let n=(0,O.O)(()=>{r()});return(0,s.jsxs)("div",{ref:n,className:`${t?"translate-x-0 transition ease-linear duration-200":"translate-x-[50rem]  transition ease-linear duration-200"} fixed  h-screen w-3/12 z-10 top-0 right-0  bg-cardDark`,children:[(0,s.jsxs)("div",{className:"flex px-8 pt-4 justify-between",children:[s.jsx("h1",{className:"font-bold text-xl",children:e}),s.jsx("div",{children:s.jsx(d.default,{children:s.jsx(c.default,{onClick:()=>r(),alt:"Close icon",src:B})})})]}),s.jsx("div",{className:"py-4 h-[93vh] overflow-y-scroll p-8",children:l})]})},V=({children:e})=>s.jsx("div",{className:"flex flex-col my-4 justify-between",children:e});var X=r(60809);let K=({props:e,name:t,placeholder:r})=>(0,s.jsxs)(s.Fragment,{children:[s.jsx("label",{htmlFor:t,className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:r}),s.jsx("textarea",{id:r,rows:4,name:t,...e,className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Description"})]});var U=r(56422),Y=r(46784),J=r(24299);let Q=({handleCloseModal:e})=>{let{register:t,handleSubmit:r,watch:l}=(0,m.cI)(),{dispatch:n}=(0,f.r)(),a=l("channelCluster"),i=l("tradeChannel"),c=U.f?.find(e=>e?.name?.toLowerCase()===a?.toLowerCase()),d=c?.tradeChannel?.find(e=>e?.title?.toLowerCase()===i?.toLowerCase());return(0,s.jsxs)("form",{className:" rounded-lg ",onSubmit:r(t=>{n((0,Y.ym)(t)),e()}),children:[(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Activity Name"}),s.jsx(x.Z,{name:"name",register:t("name",{required:!0}),placeholder:"Activity name"})]}),(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Priority"}),s.jsx(X.Z,{name:"priority",options:["Low","Medium","High"],register:t("priority")})]}),(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Channel cluster"}),s.jsx(X.Z,{name:"channelCluster",options:(0,J.z)(U.f),register:t("channelCluster",{required:!0})})]}),a&&(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Trade channel"}),s.jsx(X.Z,{name:"tradeChannel",options:(0,J.z)(c?.tradeChannel,"title"),register:t("tradeChannel",{required:!0})})]}),i&&d?.content&&d?.content?.length!==0&&(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Category"}),s.jsx(X.Z,{name:"category",options:(0,J.z)(d?.content,"title"),register:t("category",{required:!0})})]}),(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Duration"}),s.jsx(x.Z,{type:"number",placeholder:"In minutes",register:t("duration",{required:!0})})]}),(0,s.jsxs)(V,{children:[s.jsx("h1",{children:"Frequency"}),s.jsx(x.Z,{type:"number",placeholder:"eg: 4",register:t("frequency",{required:!0})})]}),s.jsx("div",{children:s.jsx(K,{props:t("description"),name:"description",placeholder:"Description"})}),s.jsx("div",{className:"mt-8",children:s.jsx(g.z,{children:"Create activity"})})]})},ee=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)("div",{className:"flex  w-full mt-6 mb-12 justify-between items-center",children:[(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"font-bold text-xl",children:"Activity"}),s.jsx("p",{className:"text-slate-600",children:"Activity"})]}),s.jsx("div",{children:s.jsx(g.z,{onClick:()=>t(!0),icon:p,children:"Add activity"})}),s.jsx(G,{isOpen:e,onClose:()=>t(!1),title:"Create new activity",children:s.jsx(Q,{handleCloseModal:()=>t(!1)})})]})},et=()=>{let{activities:e}=(0,f.r)();return(0,s.jsxs)("div",{className:"w-full",children:[s.jsx(ee,{}),s.jsx("div",{className:"grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ",children:e?.map(e=>s.jsx(W,{color:"#ffffff",description:e?.description||"Description of each task",id:e?.id,name:e?.name,tradeChannel:e?.tradeChannel,duration:e.duration},e.id))})]})},er=()=>(0,s.jsxs)("div",{className:"w-full relative",children:[s.jsx("div",{className:" flex items-start h-[6.5rem] px-8 dark:bg-bgColorDark",children:s.jsx("div",{className:"font-bold text-xl pt-4",children:"Settings"})}),s.jsx("div",{className:"absolute w-full px-8 top-[4rem]",children:(0,s.jsxs)(l.n,{radius:"full",color:"primary",classNames:{tabList:"gap-6  w-full relative rounded-none p-0 ",cursor:"w-full bg-buttonPrimary",tab:"max-w-fit px-3 h-8 ",tabContent:"group-data-[selected=true]:text-white"},variant:"underlined","aria-label":"Tabs variants",children:[s.jsx(n.r,{title:"Channel Cluster",children:s.jsx(T,{})},"channelCluster"),s.jsx(n.r,{title:"Activities",children:s.jsx(et,{})},"activities"),s.jsx(n.r,{title:"Travel Time",children:"Travel time"},"travelTime"),s.jsx(n.r,{title:"Service and Sales Model",children:"Service and sales model"},"role")]})})]})},63431:(e,t,r)=>{"use strict";r.d(t,{O:()=>l});var s=r(17577);let l=e=>{let t=(0,s.useRef)();return(0,s.useEffect)(()=>{let r=r=>{t&&t?.current?.contains(r?.target)||e(r)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}}),t}},16788:(e,t,r)=>{"use strict";r.d(t,{r:()=>l});var s=r(25842);let l=()=>{let e=(0,s.v9)(e=>e?.ChannelClusterReducer.channelCluster),t=(0,s.v9)(e=>e?.ActivityReducer.activities);return{dispatch:(0,s.I0)(),channelClusters:e,activities:t}}},4726:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(19510);r(71159);var l=r(68570);let n=(0,l.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/common/components/settings/navbar/Navbar.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let c=(0,l.createProxy)(String.raw`/home/ezekiel-kaeyros/githubci/swi/frontend/src/app/common/components/settings/navbar/Navbar.tsx#default`),d=()=>s.jsx(c,{}),o=()=>s.jsx("div",{children:s.jsx(d,{})})},14474:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[377,471,231,86,626,621,390,723,11,126,892],()=>r(51121));module.exports=s})();