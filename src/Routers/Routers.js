import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Feed from '../screens/Feed/Feed';
import HomeScreen from '../screens/Home/HomeScreen';
import Login from '../screens/Login/Login';
import AdressForm from '../screens/Profile/AddressForm/AddressForm';
import Profile from '../screens/Profile/Profile';
import OrderInProgress from '../screens/Restaurant/OrderInProgress';
import Restaurant from '../screens/Restaurant/Restaurant';
import SignUp from '../screens/SignUp/SignUp';


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
                    <Route exact path={"/{{appName}}/address"} >
                        <AdressForm/>
                    </Route>
                    <Route exact path={"/feed"}>
                        <Feed/>
                    </Route>
                    <Route exact path={"/{{appName}}/active-order"}>
                        <OrderInProgress/>
                    </Route>
                    <Route exact path={"/{{appName}}/restaurants/100"}>
                        <Restaurant/>
                    </Route>
                    <Route exact path={"/{{appName}}/profile"}>
                        <Profile/>
                    </Route>
                </Switch>
            </BrowserRouter>
    )
}
export default Router;