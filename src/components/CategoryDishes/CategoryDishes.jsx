import React from 'react'
import {Sections,TitleSection,Dish} from './styled'
import CardDish from '../CardDish/CardDish';

 const CategoryDishes = (props) => {
//pega o nome de todas as categorias
const arrayCategorias = props.dados.map((item) => {
    return item.category;
  });
  //remove as categorias repetidas
  const listaCategoria = arrayCategorias.filter((item, index) => {
    return arrayCategorias.indexOf(item) === index;
  });
  
    return (
        listaCategoria.map((categoria)=>{
            return(
                
          <Sections>
              <TitleSection>{categoria}</TitleSection>
              <Dish>
                  <CardDish categoria={categoria} dadosCategoria={props.dados}/>
              </Dish>
          </Sections>
            )
        })
    )
}
export default CategoryDishes



