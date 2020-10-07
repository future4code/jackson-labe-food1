import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button, ThemeProvider } from '@material-ui/core';
import { Campo, Div, FormAddre, H4, theme } from './StyledAddressForm';
import { goToFeed, goToLogin } from '../../../Routers/Cordinators';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const AdressForm = () => {
    const history = useHistory();
  //////////validação do usuário por meio do token////////  
    // useLayoutEffect(() => {
    //     if(localStorage.getItem("token") == null){
    //         goToLogin(history)
    //     }
    //   }, [])

    /////////////Cadastro do endereço////////////////////////
    const [form, setForm ] = useState({
                                        street: "", 
                                        number: "", 
                                        neighbourhood: "", 
                                        city: "", 
                                        state: "", 
                                        complement: ""
                                    })
    const capturaEndereco = (event) =>{

        const { name, value } = event.target
        setForm({...form, [name]: value})
    }
    
    const CadAdrres = () => {
        console.log(form);
        const elemento = document.getElementById("form-enderec")
        const valido = elemento.checkValidity()
        elemento.reportValidity()
        if(valido){
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address`,{
                    headers:{
                               auth: localStorage.getItem('token')
                           }
               },form).then((Response)=> {goToFeed(history)})
                .catch((error) => {
                    console.log(error)
                    alert("Erro tente cadastrar novamente")
                })
                }
    
    }
    
     return (
        <Div>
            
                <form id="form-enderec" style={{width: '90%'}}>
                    <H4>Meu Endereço</H4>
                        <FormAddre>
                            <Campo>
                                <TextField
                                    required
                                    id="id-street"
                                    label="Logradouro"
                                    placeholder="Rua/AV"
                                    name="street"
                                    value={form.street}
                                    onChange={capturaEndereco}
                                    type="text"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="number-log"
                                    label="Numero"
                                    placeholder="Numero"
                                    name="number"
                                    value={form.number}
                                    onChange={capturaEndereco}
                                    type="number"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    id="complement-log"
                                    label="Complemento"
                                    placeholder="Apto./Bloco"
                                    name="complement"
                                    value={form.complement}
                                    onChange={capturaEndereco}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                    shrink: true,
                                    }}                                    
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="neighbourhood-log"
                                    label="Bairro"
                                    placeholder="Bairro"
                                    name="neighbourhood"
                                    value={form.neighbourhood}
                                    onChange={capturaEndereco}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="city-log"
                                    label="Cidade"
                                    placeholder="Cidade"
                                    name="city"
                                    value={form.city}
                                    onChange={capturaEndereco}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="state-log"
                                    label="Estado"
                                    placeholder="Estado"
                                    name="state"
                                    value={form.state}
                                    onChange={capturaEndereco}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                    shrink: true,
                                    }}                                    
                                />
                            </Campo>
                            <Campo>
                                <ThemeProvider theme={theme}>
                                    <Button 
                                        onClick={CadAdrres}
                                        fullWidth
                                        variant="contained" 
                                        color="primary" 
                                        disableElevation
                                    >Salvar</Button>
                                </ThemeProvider>
                            </Campo>
                        </FormAddre>    
                </form>
            
      </Div>
    )
}
export default AdressForm;