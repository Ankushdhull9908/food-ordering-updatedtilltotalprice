import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Formstructure.css'
import SignUpstructure from './SignUpstructure'
import LoginStructure from './LoginStructure'

function FormStrcuture() {


  
   const [toggle,settoggle] = useState(false)
   
  return (
    <div className="formbox">
    <div className="loginheading">
      <div className="accountheading">
        <h1>Account</h1>
        <p>To place Order Please Log in</p>
      </div>
      <div className="loginimage">
        <img src='https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg' alt='error' />
      </div>


    </div>
    <div><p>Enter login details or</p>
    <p id='createaccount' onClick={()=>{
      if(toggle===true)
      {
        settoggle(false)
      }else{
        settoggle(true)
      }
    }
    }>{toggle===true ? 'create an Account': 'Login in to your Account'}</p></div>
    
    <form>
      {
        toggle=== true ? (
          <LoginStructure/>
        ) : (
          <div className="signupstructure">
            <SignUpstructure/>
           
            
      </div>
        )
      } 
      
      
      
      
    </form>
  </div>

  )
}

export default FormStrcuture
