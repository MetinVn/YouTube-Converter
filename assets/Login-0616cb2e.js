import{a as f,r as s,j as e,I as c,B as v,L as d}from"./index-b7dc60b3.js";import{a as E}from"./firebaseAuth-79fe1092.js";import{g as N}from"./ConvertErrorMsg-1de6037b.js";const A=()=>{const m=f(),[a,u]=s.useState(""),[r,x]=s.useState(""),[o,l]=s.useState(""),[n,i]=s.useState(!1),[h,g]=s.useState(0),p=async t=>{t.preventDefault(),i(!0),l("");try{await E(a,r),m("/YotuTube-Convert2MP3/account")}catch(b){const w=N(b.message);l(w),g(j=>j+1)}finally{i(!1)}};return e.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] transition-all duration-300 px-4",children:e.jsxs("div",{className:"w-full max-w-md p-6 bg-[#1E1E1E] border-2 border-[#4CAF50] rounded-lg shadow-xl shadow-black/40",children:[e.jsx("h2",{className:"text-2xl text-center font-bold mb-6 text-white",children:"Login"}),o&&e.jsx("p",{className:"mb-4 text-red-400",children:o}),e.jsxs("form",{onSubmit:p,className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"mb-2 text-white",children:"Email"}),e.jsx(c,{type:"email",id:"email",value:a,onChange:t=>u(t.target.value),className:"border-[#4CAF50] bg-[#333] text-[#4CAF50] placeholder-[#4CAF50]",placeholder:"Enter your email",required:!0}),e.jsx("label",{htmlFor:"password",className:"mb-2 text-white",children:"Password"}),e.jsx(c,{type:"password",id:"password",password:!0,value:r,onChange:t=>x(t.target.value),className:"border-[#4CAF50] bg-[#333] text-[#4CAF50] placeholder-[#4CAF50]",placeholder:"Enter your password",required:!0}),e.jsx(v,{aria_label:"Login",children:n?"Logging in...":"Login",type:"submit",className:"mt-3 px-4 py-2 bg-[#4CAF50] text-white hover:bg-[#388E3C]",disabled:n})]}),h>1&&e.jsxs("p",{className:"mt-4 text-center text-white",children:["Forgot your password?"," ",e.jsx(d,{title:"Reset Password",to:"/YotuTube-Convert2MP3/reset-password",className:"hover:underline",children:"Reset it here"})]}),e.jsxs("p",{className:"mt-4 text-center text-white",children:["Don't have an account?",e.jsx(d,{title:"Sign in",to:"/YotuTube-Convert2MP3/signin",className:"hover:underline",children:"Sign in"})]})]})})};export{A as default};
