import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx';


import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
const App = () => {
  return (
    <>

      <Navbar />
      <Home />
      <Main/>
      <Footer/>
      
    </>
  )
}

export default App