import postIndexForm from './postIndexForm';
import { connect } from 'react-redux';
import { getPosts, getPost, deletePost, clearPosts } from '../../actions/postActions';
import {getBlogs} from '../../actions/blogActions';

const msp = (state) => ({
    posts: Object.values(state.entities.posts),
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),

});

const mdp = dispatch => ({
    getBlogs: user => dispatch(getBlogs(user)),
    getPosts: id => dispatch(getPosts(id)),
    deletePost: post => dispatch(deletePost(post)),
    clearPosts: () => dispatch(clearPosts()),
    

});

export default connect(msp, mdp)(postIndexForm);