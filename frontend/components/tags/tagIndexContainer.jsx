import TagsIndexForm from './tagIndexForm';
import { connect } from 'react-redux';
import { getTags, clearTags } from '../../actions/tagActions';
import { openAddTagModal, tagDropDown} from '../../actions/modalActions';
import { getTaggings } from '../../actions/taggingActions';
import { receiveTriage, removeTriage } from '../../actions/tagTriageAction';



const msp = state => ({
    user: state.entities.user[state.session.id],
    tags: Object.values(state.entities.tags),
    triage: Object.values(state.ui.triage)
    
});

const mdp = dispatch => ({
    getTags: user => dispatch(getTags(user)),
    addTag: (entity) => dispatch(openAddTagModal(entity)),
    clearTags: () => dispatch(clearTags()),
    getTaggings: (user) => dispatch(getTaggings(user)),
    tagDropDown: entity => dispatch(tagDropDown(entity)),
    receiveTriage: (entity) => dispatch(receiveTriage(entity)),
    removeTriage: () => dispatch(removeTriage())

});

export default connect(msp, mdp)(TagsIndexForm);