import React, { useEffect, useState } from 'react'
import './Menuitem.css'
import { useCart } from '../CartContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function MenuItems() {
    
    const [btntext,setbtntext]= useState('Show More')
    const navigate =useNavigate()

    const {final } = useCart()
    const [visibleitem,setvisibleitem] = useState(4)

    function LoadMore()
    {
        setvisibleitem((prev)=> prev+4)
    }

    function ShowLess()
    {
        
        setvisibleitem(4)
       // setbtntext('Show More')
    }
    useEffect(()=>{

    },[visibleitem])

    console.log(visibleitem)

    
  return (
    <div className='fooditems'>
        {
            final.slice(0,visibleitem).map((item,index)=>{
                const estimatedtime = Math.ceil((item.Distance / 30) * 60)+20

                return(
                    <div className='fooditem' key={index}>
                        <div className="foodimg">
                        <h5>ITEMS AT ₹50</h5>
                        <img src={item.image} alt='error' onClick={()=> navigate(`/description/${item.id}`)}/>
                        </div>
                        <div>
                        <div className="resname">
                        <h3>{item.name}</h3>
                        </div>
                        

                        <div className="ratingdeliverytime">
                            <img src={assets.rating_starts} alt='error'/>
                        <h5>{item.rating}</h5>
                        <h5> - {estimatedtime}min</h5>
                        </div>
                        <div className="resaddress">
                        <p>{item.location.address}</p>
                        </div>  
                        </div>
                        
                       
                      
                    </div>
                )
            })
        }

        <div className="showmore">
            <button onClick={()=> {
                visibleitem < final.length ? LoadMore() : ShowLess()
            }}>{visibleitem < final.length ? "Show More": "Show Less"}</button>
        </div>
      
    </div>
  )
}

export default MenuItems
