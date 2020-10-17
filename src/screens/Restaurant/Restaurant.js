import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import DetailsRestaurant from '../../components/DetailsRestaurant/DetailsRestaurant';
import {ContainerRestaurant} from './styled'
import CategoryDishes from '../../components/CategoryDishes/CategoryDishes';
import { useParams } from 'react-router-dom';
import {getRestaurantDetail} from '../../services/user'

const Restaurant = (props) => {
  const [restaurant , setRestaurants] = useState([])
  const [produts , setProduts] = useState([])
  const param = useParams()
  useEffect(() =>{
    getRestaurantDetail(setRestaurants ,setProduts, param.id)
  },[])
  
    return (
      <ContainerRestaurant >
          <Header title={"Restaurante"} btnBack={true}/>
          <DetailsRestaurant dados={restaurant}/>
              <CategoryDishes dados={produts}/>
      </ContainerRestaurant>
    )
}
export default Restaurant



