import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Cards = () => {
    var[product,setproduct]=useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        console.log(response.data);
        setproduct(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
},[])
  return (
    <div>
      <Grid container spacing={2}>
        {product?.map((v,i)=>{
        return(
        <Grid item xs={12} md={4} sm={4}>
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={v.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {v.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {v.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    )
  })}

    </Grid>
    </div>
  )
}

export default Cards
