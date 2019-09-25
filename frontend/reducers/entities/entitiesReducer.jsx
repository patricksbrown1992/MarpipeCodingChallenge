import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import blogsReducer from './blogsReducer';
import postsReducer from './postReducer'

const entitiesReducer = combineReducers({
    user: usersReducer,
    blogs: blogsReducer,
    posts: postsReducer

});
export default entitiesReducer;