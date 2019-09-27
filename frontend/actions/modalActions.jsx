export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {

    return {
        type: OPEN_MODAL,
        modal
    };
};

export const openCreatePostModal = entity => {
    debugger
    return {
        type: OPEN_MODAL,
        entity,
        modal: 'createPost'
    }
}

export const closeModal = () => ({
    type: CLOSE_MODAL
});