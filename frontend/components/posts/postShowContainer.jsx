import postIndexForm from './postIndexForm';
import { connect } from 'react-redux';
import { getPosts, getPost, deletePost, clearPosts, updatePost } from '../../actions/postActions';
import { getBlogs } from '../../actions/blogActions';
import { logout } from '../../actions/sessionActions';

const msp = (state) => {

    const post = state.entities.posts[ownProps.match.params.post_id];
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



});

export default connect(msp, mdp)(postIndexForm);