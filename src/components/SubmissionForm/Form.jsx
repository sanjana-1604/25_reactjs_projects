import React, { useState } from 'react'

import Card from './card';



function Form() {
  const [toShow, setToShow] = useState(true)
  const toShowMsg = (data)=>{
    setToShow(data)
  }
  return (
    <>
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <Card title = "JOIN US" text="Use your Email to signup" btnValue="REGISTER" toShow = {toShowMsg} zIndex = {toShow}/>
      <Card title = "LOGIN" text="Use your Account to login" btnValue="LOGIN"/>
     </div>
    <div>
  <div className='w-[386px] z-40 absolute opacity-1'>
    <h1>Hello, Again</h1>
    <img src="../public/JoinUS.png"/>
    <p>Login to stay connected with us</p>
    <button>SIGN IN</button>
  </div>
  <div className='w-[386px] z-10 absolute opacity-0'>
  <h1>Welcome</h1>
    <img src="../public/Welcome.png"/>
    <p>Login to stay connected with us</p>
    <button>REGISTER</button>
  </div>




</div>
    
   
    </>
    
  )
}

export default Form