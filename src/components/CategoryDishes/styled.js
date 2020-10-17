import styled from 'styled-components';
import { neutralColor } from '../../constants/colors'

export const Sections = styled.section`
  width: 100%;
  margin:0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleSection = styled.h2`
  width: 327px;
  margin: 0 0 5px 0 ;
  padding: 5px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  border-bottom: 2px solid ${neutralColor};
  color: ${neutralColor};
`;

export const Dish = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;