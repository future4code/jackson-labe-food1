import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Feed from '../screens/Feed/Feed';

import HomeScreen from '../screens/Home/HomeScreen';
import Login from '../screens/Login/Login';
import AdressForm from '../screens/Profile/AddressForm/AddressForm';
import Profile from '../screens/Profile/Profile';
import Cart from '../screens/Cart/Cart';
import Restaurant from '../screens/Restaurant/Restaurant';
import SignUp from '../screens/SignUp/SignUp';
import Feed from '../screens/Feed/Feed'


const Router = () => {

    return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <HomeScreen/>
                    </Route>
                    <Route exact path={"/login"}>
                        <Login/>
                    </Route>
                    <Route exact path={"/signup"} >
                        <SignUp/>
                    </Route>
                    <Route exact path={"/futureEatsA/address"} >
                        <AdressForm/>
                    </Route>
                    <Route exact path={"/feed"}>
                        {/* <Feed/> */}
                        <Feed/>
                    </Route>
                    <Route exact path={"/futureEatsA/carrinho"}>
                        <Cart/>
                    </Route>
                    <Route exact path={"/futureEatsA/restaurants/:id"}>
                        <Restaurant/>
                    </Route>
                    <Route exact path={"/futureEatsA/profile"}>
                        <Profile/>
                    </Route>
                </Switch>
            </BrowserRouter>
    )
}
export default Router;