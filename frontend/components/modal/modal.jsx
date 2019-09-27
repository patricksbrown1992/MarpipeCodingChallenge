import React from 'react';
import { closeModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import CreatePost from '../../components/posts/postCreateModalContainer';
import CreateBlog from '../../components/blog/blogCreateContainer';
import DeleteBlog from '../../components/blog/blogDeleteContainer';
import UpdateBlog from '../../components/blog/blogUpdateContainer';
import TagNewContainer from '../../components/tags/tagNewContainer';
import TagDropDownContainer from '../../components/tags/tagDropContainer';
import TagEditContainer from '../../components/tags/tagEditContainer';
import TagDeleteContainer from '../../components/tags/tagDeleteContainer';
import LogoutContainer from '../leftNav/logoutContainer';

function Modal({ modal, closeModal }) {

    if (!modal.type) {
        return null;
    }
    let component;
    switch (modal.type) {
        case 'createPost':

            component = <CreatePost blog_id={modal.entity}/>;
            break;
        case 'createBlog':
            component = <CreateBlog user_id={modal.entity.id}/>;
            break;
        case 'deleteBlog':
            component = <DeleteBlog blog = {modal.entity}/>;
            break;
        case 'logout':
            component = <LogoutContainer />;
            break;
        case 'deleteTag':
            component = <TagDeleteContainer tag={modal.entity} />;
            break;
        case 'updateBlog':
            component = <UpdateBlog id={modal.entity}/>
            break;
        case 'editTag':
            component = <TagEditContainer id={modal.entity.id} />;
            break;
        case 'addTag':
            component = <TagNewContainer id={modal.entity.id} />;
            break;
        case 'tagDropDown':
            component = <TagDropDownContainer tag={modal.entity} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);