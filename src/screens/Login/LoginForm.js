import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import { InputsContainer, LoginFormContainer, ConfirmButton} from './styled'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Button, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress'


  const LoginForm = () => {
    const [form, handleInputChange] = useForm({ email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false)
    const [values, setValues] = useState({
      showPassword: false,
    })
    const history = useHistory()

    const onClickLogin = (event) => {
      event.preventDefault()
      // const element = document.getElementById('login_form')
      // const isValid = element.checkValidity()
      // element.reportValidity()
      // if (isValid) {
        login(form, history, setIsLoading)
        console.log(form)
      // }
    }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

return (
  <FormControl  variant="outlined" fullWidth>
         <LoginFormContainer id={'login_form'}>  
           <InputsContainer >
             <TextField 
              value={form.email}
              name={'email'}
              onChange={handleInputChange}
              label={'E-mail'}
              variant={'outlined'}
              type={'email'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />

          <FormControl  variant="outlined" fullWidth required margin={'normal'}>
          <InputLabel >Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={50}
          />
        </FormControl>
          </InputsContainer>
          
          <Button  
            onClick={onClickLogin}
            variant={'contained'}
            color={'primary'}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
          {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Entrar</>}
          </Button>
          
        </LoginFormContainer>
   </FormControl>
  )
}

export default LoginForm