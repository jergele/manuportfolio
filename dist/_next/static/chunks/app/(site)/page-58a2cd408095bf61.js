(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502,581,506],{1042:(e,a,t)=>{Promise.resolve().then(t.bind(t,729))},729:(e,a,t)=>{"use strict";t.d(a,{default:()=>g});var s=t(7437),i=t(2265),l=t(2513),r=t(8961),c=t(6103),n=t.n(c);let d=(0,r.eI)({projectId:"i3l7154n",dataset:"production",useCdn:!0,perspective:"published",apiVersion:"2024-02-27"}),o=n()(d),x=e=>o.image(e);function m(e){let{image:a,alt:t,width:i=800,quality:l=80,sizes:r="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",className:c="",priority:n=!1}=e,d=[400,800,1200].map(e=>({url:x(a).width(e).quality(l).url(),width:e}));return(0,s.jsx)("img",{src:x(a).width(i).quality(l).url(),srcSet:d.map(e=>{let{url:a,width:t}=e;return"".concat(a," ").concat(t,"w")}).join(", "),sizes:r,alt:t,className:c,loading:n?"eager":"lazy",decoding:"async"})}function h(e){let{project:a,onClick:t}=e;return(0,s.jsx)("div",{onClick:t,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&t()},role:"button",tabIndex:0,"aria-label":"View details of ".concat(a.title),className:"aspect-square overflow-hidden cursor-pointer group relative",children:(0,s.jsxs)("div",{className:"relative w-full h-full",children:[(0,s.jsx)(m,{image:a.mainImage,alt:a.title,className:"object-cover w-full h-full",width:600,quality:75,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex flex-col items-center gap-2",children:[(0,s.jsx)(l.Z,{size:32,strokeWidth:1.5,className:"mb-2"}),(0,s.jsx)("p",{className:"text-base font-light tracking-wide",children:a.title}),(0,s.jsx)("p",{className:"text-sm font-light tracking-wide",children:a.category.title}),(0,s.jsx)("p",{className:"text-sm font-light tracking-wide",children:a.year})]})})]})})}var p=t(4697);function u(e){var a;let{project:t,onClose:i}=e;return(0,s.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 overflow-y-auto",onKeyDown:e=>{"Escape"===e.key&&i()},role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:(0,s.jsx)("div",{className:"min-h-screen px-4 py-8 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"relative bg-white rounded-lg w-full max-w-4xl",children:[(0,s.jsx)("button",{onClick:i,className:"absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full","aria-label":"Close modal",children:(0,s.jsx)(p.Z,{size:24})}),(0,s.jsxs)("div",{className:"p-6 pt-12",children:[(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:t.title}),(0,s.jsxs)("div",{className:"flex gap-2 text-gray-600 mt-1",children:[(0,s.jsx)("span",{children:t.year}),(0,s.jsx)("span",{children:"•"}),(0,s.jsx)("span",{children:t.category.title})]})]}),t.description&&(0,s.jsx)("p",{className:"text-gray-700 mb-8",children:t.description}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:null===(a=t.images)||void 0===a?void 0:a.map((e,a)=>(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(m,{image:e.image,alt:e.caption||"Image ".concat(a+1),className:"w-full rounded-lg",width:800,quality:85,sizes:"(max-width: 640px) 100vw, (max-width: 1200px) 50vw"}),e.caption&&(0,s.jsx)("p",{className:"text-sm text-gray-600",children:e.caption})]},a))})]})]})})})}function g(e){let{projects:a}=e,[t,l]=(0,i.useState)(null);return a&&0!==a.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[85%] mx-auto",children:a.map(e=>(0,s.jsx)(h,{project:e,onClick:()=>l(e)},e._id))}),t&&(0,s.jsx)(u,{project:t,onClose:()=>l(null)})]}):(0,s.jsx)("div",{className:"text-center py-10",children:(0,s.jsx)("p",{className:"text-gray-600 font-light",children:"Ei projekteja t\xe4ss\xe4 kategoriassa."})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[776,130,215,744],()=>a(1042)),_N_E=e.O()}]);