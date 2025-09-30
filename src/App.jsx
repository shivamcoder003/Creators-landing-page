import React from 'react'

import Home from './Home'
import Navbar from './Navbar'
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./App.css"; 
const App = () => {
  return (
    // <HashRouter basename="/Creators-landing-page">
    <HashRouter>
<Navbar></Navbar>

<Routes>

<Route   path='/' element={<Home></Home>}></Route>

</Routes>
    
    
    
    
    </HashRouter>
    
  )
}

export default App
