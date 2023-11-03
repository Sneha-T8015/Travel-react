import React,{useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import img5 from '../../Assets/img5.jpg'
import {FiChevronRight} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Footer = () => {

        //Lets create a react hook to add a scroll animation
    useEffect(() =>{
      Aos.init({duration:2000})
    },[])
  
  return (
    <section className='footer w-[100%] p-2 m-auto po'>
      {/* .footer {
  width: 100%;
  position: relative;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
} */}
      <div className='videoDiv'>
        <img src={img5} alt='heello' className='absolute bg-cover h-[100%]' ></img>

      </div>


      <div  data-aos="fade-up" className="setContent  relative  p-5 flex items-center justify-center container">
        <div className="contactDiv flex">
          <div className="text">
            <small> KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>


          <div  data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' className='text-blue-500' />
            <button  data-aos="fade-up" className="p-2 px-5 flex bg-blue-200 rounded-full opacity-50 hover:bg-blue-400  " type='submit'>
              <span className='text-orange-400 text-lg '>Send</span><FiSend className='icon p-1 text-orange-500'/>
            </button>
          </div>
        </div>

        <div   className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon'/>Travel.</a>
            </div>

            <div   className="footerParagraph"></div>
            Traveling refers to the activity of going from one place to 
            another for different purposes, such as commuting or business travel.2 
            It is a way to explore new places,
             meet new people, and learn about new cultures, languages, 
            lifestyles, and peoples. 

          

            <div   className="footerSocials flex">
            <IoLogoTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillFacebook className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>

            </div>
            </div>
         
          <div  className="footerLinks grid">
             {/*Group one*/}
            <div className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
                </li>

                <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
                </li>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer