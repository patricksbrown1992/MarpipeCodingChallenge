import React from "react";
import Splash from '../components/splash/splashForm'
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import LogInForm from './logIn/logInContainer';
import PostIndexForm from './posts/postIndexContainer';
import SignUpForm from './signUp/signUpContainer';
import EntryForm from './entry/entryContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => (

    <>
        <Switch>
            <ProtectedRoute path='/blogs/:blog_id' component={PostIndexForm} />
            <Authorized exact path='/login' component={LogInForm} />
            <Authorized exact path='/' component={Splash} />
            <Authorized exact path='/signup' component={SignUpForm} />
            <ProtectedRoute path='/entry' component={EntryForm} />
        </Switch>
    </>


)

export default App;