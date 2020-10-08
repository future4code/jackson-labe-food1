import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import { InputsContainer, LoginFormContainer, ConfirmButton} from './styled'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Button, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import theme from '../../constants/theme';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { login } from '../../services/user'
import CircularProgress from '@material-ui/core/CircularProgress'


  const LoginForm = (props) => {
    const [form, handleInputChange] = useForm({ email: '', password: ''})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onClickLogin = (event) => {
      event.preventDefault()
      const element = document.getElementById('login_form')
      // const isValid = element.checkValidity()
      // element.reportValidity()
      // if (isValid) {

        login(form, history, setIsLoading)
        console.log(form)
      // }
    }

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; 
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };    
return (
  <FormControl  variant="outlined" fullWidth>
   {/* <form id={'login_form'}> */}
         <LoginFormContainer  >
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
            <TextField
              value={form.password}
              name={'password'}
              onChange={handleInputChange}
              label={'Senha'}
              variant={'outlined'}
              type={'password'}
              fullWidth
              required
              margin={'normal'}
            />

          {/* <FormControl  variant="outlined" fullWidth> */}
          {/* <InputLabel >Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={form.password}
            name={'password'}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={50}
          /> */}
        {/* </FormControl> */}
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
   {/* </form> */}
   </FormControl>
  )
}

export default LoginForm