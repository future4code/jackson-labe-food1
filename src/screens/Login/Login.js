import React from 'react'
import { FullContainer, ScreenContainer } from '../../constants/styled'
import Logo from '../../assets/imgs/logo-future-eats-invert.png'
import Button from '@material-ui/core/Button'
import { ScreenFormContainer } from './styled'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <FullContainer>
            <ScreenContainer>
              <ScreenFormContainer>
                  <img src={Logo}/>
                  <div>Entrar</div>
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
              </ScreenFormContainer>  
            </ScreenContainer>   
        </FullContainer>
       
    )
}
export default Login
  