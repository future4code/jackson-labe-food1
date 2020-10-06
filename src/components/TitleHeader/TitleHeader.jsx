import React from 'react'
import { Title } from './styled'
import Typography from '@material-ui/core/Typography';

const TitleHeader = () => {
    return (
        <Title>
            <Typography variant={'subtitle1'}>FutureEats</Typography>
        </Title>
    )
}
export default TitleHeader