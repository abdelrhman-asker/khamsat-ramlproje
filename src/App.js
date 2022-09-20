import React from 'react'
import MainNav from "../src/components/MainNav/MainNav"
import MainHomeF from './components/MainHome1/MainHomeF'
import MainFooter from './components/MainFooter/MainFooter'
import 'bootstrap/dist/css/bootstrap.css'


const App = () => {
  
  return (
    <div>
      <MainNav />
      <MainHomeF />
      <MainFooter />
    </div>
  )
}

export default App