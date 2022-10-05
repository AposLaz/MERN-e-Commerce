import React from 'react'
import Product from './ProductCard'
import './listProducts.css'
import logger from 'use-reducer-logger'
import axios from 'axios'
import { useEffect } from 'react'
import { useReducer } from 'react'

const reducer = (state, action)=>{
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
      return {...state, loading: false, products: action.payload}
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}


function ListProducts() {

  const [{loading, products, error}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  })
  
  useEffect(()=>{
    const fetchData = async ()=>{
      dispatch({type: 'FETCH_REQUEST'})
      try{
        const result = await axios.get('/api/products')
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      }catch(e){
        dispatch({type:'FETCH_FAIL', payload: e.message})
      }
    }

    fetchData()
  },[])

  return (
    <div className='container'>
        <h1>Featured Products</h1>
        <div className='list-product'>
            {
              loading ? (
                <div>Loading...</div>
              ): error? (
                <div>{error}</div>
              ) :
              (  products.map((product)=>{
                  return <Product 
                              key={product.id}
                              id={product.id}
                              image={product.image}
                              name={product.name}
                              price={product.price}
                              slug={product.slug}
                              rating={product.rating}
                              numReviews={product.numReviews}
                          />
              }))}
        </div>
    </div> 

  )
}

export default ListProducts