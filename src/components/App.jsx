import React, { Component } from 'react';
import Navbar from "./Navbar"
import Login from "./Login"
import SignUp from "./SignUp"
import Home from "./Home"
import {Route, Switch, Redirect} from "react-router-dom";

const App = () => {
    return ( 
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route />
        </Switch>
        </>
     );
}
 
export default App;