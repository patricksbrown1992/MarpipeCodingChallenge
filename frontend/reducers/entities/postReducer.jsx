import { RECEIVE_POST, RECEIVE_POSTS, DELETE_POST, CLEAR_POSTS } from '../../actions/postActions';
import { REMOVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);


    switch (action.type) {
        case RECEIVE_POSTS:
            debugger
            const posts = {};
            action.posts.forEach((post) => {
                posts[post.id] = post;
            });

            return merge({}, state, posts);
        case RECEIVE_POST:

            return merge({}, state, { [action.post.id]: action.post });
        case DELETE_POST:

            const newState = merge({}, state);
            delete newState[action.post.id];
            return newState;
        case REMOVE_USER:
            return {};
        case CLEAR_POSTS:

            return {};
        default:
            return state;
    }
};

export default postsReducer;