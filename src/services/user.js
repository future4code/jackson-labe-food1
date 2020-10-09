import axios from 'axios'
import { goToFeed } from '../Routers/Cordinators'

export const login = (body, history,setIsLoading) => {
  setIsLoading(true)
  axios.post(
    'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', body
  )
    .then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.token)
      setIsLoading(false)
      goToFeed(history)
      
    })
    .catch((err) => {
      console.error(err);
      setIsLoading(false)
      alert("Falha no Login, tente novamente")
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

export const getRestaurants = (setListRestaurants) => {
  const header = {headers: {auth: localStorage.getItem("token")}}

  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, header)
  .then((response)=>{
    setListRestaurants(response.data.restaurants)
  })
  .catch((erro)=>{
    console.log("erro ao buscar lista de restaurantes")
  })

}

export const getRestaurantDetail = (setRestaurants ,setProduts, id) => {
  const header = {headers: {auth: localStorage.getItem("token")}}

  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${id}`, header)
  .then((response)=>{
    setRestaurants(response.data.restaurant)
    setProduts(response.data.restaurant.products)
    //console.log(response.data.restaurant)
    //console.log(response.data.restaurant.products)

  })
  .catch((erro)=>{
    console.log("Restaurante não encontrado")
  })

}


export const getFullAdress = (setForm) => {
  const header = {headers: {auth: localStorage.getItem("token")}}

  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address`, header)
  .then((response)=>{
    setForm(response.data.address)
  })
  .catch((erro)=>{
    console.log("erro ao buscar dados de endereço")
  })

}
