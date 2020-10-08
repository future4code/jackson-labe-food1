import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'
import axios from 'axios'
import {Header, UserContainer, AddressSection, TextAddress, StreetAddress, HistoricRequests} from './styled'
import useProtectedPage from '../../hooks/useProtectedPage';


const Profile = () => {
    useProtectedPage()
    const [user, setUser] = useState ({})
    const [address, setAddress] = useState ('')

    useEffect(() => {
        const getUser = () =>{
            axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', {
                headers: {
                    auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZSb3hQaFc3M2ZMRHNWMTd4RHRlIiwibmFtZSI6IkZsYXZpYSIsImVtYWlsIjoiZmxhdmlhQGdtYWlsLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTE5IiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTYwMjExNDM0Nn0.8fRzuhcfo3z10vH-tqWyEorPPe3ELENCUAQ0K1FxEFY"
                }
            }).then(response => {
                setUser(response.data.user)
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        } 
        getUser()
    }, []);

    return (
        <div>
            <main>
                <Header>
                    <p>Meu perfil</p>
                    <hr/>
                </Header>
                <ThemeProvider theme={theme}>
                   <UserContainer>
                     <p> { user.name } </p>
                     <p> { user.email } </p>
                     <p> { user.cpf } </p>
                   </UserContainer>
                   <AddressSection>
                       <TextAddress>Endereço Cadastrado</TextAddress>
                       <StreetAddress>Rua tigrinhos, 24</StreetAddress>
                   </AddressSection>
                   <HistoricRequests>
                       <p>Histórico de pedidos</p>
                       <hr/>
                   </HistoricRequests>      
                </ThemeProvider>
            </main>
            <Footer/>
        </div>
        
    )
}
export default Profile