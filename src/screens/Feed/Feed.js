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
    const [textSearch, setTextSearch] = useState('')
    const [valueCategory, setValueCategory] = useState("Todos");
   
    
    useEffect(()=>{
        getRestaurants(setListRestaurants)
    },[])

    const changeSearch = (event) =>{
        setTextSearch(event.target.value)
    }

    const searchRestaurant = () =>{
        console.log('buscando')
        if(textSearch !== ''){
           const filter = listRestaurants.filter((item)=>{
               return item.name.toLowerCase() === textSearch.toLowerCase()
           })
           setListRestaurants(filter)
        }else{
            getRestaurants(setListRestaurants)
        }
    }

    const handleCategory = (event) => {
        setValueCategory(event.target.innerHTML);
    };

    return (
        <FeedContainer>
             {listRestaurants.length > 0 ? getRestaurants() : <Loading/>}
            <HeaderFixed>
                <Header title={"Restaurantes"} btnBack={false} />
                <Search 
                    value={textSearch}
                    change={changeSearch}
                    submit={searchRestaurant}
                />
                <CategoryFilter value={valueCategory} change={handleCategory}/>
            </HeaderFixed>

           <CardsContainer>
               {listRestaurants.map((restaurant)=>{
                   if(valueCategory !=='Todos'){
                        return valueCategory === restaurant.category && 
                        <CardRestaurant data={restaurant} onClick={() => goToRestautante(history ,restaurant.id )}/>
                   }else{
                        return <CardRestaurant data={restaurant} onClick={() => goToRestautante(history ,restaurant.id )}/>
                   }
               })}

           </CardsContainer>
         <Footer/>  
        </FeedContainer>
    )
}
export default Feed;