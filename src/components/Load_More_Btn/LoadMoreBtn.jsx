import React, { useEffect, useState } from 'react'
import { use } from 'react'

function LoadMoreBtn() {
    const [count,setCount]=useState(0)
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [disableBtn,setBtn] = useState(false)

    async function getProduct()
    {
        try{
            setLoading(true)
            let response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            let result = await response.json()
           
            if (result && result.products && result.products.length) {
                if(count === 0)
                    setProducts(result.products)
                else
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
              }
           
        }catch(err)
        {
            alert(err)
            setLoading(false)
        }
    }

    useEffect(()=>{getProduct()},[count])
    useEffect(()=>{
        products && products.length === 100 ? setBtn(true):null}
    ,[products])
    if(loading)
        {
            return <div>Loding data! Please wait....</div>
        }
      


    return (
      <>
      <header className='text-center font-bold text-xl'><h1>Product List</h1></header>
      
      <section className='flex items-center flex-col'>
      
        <ul className='flex justify-evenly flex-wrap'>
            {
                products && products.length ?
                products.map((item)=>{
                    return<li  key={item.id} className='border-2 h-[200px] w-[200px] p-6 m-2 text-center'>
                        <img src={item.thumbnail}/>
                        <p className='truncate'>{item.title}</p>       
                        </li>
                })
                :null
            }
           
        </ul>
       
        <button className={`p-2 m-2 border-2 h-[50px] w-[100px] rounded-md bg-slate-400 ${disableBtn? "cursor-not-allowed opacity-50":null}`} 
        onClick={()=>setCount(count+1)}>Load More</button>
       {disableBtn?<p>All the products are loaded</p>:null}
      </section>
      </>
    )
  }



export default LoadMoreBtn