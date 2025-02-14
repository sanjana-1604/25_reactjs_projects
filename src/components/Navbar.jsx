import React from 'react'
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav >
        <ul className='flex flex-row '>
            <li  className='p-2 text-m mt-1 border-[0.05px] border-gray-200'>
            <Link to="/"><FaReact /></Link>
            </li>
            <li className='p-2 text-m'>
            <Link to="/Accordian">Accordion</Link> 
            </li>
            <li className='p-2 text-m'>
                <Link to="/ColorGenerator">Color Generator</Link>
            </li>
            <li className='p-2 text-m'>
                <Link to="/TodoList">Todo List</Link>
            </li>
            <li className='p-2 text-m'>
                <Link to="/StarRating">Star Rating</Link>
            </li>
            <li className='p-2 text-m'>
                <Link to="/ImageSlider">Image Slider</Link>
            </li>
            <li className='p-2 text-m'>
                <Link to="/LoadMoreBtn">Load More Button</Link>
            </li> 
            <li className='p-2 text-m'>
                <Link to="/Form">Form</Link>
            </li> 
            <li className='p-2 text-m'>
                <Link to=""></Link>
            </li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar