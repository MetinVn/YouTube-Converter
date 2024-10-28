import{d as re,m as B,n as D,o as ne,p as le,q as oe,t as ce,G as w,j as s,r as d,M as ie,U as ue,Q as de,F as pe,I as ge,C as A,b as N,B as P,v as he}from"./index-5f7c6d05.js";import{a as me,b as xe,c as fe,d as ye}from"./index-e05b7789.js";function be(r){const c=["Bytes","KB","MB","GB","TB"];if(r===0)return"0 Byte";const u=parseInt(Math.floor(Math.log(r)/Math.log(1024)),10);return`${(r/Math.pow(1024,u)).toFixed(2)} ${c[u]}`}async function ve(r,c){try{const u=re.currentUser;if(!u)throw new Error("User is not logged in.");const i=u.uid,h=B(D,`users/${i}/mp3s`,r);await ne(h,c),console.log(`MP3 with ID ${r} updated successfully!`)}catch(u){console.error("Failed to update MP3:",u.message)}}const je=async(r,c,u,i,h,f,x)=>{try{const n=await fetch(r,{method:"GET",headers:{Range:`bytes=0-${h-1}`}});return n.status===206||n.status===200?(i.info("Link is fresh and valid"),!0):(i.info("Executing link refresh."),await Pe(i,c,u,f,x),!1)}catch(n){return console.error("Error checking the link:",n.message),i.error("Error checking the link."),null}},Pe=async(r,c,u,i,h)=>{const f=await le(i,h);try{const n=await oe({method:"get",url:"https://youtube-mp36.p.rapidapi.com/dl",headers:{"X-RapidAPI-Key":"bb6ca9e02bmsh37ace359628eb67p1cfcfcjsn8051f8356a0f","X-RapidAPI-Host":"youtube-mp36.p.rapidapi.com"},params:{id:c}}),{link:p}=n==null?void 0:n.data;if(!p){r.error("No download link provided. Please try again later.");return}const b=f.map(j=>j.youtubeID===c?{...j,url:p}:j),m=b.find(j=>j.youtubeID===c);if(m)return await ve(c,m),u(b),r.success("Link refreshed and replaced successfully!"),!0}catch(x){return r.error("Failed to refresh the link. Please try again."),console.error("Error refreshing the link:",x),!1}};async function we(r,c,u){try{if(!r||!r.uid)throw new Error("User is not logged in.");const i=r.uid,h=B(D,`users/${i}/mp3s`,c.youtubeID);return await ce(h),u.success(`MP3 named ${c.title} deleted successfully!`),!0}catch(i){return console.error("Failed to delete MP3:",i.message),u.error("Failed to delete MP3:",i.message),!1}}function Ee(r){return w({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"},child:[]}]})(r)}function Ne(r){return w({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function ke(r){return w({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z"},child:[]}]})(r)}function Ce(r){return w({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z"},child:[]}]})(r)}function Ie(r){return w({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}const Le=({title:r,isPlaying:c,onPlay:u,onPause:i,onNext:h,onPrevious:f,onClosePlayer:x,onVolumeChange:n,currentVolume:p})=>s.jsxs("div",{className:`
    fixed z-50 top-1/2 right-2 border border-[#4CAF50] transform -translate-y-1/2 bg-[#333] text-white p-2 rounded-lg shadow-lg 
    w-40 flex flex-col items-center 
    sm:w-48 sm:p-3
    md:w-60 md:p-4
  `,children:[s.jsx("button",{className:"absolute top-1 right-1 text-[#1E1E1E] hover:text-[#4CAF50] sm:top-2 sm:right-2 duration-300",onClick:x,"aria-label":"Close Player",children:s.jsx(Ie,{})}),s.jsx("p",{className:"mb-1 text-center text-xs sm:text-sm md:text-base",children:r}),s.jsxs("div",{className:"flex items-center justify-around w-full",children:[s.jsx("button",{onClick:f,className:`
            text-lg text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-300 
            sm:text-xl md:text-2xl
          `,"aria-label":"Previous Track",children:s.jsx(ke,{})}),s.jsx("button",{onClick:c?u:i,className:`
            text-lg text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-300 
            sm:text-xl md:text-2xl
          `,"aria-label":c?"Play":"Pause",children:c?s.jsx(Ne,{}):s.jsx(Ee,{})}),s.jsx("button",{onClick:h,className:`
            text-lg text-[#4CAF50] hover:text-[#388E3C] transition-colors duration-300 
            sm:text-xl md:text-2xl
          `,"aria-label":"Next Track",children:s.jsx(Ce,{})})]}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p||1,onChange:n,className:`
          mt-2 w-full accent-[#4CAF50] 
          sm:mt-3
        `,"aria-label":"Volume Control"})]}),Te=({track:r,index:c,handlePlayPause:u,onLoadedMetadata:i,onPlay:h,onPause:f,isPlaying:x})=>{const n=d.useRef(null);return d.useEffect(()=>{const p=n.current;return x?(async()=>{try{const m=p.play();m!==void 0&&(await m,h())}catch(m){console.log("Playback prevented or failed:",m),f()}})():p.pause(),()=>{p.pause(),p.src=""}},[x,h,f]),s.jsx("audio",{ref:n,src:r.url,preload:"none",onLoadedMetadata:()=>i(c)})},Re=()=>{var F,R;const{mp3List:r,setMP3List:c,loading:u}=d.useContext(ie),{authUser:i,loadingUser:h}=d.useContext(ue),f={floatingPlayer:!1,playingIndex:null,loopingStates:{},refreshingItem:null},x=(t,e)=>{switch(e.type){case"SET_FLOATING_PLAYER":return{...t,floatingPlayer:e.payload};case"SET_PLAYING_INDEX":return{...t,playingIndex:e.payload};case"SET_LOOPING_STATES":return{...t,loopingStates:e.payload};case"SET_REFRESHING_ITEM":return{...t,refreshingItem:e.payload};default:return t}},[n,p]=d.useReducer(x,f),[b,m]=d.useState({volumes:{},progresses:{},tooltips:{}}),[j,z]=d.useState({}),[L,G]=d.useState(""),o=d.useRef([]).current,V=(F=o[n.playingIndex])==null?void 0:F.paused,y=Object.keys(r).filter(t=>r[t].title.toLowerCase().includes(L.toLowerCase())),T=d.useCallback(t=>{p({type:"SET_FLOATING_PLAYER",payload:!n.floatingPlayer}),p({type:"SET_PLAYING_INDEX",payload:t})}),k=t=>{const e=o[t];e.paused?e.play():e.pause(),p({type:"SET_PLAYING_INDEX",payload:t})},$=d.useCallback(()=>{if(y.length>0){const t=(n.playingIndex+1)%y.length;p({type:"SET_PLAYING_INDEX",payload:t})}},[n.playingIndex,y]),O=d.useCallback(()=>{if(y.length>0){const t=(n.playingIndex-1+y.length)%y.length;p({type:"SET_PLAYING_INDEX",payload:t})}},[n.playingIndex,y]),M=d.useCallback((t,e)=>{const a=t.target.value;m(l=>({...l,volumes:{...l.volumes,[e]:a}})),o[e]&&(o[e].volume=a)},[o]),U=d.useCallback((t,e)=>{var l;const a=t.target.value/100*(((l=o[e])==null?void 0:l.duration)||0);isFinite(a)&&o[e]&&o[e].currentTime!==a&&(o[e].currentTime=a,m(g=>g.progresses[e]===t.target.value?g:{...g,progresses:{...g.progresses,[e]:t.target.value}}))},[]),X=t=>{var l;const e=(l=r[t])==null?void 0:l.title,a=!n.loopingStates[t];p({type:"SET_LOOPING_STATES",payload:{...n.loopingStates,[t]:a}}),N.dark(a?"Looping enabled for: "+e:"Looping disabled for: "+e)},S=t=>{if(!isFinite(t))return"00:00";const e=Math.floor(t/60),a=Math.floor(t%60);return`${String(e).padStart(2,"0")}:${String(a).padStart(2,"0")}`},Y=d.useCallback((t,e)=>{var v;const a=t.currentTarget,l=a.getBoundingClientRect(),C=(t.clientX-l.left)/l.width*100,I=((v=o[e])==null?void 0:v.duration)||0,E=C/100*I;m(_=>({..._,tooltips:{..._.tooltips,[e]:{visible:!0,x:t.clientX-l.left+a.offsetLeft,y:t.clientY-l.top-40,time:S(E)}}}))}),H=d.useCallback(()=>{o.forEach((t,e)=>{t&&z(a=>({...a,[e]:t.duration}))})},[o,r]);d.useEffect(()=>{H()},[o,r]),d.useEffect(()=>{const t=e=>{if(o[e]&&isFinite(o[e].duration)){const a=o[e].currentTime/o[e].duration*100;m(l=>({...l,progresses:{...l.progresses,[e]:isFinite(a)?a:0}}))}};o.forEach((e,a)=>{if(e){const l=()=>t(a);e.addEventListener("timeupdate",l);const g=()=>{n.loopingStates[a]&&(e.currentTime=0,e.play())};return e.addEventListener("ended",g),()=>{e.removeEventListener("timeupdate",l),e.removeEventListener("ended",g)}}})},[o,n.playingIndex,n.loopingStates]),d.useEffect(()=>{(async()=>{if(n.playingIndex!==null&&o[n.playingIndex])try{await o[n.playingIndex].play()}catch{N.error("Playback failed. Try refreshing the link.")}o.forEach((e,a)=>{e&&a!==n.playingIndex&&e.pause()})})()},[n.playingIndex]);const K=async t=>{p({type:"SET_REFRESHING_ITEM",payload:t.url});try{await je(t.url,t.youtubeID,c,N,t.fileSize,i,h)}catch(e){console.error("Error refreshing the link:",e)}finally{p({type:"SET_REFRESHING_ITEM",payload:null})}},q=async(t,e)=>{i?(await we(i,t,e),c(a=>a.filter(g=>g.youtubeID!==t))):e.error("You need to be logged in to delete this song.")},Q=s.jsx("div",{className:"flex min-h-screen",children:s.jsx("section",{className:"flex-grow",children:s.jsx(A,{})})}),J=s.jsx("p",{className:"text-lg text-center text-gray-300 h-screen",children:"Convert any music to be able to listen to it here."}),W=s.jsx("p",{className:"text-lg text-center text-gray-300 h-screen",children:"No music matches your search. Try being more case-sensitive."}),Z=({isPlaying:t,onClick:e})=>s.jsx(P,{aria_label:"Play&Pause",children:t?s.jsx(me,{className:"stroke-gray-400",size:20}):s.jsx(xe,{className:"stroke-green-400",size:20}),onClick:e,className:"p-2 rounded-full bg-transparent hover:bg-[#777]"}),ee=({title:t,url:e,youtubeURL:a})=>s.jsx(he,{className:"text-sm sm:text-xl",target:"_blank",url:a,href:e,title:t}),te=({onRefresh:t,onDelete:e,onToggleFloatingPlayer:a})=>s.jsxs("div",{className:"flex space-x-1 sm:space-x-4",children:[s.jsx(P,{aria_label:"Refresh item",children:"Refresh Link",onClick:t,className:"py-1 px-1 text-sm sm:py-2 sm:px-4 sm:text-base bg-[#555] text-[#4ecb52] hover:bg-[#777]"}),s.jsx(P,{aria_label:"Delete item",children:"Delete item",onClick:e,className:"py-1 px-1 text-sm sm:py-2 sm:px-4 sm:text-base bg-[#555] text-[#FF5252] hover:bg-[#777]"}),s.jsx(P,{aria_label:"Toggle Floating Player",children:"Toggle Floating Player",onClick:a,className:"py-1 px-1 text-sm sm:py-2 sm:px-4 sm:text-base bg-green-500 text-white rounded hover:bg-green-700"})]}),se=({progress:t,onChange:e,onHover:a,tooltip:l})=>s.jsxs("div",{className:"relative w-full h-2 bg-gray-600 rounded-full max-w-[1000px]",children:[s.jsx("div",{className:"absolute top-0 left-0 h-full bg-green-500 rounded-full",style:{width:`${t}%`}}),s.jsx("input",{type:"range",min:"0",max:"100",className:"absolute top-0 left-0 w-full h-2 appearance-none cursor-pointer bg-transparent z-10",style:{opacity:0},value:t,onChange:e,onMouseMove:a}),(l==null?void 0:l.visible)&&s.jsx("div",{style:{position:"absolute",left:l.x,top:l.y},children:l.time})]}),ae=({isLooping:t,onLoopToggle:e,volume:a,onVolumeChange:l,fileSize:g})=>s.jsxs("div",{className:"flex items-center space-x-4 w-full",children:[s.jsx(P,{aria_label:"Repeat",children:s.jsx(fe,{className:t?"stroke-green-400":"stroke-gray-400",size:20}),onClick:e,className:"p-3 rounded-full bg-transparent hover:bg-[#777]"}),s.jsxs("div",{className:"flex items-center m-0 w-full space-x-3 max-w-[400px]",children:[s.jsx(ye,{className:"stroke-green-400",size:35}),s.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:a,onChange:l,className:"h-2 w-full rounded-lg cursor-pointer accent-green-500"}),s.jsxs("p",{className:"text-gray-400 text-sm text-right whitespace-nowrap",children:["File size: ",g]})]})]});return s.jsxs("div",{className:"bg-[#1E1E1E] pt-20 px-2 sm:px-6 py-14 sm:py-8",children:[s.jsx(de,{stacked:!0,position:"bottom-right",transition:pe,limit:8}),s.jsxs("div",{className:"bg-[#1E1E1E] p-4 flex justify-center items-center",children:[s.jsx("h1",{className:"text-2xl font-bold text-white ",children:"Music Player"}),s.jsx(ge,{type:"search",placeholder:"Search for a song",value:L,onChange:t=>G(t.target.value),className:"my-4 text-white bg-[#333] border-[#444] rounded w-full max-w-[600px] p-2"})]}),u?Q:Object.keys(r).length===0?J:Object.keys(y).length==0?W:s.jsx("ul",{className:"space-y-4 sm:space-y-6 text-ssm max-w-[1000px] w-full min-h-screen mx-auto",children:y.map((t,e)=>{const a=r[t],l=o[e],g=l==null?void 0:l.paused,C=n.loopingStates[e]||!1,I=S(j[e]||0),E=n.refreshingItem===a.url;return s.jsx("li",{className:` ${E?"cursor-wait":"cursor-default"} p-3 sm:p-6 border rounded-lg ${g?"bg-[#333] border-[#444]":"bg-[#494949] border-[#4ada31]"} shadow-md transition-colors duration-300 max-w-full`,children:E?s.jsx(A,{}):s.jsxs("div",{className:"flex flex-col items-center space-y-2 sm:space-y-4 w-full max-w-[1000px] mx-auto",children:[s.jsxs("div",{className:"flex flex-col justify-start items-start text-start w-full space-y-3",children:[s.jsxs("div",{className:"flex items-center w-full",children:[s.jsx(Z,{isPlaying:g,onClick:()=>k(e)}),s.jsx(ee,{title:a.title,url:a.url,youtubeURL:a.youtubeURL})]}),s.jsx("div",{className:"flex justify-between w-full space-x-4",children:s.jsx(te,{onRefresh:()=>K(a),onDelete:()=>q(a,N),onToggleFloatingPlayer:()=>T(e)})}),s.jsxs("p",{className:"text-sm text-gray-400 whitespace-nowrap",children:["Duration: ",I]})]}),s.jsx(se,{progress:b.progresses[e]||0,onChange:v=>U(v,e),onHover:v=>Y(v,e),tooltip:b.tooltips[e]}),s.jsx(ae,{isLooping:C,onLoopToggle:()=>X(e),volume:b.volumes[e]||.5,onVolumeChange:v=>M(v,e),fileSize:be(r[t].fileSize)}),s.jsx(Te,{track:a,index:e,onLoadedMetadata:()=>{},onPlay:()=>{},onPause:()=>{},isPlaying:g})]})},t)})}),s.jsx("div",{children:n.floatingPlayer&&s.jsx(Le,{title:((R=r[n.playingIndex])==null?void 0:R.title)||"Track name",isPlaying:V,onPlay:()=>k(n.playingIndex),onPause:()=>k(n.playingIndex),onNext:$,onPrevious:O,onClosePlayer:()=>T(n.playingIndex),onVolumeChange:t=>M(t,n.playingIndex),currentVolume:b.volumes[n.playingIndex]||1})})]})};export{Re as default};
