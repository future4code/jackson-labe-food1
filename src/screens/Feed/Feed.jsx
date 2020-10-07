import React from 'react'
import { CardsContainer, FeedContainer, HeaderFixed } from './styled'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant';

const Feed = () => {
    return (
        <FeedContainer>
            <HeaderFixed>
                <Header title={'FutureEats'}/>
                <Search/>
                <CategoryFilter/>
            </HeaderFixed>

           <CardsContainer>
                <CardRestaurant/>
                <CardRestaurant/>
                <CardRestaurant/>
                <CardRestaurant/>
                <CardRestaurant/>
                <CardRestaurant/>
                <CardRestaurant/>
           </CardsContainer>
           
        </FeedContainer>
    )
}
export default Feed;