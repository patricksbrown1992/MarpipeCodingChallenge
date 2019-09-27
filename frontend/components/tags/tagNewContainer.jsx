import { connect } from 'react-redux';
import TagNewForm from './tagNewForm'
import { closeModal } from "../../actions/modalActions";
import { createTag } from '../../actions/tagActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
});

const mdp = dispatch => ({
    createTag: (tag) => (dispatch(createTag(tag))),
    closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(TagNewForm);