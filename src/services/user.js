import axios from 'axios'
import { goToFeed } from '../Routers/Cordinators'

export const login = (body, history,setIsLoading) => {
  setIsLoading(true)
  axios.post(
    'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', body
  )
    .then((response) => {
      console.log(response)
    //   localStorage.setItem('token', response.data.token)
    //   setIsLoading(false)
    //   goToFeed(history)
    //   setButtonName('Logout')
    })
    .catch((err) => {
        console.error(err);
    //   setIsLoading(false)
    //   alert("Falha no Login, tente novamente")
    })
}

export const signUp = (body, history, setButtonName, setIsLoading) => {
  setIsLoading(true)
  axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup', body)
    .then((response)=>{
      console.log(response)
    //   localStorage.setItem('token', response.data.token)
    //   setIsLoading(false)
    //   goToRecipesFeed(history)
    //   setButtonName('Logout')
    })
    .catch((error) => {
      console.log(error)
    //   setIsLoading(false)
    //   alert("Falha no Cadastro, tente novamente")
    })
}