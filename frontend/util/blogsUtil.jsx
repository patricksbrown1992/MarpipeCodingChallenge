export const getBlogs = (user) => {
    return $.ajax({
        method: 'GET',
        url: '/api/blogs',
        data: {
            user_id: user.id,
        }
    });
};

export const getBlog = id => {

    return $.ajax({
        method: 'GET',
        url: `api/blogs/${id}`,

    });
};

export const createBlog = blog => {

    return $.ajax({
        method: 'POST',
        url: `api/blogs`,
        data: {
            blog
        }
    });
};

export const updateBlog = blog => {
    return $.ajax({
        method: 'PATCH',
        url: `api/blogs/${blog.id}`,
        data: {
            blog
        }
    });
};

export const deleteBlog = blog => {

    return $.ajax({
        method: 'DELETE',
        url: `api/blogs/${blog.id}`,
        data: {
            blog
        }

    });
};

