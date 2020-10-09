import styled from 'styled-components'

import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
     align-self:center;
    width: 90%;
    box-sizing: border-box;
`
export const Form = styled.form`
  margin: 20px 0;
`;

export const FormAddre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const H4 = styled.h4`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Campo = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
`

///////////////////////////////////Material ui////////////////////////////////////////////

export const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    
  });
