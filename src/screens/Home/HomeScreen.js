import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Logo from '../../assets/imgs/logo-future-eats.png'
import { goToLogin } from '../../Routers/Cordinators'
import { PageContainer ,FullContainer,ScreenContainer} from './styled'


const HomeScreen = () => {
    const history = useHistory()
    
    useEffect(()=>{
        setTimeout(() => {
            goToLogin(history)
          }, 1500);
    },[])

    return (
        <FullContainer>
            <PageContainer>
                <img src={Logo}/>
            </PageContainer>    
        </FullContainer>
    )
}
export default HomeScreen
