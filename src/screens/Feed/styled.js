import styled from 'styled-components'

export const FeedContainer = styled.div`
  width: 100%;
  margin:0;
  position: relative;
  box-sizing: border-box;
`
export const HeaderFixed = styled.div`
  position: fixed !important;
  top: 0;
  width: 100%;
  height:64px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:3;
`

export const CardsContainer= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
`;


