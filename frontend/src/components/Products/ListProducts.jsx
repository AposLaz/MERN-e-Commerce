import React from 'react'
import data from '../../assets/data/data'
import Product from './Product'
import './listProducts.css'

function ListProducts() {
  return (
    <div className='container'>
        <h1>Featured Products</h1>
        <div className='list-product'>
            {data.products.map((product)=>{
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