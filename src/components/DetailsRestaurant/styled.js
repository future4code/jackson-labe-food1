import styled from 'styled-components';
import {primaryColor, neutralColor, veryLightPink, alert} from '../../constants/colors'


export const Details = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${primaryColor};
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: space-between;

    p{
        margin: 5px 0;
        color: ${veryLightPink}
    }
`;

export const Values = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;