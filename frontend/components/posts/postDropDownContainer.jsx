import { connect } from 'react-redux';
import PostDropDown from './postDropDownForm';
import {closeModal, postEdit, postDelete} from '../../actions/modalActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    blogs: Object.values(state.entities.blogs),
    posts: Object.values(state.entities.posts),
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    postEdit: (entity) => dispatch(postEdit(entity)),
    postDelete: entity => dispatch(postDelete(entity)),
});

export default connect(msp, mdp)(PostDropDown);