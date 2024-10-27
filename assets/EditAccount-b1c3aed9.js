import{r as t,U as E,a as S,j as e,P as D,I as c,B as u,L as F,Q as k,b as U}from"./index-b7dc60b3.js";import{u as B,c as I}from"./firebaseAuth-79fe1092.js";const L=()=>{const{authUser:r,loadingUser:l,isLoggedIn:N}=t.useContext(E),[m,y]=t.useState(""),[a,x]=t.useState(""),[o,p]=t.useState(""),[i,h]=t.useState(""),[b,n]=t.useState(""),[w,f]=t.useState(""),j=S();t.useEffect(()=>{!l&&r&&(y(r.displayName||""),x(r.displayName||""))},[l,r]);const v=async s=>{s.preventDefault();try{a.trim()===a&&a!==m?(await B(a),f("Profile updated successfully!")):n("Display name contains leading or trailing spaces, or it's the same as the current one.")}catch(d){n(d.message)}},P=async s=>{if(s.preventDefault(),o.trim()===i.trim())return U.info("New password can't be the same as the old one."),new Error("New password can't be the same as the old one");try{await I(o,i),f("Password updated successfully!"),p(""),h("")}catch(d){n(d.message)}},C=()=>{j("/YotuTube-Convert2MP3/account")},g=!a||a===m;return l?e.jsx(D,{}):N?e.jsxs("div",{className:"min-h-screen bg-[#1E1E1E] transition-colors duration-300 p-6",children:[e.jsxs("div",{className:"max-w-screen-lg mx-auto p-6 pt-20",children:[e.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"Edit Your Profile"}),b&&e.jsx("p",{className:"mb-4 text-red-400",children:b}),w&&e.jsx("p",{className:"mb-4 text-[#4CAF50]",children:w}),e.jsxs("form",{onSubmit:v,className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"displayName",className:"block text-lg font-semibold text-white mb-2",children:"Display Name"}),e.jsx(c,{type:"text",id:"displayName",value:a,onChange:s=>x(s.target.value),className:"w-full p-2 mb-4 bg-[#444] border border-[#555] text-white",placeholder:"Enter your display name",required:!0})]}),e.jsx(u,{aria_label:g?"Disabled Save Display Name":"Save Display Name",disabled:g,children:"Save Display Name",type:"submit",className:"self-start px-4 py-2 bg-[#4CAF50] text-white rounded hover:bg-[#388E3C] transition-colors duration-300"})]}),e.jsxs("form",{onSubmit:P,className:"flex flex-col gap-6 mt-8",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"currentPassword",className:"block text-lg font-semibold text-white mb-2",children:"Current Password"}),e.jsx(c,{password:!0,type:"password",id:"currentPassword",value:o,onChange:s=>p(s.target.value),className:"w-full p-2 bg-[#444] border border-[#555] text-white ",placeholder:"Enter your current password",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"newPassword",className:"block text-lg font-semibold text-[#333333] dark:text-white mb-2",children:"New Password"}),e.jsx(c,{password:!0,type:"password",id:"newPassword",value:i,onChange:s=>h(s.target.value),className:"w-full p-2 bg-[#444] border border-[#555] text-white",placeholder:"Enter your new password",required:!0})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(u,{aria_label:"Change Password",children:"Change Password",type:"submit",className:"self-start px-4 py-2 bg-[#4CAF50] text-white rounded hover:bg-[#388E3C] transition-colors duration-300"}),e.jsx(F,{to:"/YotuTube-Convert2MP3/reset-password",title:"Reset password",children:e.jsx("span",{className:"dark:text-white hover:underline",children:"Forgot password?"})})]})]}),e.jsx(u,{aria_label:"Cancel",children:"Cancel",onClick:C,className:"mt-6 px-4 py-2 rounded bg-[#555] text-[#FF5252] hover:bg-[#777]"})]}),e.jsx(k,{stacked:!0,position:"bottom-right"})]}):e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#1E1E1E] transition-colors duration-300",children:e.jsx("p",{className:"text-lg text-white",children:"Please log in to view your profile."})})};export{L as default};
