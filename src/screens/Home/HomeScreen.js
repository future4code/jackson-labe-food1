import React from 'react'
import Logo from '../../assets/imgs/logo-future-eats.png'
import { PageContainer ,FullContainer,ScreenContainer} from './styled'


const HomeScreen = () => {
    return (
        <FullContainer>
            <PageContainer>
                <img src={Logo}/>
            </PageContainer>    
        </FullContainer>
    )
}
export default HomeScreen
