import React from 'react'
import {ScreenContainer} from '../../constants/styled'
import Logo from '../../assets/imgs/logo-future-eats.png'
import { LogoContainer ,PageContainer} from './styled'


const HomeScreen = () => {
    return (
        <ScreenContainer>
            <LogoContainer>
                <PageContainer>
                    <img src={Logo}/>
                </PageContainer>    
        </LogoContainer>   
            
        </ScreenContainer>
    )
}
export default HomeScreen
