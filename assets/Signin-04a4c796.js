import{a as w,r as t,j as e,I as s,B as N,L as f}from"./index-cd7b557f.js";import{s as j}from"./firebaseAuth-979a5b9e.js";import{g as C}from"./ConvertErrorMsg-1de6037b.js";const F=()=>{const m=w(),[r,u]=t.useState(""),[l,x]=t.useState(""),[n,h]=t.useState(""),[i,o]=t.useState(""),[c,d]=t.useState(!1),g=async a=>{a.preventDefault(),d(!0),o("");try{await j(l,n,r),alert("Verification email sent! Please check your inbox."),m("/YotuTube-Convert2MP3/login")}catch(p){const b=C(p.message);o(b)}finally{d(!1)}};return e.jsx("div",{className:"min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] transition-all duration-300 px-4",children:e.jsxs("div",{className:"w-full max-w-md p-6 bg-[#1E1E1E] border-2 border-[#4CAF50] rounded-lg shadow-xl shadow-black/40",children:[e.jsx("h2",{className:"text-2xl text-center font-bold mb-6 text-white",children:"Sign in"}),i&&e.jsx("p",{className:"mb-4 text-red-400",children:i}),e.jsxs("form",{onSubmit:g,className:"flex flex-col",children:[e.jsx("label",{htmlFor:"name",className:"mb-2 text-white",children:"Name*"}),e.jsx(s,{type:"name",id:"name",value:r,onChange:a=>u(a.target.value),className:"border-[#4CAF50] bg-[#333] text-[#4CAF50] placeholder-[#4CAF50]",placeholder:"Enter your display name",required:!0}),e.jsx("label",{htmlFor:"email",className:"mb-2 text-[#333333] dark:text-white",children:"Email*"}),e.jsx(s,{type:"email",id:"email",value:l,onChange:a=>x(a.target.value),className:"border-[#4CAF50] bg-[#333] text-[#4CAF50] placeholder-[#4CAF50]",placeholder:"Enter your email",required:!0}),e.jsx("label",{htmlFor:"password",className:"mb-2 text-white",children:"Password*"}),e.jsx(s,{type:"password",id:"password",password:!0,value:n,onChange:a=>h(a.target.value),className:"border-[#4CAF50] bg-[#333] text-[#4CAF50] placeholder-[#4CAF50]",placeholder:"Enter your password",required:!0}),e.jsx(N,{aria_label:"Sign in",children:c?"Signing in...":"Sign in",type:"submit",className:"mt-3 px-3 py-2 text-white bg-[#4CAF50] hover:bg-[#388E3C]",disabled:c})]}),e.jsxs("p",{className:"mt-4 text-center text-white",children:["Already have an account?",e.jsx(f,{title:"Sign in",to:"/YotuTube-Convert2MP3/login",className:"hover:underline",children:"Login"})]})]})})};export{F as default};