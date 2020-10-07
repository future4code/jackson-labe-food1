import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer} from './styled'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { FilledInput, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';


const SignUpForm = () => {
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
     
         <SignUpFormContainer>
           <InputsContainer>
             <TextField
              value={''}
              name={'nome'}
              onChange={()=>null}
              label={'Nome'}
              variant={'outlined'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
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
             <TextField
              value={''}
              name={'cpf'}
              onChange={()=>null}
              label={'CPF'}
              variant={'outlined'}
              fullWidth
              required
              autoFocus
              margin={'normal'}
            />
            <br/>
          <FormControl variant="outlined" fullWidth required>
          <InputLabel htmlFor="outlined-adornment-amount">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            label={'E-mail'}
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
          <br/>
          <FormControl variant="outlined" fullWidth required>
          
          <InputLabel htmlFor="outlined-adornment-amount">Confirma</InputLabel>
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
            labelWidth={70}
          />

        </FormControl>
          </InputsContainer>
          <Button
            onClick={()=>null}
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            fullWidth
            margin={'normal'}
          >
              Criar
          </Button>
        </SignUpFormContainer>
   
  )
}

export default SignUpForm