import React from 'react'
import { Title } from './styled'
import Typography from '@material-ui/core/Typography';

const TitleHeader = (props) => {
    return (
        <Title>
            <Typography variant={'subtitle1'}>{props.title}</Typography>
        </Title>
    )
}
export default TitleHeader