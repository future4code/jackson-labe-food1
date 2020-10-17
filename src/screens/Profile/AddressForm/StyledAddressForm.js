import styled from 'styled-components'

import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

export const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ScreenContainer = styled.div`
    height: 640px;
    width: 360px;
    display: flex;
    box-shadow: 0 0.5px 0 0 #d8d8d8;
    border: 1px solid black;
    display: flex;
    justify-content:center;
`


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
