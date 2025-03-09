import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../CartContext'
import { Menu } from '../assets/MenuItems'
import '../pages/Collections.css'
import '../components/Menuitem.css'
import { assets } from '../assets/assets'

function Collections() {
    const navigate = useNavigate()
    const {foodName} = useParams()
    const {final} = useCart()
    

    const filteredMenuItems = Menu.filter((i)=> i.category.split(" ").join("").toLowerCase() === (foodName).split(" ").join("").toLowerCase() || (i.name).split(" ").join("").toLowerCase() === (foodName).split(" ").join("").toLowerCase() )

    const restaurantIds = filteredMenuItems.map((item) => item.restaurantId);
    const xyz = final.filter((i) => restaurantIds.includes(i.id));
        
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
    <div className='collections'>
      {
        xyz.length <=0 ? <div className='nosearchresult'><img src={assets.nosearchresults} alt='nothingfound'/><p>Looks Like theres no Restaurant Near you😔</p></div> : 
        <div className='collectionheading'>
          <h2>{foodName}</h2>
      <p>Restaurants To Explore</p></div>
      }
      
      <div className='fooditems'>
              {
                  xyz.slice(0,visibleitem).map((item,index)=>{
                      const estimatedtime = Math.ceil((item.Distance / 30) * 60)+20
      
                      return(
                          <div className='fooditem' key={index}>
                              <div className="foodimg">
                              <h5>ITEMS AT ₹50</h5>
                              <img src={item.image} alt='error' onClick={()=> navigate(`/description/${item.id}`)}/>
                              </div>
                              <div className='nameratingaddress'>
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
              {
                xyz.length <=0 ? '': <div className="showmore">
                <button onClick={()=> {
                    visibleitem < final.length ? LoadMore() : ShowLess()
                }}>{visibleitem < final.length ? "Show More": "Show Less"}</button>
            </div>
              }
      
              
            
          </div>
      
    </div>
  )
}

export default Collections
