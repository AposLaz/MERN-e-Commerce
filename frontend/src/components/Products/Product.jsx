import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'

function Product({id,image,name,price,slug}) {
  return (
    <div className='product'>
        <Link to={`/product/${slug}`}>
          <img src={image} alt={name}/>
        </Link>
        <div className='product-info'>
          <Link to={`/product/${slug}`}>
            <p>{name}</p>
          </Link>
          <p><strong>${price}</strong></p>
          <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product