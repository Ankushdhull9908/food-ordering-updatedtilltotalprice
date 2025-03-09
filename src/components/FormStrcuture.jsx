import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext'
import './Formstructure.css'

function FormStrcuture() {
    const { login } = useCart()
  const navigate = useNavigate()
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  const [pass, setpass] = useState('')
   const [toggle,settoggle] = useState(false)
   const [otp,setotp] = useState('')
   const [showotp,setshowotp] = useState(false)
   const [generatedotp,setgeneratedotp] = useState('')
   console.log(typeof(otp))
   console.log(typeof(generatedotp))

   function otpgeneration()
   {
    var otp1 = 0;
    for(var i=0;i<6;i++)
    {
      otp1+= Math.ceil(Math.random()*100)
      
    }
    alert("YOUR OTP IS :"+otp1)
    setgeneratedotp(otp1)
   }

   function verifytheotp()
   {
    
    if(parseInt(otp)=== generatedotp){
      alert("LOGIN SUCESSFUL")
    }else{
      alert("INVALID OTP")
    }
   }


  function submit(e) {
    //const data = { name: name, phone: phone, pass: pass }
    //localStorage.setItem('logindata', JSON.stringify(data))
    //login(data)
    setname('')
    setphone('')
    setpass('')
    e.preventDefault()
  }

  useEffect(()=>{

  },[name])
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
          <div className="loginstructure">
        <input type='number' value={phone} onChange={(e)=> setphone(e.target.value)}/>
        {
          showotp===true? <input type='number' value={otp} onChange={(e)=> setotp(e.target.value)}/>:''
        }
        {
          showotp===false ? <button onClick={(e)=> {
                 setshowotp(true)
                 setTimeout(otpgeneration,3000)
                 e.preventDefault()
                 
          }}>Login</button> :''
        }
        {
           showotp=== true ? <button onClick={(e)=> {
            setshowotp(true)
            verifytheotp()
            e.preventDefault()
            
     }}>verify OTP</button> :''
          
        }

      </div>
        ) : (
          <div className="signupstructure">
            <input type='text' placeholder='Enter Name'/>
            <input type='text' placeholder='Enter Phone' />
            <input type='text' placeholder='Enter email' />
            <button>Continue</button>
           
            
      </div>
        )
      } 
      
      
      
      
    </form>
  </div>

  )
}

export default FormStrcuture
