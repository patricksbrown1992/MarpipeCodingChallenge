import React from 'react';
import { closeModal } from '../../actions/modalActions';
import { connect } from 'react-redux';
import CreatePost from '../../components/posts/postCreateModalContainer';

function Modal({ modal, closeModal }) {

    if (!modal.type) {
        return null;
    }
    let component;
    switch (modal.type) {
        case 'createPost':

            component = <CreatePost blog_id={modal.entity}/>;
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