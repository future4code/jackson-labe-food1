import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Info } from './styled'

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 5,
  },
  media: {
    height: 120,
  },
});

const CardRestaurant = (props)=>{
  const { id, name, deliveryTime, logoUrl, address, category, description, shipping } = props.data


  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logoUrl}
        />
        <CardContent>
            <Typography gutterBottom color={"primary"}variant="h6" component="p">{name}</Typography>
            <Info>
                <Button size="small" color="inherit">{deliveryTime}min</Button>
                <Button size="small" color="inherit">Frete R${shipping},00</Button>
            </Info>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardRestaurant