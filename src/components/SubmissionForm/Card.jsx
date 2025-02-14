import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt,FaFacebook } from "react-icons/fa";
import './style.css'

function Card(props) {
  return (
    <>
    <div className={`card_container ${props.zIndex}? z-40: z-10` }>
            <form className='flex flex-col items-center'>
              <h1 className='font-bold text-xl mb-4'>{props.title}</h1>
              <div className='flex space-x-4 mb-4'>
              <a href = "#" className='text-lg p-2 rounded-full border-[0.05px] border-slate-200'><FaLinkedinIn  /></a>
              <a href = "#" className='text-lg p-2 rounded-full border-[0.05px] border-slate-200'><FaGithubAlt /></a>
              <a href = "#" className='text-lg p-2 rounded-full border-[0.05px] border-slate-200'><FaFacebook /></a>
              </div>
              <p className='text-xs text-gray-600'>{props.text}</p>
              <input className = " form_input  " type = "text" placeholder = "Enter Your Full Name " />
              <input className = "form_input " type = "email" placeholder='Enter Your Email'/>
              <input className = "form_input " type = "password" placeholder=' Enter Password'/>
              <input className = "form_btn transition delay-150 duration-300 ease-in-out active:scale-[0.95] focus:outline-none" type = "submit" value={props.btnValue} onClick={()=>props.toShow(false)} />
    
              
            </form>
            
          </div>
    </>
  )
}

export default Card