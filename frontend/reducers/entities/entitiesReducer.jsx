import usersReducer from './usersReducer';
import { combineReducers } from 'redux';
import blogsReducer from './blogsReducer';
import postsReducer from './postReducer';
import tagsReducer from './tagsReducer';
import taggingsReducer from './taggingsReducer';

const entitiesReducer = combineReducers({
    user: usersReducer,
    blogs: blogsReducer,
    posts: postsReducer,
    tags: tagsReducer,
    taggingsReducer: taggingsReducer

});
export default entitiesReducer;