import React from 'react'
import { FullContainer, ScreenContainer } from '../../constants/styled'
import Logo from '../../assets/imgs/logo-future-eats-invert.png'
import { ScreenFormContainer, NameDiv , LogoImg} from './styled'
import SignUpForm from './SignUpForm'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'


const SignUp = () => {
    return (
    <FullContainer>
        <ScreenContainer>
            <ThemeProvider theme={theme}>
                <ScreenFormContainer>
                    <LogoImg src={Logo}/>
                    <NameDiv>Cadastrar</NameDiv>
                    <SignUpForm/>
                </ScreenFormContainer>  
            </ThemeProvider>
        </ScreenContainer>   
    </FullContainer>
       
    )
}
export default SignUp