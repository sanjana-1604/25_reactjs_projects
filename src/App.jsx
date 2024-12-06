import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import MainPage from './components/MainPage'
import Accordion from './components/Accordion/Accordion';
import RandomColorGenerator from './components/RandomColorGenerator/RandomCOlorGenerator';
import TodoList from './components/TodoList/TodoList';
import StarRating from './components/Star_rating_Component/StarRating';
import ImageSlider from './components/Image_Slider/ImageSlider';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/Accordian' element={<Accordion/>}></Route>
        <Route path='/ColorGenerator' element={<RandomColorGenerator/>}></Route>
        <Route path='/TodoList' element={<TodoList/>}></Route>
        <Route path='/StarRating' element={<StarRating/>}></Route>
        <Route path='/ImageSlider' element={<ImageSlider/>}></Route>
       {/*  <Route path='/' element={</>}></Route>
        <Route path='/' element={</>}></Route>
        <Route path='/' element={</>}></Route> */}

      </Routes>
      </BrowserRouter>
    
    
   
    
    
     
    </>
  )
}

export default App
