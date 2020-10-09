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
    
    const classes = useStyles();
 
    return (
    
        <Details  >
            <Card className={classes.root} variant='outlined' >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={"https://picsum.photos/250/150"}
                    />
                    <CardContent onClick={props.onClick} >
                        <Title>{props.name}</Title>
                        <Info> 
                            <p>Tipo</p>
                            <Values>
                                <p>50 - 60min</p>
                                <p>Frete R$12,00</p>
                            </Values>
                            <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
                        </Info>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Details>
      
    )
}
export default DetailsRestaurant



