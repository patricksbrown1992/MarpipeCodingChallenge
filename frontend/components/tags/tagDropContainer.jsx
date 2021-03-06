import { connect } from 'react-redux';
import TagDropForm from './tagDropForm';
import { editTagModal, deleteTagModal, closeModal,  } from '../../actions/modalActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteTagModal: entity => dispatch(deleteTagModal(entity)),
    editTagModal: entity => dispatch(editTagModal(entity)),

});

export default connect(msp, mdp)(TagDropForm);