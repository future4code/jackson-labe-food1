import React from 'react'
import { FullContainer, ScreenContainer } from '../../constants/styled'
import Logo from '../../assets/imgs/logo-future-eats-invert.png'
import { ScreenFormContainer} from './styled'
import SignUpForm from './SignUpForm'

const SignUp = () => {
    return (
    <FullContainer>
        <ScreenContainer>
            <ScreenFormContainer>
                <img src={Logo}/>
                <div>Cadastrar</div>
                <SignUpForm/>
            </ScreenFormContainer>  
        </ScreenContainer>   
    </FullContainer>
       
    )
}
export default SignUp