import React, { useState } from 'react';

import {CardContainer,Img,Info,DiscDetail,Price, BtnAdd, BtnDelete, BtnAmount} from './styled'

const CardDish = () => {
    const [btnAdd, setBtnAdd] = useState(true)

    return ( 
        <CardContainer>
            <Img src="https://picsum.photos/96/112" alt=""/>
         
            <Info>
                <DiscDetail>
                    <h2>Cuscus com leite</h2>
                    <p>cuscus, leite e manteiga</p>
                </DiscDetail>
                <Price>$23.99</Price>

                {btnAdd ? 
                    <BtnAdd onClick={()=>setBtnAdd(!btnAdd)}>Adicionar</BtnAdd>:
                    <>
                        <BtnDelete onClick={()=>setBtnAdd(!btnAdd)}>remover</BtnDelete>
                        <BtnAmount>1</BtnAmount>
                    </>
                }

            </Info>
        </CardContainer>
     );
}
 
export default CardDish;