import React from 'react'
import { FeedContainer } from './styled'
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';

const Feed = () => {
    return (
        <FeedContainer>
           <Header title={'FutureEats'}/>
           <Search/>
           <CategoryFilter/>
        </FeedContainer>
    )
}
export default Feed