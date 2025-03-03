import React from 'react'
import { useParams } from 'react-router-dom'
import { Menu } from '../assets/MenuItems'
import { useCart } from '../CartContext'

function Description() {
   const {id} = useParams()

   const {  addToCart } = useCart()
   var food = []
   
   if(id){
    food = Menu.filter((i)=> i.restaurantId===parseInt(id) )
   }
     
  return (
    <div>
       {
           food.map((item,index)=>{
                           
                           return(
                               <div className='fooditem' key={index}>
                                   <div className="foodimg">
                                   <img src={item.image} alt='error'/>
                                   </div>
                                   <div className="resname">
                                   <h3>{item.name}</h3>
                                   <p>{item.price}</p>
                                   <button onClick={()=> addToCart(item.id)}>Add item</button>
                                   </div>
                                  
                               </div>
                           )
                       })
       }
    </div>
  )
}

export default Description
