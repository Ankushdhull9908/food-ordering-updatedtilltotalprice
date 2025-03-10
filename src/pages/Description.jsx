import React from 'react'
import { useParams } from 'react-router-dom'
import { Menu } from '../assets/MenuItems'
import { useCart } from '../CartContext'
import './Description.css'
import restaurants from '../assets/Restaurants'
import {assets} from '../assets/assets'

function Description() {
  
   const {id} = useParams()

   const res = restaurants.filter((i)=> i.id === parseInt(id))
   console.log(res)

   const {  addToCart } = useCart()
   var food = []
   
   if(id){
    food = Menu.filter((i)=> i.restaurantId===parseInt(id) )
   }
     
  return (
    <div className='description'>
      <div className="restaurantsection">
        <h1>{res[0].name}</h1>
        {
          res.map((i,index)=>{
          const estimatedtime = Math.ceil((i.Distance / 30) * 60)+20
          
          return(
          <div key={index} className='restaurantinfobox'>
                 <div className="descrating">
                 <img src={assets.rating_starts} alt='rating'/>
                 <h4>Rating: {i.rating}</h4>
                 </div>
                
                <p id='cuisine'>{i.cuisine}</p>
                <div className="descsourcedestination">
                  <div className="outlet">
                    <h5>Outlet</h5>
                    <p>{i.location.city}</p>
                  </div>
                  <img src={assets.destination} alt='destination'/>
                  <div className="desdestination">
                     <p>{estimatedtime}min</p>
                  </div>
                 
                 
                </div>
                 
                 
                 
          </div>)
        })
      }
      <div className="deals">
        <h3>Deals For you</h3>
        <div className="diffbanks">
        <div className="bank">
          <img src={assets.axisbank} alt='axis'/>
          <h3>20% Off upto ₹300</h3>
        </div>
        <div className="bank">
          <img src={assets.yesbank} alt='yesbank'/>
          <h3>15% Off upto ₹350</h3>
        </div>
        <div className="bank">
          <img src={assets.axisbank} alt='axis'/>
          <h3>20% Off upto ₹300</h3>
        </div>
       
        </div>
        
        
      </div>
      <div className="searchfordishes">
        <input type='text' placeholder='Search For Dishes'/>
      </div>
      <div className="menuheading">
           <h3>Menu</h3>
           <hr></hr>
      </div>
      

      </div>

      <div className="descriptionfooditems">
      {
           food.map((item,index)=>{
                           
                           return(
                               <div className='descfooditem' key={index}>
                                <div className="descresname">
                                   <h3>{item.name}</h3>
                                   <h4>₹{item.price}</h4>
                                   
                                   <img src={assets.rating_starts} alt='rating'/>
                                   
                                   
                                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                                   
                                   </div>
                                   <div className="descfoodimg">
                                   <img src={item.image} alt='error'/>
                                   <button id='descaddtocart'onClick={()=> addToCart(item.id)}>Add</button>
                                   </div>
                                   
                                  
                               </div>
                           )
                       })
       }
      </div>    
       
    </div>
  )
}

export default Description
