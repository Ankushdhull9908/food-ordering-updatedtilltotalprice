import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../CartContext'

function Profile() {
   const navigate = useNavigate()
   const { name,} = useParams()
   const {login,AddAddress} = useCart()
   const data = {name:null,phone:null}
  return (
    <div>
      This is profile of {name}


      <button onClick={()=>{
         login(data)
         localStorage.removeItem('logindata')
         navigate('/')
         
      }}>Logout</button>

<button onClick={()=>{
        AddAddress(null,null,null,null)
         localStorage.removeItem('useraddress')
         navigate('/')
         
      }}>Delete Address</button>
    </div>

  )
}

export default Profile
