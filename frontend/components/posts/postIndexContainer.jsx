import postIndexForm from './postIndexForm';
import { connect } from 'react-redux';
import { getPosts, getPost, deletePost, clearPosts } from '../../actions/postActions';
import {getBlogs, clearBlogs, getBlog} from '../../actions/blogActions';
import {logout} from '../../actions/sessionActions';
import { withRouter } from 'react-router-dom';
import { openCreatePostModal, openDeleteBlogModal} from '../../actions/modalActions';

const msp = (state, ownProps) => {
    const blog = state.entities.blogs[ownProps.match.params.blog_id];
    return {
        posts: Object.values(state.entities.posts),
        user: state.entities.user[state.session.id],
        blogs: Object.values(state.entities.blogs),
        blog: blog

    }

};

const mdp = dispatch => ({
    getBlogs: user => dispatch(getBlogs(user)),
    getPosts: id => dispatch(getPosts(id)),
    deletePost: post => dispatch(deletePost(post)),
    clearPosts: () => dispatch(clearPosts()),
    logout: () => dispatch(logout()), 
    openCreatePostModal: id => dispatch(openCreatePostModal(id)),
    clearBlogs: () => dispatch(clearBlogs()),
    getBlog: id => dispatch(getBlog(id)),
    openDeleteBlogModal: entity => dispatch(openDeleteBlogModal(entity))
    

});

export default withRouter(connect(msp, mdp)(postIndexForm));