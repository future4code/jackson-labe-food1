import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {CategoryContainer} from  './styled'

const CategoryFilter = (props) => {
    return (
        <CategoryContainer>
            <Tabs
                value={"test"}
                onChange={()=> null}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
            <Tab label="Item One"  />
            <Tab label="Item Two"  />
            <Tab label="Item Three"  />
            <Tab label="Item Four"  />
            <Tab label="Item Five"  />
            <Tab label="Item Six"  />
            <Tab label="Item Seven"  />
        </Tabs>
      {/* </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
            
        </CategoryContainer>
    );
}
 
export default CategoryFilter;