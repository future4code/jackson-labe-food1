import styled from 'styled-components'
import {primaryColor, neutralColor, veryLightPink, alert} from '../../constants/colors'

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 8px 0;
    width: 328px;
    height: 112px;
    border-radius: 8px;
    border: solid 1px ${veryLightPink};
    position: relative;
`

export const Img = styled.img`
  width: 96px;
  height: 112px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 60%;
    height: 75%;
    margin-left: 20px; 
`
export const DiscDetail = styled.div`

    h2{
        font-size: 18px;
        margin: 0;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: ${primaryColor};
    }

    p{
        font-size: 14px;
        margin: 0;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.29px;
        color: ${veryLightPink};
    }
`



export const Price = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: ${neutralColor};
`
export const BtnAmount = styled.button`
    width: 33px;
    padding: 10px;
    border-bottom-left-radius: 8px;
    border: solid 1px ${primaryColor};
    border-top: none;
    border-right: none;
    color:${primaryColor};
    background: none;
    position: absolute;
    top: 0px;
    right:0px;
`;

export const BtnAdd = styled.button`
    width: 90px;
    padding: 10px;
    border-top-left-radius: 8px;
    border: solid 1px ${primaryColor};
    border-bottom: none;
    border-right: none;
    color:${primaryColor};
    background: none;
    position: absolute;
    bottom: 0px;
    right:0px;
`;
export const BtnDelete = styled.button`
    width: 90px;
    padding: 10px;
    border-top-left-radius: 8px;
    border: solid 1px ${alert};
    border-bottom: none;
    border-right: none;
    color:${alert};
    background: none;
    position: absolute;
    bottom: 0px;
    right:0px;
`;