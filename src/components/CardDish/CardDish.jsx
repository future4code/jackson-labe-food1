import React, { useState } from 'react';

import {CardContainer,Img,Info,DiscDetail,Price, BtnAdd, BtnDelete, BtnAmount} from './styled'

const CardDish = (props) => {
    const [btnAdd, setBtnAdd] = useState(true)


    return ( 
        props.dadosCategoria.map((pratos)=>{
            return(
                pratos.category === props.categoria && 

        <CardContainer>
            <Img src={pratos.photoUrl} alt=""/>
         
            <Info>
                <DiscDetail>
                    <h2>{pratos.name}</h2>
                    <p>{pratos.description}</p>
                </DiscDetail>
            <Price>${pratos.price}</Price>

                {btnAdd ? 
                    <BtnAdd onClick={()=>setBtnAdd(!btnAdd)}>Adicionar</BtnAdd>:
                    <>
                        <BtnDelete onClick={()=>setBtnAdd(!btnAdd)}>remover</BtnDelete>
                        <BtnAmount>1</BtnAmount>
                    </>
                }

            </Info>
        </CardContainer>
            )
        })


     );
}
 
export default CardDish;