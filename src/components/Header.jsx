import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'


function Header() {
  return (
    
    <div className='header'>
      <img src={assets.header_img} alt='headerimg'/>
    </div>
  )
}

export default Header
