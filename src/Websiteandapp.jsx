import React from 'react'
import rocket from './assets/rocket.gif'
import datasafety from'./assets/data-safety.gif'
import growth from'./assets/growth.gif'
import { Link } from 'react-router-dom'
import Home from './Home'
import { HashLink } from 'react-router-hash-link';

const Websiteandapp = () => {
  return (
    <div className='h-auto w-full pb-10'
    
    style={{
    backgroundImage:
      "linear-gradient(35.7deg, rgba(105,238,218,1) 31.2%, rgba(114,80,228,1) 81.4%)"
  }}
    
    >

<div>
<p className='text-center text-4xl md:text-5xl pt-10 font-bold text-white  '>Transform your ideas into powerful <span className='bg-clip-text  text-transparent 
        bg-gradient-to-r from-yellow-600 via-pink-600 to-green-700 
        bg-[length:200%_200%] animate-gradient-move'>app and website</span> <br /> experiences to elevate your digital presence.</p>

        <p className='text-center text-white  text-xs mdtext-xl font-semibold pt-5'>We create professional, mobile-responsive websites and apps that turn visitors into customers, <br />using proven templates and conversion-optimized designs.</p>

</div>


<div className='flex md:flex-row flex-col md:justify-center  md:items items-center gap-10'>
<div className='w-96 h-70 mt-10 bg-slate-400 border-2 flex items-center flex-col  border-orange-400 bg-gradient-to-tl from-blue-500 via-slate-300 to-orange-200 hover:scale-105 cursor-pointer rounded-lg shadow-lg    transition-all duration-300  animate-slide-in-left stagger-1 hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 hover:ring-offset-1'>
'

    <img src={rocket} alt=""  style={{width:"60px" ,background:"transparent "}}  className='mix-blend-multiply mt-4'/>

    <p className='mt-3 text-2xl font-bold text-white'>Premium Designs</p>
    <p className='mt-2 text-xl p-2 text-white text-center'>Eye-catching, modern designs that highlight your brand and foster confidence with your audience.</p>





</div>



<div className='w-96 h-64 mt-10 bg-slate-400 border-2 flex items-center flex-col  border-orange-400 bg-gradient-to-tl from-blue-500 via-slate-300 to-orange-200 hover:scale-105 cursor-pointer rounded-lg shadow-lg    transition-all duration-300  animate-slide-in-left stagger-1  hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 hover:ring-offset-1'>

    <img src={growth} alt=""  style={{width:"60px" ,background:"transparent "}}  className='mix-blend-multiply mt-4'/>

    <p className='mt-3 text-2xl font-bold text-white'>Conversion-Focused</p>
    <p className='mt-2 text-xl p-2 text-white text-center'>Well-structured layouts and persuasive call-to-actions that convert visitors into loyal customers</p>





</div>






<div className='w-96 h-70 mt-10 bg-slate-400 border-2 flex items-center flex-col  border-orange-400 bg-gradient-to-tl from-blue-500 via-slate-300 to-orange-200 hover:scale-105 cursor-pointer rounded-lg shadow-lg    transition-all duration-300  animate-slide-in-left stagger-1 hover:drop-shadow-[0_0_25px_orange] hover:ring-4 hover:ring-orange-300 hover:ring-offset-1'>
'

    <img src={datasafety} alt=""  style={{width:"60px" ,background:"transparent "}}  className='mix-blend-multiply mt-2'/>

    <p className='mt-2 text-2xl font-bold text-white'>Maintenance & Security</p>
    <p className='mt-1 text-xl p-2  text-white text-center'>Ensure your site stays secure and up-to-date with continuous monitoring, regular backups, software updates, and round-the-clock technical support.</p>





</div>













</div>

<div className='flex flex-col items-center'>

{/* onClick={() => window.location.href='/'}
onClick={() => window.scrollTo(0,0)}
/#form"
           */}
<Link to="/"  onClick={() => window.location.href='/'} ><button className="m-auto  mt-10 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold rounded text-2xl md:text-4xl hover:scale-105  shadow-glow">
      Be with us for your future success.
          </button></Link>

<p className='text-2xl mt-5 text-white'>Get your free demo today !</p>

          
</div>



      
    </div>
    
  )
}

export default Websiteandapp
