import React from 'react'
import { menu_list } from '../assets/assets'

import './Menulist.css'

function Menulist() {
  return (
    <div className='menulist'>
        {
            menu_list.map((item,index)=>{
                return(
                    <div className='item' key={index}>
                        <img src={item.menu_image} alt='itemimg'/>
                        <p>{item.menu_name}</p>
                        </div>
                )
            })
        }
      
    </div>
  )
}

export default Menulist
