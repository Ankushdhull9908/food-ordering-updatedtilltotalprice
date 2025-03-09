import React, { useState } from 'react'
import { useCart } from '../CartContext'

function SignUpstructure() {
    
    const [name, setname] = useState('')
      const [phone,setphone]= useState('')
      const [email, setemail] = useState('')

    function submit(e) {
        const data = { name: name, phone: phone, email: email }
        localStorage.setItem('newaccount', JSON.stringify(data))
        setname('')
        setphone('')
        setemail('')
        e.preventDefault()
      }
    
  return (
    <div className='signupstructure'>
       <input type='text' placeholder='Enter Name' value={name} onChange={(e)=> setname(e.target.value)}/>
            <input type='number' placeholder='Enter Phone' value={phone} onChange={(e)=> setphone(e.target.value)}/>
            <input type='email' placeholder='Enter email'  value={email} onChange={(e)=> setemail(e.target.value)} />
            <button onClick={(e)=> {
                submit(e)
            }}>Continue</button>
    </div>
  )
}

export default SignUpstructure
