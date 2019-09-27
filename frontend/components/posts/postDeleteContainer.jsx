
import PostDeleteForm from './postDeleteForm';
import { connect } from 'react-redux';

import { deletePost } from '../../actions/postActions';
import { closeModal } from '../../actions/modalActions';

const msp = (state) => ({
    posts: Object.values(state.entities.posts)

});

const mdp = dispatch => ({

    deletePost: post => dispatch(deletePost(post)),
    closeModal: () => dispatch(closeModal())

});

export default connect(msp, mdp)(PostDeleteForm);
