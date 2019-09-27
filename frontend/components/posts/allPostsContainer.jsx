import AllPostsForm from './allPostsForm';
import { connect } from 'react-redux';
import { getBlogs, getBlog, clearBlogs} from '../../actions/blogActions';
import { getPosts, clearPosts, deletePost } from '../../actions/postActions';
// import { noteDropDown, tagSearchDropDown } from "../../actions/modalActions";
import { removeTriage } from '../../actions/tagTriageAction';
import { getTags } from '../../actions/tagActions';
import { getTaggings } from '../../actions/taggingActions';

const msp = state => ({
    user: state.entities.user[state.session.id],
    posts: Object.values(state.entities.posts),
    blogs: Object.values(state.entities.blogs),
    // taggings: Object.values(state.entities.taggings),
    // triage: Object.values(state.ui.triage),
    tags: Object.values(state.entities.tags)
});

const mdp = dispatch => ({
    getBlogs: user => dispatch(getBlogs(user)),
    getPosts: id => dispatch(getPosts(id)),
    clearBlogs: () => dispatch(clearBlogs()),
    clearPosts: () => dispatch(clearPosts()),
    deletePost: post => dispatch(deletePost(post)),
    // postDropDown: entity => dispatch(postDropDown(entity)),
    removeTriage: () => dispatch(removeTriage()),
    getTags: (user) => dispatch(getTags(user)),
    getTaggings: (user) => dispatch(getTaggings(user)),
    // tagSearchDropDown: () => dispatch(tagSearchDropDown())


});

export default connect(msp, mdp)(AllPostsForm);