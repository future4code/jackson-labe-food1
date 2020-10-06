import React from 'react';
import { HeaderContainer } from '../../constants/styled';
import TitleHeader from '../TitleHeader/TitleHeader';

const Header = (props) => {
    return ( 
        <HeaderContainer>
            <TitleHeader title={props.title}/>
        </HeaderContainer>
    );
}
 
export default Header;