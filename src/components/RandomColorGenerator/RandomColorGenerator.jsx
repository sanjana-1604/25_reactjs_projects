import React, { useState } from 'react'

function RandomColorGenerator() {
const [color,setColor]=useState(null)
const[selectedValue , setSelectedValue]=useState(null)




const randomRGBColorGenerator = ()=>{
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    setColor(`RGB(${r},${g},${b})`)
}

const randomHEXColorGenerator = ()=>{
    const hex = Math.floor(Math.random()*16777215).toString(16)
    
    setColor(`#${hex.padStart(6,'0')}`)
}
const handleOptionChange = (e)=>{
    setSelectedValue(e.target.value)
    
}


  return (

   
    <>
    
    <div className=" flex flex-col items-center justify-center w-screen h-screen "style={{ backgroundColor: color }}>
        <div>
           
            <div className='flex flex-col items-start justify-center font-bold'>
                <label htmlFor="">
                    <input type="radio" 
                    name="option"
                    value="RGB"
                    onChange={handleOptionChange}
                    
                    />
                    RGB
                </label>
                <label htmlFor="">
                    <input type="radio" 
                    name="option"
                    value="HEX"
                    onChange={handleOptionChange}
                   
                    />
                    HEX
                </label>
            </div>
        </div>
        
        <button className="p-2 m-2 font-extrabold text-lg border-dotted border-2 border-black rounded-lg bg-neutral-400" onClick={selectedValue === 'RGB'?randomRGBColorGenerator:randomHEXColorGenerator}>Color Generator</button>
        <div  className='p-2 m-2 font-extrabold text-lg '>{color}</div>

    </div>
    
    
    </>
  )
}

export default RandomColorGenerator