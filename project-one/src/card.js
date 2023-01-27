import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function MultiActionAreaCard(props) {
  const {image} = props;
  const {details} = props;
  const {price} = props;
  const {rating} = props;
  const {sales} = props;

  return (
    <Card sx={{ maxWidth: 200 , minWidth:200 ,marginY:3, height:450, padding:'5px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="auto"
          image= {image}
          alt="product image"
        />
        <CardContent>
          <Typography sx={{fontSize:'13px',textAlign:'justify',fontWeight:'600',color:'#4c4a4c'}} variant="p" component="div">
            {details}
          </Typography>
          <Typography sx={{fontSize:'18px',textAlign:'left',fontWeight:'600',padding:'10px 0px',color:'#3f3e40'}}>
            {price}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="success" sx={{padding:'0px',borderRadius:'50px',paddingTop:'1px'}}>
          {rating} <StarIcon fontSize='10px' sx={{position:'relative',bottom:'1px',paddingLeft:'2px'}}/>
        </Button>
        <Typography sx={{fontSize:'13px',color:'grey',fontWeight:'500',paddingLeft:'5px' }}>{sales}</Typography>
      </CardActions>
    </Card>
  );
}