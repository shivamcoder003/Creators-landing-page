import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import "./App.css"; 
const App = () => {
  return (
    <BrowserRouter>
<Navbar></Navbar>

<Routes>

<Route   path='/' element={<Home></Home>}></Route>

</Routes>
    
    
    
    
    </BrowserRouter>
    
  )
}

export default App
