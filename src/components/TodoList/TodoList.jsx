import React, { useState } from 'react'
import { IoIosCheckmarkCircle  } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {  MdModeEdit  } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

function TodoList() {

const[item , setItem] = useState('')
const[newItem, setNewItem]=useState([])
const[isDone, setIsDone]= useState([])
const[isModify,setIsModify] =useState(false)


const addItem = ()=>
{
    if(item.trim())
        {  
            setNewItem(preItem=>[...preItem, item])
            setIsDone(preDone=>[...preDone, false])   
            setItem('') 
        }   
}
const handleNewItem=(e)=>
{   
    setItem(e.target.value)
}
function markDone(index)
    {
        setIsDone(preDone=>(preDone.map((done,i)=>i===index?!done:done)))
        
    }
function deleteItem(index)
{
    const updatedArr = newItem.filter((item,i)=>{           
        return i != index
    })
    setNewItem(updatedArr)
}
function modifyItem(Index,value)
{
    const modifiedArr = newItem.map((item, i)=>{
        if(i===Index)
        {
            setIsModify(!isModify)
            return value
        }
        return item
    })
    setNewItem(modifiedArr)
}

  return (
    <>
    <div className='bg-[#E6E8E9] h-screen w-screen flex flex-col items-center'>
        <h1 className='flex justify-center font-bold text-[30px] text-[#3B71CA] mb-5'>
            <IoIosCheckmarkCircle className='mr-2 mt-2 '/> 
            My Todo-s        
        </h1>
        <div className='h-[80px] w-[80%] rounded-lg justify-between flex pl-4 pr-4 pt-2 pb-2 mb-4 bg-white'>
            <input value={item} onChange={handleNewItem} className='new_input p-2 outline-none w-[80%]' type='text' placeholder='Add new item'></input>
            <button onClick={addItem} className='bg-[#3B71CA] pl-2 pr-2 m-1 rounded-xl text-white h-[50%] mt-4'>ADD</button>
        </div>
        <ul className='w-[60%]'>
            {newItem.map((item,index)=>{
                    return <li key={index} className='flex justify-start items-center w-[100%] p-2 font-medium text-[20px]' onClick={()=>markDone(index)}>
                        <div className='flex w-[80%]'>
                            {isDone[index] ?<FaCircleCheck className='mt-2 mr-10 text-[#3B71CA]'/>:<FaRegCircle  className='mt-2 mr-10'/>}
                        
                            {item}
                        </div>
                        
                        <div className='flex'>
                            <MdModeEdit onClick={()=>modifyItem(index,item)} className='mr-2 text-[#3B71CA]'/>
                            <RiDeleteBin6Fill onClick ={()=>deleteItem(index)} className=' text-red-500' />
                                
                        </div>
                        
                        </li>
            })}
        </ul>       
    </div>   
    </>
  )
}

export default TodoList