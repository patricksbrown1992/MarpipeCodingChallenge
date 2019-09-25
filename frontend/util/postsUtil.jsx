export const getPosts = (id, data) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `api/blogs/${id}/posts`,
        data
    });
};

export const getPost = (blog, post) => {
    return $.ajax({
        method: 'GET',
        url: `api/blogs/${blog.id}/posts/${post.id}`,
        data: {
            post
        }
    });
};

export const createPost = (id, post) => {

    return $.ajax({
        method: 'POST',
        url: `api/blogs/${id}/posts`,
        data: {
            post
        }
    });
};

export const updatePost = (id, post) => {

    return $.ajax({
        method: 'PATCH',
        url: `api/blogs/${id}/posts/${post.id}`,
        data: {
            post
        }
    });
};


export const deletePost = (post) => {

    return $.ajax({
        method: 'DELETE',
        url: `api/blogs/${post.blog_id}/posts/${post.id}`,

    });
};

