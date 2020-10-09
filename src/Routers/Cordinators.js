export function goToBack(history){
    history.goBack()
  }
export function goToInicial(history){
    history.push("/")
  }

export function goToLogin(history){
    history.push("/login")
  }

  export function goToFeed(history){
    history.push("/feed")
  }

export function goToSignUp(history){
    history.push("/signup")
  }

export function goToAddress(history){
    history.push(`/futureEatsA/address`)
  }

export function goToPerfil(history){
      history.push(`/futureEatsA/profile`)
  }
export function goToRestautante(history , id){
    history.push(`/futureEatsA/restaurants/${id}`)
}
export function goToCarrinho(history){
    history.push("/futureEatsA/active-order")
}
  
  