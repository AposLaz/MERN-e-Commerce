import React from 'react'
import './productCard.css'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import { Button, CardActionArea } from '@mui/material';
import RatingProduct from './RatingProduct';

function Product({id,image,name,price,slug,rating,numReviews}) {
  return (
    <Card className='product'>
        <CardActionArea>
          <Link to={`/product/${slug}`}>
            <img src={image} alt={name}/>
          </Link>
        </CardActionArea>
        <div className='product-info'>
          <Link to={`/product/${slug}`}>
            <h5>{name}</h5>
          </Link>
          <RatingProduct 
              rating={rating}
              numReviews={numReviews}
          />
          <p>${price}</p>
          <Button variant='contained'>Add to cart</Button>
        </div>
    </Card>
  )
}

export default Product