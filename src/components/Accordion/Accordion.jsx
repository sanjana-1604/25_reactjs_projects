import React, { useState } from 'react'
import question from'./data'



function Accordion() {
    const [selection, setSelection]= useState(null)
    const [multipSelection, setMultiSelection] = useState(false)
    const[btnClicked,setBtnClicked]=useState(false)
    const[ multi,setMulti] = useState([])


    const handleSingleSelection = (currentId)=>{
        setSelection(currentId===selection ? null:currentId)             
        }
    const handleMultipleSelection = (currentId)=>{
       
        let cpyMutiple = [...multi];
    const findIndexOfCurrentId = cpyMutiple.indexOf(currentId);

    
    if (findIndexOfCurrentId === -1) cpyMutiple.push(currentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMulti(cpyMutiple);
       
    }
   

  return (
    <>
    <div className='bg-teal-50 border-2 flex flex-col items-center w-[100%] p-2'>
    {
        question && question.length ?
        question.map((item)=>
            ( 
                <div key = {item.id} className="item bg-teal-900 mb-2 w-[550px] rounded-md">
                    <h3 className="question flex justify-between m-2 pl-4 pr-4 font-bold">{item.title} 
                        <span className ="cursor-pointer" onClick={btnClicked?()=>handleMultipleSelection(item.id):()=>handleSingleSelection(item.id)}>+</span></h3>
                        {(selection === item.id || multi.indexOf(item.id) !== -1)?(<p className='m-2 pl-4 pr-4'>{item.info}</p>):null}              
                    
                </div>                
                             
            ))
        :<div>NO data found</div>
        }
         <button className={`b-2 p-2 font-bold rounded-md ${btnClicked ? 'bg-teal-900': 'bg-teal-700'} w-[200px] `} onClick= {()=>setBtnClicked(!btnClicked)} > Enable Multi Selection</button> 
        </div>
        </>
        )
    }

export default Accordion