import React from 'react'
import Header from '../../components/Header/Header'
import DetailsRestaurant from '../../components/DetailsRestaurant/DetailsRestaurant';
import {ContainerRestaurant} from './styled'
import CategoryDishes from '../../components/CategoryDishes/CategoryDishes';

const Restaurant = () => {
  
    return (
      <ContainerRestaurant>
          <Header title={"Restaurante"} btnBack={true}/>
          <DetailsRestaurant/>
          <CategoryDishes title={"Principais"}/>
          <CategoryDishes title={"Acompanhamento"}/>
      </ContainerRestaurant>
    )
}
export default Restaurant



