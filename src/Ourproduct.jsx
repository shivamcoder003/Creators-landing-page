import React, { useState } from 'react'
import "./App.css";
import { motion ,AnimatePresence } from "framer-motion";

const Ourproduct = () => {
      const [showText, setShowText] = useState(false);
      const [showText1, setShowText1] = useState(false);
      const [showText2, setShowText2] = useState(false);
 const [showText3, setShowText3] = useState(false);

const [circletext,setcircletext]=useState(false)

   const [hovered, setHovered] = useState(false);


const circleimage=[

  {image:"./cameraimagee.png",title:"Camera"},
  {image:"./brandcamera.png",title:"Webcame"},
  {image:"./headphonee.png",title:"Mic" },
   {image:"./digital.png",title:"Digital Board" },
  {image:"./ops.png",title:"Ops" },
  {image:"./cable.png",title:"Cable" },
  {image:"./ligticon.png",title:"Light" },
  {image:"./stand.png",title:"Stand" },
  {image:"./cardreader.png",title:"Cardreader" }


]

const[activeindex,setactiveindex]=useState(null);




  const handleClick = () => {
    setShowText(true);
  };
   const handleClick1 = () => {
    setShowText1(true);
  };
   const handleClick2 = () => {
    setShowText2(true);
  };
const handleClick3 = () => {
    setShowText2(true);
  };

  return (
    <div className='h-auto'

      style={{
    backgroundImage:
      "linear-gradient(35.7deg, rgba(105,238,218,1) 31.2%, rgba(114,80,228,1) 81.4%)"}}
    
    >
        <div
        className='flex justify-center items-center flex-col'
        >





<motion.p
  initial={{ filter: "blur(100px)", opacity: 0 }}
  whileInView={{ filter: "blur(0px)", opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="text-center pt-10 text-4xl font-bold text-white font-serif text-transparent stroke-text"
  viewport={{ once: false, amount: 0.1 }}
>
  Our signature product
</motion.p>



 <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "200px" }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="w-48 h-1 mt-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl shadow-2xl mx-auto"
      viewport={{ once: false, amount: 0.1 }}
    />


            
        </div>

<div className='flex pl-20  gap-6  overflow-x-auto hide-scrollbar p-4'>


      <div
      className="  flex-shrink-0  w-72 h-72 mt-10 md:hover:border-orange-400 border-2 border-yellow-200 ml-4 cursor-pointer flex-col flex items-center justify-center relative overflow-hidden rounded-lg hover:scale-105 "
      onClick={() => setShowText(!showText)}
      onMouseEnter={() => setShowText(true)}   // Hover start → show text
      onMouseLeave={() => setShowText(false)}  // Hover end → hide text
    >
      {/* Image */}
      <AnimatePresence >
        {!showText && (
          <motion.img
            src="./cameraimagee.png"
            alt=""
            className="w-full h-full object-cover  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
         
        )}


      </AnimatePresence>

      <AnimatePresence>
 {!showText && (


<p className='absolute mt-48  text-2xl font-bold text-black'>4K PTZ Camera</p>
 )}


</AnimatePresence>

      {/* Text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="absolute flex flex-col   "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl ml-4 md:text-3xl font-bold font-serif text-transparent stroke-text bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text">
             Top Highlights of PencilAi Camera!
            </p>
            <div className='text-white ml-4 gap-4 '>
    <p className='mt-2 text-lg'>4K Ultra HD Resolution</p>
    <p className='mt-2 text-lg'>AI-Powered Auto-Tracking</p>
    <p className='mt-2 text-lg'>Smooth Pan-Tilt-Zoom (PTZ) Control</p>
    <p className='mt-2 text-lg'>Crystal Clear Audio Integration</p>   
    <p className='mt-2 text-lg'>Multiple Connectivity Options</p>


            </div>
       


          </motion.div>
        )}
      </AnimatePresence>


  
    </div>



    <div
      className="w-72 h-72  flex-shrink-0   mt-10 md:hover:border-orange-400 border-2 border-yellow-200 ml-4 cursor-pointer flex  flex-col items-center justify-center relative overflow-hidden rounded-lg hover:scale-105 "
      onClick={() => setShowText1(!showText1)}
      onMouseEnter={() => setShowText1(true)}   // Hover start → show text
      onMouseLeave={() => setShowText1(false)}  // Hover end → hide text
    >
      {/* Image */}

 
      <AnimatePresence>
        {!showText1 && (
          <motion.img
            src="./brandcamera.png"
            alt=""
            className="w-full h-full  object-cover "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

<AnimatePresence>

  {!showText1&&(

<p className='mb-24 text-2xl text-black font-bold'>4K PTZ WEBCAM</p>


  )}
</AnimatePresence>



      {/* Text */}
      <AnimatePresence>
        {showText1 && (
          <motion.div
            className="absolute flex flex-col   "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl ml-4 md:text-2xl font-bold font-serif text-transparent stroke-text bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text">
             Top Highlights of 4K PTZ WEBCAM!
            </p>
            <div className='text-white ml-4 gap-3'>
    <p className='mt-2 text-lg'>4K Ultra HD Resolution with 20x Optical Zoom</p>
    <p className='mt-2 text-lg'>360° Auto-Tracking with AI Subject Detection</p>
    <p className='mt-2 text-lg'>Low-Light Optimization & Noise Reduction Technology</p>
    <p className='mt-2 text-lg'>Crystal Clear Audio Integration</p>   
   


            </div>
       


          </motion.div>
        )}
      </AnimatePresence>
    </div>


    <div
      className="w-72 h-72 flex-shrink-0 flex-col  mt-10 md:hover:border-orange-400 border-2 border-yellow-200 ml-4 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-lg hover:scale-105 "
      onClick={() => setShowText2(!showText2)}
      onMouseEnter={() => setShowText2(true)}   // Hover start → show text
      onMouseLeave={() => setShowText2(false)}  // Hover end → hide text
    >
      {/* Image */}
      <AnimatePresence>
        {!showText2 && (
          <motion.img
            src="./headphonee.png"
            alt=""
            className="w-full h-full object-cover  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

<AnimatePresence>

  {!showText2&&(

<p className='mb-10 text-2xl text-black font-bold'>PencilAi HD Mic</p>


  )}
</AnimatePresence>





      {/* Text */}
      <AnimatePresence>
        {showText2 && (
          <motion.div
            className="absolute flex flex-col   "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl ml-4 md:text-3xl font-bold font-serif text-transparent stroke-text bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text">
             Top Highlights of PencilAi HD Mic!
            </p>
            <div className='text-white ml-4 gap-4 '>
    <p className='mt-2 text-lg'>High-Definition Audio Clarity</p>
    <p className='mt-2 text-lg'>Plug & Play (USB Connectivity)</p>
    <p className='mt-2 text-lg'>Compact & Lightweight Design</p>
    <p className='mt-2 text-lg'>Adjustable Stand Included
</p>   
    <p className='mt-2 text-lg'>Wide Compatibility</p>


            </div>
       


          </motion.div>
        )}
      </AnimatePresence>
    </div>


 <div
      className="w-72 flex-shrink-0  h-72 mt-10 flex-col md:hover:border-orange-400 border-2 border-yellow-200 ml-4 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-lg hover:scale-105 "
      onClick={() => setShowText3(!showText3)}
      onMouseEnter={() => setShowText3(true)}   // Hover start → show text
      onMouseLeave={() => setShowText3(false)}  // Hover end → hide text
    >
      {/* Image */}
      <AnimatePresence>
        {!showText3 && (
          <motion.img
            src="./digitall.png"
            alt=""
            className="  "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>



<AnimatePresence>

  {!showText3&&(

<p className='mb-2 mt-2 text-2xl text-black font-bold'>Pencil Ai Digital Board</p>


  )}
</AnimatePresence>



      

      {/* Text */}
      <AnimatePresence>
        {showText3 && (
          <motion.div
            className="absolute flex flex-col   "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl ml-4 md:text-3xl font-bold font-serif text-transparent stroke-text bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text">
             Top Highlights of PencilAi Camera!
            </p>
            <div className='text-white ml-4 gap-4 '>
    <p className='mt-2 text-lg'>4K Ultra HD Display with Multi-Touch Support (20-Point Touch)</p>
    <p className='mt-2 text-lg'>Android 14 OS with EDLA Certification for Seamless App Integration</p>
    <p className='mt-2 text-lg'>Wireless Screen Sharing & Annotation Tools</p>
  


            </div>
       


          </motion.div>
        )}
      </AnimatePresence>
    </div>


</div>

<motion.p
  initial={{ filter: "blur(100px)", opacity: 0 }}
  whileInView={{ filter: "blur(0px)", opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="text-center pt-10 text-4xl font-bold font-goldman text-pink-500 stroke-text"
  viewport={{ once: false, amount: 0.1 }}
>
we provide such more product of different brand 
</motion.p>





<div className="overflow-hidden  whitespace-nowrap  bg-slate-800 py-2 group  text-white">
  <div className="inline-block animate-marquee group-hover:[animation-play-state:paused] text-xl font-extrabold tracking-widest uppercase font-goldman">
    
    <span className="mx-10 text-red-500 animate-pulse">Maxhub</span>
    <span className="mx-6 text-red-400 inline-block text-5xl transform transition-transform duration-500 group-hover:rotate-180">→</span>
    
    <span className="mx-10 text-yellow-400 animate-pulse">⚡ Evota</span>
    <span className="mx-6 text-red-400 inline-block transform  text-5xl transition-transform duration-500 group-hover:rotate-180">→</span>
    
    <span className="mx-10 text-green-400 ">Pencil Ai</span>
    <span className="mx-6 text-red-400 inline-block  text-5xl transform transition-transform duration-500 group-hover:rotate-180">→</span>
    
  </div>
</div>

{/* 
<ops></ops> */}

  {/* <div className='flex justify-center mt-14'>
        <p className='text-4xl font-bold'>Shop By Category</p>
      </div> */}


<motion.p   initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0,          textShadow: "0px 0px 20px rgba(255, 0, 0, 0.9)"
  }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-black text-4xl font-extrabold text-center mt-5">Shop By Category.</motion.p>







<div className='mt-10  flex gap-5 pl-5  pb-5  overflow-x-auto hide-scrollbar group'>


  
{circleimage.map((item ,index)=>(
<div
    key={index}
    className="flex flex-col   items-center animate-marquee group-hover:[animation-play-state:paused] ml-4 ">
<div

      className="w-36 flex-shrink-0 h-36 border-2 border-yellow-200 ml-4 cursor-pointer flex items-center justify-center relative overflow-hidden rounded-full"
      onClick={() => setactiveindex(activeindex === index ? null : index)}
    >
      {/* Image */}
      <AnimatePresence>
        {activeindex !== index && (
          <motion.img
            src={item.image}
            alt=""
            className="w-full h-full object-contain rounded-full"
            initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            exit={{ rotate: 360, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 3, boxShadow: "0px 0px 20px rgba(255,255,0,0.8)" }}
          />
        )}
      </AnimatePresence>

    </div>


 <p className="mt-2 text-2xl font-medium text-gray-800">
      {item.title || `Item ${index}`}
    </p>



 </div>
))}












</div>









      
    </div>
  )
}

export default Ourproduct
