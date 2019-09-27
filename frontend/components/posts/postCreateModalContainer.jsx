import { closeModal, openCreatePostModal, openModal} from "../../actions/modalActions";
import { connect } from 'react-redux';
import {createPost} from '../../actions/postActions';
import PostCreateModalForm from './postCreateModalForm';
import { withRouter } from 'react-router-dom';

const msp = state => ({
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),
    posts: Object.values(state.entities.posts),

});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    createPost: (id, post) => dispatch(createPost(id, post)),
});

export default withRouter(connect(msp, mdp)(PostCreateModalForm));