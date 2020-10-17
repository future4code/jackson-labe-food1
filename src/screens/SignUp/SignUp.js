import React from 'react'
import Logo from '../../assets/imgs/logo-future-eats-invert.png'
import { ScreenFormContainer, NameDiv , LogoImg , FullContainer, FormContainer} from './styled'
import SignUpForm from './SignUpForm'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'


const SignUp = () => {
    return (
    <FullContainer>
        <ScreenFormContainer>
            <ThemeProvider theme={theme}>
                <LogoImg src={Logo}/>
                <NameDiv>Cadastrar</NameDiv>
                <FormContainer>
                <SignUpForm/>
                </FormContainer> 
            </ThemeProvider>
        </ScreenFormContainer>  
    </FullContainer>
       
    )
}
export default SignUp