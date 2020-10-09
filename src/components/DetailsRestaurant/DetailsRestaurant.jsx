import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {Details,Info,Title,Values} from './styled'

const useStyles = makeStyles({
    root: {
      width: 330,
      margin: 5,
      border: 'none',
      borderRadius: 10
    },
    media: {
      height: 120,
    },
  });

const DetailsRestaurant = (props) => {
    const {category , name,  description, address, deliveryTime,logoUrl , shipping} = props.dados
    const classes = useStyles();
 
    return (
    
        <Details  >
            <Card className={classes.root} variant='outlined' >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={logoUrl}
                    />
                    <CardContent >
                        <Title>{name}</Title>
                        <Info> 
                            <p>{category}</p>
                            <p>{description}</p>
                            <Values>
                                <p>Tempo de entrega:{deliveryTime} min</p>
                                <p>Frete R${shipping}</p>
                            </Values>
                            <p>{address}</p>
                        </Info>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Details>
      
    )
}
export default DetailsRestaurant



