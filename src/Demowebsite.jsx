import React from 'react'
import rocket from './assets/rocket.gif'
import growthh from'./assets/growthh.gif'
import homevideo from './assets/01.mp4'
import "./App.css"; 
import { motion } from "framer-motion";
import Dashboard from './assets/02.mp4'
import aiquestion from './assets/03.mp4'
import { Link } from 'react-router-dom'


const Demowebsite = () => {
  return (
    <div className='w-full bg-gradient-to-r from-blue-400 to-green-400'>
        <div className='flex flex-col  items-center'>

<div className='border-yellow-300 border-2 w-48 text-center mt-5
 rounded-3xl text-xl font-bold text-white bg-green-400 shadow-glow'>  Your Dashboard</div>
<div className='flex'>

  <p className='text-2xl md:text-5xl mt-5 font-bold text-white   '>All the Tools You Need to <span className='text-gold'>Grow Quickly </span>  
</p>

 <img src={growthh} alt=""  style={{width:"60px" }}  className='mix-blend-multiply mt-4 ml-4 md:block hidden'/>
</div>



<p className='mt-5 text-xl text-white text-center'>Powerful solutions to grow your business quickly and convert more customers.</p>


        </div>


<div className=' '>

<div className="w-5/6 bg-slate-800 p-6 m-auto mt-5 flex flex-col lg:flex-row rounded-xl border-2 shadow-2xl transition-all duration-500 animate-slide-in-left stagger-1 hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group">

  {/* Video Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <video
      src={homevideo}
      className="w-full h-auto mt-4 lg:mt-0 group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl"
      autoPlay
      disablePictureInPicture
      loop
      muted
      type="video/mp4"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-5 mt-6 lg:mt-0 lg:ml-10 items-center lg:items-start text-center lg:text-left justify-center">
    
    {/* Icon */}
    <img
      src="./increase.png"
      alt="increase"
      className="w-20 bg-pink-900 p-3 rounded-xl"
    />

    {/* Highlighted Line */}
    <span className="text-white text-sm md:text-lg p-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 transition-colors duration-300">
      • Your website. Your tools. Your tracking — all in one place.
    </span>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        textShadow: "0px 0px 20px rgba(255,255,255,0.8)"
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-base md:text-lg leading-relaxed"
    >
      Easily track student payments anytime and access a wide range of customizable tools — all from your dashboard.
    </motion.p>

  </div>
</div>






{/* <div className=' w-5/6 md:h-auto lg:h-96 h-auto bg-slate-800 p-4 m-auto mt-5 aspect-video flex  md:flex-col lg:flex-row flex-col rounded-xl border-2 shadow-2xl    transition-all duration-500  animate-slide-in-left stagger-1  hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group'>
<div className='rounded-3xl  h-ful md:w-2/3 lg:w-1/2 md:ml-24 lg:ml-7 '>
<video src={Dashboard} className='   md:mt-4 lg:mt-14   group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl
 ' autoPlay disablePictureInPicture loop muted  type="video/mp4" ></video>
</div>


<div className='md:ml-14 mx-auto flex md:flex-col flex-col gap-5 mt-5 md:mt-14 md:items-start items-center'> 
<img src="./qualityy.png" alt="" className='w-20 bg-yellow-200 p-3 rounded-xl'/>


<span className='text-white text-sm md:text-lg p-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 text-center transition-colors duration-300'>• Real-time insights on your dashboard.</span>

<motion.p   initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0,          textShadow: "0px 0px 20px rgba(255,255,255,0.8)"}}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-lg">Easily monitor sales, customer activity, and earnings across different sources</motion.p>


</div>




</div> */}



<div className="w-5/6 bg-slate-800 p-6 m-auto mt-5 flex flex-col lg:flex-row rounded-xl border-2 shadow-2xl transition-all duration-500 animate-slide-in-left stagger-1 hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group">
  
  {/* Video Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <video
      src={Dashboard}
      className="w-full h-auto mt-4 lg:mt-0 group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl"
      autoPlay
      disablePictureInPicture
      loop
      muted
      type="video/mp4"
    />
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-5 mt-6 lg:mt-0 lg:ml-10 items-center lg:items-start text-center lg:text-left justify-center">
    
    {/* Icon */}
    <img
      src="./qualityy.png"
      alt="quality"
      className="w-20 bg-yellow-200 p-3 rounded-xl"
    />

    {/* Highlighted Point */}
    <span className="text-white text-sm md:text-lg p-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 transition-colors duration-300">
      • Real-time insights on your dashboard.
    </span>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        textShadow: "0px 0px 20px rgba(255,255,255,0.8)"
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-base md:text-lg leading-relaxed"
    >
      Easily monitor sales, customer activity, and earnings across different sources.
    </motion.p>

  </div>
</div>




<div className="w-5/6 bg-slate-800 p-6 m-auto mt-5 flex flex-col lg:flex-row rounded-xl border-2 shadow-2xl transition-all duration-500 animate-slide-in-left stagger-1 hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group">
  
  {/* Video Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <video
      src={aiquestion}
      className="w-full h-auto mt-4 lg:mt-0 group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl"
      autoPlay
      disablePictureInPicture
      loop
      muted
      type="video/mp4"
    ></video>
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-5 mt-6 lg:mt-0 lg:ml-10 items-center lg:items-start text-center lg:text-left justify-center">
    <img
      src="./communicationss.png"
      alt="communication"
      className="w-16 sm:w-20 bg-yellow-200 p-3 rounded-xl"
    />

    <span className="text-white text-base sm:text-lg lg:text-xl px-4 py-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 text-center transition-colors duration-300">
      • Ai powered question
    </span>

    <motion.p
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        textShadow: "0px 0px 20px rgba(255,255,255,0.8)",
      }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
    >
      Generate smart AI-powered questions instantly on any topic and in any subject.
    </motion.p>
  </div>
</div>


{/* <Link to="/"  onClick={() => window.location.href='/'}><button className="mt-6 ml-96 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded text-sm md:text-2xl hover:scale-105 shadow-glow">
      And this is just a glimpse – many more features await you.
          </button></Link> */}





<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.4 }}
  className='flex justify-center items-center w-full'
>
 
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0,255,150,0.8)" }}
      whileTap={{ scale: 0.95 }}
  onClick={() => {
  
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
    
      window.history.pushState(null, '', '/Creators-landing-page/#/');
    } else {
      
      window.history.pushState(null, '', '/#/');
    }
    
    
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
      className="mt-6 ml-5 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded text-sm md:text-2xl shadow-glow"
    >
      And this is just a glimpse – many more features await you.
    </motion.button>

</motion.div>




















</div>













      
    </div>
  )
}

export default Demowebsite
