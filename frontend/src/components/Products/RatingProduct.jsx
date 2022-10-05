import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from 'styled-components'

/**
 * 
 * @param rating 
 * @param numReviews 
 * @returns stars for rating
 * 
 */

const RatingStyle = styled.div`
    span{
        color: #f5b800;
        vertical-align: bottom;
    }
`

function RatingProduct({rating,numReviews}) {

    const array =  Array.apply(null,Array(5));
    
return (
    <RatingStyle className='rating-card'>
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
    </RatingStyle>
)}

export default RatingProduct