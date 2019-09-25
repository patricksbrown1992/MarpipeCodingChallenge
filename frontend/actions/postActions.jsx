import * as APIUtil from '../util/postsUtil';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});
export const clearPosts = () => {

    return {

        type: CLEAR_POSTS
    };
};

const receivePost = post => {

    return {

        type: RECEIVE_POST,
        post
    };
};

const destroyPost = (post) => ({
    type: DELETE_POST,
    post
});

export const getPosts = (id) => dispatch => (
    APIUtil.getPosts(id).then(posts => dispatch(receivePosts(posts)))
);

export const getPost = (blog, post) => dispatch => (
    APIUtil.getPost(blog, post).then(post => dispatch(receivePost(post)))
);

export const createPost = ({ id, post }) => dispatch => {

    return APIUtil.createPost(id, post).then(post => dispatch(receivePost(post)));
};

export const updatePost= ({ id, post }) => dispatch => (
    APIUtil.updatePost(id, post).then(post => dispatch(receivePost(post)))
);

export const deletePost = (post) => dispatch => (
    APIUtil.deletePost(post).then((post) => dispatch(destroyPost(post)))
);

