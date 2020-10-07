import React from 'react'
import {ScreenContainer} from '../../constants/styled'
import Logo from '../../assets/imgs/logo-future-eats.png'
import { PageContainer ,FullContainer} from './styled'


const HomeScreen = () => {
    return (
        <FullContainer>
            <ScreenContainer>
                <PageContainer>
                    <img src={Logo}/>
                </PageContainer>    
            </ScreenContainer>   
        </FullContainer>
    )
}
export default HomeScreen
