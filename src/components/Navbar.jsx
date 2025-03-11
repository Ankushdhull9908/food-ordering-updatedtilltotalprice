import React, { useEffect } from 'react'
import './Navbar.css'
import {assets} from '../assets/assets'
import { useNavigate} from 'react-router-dom'
import { useCart } from '../CartContext'


function Navbar() {
  const {logindata,quantity} = useCart()
  useEffect(()=>{
        
  },[])

  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className="logo" onClick={()=>{
                navigate('/')
              }}>
              
              <img src={assets.logo} alt='logo' />
        </div>
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About US</li>
        </ul>
        <div className="right">
           <div className="search">
               <img src={assets.search_icon} alt='search' onClick={()=> navigate('/search')}/>
           </div>
 
           <div className="cart1">
            <p id='quantitynumber' onClick={()=> navigate('/cart')}>{quantity===0 ? '': quantity}</p>
            <img src={assets.bag_icon} alt='bag' onClick={()=>{
              navigate('/cart')
            }}/>
           </div>

           <div className="signup1">
              <button onClick={()=>{

                logindata.name!==null ? navigate(`/profile/${logindata.name}`) : navigate('/signup')
                     
              }}>{logindata.name!==null ? logindata.name : "Sign Up"}</button>
           </div>
        </div>

      
    </div>
  )
}

export default Navbar
