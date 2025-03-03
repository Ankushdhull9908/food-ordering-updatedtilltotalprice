import React, { useEffect, useState } from 'react'
import MenuItems from '../components/MenuItems'
import './Home.css'
import Menulist from '../components/Menulist'
import FoodCulture from '../components/FoodCulture'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import '../components/Header.css'
import { useCart } from '../CartContext'

function Home() {

  const {getuserlatlong,logindata,address} = useCart()

  const [showmap,setshowmap] = useState('notshow')
  const [showhomecontent,setshowhomecontent] = useState('home')
  const [city,setcity] = useState('')
  const [loading,setloading] = useState(false)


      console.log(address)

      useEffect(()=>{
         if(address.city===null)
         {
            setshowmap('mapheader')
            setshowhomecontent('notshow')
            setcity('')
         }else{
            setcity(address.city)
            setshowmap('notshow')
            setshowhomecontent('home')
         }
        
      },[address])


       function getCurrentLocation()
        {
          setloading(true)
          navigator.geolocation.getCurrentPosition((pos)=>{
            getuserlatlong(pos.coords.latitude,pos.coords.longitude)
            setloading(false)
          })
        }

  return (
    <div className='home'>
         <hr></hr>
         <div className={showmap}>
            
            {
              loading===true? <div className='fetchandimage'><p>Fetching data</p><img src={assets.loading} id='loading' alt='loading'/></div> : <p></p>
            }
            
            <img src={assets.map} id='googlemap' alt='map'/>
            <button onClick={()=>{
              getCurrentLocation()
            }}>Current Location</button>
          </div> 

        <div className={showhomecontent}>
         <div className='header'>
          
          <img src={assets.header_img} alt='headerimg' id='headerimg'/>
          <div className="headerimagelogo">
            <img src={assets.logo} alt='logo'/>
          </div>
          <div className="headerimagecontent">
            <h1>Order Food Online In {city}</h1>
          </div>
          </div> 
          
          
          <div className="headings">
         <h2>
          {logindata.name!==null ? logindata.name : 'Heyy!'} Whats on ur Mind??
         </h2>
         </div>
         
         <Menulist/>
         <hr></hr>
         <div className="headings">
         <h2>
          Top Restaurants Near You
         </h2>
         </div>
         
         <hr></hr>
         <MenuItems/>
         <hr></hr>
         <div className="headings">
         <h2>
          Top Rated Restaurants For You
         </h2>
         </div>
         <MenuItems/>

         <div className="headings">
         <h2>
         Food Culture In Bahadurgarh
         </h2>
         </div>
         <FoodCulture/>
          
         
         
         </div>
         <Footer/>

         
    </div>
  )
}

export default Home
