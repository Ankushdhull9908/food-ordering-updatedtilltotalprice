import React, { useEffect, useState } from 'react'
import { useCart } from '../CartContext'

export default function LoginStructure() {
    const {login} = useCart()

    const [phone, setphone] = useState('')
    const [showotp,setshowotp] = useState(false)
    const [otp,setotp] = useState('')
    const [generatedotp,setgeneratedotp] = useState('')
    const [logindata,setlogindata] = useState(null)

 
    useEffect(()=>{
        var x = JSON.parse(localStorage.getItem('newaccount'))
        setlogindata(x)
    },[])

    function checkforphone()
    {
        if(phone=== logindata.phone)
        {
            setshowotp(true)
            setTimeout(otpgeneration,3000)
        }else{
            alert("Invalid Phone Number")

        }
    }

    

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
          const data = { name: logindata.name, phone: logindata.phone, pass: logindata.email }
          localStorage.setItem('logindata',JSON.stringify(data))
          login(data)

        }else{
          alert("INVALID OTP")
        }
       }
    
  return (
    <div className="loginstructure">
        <input type='number' value={phone} placeholder='Enter Phone Number' onChange={(e)=> setphone(e.target.value)}/>
        {
          showotp===true? <input type='number' value={otp}  placeholder='Enter OTP'onChange={(e)=> setotp(e.target.value)}/>:''
        }
        {
          showotp===false ? <button onClick={(e)=> {
                 checkforphone()
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
  )
}
