import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoadingContainer } from './styled'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'


const Loading = () => {
  return (
    <LoadingContainer>
      <ThemeProvider theme={theme}>
        <CircularProgress/>
      </ThemeProvider>
    </LoadingContainer>
  )
}

export default Loading
