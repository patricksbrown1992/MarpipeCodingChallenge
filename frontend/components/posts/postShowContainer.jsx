import postShowForm from './postShowForm';
import { connect } from 'react-redux';
import { getPosts, getPost, deletePost, clearPosts, updatePost } from '../../actions/postActions';
import { getBlogs, clearBlogs } from '../../actions/blogActions';
import { logout } from '../../actions/sessionActions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    
    const post = state.entities.posts[ownProps.match.params.post_id];
    debugger
    return {
        posts: Object.values(state.entities.posts),
        user: state.entities.user[state.session.id],
        blogs: Object.values(state.entities.blogs),
        post: post
    }

};

const mdp = dispatch => ({
    getBlogs: user => dispatch(getBlogs(user)),
    getPosts: id => dispatch(getPosts(id)),
    deletePost: post => dispatch(deletePost(post)),
    clearPosts: () => dispatch(clearPosts()),
    logout: () => dispatch(logout()),
    updatePost: (id, post) => dispatch(updatePost(id, post)),
    clearBlogs: () => dispatch(clearBlogs())



});

export default withRouter(connect(msp, mdp)(postShowForm));