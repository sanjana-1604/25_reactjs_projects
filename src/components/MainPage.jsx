import React , { useState } from 'react'
import Accordion from './Accordion/accordion'
import RandomColorGenerator from './RandomColorGenerator/RandomCOlorGenerator'
import '../App.css'
import TodoList from './TodoList/TodoList'
import StarRating from './Star_rating_Component/StarRating'
import ImageSlider from './Image_Slider/ImageSlider'


function MainPage() {
    const [showComponent, setShowComponent] = useState(null)
    const[title,setTitle]=useState(null)

   
    const handleComponent = (e)=>
    {
        setShowComponent(e.target.innerText)
        setTitle(e.target.innerText)
    }
  return (
   <>
   {/* <div className='flex flex-col justify-center'>
   <div className='flex justify-center mb-10'>
   <button className='btn' onClick={handleComponent}>Accordion</button>
   <button className='btn' onClick={handleComponent}>Color Generator</button>
   <button className='btn' onClick={handleComponent}>Todo List</button>
   <button className='btn' onClick={handleComponent}>Star Rating Component</button>
   <button className='btn' onClick={handleComponent}>Image Slider</button>
   </div>
   <h1 className="font-medium flex justify-center mb-10">{title}</h1>
  
   <div>
    {showComponent === "Accordion" && <Accordion/>}
    {showComponent === "Color Generator" && <RandomColorGenerator/>}
    {showComponent === "Todo List" && <TodoList/> }
    {showComponent === "Star Rating Component" && <StarRating/> }
    {showComponent === "Image Slider" && <ImageSlider/> }
    
    
   </div>
   </div> */}
  
   </>
  )
}

export default MainPage