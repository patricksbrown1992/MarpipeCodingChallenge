import { connect } from 'react-redux';
import BlogEditForm from './blogUpdateForm';
import { updateBlog } from '../../actions/blogActions';
import { closeModal } from "../../actions/modalActions";

const msp = state => ({
    user: state.entities.user[state.session.id],
});

const mdp = dispatch => ({
    updateBlog: (blog) => (dispatch(updateBlog(blog))),
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(BlogEditForm);