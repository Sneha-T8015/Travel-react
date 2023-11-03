import React,{useEffect} from 'react'
import "../Main/main.css"
import img5 from '../../Assets/img5.jpg'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img8.jpg'
import img8 from '../../Assets/img7.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'


import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboard2Check} from 'react-icons/bs'
//import images
 

const Data = [
  {
    id: 1,
    Imgsrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: "$700",
    description: "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities."
  },

{
  id: 2,
  Imgsrc: img2,
  destTitle: 'Maui',
  location: 'Hawaii, USA',
  grade: 'TROPICAL PARADISE',
  fees: "$1200",
  description: "Escape to the tropical paradise of Maui. Explore its beautiful beaches, enjoy water sports, and witness breathtaking sunsets. It's a dream destination for beach lovers."
},
{
  id: 3,
  Imgsrc: img3,
  destTitle: 'Phuket',
  location: 'Thailand',
  grade: 'EXOTIC BEAUTY',
  fees: "$900",
  description: "Discover the exotic beauty of Phuket, Thailand. With its crystal-clear waters, vibrant nightlife, and rich cultural heritage, it offers a perfect blend of relaxation and adventure."
},
{
  id: 4,
  Imgsrc: img4,
  destTitle: 'Fiji',
  location: 'South Pacific',
  grade: 'TROPICAL BLISS',
  fees: "$1400",
  description: "Immerse yourself in the tropical bliss of Fiji. Enjoy pristine beaches, turquoise waters, and world-class snorkeling and diving. It's a paradise for nature enthusiasts."
},

{
  id: 5,
  Imgsrc: img5,
  destTitle: 'Cancun',
  location: 'Mexico',
  grade: 'ALL-INCLUSIVE GETAWAY',
  fees: "$1100",
  description: "Indulge in an all-inclusive getaway in Cancun, Mexico. Relax on its beautiful sandy beaches, explore ancient Mayan ruins, and enjoy vibrant nightlife."
},
{
  id: 6,
  Imgsrc: img6,
  destTitle: 'Seychelles',
  location: 'Indian Ocean',
  grade: 'UNTOUCHED BEAUTY',
  fees: "$1800",
  description: "Experience the untouched beauty of Seychelles. With its pristine beaches, lush greenery, and diverse marine life, it's a haven for nature lovers and honeymooners."
},
{
  id: 7,
  Imgsrc: img7,
  destTitle: 'Amalfi Coast',
  location: 'Italy',
  grade: 'ROMANTIC ESCAPE',
  fees: "$2000",
  description: "Embark on a romantic escape to the Amalfi Coast in Italy. Enjoy breathtaking views, charming coastal towns, and delicious cuisine. It's a perfect destination for couples."
},
{
  id: 8,
  Imgsrc: img8,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade: 'MARINE WONDER',
  fees: "$1300",
  description: "Explore the wonders of the Great Barrier Reef in Australia. Dive into the vibrant underwater world, snorkel among colorful coral reefs, and encounter diverse marine life."
},
]

const Main = () => {
    //Lets create a react hook to add a scroll animation

    useEffect(() =>{
      Aos.init({duration:2000})
    },[])
  
  return (
    <section data-aos="fade-up" className="main container section">
      
      <div data-aos="fade-right" className="secTitle">
        <div className="title">
          Most Visited Destinations
        </div>
      </div>

      <div data-aos="fade-up" className="secContent grid">
      {/* /* so here we are using map() to fetch each destination at once */ }

      {
        Data.map( ({id , Imgsrc ,destTitle, location,grade,fees,description}) => {
          return(
            <div data-aos="fade-up" key={id} className="singleDestination">
              {/* Here it return single document id from map function */}
              <div className='imageDiv'>
                <img src={Imgsrc} alt={destTitle} />
              </div>

              <div data-aos="fade-up" className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex"> 

                <HiOutlineLocationMarker className='icon'/>
                <span className='name'>{location} </span>
                </span>

                <div  className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>   
                </div>
                   <div className="desc">
                    <p> {description}</p>
                   </div>

                   <btn  className="btn flex">
                    DETAILS  <BsClipboard2Check className='icon' />
                   </btn>
              </div>
            </div>
          )
        })
      }

      </div>
    </section>
  )
}

export default Main