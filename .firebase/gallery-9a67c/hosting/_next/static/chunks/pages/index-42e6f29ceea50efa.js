(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(9404)}])},9404:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return b},useGetImages:function(){return p}});var t=l(5893),s=l(4184),n=l.n(s),r=l(7294),i=l(3750),o=l(1873);let c=e=>{let{icon:a,isToggled:l}=e;return(0,t.jsx)(a.value,{className:n()("h-5 w-5 transition-all duration-500 ease-in-out",l?"text-black":"text-white/50 hover:text-white")})},d=e=>{let{view:a,setView:l}=e;return(0,t.jsxs)("div",{className:"flex gap-8 rounded-full bg-black/30 backdrop-blur-lg px-5 py-2 w-28 h-11 relative",children:[(0,t.jsx)("div",{className:n()("bg-white rounded-full h-7 w-12 absolute top-2 z-0 transition-all ease-in-out duration-500","gallery"===a?"-translate-x-3":"translate-x-9")}),(0,t.jsx)("button",{className:"z-10",onClick:()=>l("gallery"),children:(0,t.jsx)(c,{icon:{value:i.gc_},isToggled:"gallery"===a})}),(0,t.jsx)("button",{className:"z-10",onClick:()=>l("list"),children:(0,t.jsx)(c,{icon:{value:o.h3A},isToggled:"list"===a})})]})};var u=l(9734),h=l(5675),x=l.n(h),m=l(1664),f=l.n(m),g=l(8193);let v=()=>(0,t.jsxs)("header",{className:"bg-white/70 backdrop-blur-lg text-xl font-bold absolute top-0 left-0 py-6 px-10 flex items-center  w-full justify-between z-100",children:[(0,t.jsxs)("div",{className:"flex items-center gap-6",children:[(0,t.jsx)(x(),{className:"object-cover rounded-full",src:"/Nathan.png",alt:"Nathan profile image",height:50,width:50}),(0,t.jsx)("h1",{children:"Nathan MacDonald Photography"}),(0,t.jsxs)("div",{className:"flex items-center gap-10 pl-6 border-l border-black",children:[(0,t.jsx)(f(),{href:"/about",children:"About"}),(0,t.jsx)(f(),{href:"https://www.instagram.com/nathan.macdobald/",children:"Instagram"})]})]}),(0,t.jsx)(g.nxQ,{className:"h-7 w-7"})]}),j=e=>{let{img:a}=e;return(0,t.jsxs)("div",{className:"group flex flex-col items-center justify-center",children:[(0,t.jsx)(x(),{className:"object-cover transition duration-300  group-hover:opacity-50",src:a.src,alt:a.name,height:200,width:400}),(0,t.jsx)("b",{className:"absolute text-4xl font-bold transition duration-500 group-hover:visible invisible group-hover:-translate-y-4",children:a.name})]},a.name)};function p(){return(0,u.ZP)("/api/images",()=>fetch("/api/images").then(e=>e.json()))}function b(){var e,a;let l=p(),[s,i]=(0,r.useState)("gallery");return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("main",{className:n()("transition-all ease-in-out duration-1000"),children:["gallery"===s?(0,t.jsx)("div",{className:"relative flex justify-center w-full overflow-y-scroll overflow-x-hidden py-40 h-screen",children:(0,t.jsx)("div",{className:"grid grid-cols-3 gap-10  items-center",children:null===(e=l.data)||void 0===e?void 0:e.map(e=>(0,t.jsx)(j,{img:e},e.name))})}):(0,t.jsx)("div",{className:"flex items-center overflow-y-hidden h-screen gap-24 overflow-x-scroll pl-96 snap-x",children:null===(a=l.data)||void 0===a?void 0:a.map(e=>(0,t.jsx)("div",{className:"w-1/2 shrink-0 snap-center relative",children:(0,t.jsx)(j,{img:e},e.name)},e.name))}),(0,t.jsx)(v,{}),(0,t.jsx)("div",{className:"absolute bottom-10 left-10",children:(0,t.jsx)(d,{view:s,setView:i})})]})})}}},function(e){e.O(0,[86,13,617,937,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);