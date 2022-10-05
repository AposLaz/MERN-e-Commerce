import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material'
import React from 'react'
import RatingProduct from './Products/RatingProduct';

const style = {
    width: '80%',
    bgcolor: 'background.paper',
    '@media (max-width: 768px)' : {
      width: '100%'
    }
  };

function DividerList({slug,price,numReviews,rating,description}) {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem divider>
          <h1>{slug}</h1>               
        </ListItem>
        <Divider />
        <ListItem divider>
            <RatingProduct 
                rating={rating}
                numReviews={numReviews}
            />
        </ListItem>
        <ListItem divider>
            <ListItemText primary={`Price: $${price}`} />
        </ListItem>
        <Divider />
        <ListItem>
            <ListItemText>
                <Typography variant="subheading">Description : </Typography>
                <Typography variant="subheading">{description}</Typography>
            </ListItemText>
        </ListItem>
  </List>
  )
}

export default DividerList