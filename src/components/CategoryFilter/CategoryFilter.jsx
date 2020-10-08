import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {CategoryContainer} from  './styled'
import { ThemeProvider } from '@material-ui/core'
import theme from '../../constants/theme'


const CategoryFilter = (props) => {
    return (
        <CategoryContainer>
            <ThemeProvider theme={theme}>
                <Tabs
                    value={"selecionado"}
                    color={'primary'}
                    onChange={()=> null}
                    indicatorColor={'primary'}
                    textColor={'primary'}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Pizza" />
                    <Tab label="Hamburger" />
                    <Tab label="Sorvete"/>
                    <Tab label="Refeição"/>
                    <Tab label="Oriental"/>
                    <Tab label="Salgados"/>
                    <Tab label="Doces"/>
                </Tabs>
            </ThemeProvider>
        </CategoryContainer>
    );
}
 
export default CategoryFilter;