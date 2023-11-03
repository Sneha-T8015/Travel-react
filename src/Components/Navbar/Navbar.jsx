import "./navbar.css";
import React,{useState} from 'react';
import {MdTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {

  const [active,setActive] = useState('navBar')
  //functin to toggle navBar
  
  
  const showNav = () => {
    console.log('Button clicked!');
    setActive('navBar activeNavbar');
  };

 
  const removeNavbar= () =>{
    setActive('navBar');
    console.log("Removing Navigation bar!!");
  } 
  return (
    <section className='navbarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
        <h1><MdTravelExplore 
          className='icon'/>Travel</h1>
          <a href='#' className='logo flex'></a>
          
        </div>


      

    <div className={active}>
      <ul className='navLists flex'>
        <li className='navItem'>
          <a href='#' 
          className='navLink'>Home</a>
        </li>
        <li className='navItem'>
          <a href='#' 
          className='navLink'>Shop</a>
        </li>
        <li className='navItem'>
          <a href='#' 
          className='navLink'>About</a>
        </li>
        <li className='navItem'>
          <a href='#' 
          className='navLink'>Pages</a>
        </li>
        <li className='navItem'>
          <a href='#' 
          className='navLink'>News</a>
        </li>
        <li className='navItem'>
          <a href='#' 
          className='navLink'>Content</a>
        </li>

        <button className='btn'>
          <a href='#'>Book Now</a>
        </button>
      </ul>

      <div onClick={removeNavbar} 
      className='closeNavbar'>
        <AiFillCloseCircle className='icon'/>
       
      </div> 
      </div>
      
      <div onClick={showNav} 
      className='toggleNavbar'>
      <TbGridDots className='icon'/>

    </div>
   
      </header>

    </section>
  )
}

export default Navbar