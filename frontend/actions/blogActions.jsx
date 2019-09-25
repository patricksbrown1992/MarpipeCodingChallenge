import * as APIUtil from '../util/blogsUtil';

export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const RECEIVE_BLOGS = "RECEIVE_BLOGS";
export const DESTROY_BLOG = 'DESTROY_BLOG';
export const CLEAR_BLOGS = 'CLEAR_BLOGS';



const receiveBlog = blog => {
    return ({
        type: RECEIVE_BLOG,
        blog
    });
};

const destroyBlog = (blog) => {

    return ({
        type: DESTROY_BLOG,
        blog
    });
};

const receiveBlogs = blogs => {

    return ({

        type: RECEIVE_BLOGS,
        blogs
    });
};

export const clearBlogs = () => {
    return {
        type: CLEAR_BLOGS
    }
}

export const getBlogs = (user) => dispatch => (
    APIUtil.getBlogs(user).then(blogs => (dispatch(receiveBlogs(blogs))))
);

export const getBlog = (id) => dispatch => (
    APIUtil.getBlog(id).then(blog => (dispatch(receiveBlog(blog))))
);

export const createBlog = (blog) => dispatch => {

    return APIUtil.createBlog(blog).then(blog => dispatch(receiveBlog(blog)));

};

export const updateBlog= (blog) => dispatch => (
    APIUtil.updateBlog(blog).then(blog => (dispatch(receiveBlog(blog))))
);

export const deleteBlog = (blog) => dispatch => {

    return APIUtil.deleteBlog(blog).then(blog => (dispatch(destroyBlog(blog))));
};


