import React, { useState } from 'react';
import { HeaderContainer } from '../../constants/styled';
import TitleHeader from '../TitleHeader/TitleHeader';

import ButtonBack from '../ButtonBack/ButtonBack';

const Header = (props) => {
    const [visibility, setVisibility] = useState(props.btnBack)
    return ( 
        <HeaderContainer>
            { visibility &&  <ButtonBack/> }
            <TitleHeader title={props.title}/>
        </HeaderContainer>
    );
}
 
export default Header;