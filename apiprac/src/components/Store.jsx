import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Store = () => {

    const [store, setStore]= useState([])
    const [filter, setFilter]=useState([])
    const [array, setArray]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
        console.log(res.data)
        setStore(res.data)
       }) 
    }

    const handlechange=()=>{

        const searchres = store.filter((res)=>{
            return res.title.toLowerCase().includes(array.toLowerCase());
        })
        setFilter(searchres)
    }



  return (
    <div>
        <div>
            <input 
            type='text'
            placeholder='Search Here'
onChange={(e)=>{
    setArray(e.target.value)
}}
            />
            <button onClick={handlechange} >Filter</button>
        </div>

{array.length !==0 ? (

<div>
    <div>
        {filter.map((e)=>(
            <div key={e.id}>
                <h1>{e.title}</h1>
                <h4>{e.body}</h4>
            </div>
        ))}
    </div>
</div>

):(


        <div>
            {store.map((e)=>(
                <div key={e.id}>
                    <h1>Title: {e.title}</h1>
                    <h4>SubInfo: {e.body}</h4>
                    <hr/>
                </div>
                
            ))}
        </div>
)}
      
    </div>
  )
}

export default Store
