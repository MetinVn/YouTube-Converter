// import { useState } from "react";

// import ResultLink from "../components/ResultLink";
// import Button from "../components/Button";
// import { Flip, toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useMP4 } from "../contexts/MP4Context";

// const ConvertedMP4 = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const { mp4List, setMP4List } = useMP4();

//   const handleDelete = async (title) => {
//     try {
//       await deleteMP4(title);
//       setMP4List((prevList) => {
//         const newList = { ...prevList };
//         delete newList[title];
//         return newList;
//       });
//       toast.info("Item deleted from mp4 list.");
//     } catch (error) {
//       toast.error("Failed to delete item from mp4 list.");
//       console.error("Error deleting MP4:", error);
//     }
//   };

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <ToastContainer
//         position="bottom-right"
//         draggable="touch"
//         transition={Flip}
//         draggableDirection="y"
//       />
//       <h1 className="text-2xl font-bold text-[#333] dark:text-white mb-6">
//         Converted Videos
//       </h1>
//       {!mp4List || Object.keys(mp4List).length === 0 ? (
//         <div className="text-lg text-[#666] dark:text-[#ccc]">
//           No converted videos available.
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {Object.entries(mp4List).map(([key, value], index) => {
//             const link360p = value.links["360p"];

//             return (
//               <div
//                 key={key}
//                 className="border rounded-lg dark:text-white  dark:border-[#444] shadow-md">
//                 <button
//                   title="Video item"
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full text-left p-1 flex flex-col items-start  text-[#333] dark:text-white rounded-t-lg relative">
//                   <img
//                     src={value.thumbnail}
//                     alt={value.title}
//                     className="w-full h-auto rounded-lg pointer-events-none"
//                   />
//                   <span className="font-semibold mb-2 text-justify">
//                     {value.title}
//                   </span>
//                   <span
//                     className={`absolute bottom-3 right-1 transform transition-transform duration-300 ${
//                       openIndex === index ? "rotate-180" : ""
//                     }`}>
//                     &#9660;
//                   </span>
//                 </button>
//                 {openIndex === index && (
//                   <div className="p-1 space-y-3">
//                     <ResultLink
//                       button={false}
//                       href={link360p || "#"}
//                       title="Download"
//                     />
//                     <Button
//                       aria_label="Delete video"
//                       type="button"
//                       children="Delete"
//                       onClick={() => handleDelete(key)}
//                       className="bg-[#FF5252] text-white hover:bg-[#E63946] dark:bg-[#555] dark:text-[#FF5252] dark:hover:bg-[#777] w-full py-2 rounded-lg"
//                     />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConvertedMP4;
