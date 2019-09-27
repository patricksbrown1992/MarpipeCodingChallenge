import LeftNavForm from './leftNavForm';
import { connect } from 'react-redux';
import { logOutModal } from '../../actions/modalActions';




const msp = state => ({
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),
    posts: Object.values(state.entities.posts)
});

const mdp = dispatch => ({
    logOutModal: () => dispatch(logOutModal()),
    
});

export default connect(msp, mdp)(LeftNavForm);
