import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import { InputsContainer, LoginFormContainer, ConfirmButton} from './styled'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Button, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import theme from '../../constants/theme';



const LoginForm = () => {

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

     
         <LoginFormContainer  >
           <InputsContainer >
             <TextField 
              value={''}
              name={'email'}
              onChange={()=>null}
              label={'E-mail'}
              variant={'outlined'}
              type={'email'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
          <FormControl  variant="outlined" fullWidth>
          <InputLabel >Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
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
          />
        </FormControl>
          </InputsContainer>
          
          <Button className={theme} 
            onClick={()=>null}
            variant={'contained'}
            color={'primary'}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
              Entrar
          </Button>
        </LoginFormContainer>
   
  )
}

export default LoginForm