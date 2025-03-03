import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext'
import './Formstructure.css'

function FormStrcuture() {
    const { login } = useCart()
  const navigate = useNavigate()
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  const [pass, setpass] = useState('')



  function submit(e) {
    const data = { name: name, phone: phone, pass: pass }
    localStorage.setItem('logindata', JSON.stringify(data))
    login(data)
    setname('')
    setphone('')
    setpass('')
    e.preventDefault()
  }
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
    <form>
      <input type='text' placeholder='Enter Name' value={name} onChange={(e) => {
        setname(e.target.value)
      }} />

      <input type='number' placeholder='Enter Phone' value={phone} onChange={(e) => {
        setphone(e.target.value)
      }} />

      <input type='password' placeholder='Enter Pass' value={pass} onChange={(e) => {
        setpass(e.target.value)
      }} />



      <button onClick={(e) => {
        submit(e)
      }}>Sign up</button>
    </form>
  </div>

  )
}

export default FormStrcuture
