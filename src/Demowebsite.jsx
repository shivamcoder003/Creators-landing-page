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

 <div className='w-5/6 md:h-96 h-auto p-4 bg-slate-800  m-auto mt-5 aspect-video flex md:flex-row flex-col rounded-xl border-2 shadow-lg    transition-all duration-500  animate-slide-in-left stagger-1  hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group'>
<div className='rounded-3xl h-full md:w-1/2 md:ml-7 '>
<video src={homevideo} className='  md:mt-14  group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl
 ' autoPlay disablePictureInPicture loop muted  type="video/mp4" ></video>
</div>


<div className='md:ml-14 md:w-1/2  flex md:flex-col flex-col gap-5 md:mt-14 mt-5 md:items-start items-center'> 
<img src="./increase.png" alt="" className='w-20 bg-pink-900 p-3 rounded-xl'/>


<span className='text-white text-sm w-full md:text-lg p-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 text-center transition-colors duration-300'>• Your website. Your tools. Your tracking — all in one place.</span>

<motion.p   initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0,          textShadow: "0px 0px 20px rgba(255,255,255,0.8)"}}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-lg">Easily track studnet payments anytime and access a wide range of customizable tools — all from your dashboard</motion.p>


</div>




</div> 









<div className=' w-5/6 md:h-96 h-auto bg-slate-800 p-4 m-auto mt-14 aspect-video flex md:flex-row flex-col rounded-xl border-2 shadow-2xl    transition-all duration-500  animate-slide-in-left stagger-1  hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group'>
<div className='rounded-3xl h-full md:w-1/2 md:ml-7 '>
<video src={Dashboard} className='  md:mt-14  group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl
 ' autoPlay disablePictureInPicture loop muted  type="video/mp4" ></video>
</div>


<div className='md:ml-14 flex md:flex-col flex-col gap-5 mt-5 md:mt-14 md:items-start items-center'> 
<img src="./qualityy.png" alt="" className='w-20 bg-yellow-200 p-3 rounded-xl'/>


<span className='text-white text-sm md:text-lg p-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 text-center transition-colors duration-300'>• Real-time insights on your dashboard.</span>

<motion.p   initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0,          textShadow: "0px 0px 20px rgba(255,255,255,0.8)"}}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-lg">Easily monitor sales, customer activity, and earnings across different sources</motion.p>


</div>




</div>





<div className='  w-5/6 md:h-96 h-auto p-4 bg-slate-800  m-auto mt-14 aspect-video flex md:flex-row flex-col rounded-xl border-2 shadow-2xl    transition-all duration-500  animate-slide-in-left stagger-1  hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 group'>
<div className='rounded-3xl h-full md:w-1/2 md:ml-7 '>
<video src={aiquestion} className='  md:mt-14  group-hover:scale-105 border-2 transition-transform duration-400 group-hover:border-yellow-400 rounded-xl
 ' autoPlay disablePictureInPicture loop muted  type="video/mp4" ></video>
</div>


<div className='md:ml-14 flex md:flex-col flex-col gap-5 mt-5 md:mt-14 md:items-start items-center'> 
<img src="./communicationss.png" alt="" className='w-20 bg-yellow-200 p-3 rounded-xl'/>


<span className='text-white text-xl md:text-lg p-2 border-2 rounded-3xl border-blue-500 group-hover:border-yellow-500 text-center transition-colors duration-300'>• Ai powered question</span>

<motion.p   initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0,          textShadow: "0px 0px 20px rgba(255,255,255,0.8)"}}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="text-white text-lg">Generate smart AI-powered questions instantly on any topic and in any subject.</motion.p>


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
>
  <Link to="/" onClick={() => (window.location.href = "/")}>
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0,255,150,0.8)" }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 md:ml-96 ml-5 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded text-sm md:text-2xl shadow-glow"
    >
      And this is just a glimpse – many more features await you.
    </motion.button>
  </Link>
</motion.div>






</div>













      
    </div>
  )
}

export default Demowebsite
