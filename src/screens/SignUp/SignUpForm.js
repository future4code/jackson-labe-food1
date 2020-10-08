import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer} from './styled'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { FilledInput, FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signUp } from '../../services/user'


const SignUpForm = (props) => {
  const history = useHistory()
  const [form, handleInputChange] = useForm({name: '', email: '', password: '', cpf:''})
  const [isLoading, setIsLoading] = useState(false)
  // const [values, setValues] = useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });
  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // }; 
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };    
  const onClickSignUp = (event) => {
    console.log(form)
    event.preventDefault()
    const element = document.getElementById('signup_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid) {
      signUp(form, history, props.setButtonName, setIsLoading)
    }
  }

return (
  <form id={'signup_form'}>

         <SignUpFormContainer>
           <InputsContainer>
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
          <FormControl variant="outlined" fullWidth required>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Senha</InputLabel>
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
          /> */}
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

        </FormControl>
          </InputsContainer>
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
        </SignUpFormContainer>
   </form>
  )
}

export default SignUpForm