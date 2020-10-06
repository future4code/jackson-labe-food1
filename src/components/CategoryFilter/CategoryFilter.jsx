import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {CategoryContainer} from  './styled'

const CategoryFilter = (props) => {
    return (
        <CategoryContainer>
            <Tabs
                value={"selecionado"}
                onChange={()=> null}
                indicatorColor="primary"
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
              <Tab label="Pizza"  />
              <Tab label="Hamburger" />
              <Tab label="Sorvete"/>
              <Tab label="Refeição"/>
              <Tab label="Oriental"/>
              <Tab label="Salgados"/>
              <Tab label="Doces"/>
        </Tabs>
        </CategoryContainer>
    );
}
 
export default CategoryFilter;