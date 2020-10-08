import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/user'


const SignUpForm = (props) => {
  const [form, handleInputChange] = useForm({name: '', email: '', password: '', cpf:''})
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    showPassword: false,
  })
  const history = useHistory()

  const onClickSignUp = (event) => {
    event.preventDefault()
    // const element = document.getElementById('signup_form')
    // const isValid = element.checkValidity()
    // element.reportValidity()
    // if (isValid) {
      signUp(form, history, props.setButtonName, setIsLoading)
    // }
  }
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
return (
  <form id={'signup_form'}>
      <TextField
        value={form.name}
        name={'name'}
        onChange={handleInputChange}
        label={'Nome'}
        variant={'outlined'}
        fullWidth
        required
        autoFocus
        margin={'normal'}
      />
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
        value={form.cpf}
        name={'cpf'}
        onChange={handleInputChange}
        label={'CPF'}
        variant={'outlined'}
        fullWidth
        required
        autoFocus
        margin={'normal'}
      />
      <br/>

      <FormControl 
        variant="outlined" 
        fullWidth 
        required 
        margin={'normal'}
      >
        <InputLabel >Senha</InputLabel>

        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={form.password}
          name={'password'}
          onChange={handleInputChange}            label={'E-mail'}
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

          <br/>

      <FormControl variant="outlined" fullWidth required margin={'normal'}>
        <InputLabel >Confirma</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
            label={'Confirma'}
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
              labelWidth={70}
          />
      </FormControl>
        <Button
          onClick={onClickSignUp}
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
          margin={'normal'}
        >
            Criar
        </Button>
   </form>
  )
}

export default SignUpForm