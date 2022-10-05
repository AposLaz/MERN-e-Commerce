import React from 'react'
import { useEffect, useReducer } from 'react';
import './productDescription.css'
import logger from 'use-reducer-logger'
import axios from 'axios';
import DividerList from '../DividerList';
import ProductInStock from './ProductInStock';
import { Helmet } from 'react-helmet-async';


const reducer = (state, action)=>{
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, loading: false, product: action.payload}
        case 'FETCH_ERROR':
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}

function ProductDescription({slug}) {

  const [{loading, product, error}, dispatch] = useReducer(logger(reducer), {
    loading: true,
    product: {},
    error: '',
  })

  useEffect(()=>{
    const fetchProduct = async ()=>{
        dispatch({type: 'FETCH_REQUEST'})
        try {
            const product = await axios.get(`/api/products/slug/${slug}`)
            dispatch({type: 'FETCH_SUCCESS', payload: product.data})
        } catch (err) {
            dispatch({type: 'FETCH_ERROR', payload: err.message})
        }    
    }

    fetchProduct()
  },[slug])

  return (
   
    loading? <div>Loading...</div>
    : error? <div>{error}</div>
    : (
        <div className='product-desc-row'>
            {/* 
                @params Helmet for change the title
            */}
            <Helmet>
                <title>{product.name}</title>
            </Helmet>
            <div className='product-desc-col image'>
                <img 
                    src={product.image} 
                    alt={product.name}
                />
            </div>
            <div className='product-desc-col info'>
               <DividerList 
                    slug={product.slug}
                    price={product.price}
                    numReviews={product.numReviews}
                    rating={product.rating}
                    description={product.description}
               />
            </div>
            <div className='product-desc-col action'>
                <ProductInStock 
                    price={product.price}
                    countInstock={product.countInstock}
                />
            </div>
        </div>
      )
  )
}

export default ProductDescription