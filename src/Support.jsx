import React from 'react'
import { motion } from "framer-motion";

const support = () => {
  return (
    <div>
       <div className='bg-gradient-to-r from-blue-500 via-white to-green-500'>
          <div className='flex flex-col items-center justify-center'>
  <motion.span 

      initial={{ opacity: 0, y: -50 }}       
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} 
  
  
  
  className='border-4   border-orange-500 rounded-full border-t-0 border-r-0 border-l-0 p-4 mt-5 text-3xl font-bold text-center'>What Makes Us Different.
   </motion.span>


<p className="mt-5 text-lg md:text-xl text-gray-800 border-l-4 border-orange-400 pl-4 italic ">
  We bring together innovation and reliability, connecting digital boards, apps, 
  and websites into one powerful ecosystem.
</p>



</div>
 





  {/* Parent Div */}
  <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-2xl m-auto mt-5">
    
    {/* Child Div */}
    <div className="bg-gradient-to-tr from-orange-400 via-yellow-400 to-pink-500 p-5 rounded-2xl shadow-lg
    
    transform transition-transform duration-500 hover:-rotate-3 hover:scale-105 hover:shadow-2xl
    
    ">
      <h1 className="md:text-3xl text-2xl font-bold text-white text-center">
       Let’s build the future of the digital world together.
      </h1>
<ul class="space-y-3 text-lg">
  <li><span class="dot animate-blink ">•</span> One platform, endless possibilities</li>
  <li><span class="dot animate-blink">•</span> Smart digital boards with instant updates</li>
  <li><span class="dot animate-blink">•</span> Affordable, reliable, future-ready</li>
  <li><span class="dot animate-blink">•</span> 24/7 Support – Dedicated support team to help whenever you need.</li>
    <li><span class="dot animate-blink">•</span> Scalable Technology – Works for individuals, startups, schools.</li>

<li><span class="dot animate-blink">•</span> Secure & Reliable – Your data and content remain safe with us.</li>
</ul>


    </div>
    
  </div>






<footer className="mt-10 bg-gray-900 text-gray-300 py-6">
  <div className="container mx-auto flex flex-col items-center">
    {/* Logo */}
    <img 
      src="/creators-mind-logo.png" 
      alt="Creatorsmind Logo" 
      className="h-12 mb-4" 
    />

    {/* Bottom Line */}
    <div className="text-center text-sm text-gray-400">
      © 2025 All rights reserved by <span className="text-white font-semibold">Creatorsmind</span>
    </div>
  </div>
</footer>









 
        </div>
      
    </div>
  )
}

export default support
