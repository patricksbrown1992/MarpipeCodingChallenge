import LeftNavForm from './leftNavForm';
import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';




const msp = state => ({
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),
    posts: Object.values(state.entities.posts)
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    
});

export default connect(msp, mdp)(LeftNavForm);
