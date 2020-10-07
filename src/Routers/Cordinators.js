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
    history.push(`/{{appName}}/address`)
  }

export function goToPerfil(history){
      history.push(`/{{appName}}/profile`)
  }
export function goToRestautante(history){
    history.push(`/{{appName}}/restaurants/100`)
}
export function goToCarrinho(history){
    history.push("/{{appName}}/active-order")
}
  
  