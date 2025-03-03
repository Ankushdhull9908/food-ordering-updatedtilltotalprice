import React from 'react'
import { assets } from '../assets/assets'

import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerbox">
        <div className="allsections">

          <div className="section">
            <img src={assets.logo} alt='logo'/>
          </div>
          <div className="section">
            <h4>Also from us</h4>
          <ul>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
            <li>elem</li>
          </ul>
          </div>
          <div className="section">
          <h4>Follow us</h4>
          <ul>
            <li>Linked In</li>
            <li>facebook</li>
            <li>Instagram</li>
            <li>Twitter X</li>
          </ul>
 
          </div>
          <div className="section">
          <h4>Follow us</h4>
          <ul>
            <li>Linked In</li>
            <li>facebook</li>
            <li>Instagram</li>
            <li>Twitter X</li>
          </ul>
 
          </div>
          
        </div>
        <div className="socials">
            <img src={assets.play_store} alt='icon'/>
            <img src={assets.play_store} alt='icon'/>
            <img src={assets.play_store} alt='icon'/>
            <img src={assets.play_store} alt='icon'/>
          </div>
      </div>
    </div>
  )
}

export default Footer
