import React, { useState } from 'react'
import { BiSolidStar } from "react-icons/bi";

function StarRating() {
    const [rating,setRating]=useState(null)
    const[hover, setHover]=useState(null)

    const handleonCLick=(index)=>
    {
        setRating(index)

    }
    const handleonMouseEnter=(index)=>{
        setHover(index)
    }
    const handleonMouseLeave=()=>{
        setHover(null)
    }
    
  return (
    <>
    <div className='flex justify-center border-dotted border-2 p-2'>
        {
            [...Array(5)].map((_,index)=>
            {   index += 1
                return <BiSolidStar key={index} className={`mr-2 text-[40px] ${index <=(hover||rating) ?'text-yellow-500':'text-black'} `}
                onClick={()=>handleonCLick(index)}
                onMouseEnter={()=>handleonMouseEnter(index)}
                onMouseLeave={()=>handleonMouseLeave}
                />

            })
       }
    
   
    </div>
    
    </>
  )
}

export default StarRating