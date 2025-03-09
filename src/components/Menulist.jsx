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
                        <img src={item.menu_image} alt={item.menu_name}/>
                        
                        </div>
                )
            })
        }
      
    </div>
  )
}

export default Menulist
