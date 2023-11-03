import React,{useEffect} from 'react'
import './home.css'
import img7 from '../../Assets/img7.jpg'
import { GrLocation } from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook,FiInstagram} from 'react-icons/fi'
import {FaTripadvisor} from 'react-icons/fa'
import {BsCardList} from 'react-icons/bs'
import {TbAppsFilled} from 'react-icons/tb'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
  //Lets create a react hook to add a scroll animation

  useEffect(() =>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className='home'>
      <div className="overlay"></div>
      <img src={img7} alt='helllo' className='absolute'/>
            <div className="homeContent container">
        <div className="textDiv relative">

          <span data-aos="fade-up" 
          className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up"  className="homeTitle">
            Search For Your Holidays
          </h1>

        </div>
        <div data-aos="fade-up"  className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city" className="city">
              Search your Destination:</label>

            <div  className="input flex">
              <input type="text" className="name"
                placeholder='Enter Name here' />

              <GrLocation className='icon' />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date" className="city">
              Select Your Date of Journey:</label>

            <div className="input flex">
              <input type="date" className="date"
                placeholder='Enter Date here' />


            </div>
          </div>

          <div  className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price" className="price">
                Max Price:</label>
                <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" className="max" 
              max={5000} min={1000} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className='icon'/>
            <span>More Filters</span>
          </div>

          <div data-aos="fade-up"  className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className='icon'/>
              <FiInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
              
            </div>

            <div className="leftIcons">
              <BsCardList className='icon'/>
              <TbAppsFilled className='icon'/>
              
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home