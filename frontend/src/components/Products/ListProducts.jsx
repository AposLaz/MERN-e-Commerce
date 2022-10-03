import React from 'react'
import Product from './Product'
import './listProducts.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function ListProducts() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        
        const result = await axios.get('/api/products')
        setProducts(result.data);
        console.log(products)
      }catch(e){
        console.log(e)
      }
    }

    fetchData()
  },[])

  return (
    <div className='container'>
        <h1>Featured Products</h1>
        <div className='list-product'>
            {products.map((product)=>{
            return <Product 
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        slug={product.slug}
                    />
            })}
        </div>
    </div> 

  )
}

export default ListProducts