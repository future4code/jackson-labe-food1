import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToFeed } from '../Routers/Cordinators'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
        goToFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage