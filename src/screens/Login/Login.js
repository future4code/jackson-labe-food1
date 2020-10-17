import React from 'react'
import Logo from '../../assets/imgs/logo-future-eats-invert.png'
import Button from '@material-ui/core/Button'
import { ScreenFormContainer, NameDiv , LogoImg ,FullContainer, FormContainer} from './styled'
import LoginForm from './LoginForm'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'
import { goToSignUp } from '../../Routers/Cordinators'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'


const Login = () => {
    const history = useHistory()
    useUnprotectedPage()

    return (
    <FullContainer>
        <ScreenFormContainer>
            <LogoImg src={Logo}/>
            <NameDiv>Entrar</NameDiv>
                <FormContainer>
                    <ThemeProvider theme={theme}>
                    <LoginForm/>
                        <Button
                            onClick={() =>goToSignUp(history)}
                            color={'inherit'}
                            variant={'text'}
                            type={'submit'}
                            fullWidth
                            >
                            Não tem cadastro? Clique aqui!
                        </Button>
                    </ThemeProvider>
                </FormContainer> 
        </ScreenFormContainer>
    </FullContainer>
       
    )
}
export default Login
  