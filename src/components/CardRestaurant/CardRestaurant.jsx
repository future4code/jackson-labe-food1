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

const CardRestaurant = ()=>{
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/250/150"
        />
        <CardContent>
            <Typography gutterBottom color={"primary"}variant="h6" component="p">Nome Restaurante</Typography>
            <Info>
                <Button size="small" color="inherit">40 - 50min</Button>
                <Button size="small" color="inherit">Frete R$3,00</Button>
            </Info>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardRestaurant