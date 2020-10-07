import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin-bottom: 20px;
`
export const SignUpButtonContainer = styled.div`
  width: 100%;
  max-width: 450px;
`
export const ScreenFormContainer = styled.div`
height: 647px;
width: 100%; 
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ConfirmButton = styled(Button)`
    color:#5cb646;
    background-color: #5cb646;

    &&:hover{
        background-color: #5cb646;
    }
`  
// export const LogoImage = styled.img`
//   width: 70vw;
//   max-width: 350px;
// `
