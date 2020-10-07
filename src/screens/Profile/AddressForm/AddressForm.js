import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';


const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self:center;
    height: 100vh;
`
const FormAddre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const H4 = styled.h4`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Campo = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
`

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    
  });

const AdressForm = () => {

     return (
        <Div>
            
                <form style={{width: '90%'}}>
                    <H4>Meu Endereço</H4>
                        <FormAddre>
                            <Campo>
                                <TextField
                                    required
                                    id="logradouro"
                                    label="Logradouro"
                                    placeholder="Rua/AV"
                                    variant="outlined"
                                    // style={{width: '100%'}}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="numero-log"
                                    label="Numero"
                                    placeholder="Numero"
                                    type="number"
                                    variant="outlined"
                                    // style={{width: '100%'}}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    id="comple-log"
                                    label="Complemento"
                                    placeholder="Apto./Bloco"
                                    variant="outlined"
                                    // style={{width: '100%'}}
                                    fullWidth
                                    InputLabelProps={{
                                    shrink: true,
                                    }}                                    
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="bairro-log"
                                    label="Bairro"
                                    placeholder="Bairro"
                                    variant="outlined"
                                    // style={{width: '100%'}}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="cidade-log"
                                    label="Cidade"
                                    placeholder="Cidade"
                                    variant="outlined"
                                    // style={{width: '100%'}}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                        }}
                                />
                            </Campo>
                            <Campo>
                                <TextField
                                    required
                                    id="estado-log"
                                    label="Estado"
                                    placeholder="Estado"
                                    variant="outlined"
                                    // style={{width: '100%'}}
                                    fullWidth
                                    InputLabelProps={{
                                    shrink: true,
                                    }}                                    
                                />
                            </Campo>
                            <Campo>
                                <ThemeProvider theme={theme}>
                                    <Button 
                                        // style={{width: '100%'}}
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