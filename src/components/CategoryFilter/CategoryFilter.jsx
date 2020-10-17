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
                    value={props.value}
                    onChange={props.change}
                    color={'primary'}
                    indicatorColor={'primary'}
                    textColor={'primary'}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Todos" index={0} />
                    <Tab label="Árabe" index={1} />
                    <Tab label="Asiática" index={2}/>
                    <Tab label="Hamburguer" index={3}/>
                    <Tab label="Italiana" index={4}/>
                    <Tab label="Sorvetes" index={5}/>
                    <Tab label="Carnes" index={6}/>
                    <Tab label="Baiana" index={7}/>
                    <Tab label="Petiscos" index={8}/>
                    <Tab label="Mexicana" index={9}/>
                </Tabs>
            </ThemeProvider>
        </CategoryContainer>
    );
}
 
export default CategoryFilter;