import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { InconContainer } from './style';


const Footer = () => {
    return (
        <InconContainer>
            <HomeOutlinedIcon/>
            <AddShoppingCartIcon/>
            <PermIdentityIcon/>
        </InconContainer>
    )
}
export default Footer