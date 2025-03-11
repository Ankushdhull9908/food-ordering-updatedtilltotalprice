import React, { useState } from 'react'
import './Cart.css'
import { useCart } from '../CartContext'
import FormStrcuture from '../components/FormStrcuture'
import '../components/Formstructure.css'
import { assets } from '../assets/assets'
import {restaurants} from '../assets/Restaurants'
import { useNavigate} from 'react-router-dom'

function Cart() {

  const navigate = useNavigate()
  const {cart,increasequantity,decreasequantity,totalprice} = useCart()
  console.log(cart)

  const resid = cart.map((i)=>{
    if(i.restaurantId){
      return i.restaurantId
    }
  })

  const x= resid[0]

  const filteredRes = restaurants.filter((i)=> i.id === x)
  

  const { logindata, address } = useCart()
  const [formtoggle, setformtoggle] = useState(false)
  const [confaddress,setconfaddress] = useState(false)
  const [payment,setpayment] = useState(false)

  
  return (
    <div className='cart'>
      {
        cart.length===0? (<div className='emptycart'>
          <img src={assets.emptycart} alt='emptycart'/>
          <p>Delicious Food Waiting For Youuu!</p>
          <button onClick={()=> navigate('/')}>Explore Restaurants</button>
        </div>) : (
          
      <div className='cartbox'>

      <div className="left">
        <div className="loginsignup">
          <div className="cartlefticon">
            <img src={assets.profile} alt='profile' />
          </div>
         
          {
            logindata.name !== null ? (<div className='loginsuccessfull'>
              <div><h3>Logged In</h3>
                <img src={assets.check} alt='check' /></div>
              <h4>{logindata.name} | {logindata.phone}</h4>
            </div>) : (
              <div className='notloggedin'>
                <div className={formtoggle === false ? 'loginsignupbutton' : 'notshow'}>
                  <div className="loginheading">
                    <div className="accountheading">
                      <h1>Account</h1>
                      <p>To place Order Please Log in</p>
                    </div>
                    
                    <div className="loginimage">
                      <img src='https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg' alt='error' />
          </div>

                  </div>
                  <div className="buttoncollection">
                  <button id='loginbtn' onClick={() => {
                    setformtoggle(true)
                  }}>Have an Account?<br></br>LOG IN</button>
                  <button onClick={()=>{
                    setformtoggle(true)
                  }}>New here?<br></br>SIGN UP</button>
                  </div>
                  
                </div>
                {
                  formtoggle === true ? <FormStrcuture /> : <div></div>
                }
              </div>
            )
          }
        </div>
        <div className="address">
        <div className="changeaddress">
                <p onClick={()=> {
                  setconfaddress(false)
                  setpayment(false)
                } }>Change Address</p>
              </div>
          <div className="cartlefticon">
            <img src={assets.location} alt='profile' />
          </div>
          {
            logindata.name === null ? (<div>
              <h4>Delivery Address</h4>
            </div>) : (logindata.name !== null && confaddress===false? <div className='deliverybox'>
              
              <div className="deliveryaddressheading">
              <h3>Select Delivery Address</h3>
              </div>
              
              <div className="deliveryaddressboxes">
                <div className="defaultaddress">
                  <p>{address.address}</p>
                  <button onClick={()=> {
                    setconfaddress(true)
                    setpayment(true)
                    }}> 
                    Deliver here
                  </button>
                </div>
                <div className="addnewaddress">
                <p>Provide new Address</p>
                <button>Add new</button>
                </div>
              </div>
            </div> : <div className='addresssuccessfull'>
              <h3>Address Confirmed</h3>
              <img src={assets.check} alt='error' />
              <h4>{address.address}</h4>
            </div>)
          }

        </div>
        <div className="payment">
          <div className="cartlefticon">
            <img src={assets.payment} alt='profile' />
          </div>
          {
            payment===true ? <div>
              <button>Proceed with payment</button>
            </div> : <h3>Payment</h3>
          }

        </div>

      </div>
      <div className="cartsection">
        <div className="restaurantsection">
              {
                filteredRes.map((i)=>{
                  return(
                    <div className='cartresdetails'>
                    <img src={i.image} alt='error'/>
                    <h5>{i.name}</h5>
                    <p>{i.location.city}</p>
                  </div>
                  )
                  
                })
              }
              
        </div>
        
        
          {
            cart.map((i)=>{
              return(

                <div className='cartitem'>
                  {
                      i.type=== "veg"? <img src={assets.veg} alt='veg'/> : <img src={assets.nonveg} alt='nonveg'/>
                    }
                  <div className="cartitemname">
                    
                  <h4>{i.name}</h4>
                  </div>
                  <div className="increasedescreasequantity">
                  <img src={assets.add_icon_green} alt='+' onClick={()=> increasequantity(i.id)}/>
                  <p>{i.quantity}</p>
                  <img src={assets.remove_icon_red} alt='+' onClick={()=> decreasequantity(i.id)}/>
                  </div>
                  <div className="cartitemprice">
                  <h4>₹{i.price}</h4>
                  </div>
                  
                  
                  
                </div>
              )
            })
          }
          <div className="totalprice">
            <p>Distance: {filteredRes? Math.ceil(filteredRes[0].Distance) : ''} km</p>
            <p>Delivery Charges: {filteredRes? Math.ceil(filteredRes[0].Distance*2):''}</p>
            <p>To Pay : {totalprice+Math.ceil(filteredRes[0].Distance*2)}</p>
          </div>
        </div>
    </div>
        )
      }


    </div>
  )
}

export default Cart
