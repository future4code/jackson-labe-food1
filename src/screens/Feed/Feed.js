import React, { useEffect, useState } from 'react'
import { CardsContainer, FeedContainer, HeaderFixed } from './styled'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import CardRestaurant from '../../components/CardRestaurant/CardRestaurant'
import Footer from '../../components/Footer/Footer';
import { getRestaurants } from '../../services/user';
import useProtectedPage from '../../hooks/useProtectedPage'
import Loading from '../../components/Loading/Loading';
import { useHistory } from 'react-router-dom';
import { goToRestautante } from '../../Routers/Cordinators'

const Feed = () => {
    const history = useHistory()
    useProtectedPage()
    const [listRestaurants, setListRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
   
    
    useEffect(()=>{
        getRestaurants(setListRestaurants)
    },[])

    return (
        <FeedContainer>
             {listRestaurants.length > 0 ? getRestaurants() : <Loading/>}
            <HeaderFixed>
                <Header title={"Restaurantes"} btnBack={false} />
                <Search/>
                <CategoryFilter/>
            </HeaderFixed>

           <CardsContainer>
               {listRestaurants.map((restaurant)=>{
                   return <CardRestaurant data={restaurant} onClick={() => goToRestautante(history, restaurant.id)}/>
               })}

           </CardsContainer>
         <Footer/>  
        </FeedContainer>
    )
}
export default Feed;