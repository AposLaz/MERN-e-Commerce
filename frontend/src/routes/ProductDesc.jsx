import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDesc() {
    const params = useParams()
    const {product_slug} = params

  return (
    <div>
        <h1>
            {product_slug}
        </h1>
    </div>
  )
}

export default ProductDesc