import { createMuiTheme, ThemeProvider, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { goToFeed, goToLogin } from '../../Routers/Cordinators';


import Radio from '@material-ui/core/Radio';
import CardContent from '@material-ui/core/CardContent';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const PaiCar = styled.div`
    max-width: 100vw;
    min-height:90vh;
    display:flex;
    flex-direction: column;
    align-self:center;
    justify-content:center;

`
const Card = styled.div`
    background-color: #B8B8B8;
    width: 100%;
`
const ItensCarrinho = styled.div`
    min-height: 15%;
`
const Fret = styled.p`
    display: inline;
    text-align: end;
`
const Val = styled.div`
    display: flex;
    justify-content: space-between;
`

const Pag = styled.div`
    min-width: 100vw;
    
`
const Botao = styled.div`
    display: flex;
    flex-direction:column-reverse;
    /* align-self: flex-end; */
`

export const theme2 = createMuiTheme({
    palette: {
      primary: green,
    },
    
  });


const Cart = () => {
    const history = useHistory();

    useLayoutEffect(() => {
        if(localStorage.getItem("token") == null){
            goToLogin(history)
        }
      }, [])
   
    const [pedidos, setPedidos] = useState({});

    useEffect(() => {
            axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/active-order`,{
                            headers:{
                                    auth: localStorage.getItem('token')
                                }
                    }).then((Response)=> { setPedidos(Response)})
                        .catch((error) => {
                            console.log(error)
                        })  
    }, [])

    const MostraPedidos = () =>{
         
           
    }

    return (
        <PaiCar>
            <Card>
                <CardContent>
                
                    <Typography color="textSecondary">
                        Endereço de entrega
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Rua Alessandra Vieira, 42
                    </Typography>
                
                </CardContent>
            </Card>
            <ItensCarrinho>
            {MostraPedidos()}
            </ItensCarrinho>
                <Fret>Frete R$ 00.00</Fret>   
            <Val>
                <p>SUBTOTAL</p>
                <p>R$ 00.00</p>
            </Val>
            <div>
                <p>Forma de pagamento</p>
            
                <hr/>
            </div>
            <Pag >
                <form>
                    <FormControl 
                        component="fieldset"                 
                        >
                            <RadioGroup 
                                aria-label="quiz" 
                                name="quiz" 
                                >
                                    <FormControlLabel 
                                        value="dinheiro" 
                                        control={<Radio />}
                                        label="Dinheiro" />
                                    <FormControlLabel 
                                        value="cartão" 
                                        control={<Radio />}
                                        label="Cartão de credito" />
                            </RadioGroup>
                            
                    </FormControl>
                </form>
                <Botao>
                    <ThemeProvider  theme={theme2}>
                                <Button 
                                    style={{ maxWidth: "100vw"}}
                                    fullWidth
                                    variant="contained" 
                                    color="primary" 
                                    disableElevation
                                    >
                                    Salvar
                                </Button>
                    </ThemeProvider>
                </Botao>
            </Pag> 

           
        </PaiCar>
        
    ); 

}

export default Cart;