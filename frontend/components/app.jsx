import React from "react";
import Splash from '../components/splash/splashForm'
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import LogInForm from './logIn/logInContainer';
import PostIndexForm from './posts/postIndexContainer';
import SignUpForm from './signUp/signUpContainer';
import BlogIndexForm from './blog/blogIndexContainer';
import PostShowForm from './posts/postShowContainer';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal/modal'
import TagIndexContainer from './tags/tagIndexContainer';
import AllPosts from './posts/allPostsContainer';

const App = () => (

    <>  
        <Modal />
        <Switch>
            <ProtectedRoute path='/blogs/:blog_id/posts/:post_id' component={PostShowForm} />
            <ProtectedRoute path='/blogs/:blog_id' component={PostIndexForm} />
            <Authorized exact path='/login' component={LogInForm} />
            <Authorized exact path='/' component={Splash} />
            <Authorized exact path='/signup' component={SignUpForm} />
            <ProtectedRoute path='/entry' component={BlogIndexForm} />
            <ProtectedRoute exact path='/tags' component={TagIndexContainer} />
            <ProtectedRoute exact path='/allposts' component={AllPosts} />
        </Switch>
    </>


)

export default App;