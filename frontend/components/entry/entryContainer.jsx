import { connect } from 'react-redux';
import { logout, clearErrors} from '../../actions/sessionActions';
import EntryForm from './entryForm';

const msp = state => ({
    user: state.entities.user,
    errors: state.errors
})
const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(EntryForm);