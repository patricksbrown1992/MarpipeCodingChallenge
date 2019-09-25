import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import blogsReducer from './blogsReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    blogs: blogsReducer

});
export default entitiesReducer;