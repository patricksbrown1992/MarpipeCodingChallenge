import { connect } from 'react-redux';
import { logout, clearErrors} from '../../actions/sessionActions';
import EntryForm from './entryForm';
import {getBlogs} from '../../actions/blogActions'

const msp = state => ({
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),
    errors: state.errors
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
    getBlogs: user => dispatch(getBlogs(user))
    
});

export default connect(msp, mdp)(EntryForm);