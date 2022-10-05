import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../components/Products/ProductDescription'

function ProductDesc() {
    const params = useParams()
    const {product_slug} = params

  return (
    <div className='container'>
        <ProductDescription 
          slug={product_slug}
        />
    </div>
  )
}

export default ProductDesc