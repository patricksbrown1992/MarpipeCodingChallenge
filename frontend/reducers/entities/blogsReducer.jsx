import { RECEIVE_BLOGS, RECEIVE_BLOG, DESTROY_BLOG, CLEAR_BLOGS } from '../../actions/blogActions';
import { REMOVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';

const blogsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BLOGS:
            const blogs = {};
            debugger
            action.blogs.forEach((blog) => {
                blogs[blog.id] = blog;
            });

            return merge({}, state, blogs);
        case RECEIVE_BLOG:

            return merge({}, state, { [action.blog.id]: action.blog });
        case CLEAR_BLOGS:
            return {};
        case DESTROY_BLOG:

            const newState = merge({}, state);
            delete newState[action.blog.id];
            return newState;
        case REMOVE_USER:
            return {};
        default:
            return state;

    }
};
export default blogsReducer;