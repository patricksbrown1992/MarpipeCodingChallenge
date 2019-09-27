import { connect } from 'react-redux';
import { logout, clearErrors} from '../../actions/sessionActions';
import BlogIndexForm from './blogIndexForm';
import { getBlogs, clearBlogs} from '../../actions/blogActions'
import { withRouter } from 'react-router-dom';
import { openCreateBlogModal} from '../../actions/modalActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),
    errors: state.errors
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    getBlogs: user => dispatch(getBlogs(user)),
    openCreateBlogModal: entity => dispatch(openCreateBlogModal(entity)),
    clearBlogs: () => dispatch(clearBlogs()),
    
    
});

export default withRouter(connect(msp, mdp)(BlogIndexForm));