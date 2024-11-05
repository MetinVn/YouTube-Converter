import{r as c,j as e}from"./index-19c48e4a.js";const d=()=>{const[a,n]=c.useState({name:"",email:"",message:""}),s=l=>{const{name:t,value:r}=l.target;n(m=>({...m,[t]:r}))},o=l=>{l.preventDefault();const{name:t,email:r,message:m}=a,i=`mailto:aresxant@gmail.com?subject=Bug Report from ${t}&body=Name: ${t}%0AEmail: ${r}%0AMessage: ${m}`;window.location.href=i};return e.jsx("div",{className:"min-h-screen py-16 bg-[#1E1E1E] flex justify-center items-center",children:e.jsxs("form",{onSubmit:o,className:"bg-[#333] p-6 rounded shadow-md w-full max-w-md",children:[e.jsx("h2",{className:"text-white text-lg mb-4",children:"Bug Report"}),e.jsx("label",{className:"text-gray-400 block mb-2",children:"Name(Optional)"}),e.jsx("input",{type:"text",name:"name",placeholder:"Name",value:a.name,onChange:s,className:"w-full p-2 mb-4 bg-[#444] border border-[#555] text-white"}),e.jsx("label",{className:"text-gray-400 block mb-2",children:"Email:"}),e.jsx("input",{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:s,className:"w-full p-2 mb-4 bg-[#444] border border-[#555] text-white",required:!0}),e.jsx("label",{className:"text-gray-400 block mb-2",children:"Message:"}),e.jsx("textarea",{name:"message",value:a.message,onChange:s,className:"w-full p-2 mb-4 bg-[#444] border border-[#555] text-white",rows:"4",minLength:45,required:!0,placeholder:"Describe the bug in detail, e.g., 'The MP3 converter stalls at 50%,' or 'Error message appears when clicking download.'"}),e.jsx("button",{type:"submit",className:"w-full p-2 bg-[#4CAF50] text-white hover:bg-[#45a049] transition",children:"Submit"})]})})};export{d as default};