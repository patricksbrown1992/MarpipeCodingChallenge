import { connect } from 'react-redux';
import BlogCreateForm from './blogCreateForm';
import { createBlog } from '../../actions/blogActions';
import { closeModal } from "../../actions/modalActions";
const msp = state => ({
    user: state.entities.user[state.session.id],
});

const mdp = dispatch => ({
    createBlog: (blog) => (dispatch(createBlog(blog))),
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(BlogCreateForm);
