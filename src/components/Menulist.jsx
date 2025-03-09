import React from 'react'
import { menu_list } from '../assets/assets'

import './Menulist.css'
import { useNavigate } from 'react-router-dom'

function Menulist() {
  const navigate = useNavigate()
  return (
    <div className='menulist'>
        {
            menu_list.map((item,index)=>{
                return(
                    <div className='item' key={index}>
                        <img src={item.menu_image} alt={item.menu_name} onClick={()=> navigate(`/collection/${item.menu_name}`)}/>
                        
                        </div>
                )
            })
        }
      
    </div>
  )
}

export default Menulist
