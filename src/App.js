import React from 'react'
import MainNav from "../src/components/MainNav/MainNav"
import MainHomeF from './components/MainHome1/MainHomeF'
import MainFooter from './components/MainFooter/MainFooter'
import WebSiteDesign from './components/WebSideDesign/WebSiteDesign'
import AppDesign from './components/AppDesign/AppDesign'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'

const App = () => {
  
  return (
    <div>
      
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHomeF />}/>
          <Route path="/WebSiteDesign" element={<WebSiteDesign />}/>
          <Route path="/AppDesign" element={<AppDesign />}/>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App