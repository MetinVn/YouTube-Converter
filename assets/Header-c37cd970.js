import{u,r as o,j as e,L as c,R as h,B as x,F as p,U as b,C as j}from"./index-c6a878c9.js";const g=()=>{const r=u(),[i,l]=o.useState([]),[n,m]=o.useState(null);return o.useEffect(()=>{try{const t=r.pathname.split("/").filter(Boolean);if(!t.length){l([]);return}const d=t.map((s,a)=>({path:`/${t.slice(0,a+1).join("/")}`,label:t[a]}));l(d)}catch(t){console.error("Error generating breadcrumbs:",t),m("An error occurred while generating breadcrumbs.")}},[r]),e.jsxs("nav",{children:[e.jsx(c,{title:"Home page","aria-label":"Home page",to:"/",className:"text-[#4CAF50] underline w-fit hover:text-[#236e26] text-sm md:text-base",children:"Home"}),n?e.jsx("span",{className:"text-red-500 ml-4 text-sm md:text-base",children:n}):i.map((t,d)=>e.jsxs(h.Fragment,{children:[e.jsx("span",{className:"mx-2 py-2 text-[#4CAF50] text-sm md:text-base",children:">"}),e.jsx(c,{title:t.label,"aria-label":t.label,className:"text-[#4CAF50] underline w-fit hover:text-[#236e26] text-sm md:text-base",to:t.path,children:t.label})]},d))]})},f=()=>{const[r,i]=o.useState(!1),l=o.useRef(null),n=s=>{const a=s.target;l.current&&!l.current.contains(a)&&i(!1)},m=()=>{i(!r)};o.useEffect(()=>(document.addEventListener("touchstart",n),document.addEventListener("mousedown",n),()=>{document.removeEventListener("touchstart",n),document.removeEventListener("mousedown",n)}),[]);const t=[{name:"Main Menu",description:"Convert Youtube links",linkTo:"/"},{name:"Check out MP3 list",description:"Listen to your converted music",linkTo:"/music-list"}],d=[{name:"Report a Bug",description:"Help us improve by reporting any issues.",linkTo:"/bug-report"}];return e.jsxs("div",{ref:l,className:`fixed top-0 left-0 pt-5 bg-[#1E1E1E] h-screen transition-all ease-in-out duration-300 ${r?"w-[320px] border-r border-r-[#4CAF50]":"w-0 overflow-hidden"} z-[9999]`,children:[" ",e.jsx("div",{className:"fixed top-2 left-2 z-[10000]",children:e.jsx(x,{children:e.jsx(p,{className:"stroke-[#4CAF50]",size:25}),type:"button",onClick:m,className:"px-3 py-2 bg-[#333] hover:bg-[#4d4d4d] active:bg-[#6e6e6e]",aria_label:"Burger Menu"})}),e.jsx("div",{className:`absolute h-full overflow-y-auto w-full overflow-x-hidden py-10 max-w-[1000px] mx-auto p-4 transition-opacity duration-300 ${r?"opacity-100":"opacity-0"}`,children:r&&e.jsxs("div",{className:"mt-5",children:[e.jsxs("section",{className:"text-sm",children:[e.jsx("p",{className:"text-white text-base sm:text-xl",children:"Features"}),e.jsx("hr",{className:"my-3"}),e.jsx("ul",{className:"space-y-3",children:t.map((s,a)=>e.jsx("li",{className:"p-2 border rounded bg-[#333] border-[#444] transition-colors duration-300 hover:bg-[#444]",children:e.jsxs(c,{to:s.linkTo,className:"block hover:underline text-[#4CAF50]",children:[e.jsx("h3",{className:"font-semibold",children:s.name}),e.jsx("p",{className:"text-gray-400 text-sm",children:s.description})]})},a))})]}),e.jsxs("section",{className:"mt-5 text-sm",children:[e.jsx("p",{className:"text-white text-base sm:text-xl",children:"Bug report"}),e.jsx("hr",{className:"my-3"}),e.jsx("ul",{className:"space-y-3",children:d.map((s,a)=>e.jsx("li",{className:"p-2 border rounded bg-[#333] border-[#444] transition-colors duration-300 hover:bg-[#444]",children:e.jsxs(c,{to:s.linkTo,className:"block hover:underline text-[#4CAF50]",children:[e.jsx("h3",{className:"font-semibold",children:s.name}),e.jsx("p",{className:"text-gray-400 text-sm",children:s.description})]})},a))})]})]})})]})},y=()=>{const{isLoggedIn:r,loadingUser:i}=o.useContext(b);return e.jsxs("div",{className:"fixed top-5 right-5 md:top-2 flex items-center md:items-center justify-end md:justify-center text-justify gap-4 mb-4",children:[e.jsx("div",{className:"block",children:e.jsx(g,{})}),i?e.jsx(j,{}):r?e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(c,{to:"/account",children:e.jsx(x,{aria_label:"Account",children:"Account",type:"button",className:"p-2 rounded text-[#4CAF50] hover:bg-[#333] text-sm md:text-base"})})]}):e.jsx(c,{to:"/signin",children:e.jsx(x,{aria_label:"Sign in",children:"Sign in",type:"button",className:"p-2 rounded text-[#4CAF50] hover:bg-[#333] text-sm md:text-base"})})]})};export{y as default};