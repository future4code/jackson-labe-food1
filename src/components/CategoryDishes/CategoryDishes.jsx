import React from 'react'
import {Sections,TitleSection,Dish} from './styled'
import CardDish from '../CardDish/CardDish';

const CategoryDishes = (props) => {
  
    return (
          <Sections>
              <TitleSection>{props.title}</TitleSection>
              <Dish>
                  <CardDish/>
                  <CardDish/>
              </Dish>
          </Sections>
    )
}
export default CategoryDishes



