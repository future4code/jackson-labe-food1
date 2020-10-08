import React, { useEffect, useState } from 'react'
import { CardsContainer, FeedContainer, HeaderFixed } from './styled'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant'
import Footer from '../../components/Footer/Footer';
import { getRestaurants } from '../../services/user';

const Feed = () => {
    const [listRestaurants, setListRestaurants] = useState([])

    useEffect(()=>{
        getRestaurants(setListRestaurants)
    },[])

    return (
        <FeedContainer>
            <HeaderFixed>
                <Header title={'FutureEats'}/>
                <Search/>
                <CategoryFilter/>
            </HeaderFixed>

           <CardsContainer>
               {listRestaurants.map((restaurant)=>{
                   return <CardRestaurant data={restaurant}/>
               })}
           </CardsContainer>
         <Footer/>  
        </FeedContainer>
    )
}
export default Feed;