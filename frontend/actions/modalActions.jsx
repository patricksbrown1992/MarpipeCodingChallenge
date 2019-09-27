export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {

    return {
        type: OPEN_MODAL,
        modal
    };
};

export const openCreatePostModal = entity => {

    return {
        type: OPEN_MODAL,
        entity,
        modal: 'createPost'
    }
}

export const openCreateBlogModal = entity => {

    return {
        type: OPEN_MODAL,
        entity,
        modal: 'createBlog'
    }
}

export const openDeleteBlogModal = entity => {

    return {
        type: OPEN_MODAL,
        entity,
        modal: 'deleteBlog'
    }
}

export const openUpdateBlogModal = entity => {

    return {
        type: OPEN_MODAL,
        entity,
        modal: 'updateBlog'
    }
}


export const closeModal = () => ({
    type: CLOSE_MODAL
});