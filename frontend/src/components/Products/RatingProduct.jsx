import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

/**
 * 
 * @param rating 
 * @param numReviews 
 * @returns stars
 */

function RatingProduct({rating,numReviews}) {

    const array =  Array.apply(null,Array(5));
    
return (
    <div className='rating-card'>
        <span>
            {
                array.map((val,i)=>{
                    if(i<Math.floor(rating)){
                        return <StarIcon key={i}/>
                    }
                    else if(i===Math.floor(rating) && (rating % 1 !== 0)){ //check if number is float
                        return <StarHalfIcon key={i}/>
                    }
                    else{
                        return <StarBorderIcon key={i} />
                    }
                })     

            }
        </span>
        <span> {numReviews} reviews</span>  
    </div>
)}

export default RatingProduct