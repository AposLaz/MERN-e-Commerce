import { Button, Divider, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const style = {
    width: '80%',
    border: '1px solid rgb(202, 193, 193)',
    borderRadius: '10px',
    bgcolor: 'background.paper',
    '@media (max-width: 768px)' : {
      width: '100%'
    }
  };

function ProductInStock({price, countInstock}) {
  
  const available = {
                        stock: (countInstock <= 0) ? 'Unavailable' : 'In Stock',
                        color: (countInstock <= 0) ? 'error' : 'success',
                        button: (countInstock <= 0) ? 'none' : 'block',
                        bool: (countInstock <= 0) ? false : true,
                    }
  

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem divider>
            <ListItemText primary={`Price :`}/>
            <ListItemText style={{textAlign: 'right'}} primary={`$${price}`} />
        </ListItem>
        <Divider />
        <ListItem divider={available.bool}>
            <ListItemText primary={`Status: `} />
            <Button 
                color={available.color} 
                style={{
                  cursor: 'initial',
                  pointerEvents: 'none'
                }} 
                variant="contained"
            >{available.stock}</Button>
        </ListItem>
        {(countInstock >= 0) ? 
            <Button style={{
                        display: available.button, 
                        margin: '5px auto', 
                        backgroundColor: '#f5b800',
                        border: `1px solid #33a7ff`
                    }} 
                    variant="contained">Add to Cart</Button>
            : false
        }
        
    </List>
  )
}

export default ProductInStock