import React from 'react'
import { FeedContent,Header } from './styled'
import TitleHeader from '../../components/TitleHeader/TitleHeader';

const Feed = () => {
    return (
        <FeedContent>
           <Header>
               <TitleHeader/>
           </Header>
        </FeedContent>
    )
}
export default Feed