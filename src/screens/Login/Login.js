import React from 'react'
import { FullContainer, ScreenContainer } from '../../constants/styled'
import Logo from '../../assets/imgs/logo-future-eats-invert.png'
import Button from '@material-ui/core/Button'
import { ScreenFormContainer, NameDiv , LogoImg } from './styled'
import LoginForm from './LoginForm'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'


const Login = () => {
    return (
        <FullContainer>
            <ScreenContainer>
              <ScreenFormContainer>
                  <LogoImg src={Logo}/>
                  <NameDiv>Entrar</NameDiv>
                  <ThemeProvider theme={theme}>
                  <LoginForm/>
                        <Button
                        onClick={() => null}
                        color={'inherit'}
                        variant={'text'}
                        type={'submit'}
                        fullWidth
                        >
                        Não tem cadastro? Clique aqui!
                        </Button>
                </ThemeProvider>
              </ScreenFormContainer>
            </ScreenContainer>  
        </FullContainer>
       
    )
}
export default Login
  