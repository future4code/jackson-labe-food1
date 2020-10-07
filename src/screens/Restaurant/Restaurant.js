import React from 'react'
import Header from '../../components/Header/Header'
import DetailsRestaurant from '../../components/DetailsRestaurant/DetailsRestaurant';
import {ContainerRestaurant} from './styled'

const Restaurant = () => {
  
    return (
      <ContainerRestaurant>
          <Header title={"Restaurante"}/>
          <DetailsRestaurant/>
      </ContainerRestaurant>
    )
}
export default Restaurant



