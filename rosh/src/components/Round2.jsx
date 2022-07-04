import React, { useState } from 'react'

const Round2 = () => {

    const Products = [

        {id: 1, name: "Product-1", price:100},
        
        {id: 2, name: "Product-2", price:200},
        
        {id: 3, name: "Product-3", price:300},
        
        ];

const [prod, setProd]=useState([

    {id: 1, name: "Product-1", price:100},
    
    {id: 2, name: "Product-2", price:200},
    
    {id: 3, name: "Product-3", price:300},
    
    ]);

const [quantity, setQuantity]=useState(0)

//console.log(quantity)

const increment=(id)=>{

      setQuantity(quantity+1)

}
const decrement=(id)=>{

    setQuantity(quantity-1)
    
    }


  return (
    <div>
        <div>
            <h1>Products</h1>
            {
                prod.map((e)=>(
                    <div key={e.id}
                    style={{backgroundColor:"wheat", display:"flex", justifyItems:"center", justifyContent:"space-around", marginBottom:"10px"}}>
                        <h3>{e.id}</h3>
                        <h3>{e.name}</h3>
                        <h3>{e.price}</h3>
                        <button onClick={()=>increment(e.id)}>+</button>
                        <h3>{quantity}</h3>
                        <button onClick={decrement}>-</button>
                        
                        
                    </div>
                ))
            }
        </div>
<br/>

        <div>
            <h1>Cart</h1>
            <div>
                {
                    prod.map((e)=>(
                        <div key={e.id}
                        style={{display:"flex", justifyContent:"space-evenly", textAlign:"center", backgroundColor:"teal"}}>
                            <h3>{e.name}</h3>
                            <h3>{quantity*e.price}</h3>
                        </div>
                    ))
                }
            </div>

        </div>
        
        

    </div>
  )
}

export default Round2