import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { InconContainer } from './style';
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'
import { goToAddress, goToCarrinho, goToFeed } from '../../Routers/Cordinators';
import { useHistory } from 'react-router-dom';



const Footer = () => {
    const history = useHistory()

    return (
    <ThemeProvider theme={theme}>
        <InconContainer >
            <HomeOutlinedIcon 
                color={'primary'}  
                onClick={() =>goToFeed(history)}
            />
            <AddShoppingCartIcon 
                color={'primary'}
                onClick={() =>goToCarrinho(history)}
            />
            <PermIdentityIcon 
                color={'primary'}
                onClick={() =>goToAddress(history)}
            />
        </InconContainer>
    </ThemeProvider>
    )
}
export default Footer