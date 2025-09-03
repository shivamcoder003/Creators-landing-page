import React, { useState } from 'react'

const Navbar = () => {
  const [hideLogo, setHideLogo] = useState(false);
  return (
   
      <nav className='shadow-lg backdrop-blur-3xl bg-gradient-to-r from-blue-600/40 via-blue/30 to-blue-600/40 sticky  top-0 z-40 ' >

<img src="/creators-mind-logo.png" alt="creator mind logo shadow-lg "  class="w-32  md:w-48     ml-4  md:ml-8  "  style={{ padding: "5px"}} />

 

      </nav>
    
  )
}

export default Navbar
