import BlogDeleteForm from './blogDeleteForm';
import { connect } from 'react-redux';
import { deleteBlog } from '../../actions/blogActions';
import { closeModal } from "../../actions/modalActions";
import { withRouter } from 'react-router-dom';
import {deletePost} from '../../actions/postActions';

const msp = state => {
    
    return {
        user: state.entities.user,
        blogs: Object.values(state.entities.blogs),
        posts: Object.values(state.entities.posts),
    }
};

const mdp = dispatch => ({
    deletePost: post => dispatch(deletePost(post)),
    closeModal: () => dispatch(closeModal()),
    deleteBlog: blog => dispatch(deleteBlog(blog)),
});

export default withRouter(connect(msp, mdp)(BlogDeleteForm));