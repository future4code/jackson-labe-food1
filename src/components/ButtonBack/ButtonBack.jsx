import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

import {ContainerButton} from './styled'
import { goToBack } from '../../Routers/Cordinators';
import { useHistory } from 'react-router-dom';

const ButtonBack = (props) => {
    const history = useHistory()

    return ( 
        <ContainerButton onClick={()=>goToBack(history)}>
            <IconButton aria-label="Voltar">
                <ArrowBackIosRoundedIcon size="small"/>
            </IconButton>
        </ContainerButton>
    );
}
 
export default ButtonBack;