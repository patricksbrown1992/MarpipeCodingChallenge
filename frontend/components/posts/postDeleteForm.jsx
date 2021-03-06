import React from 'react';

class PostDeleteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }


    handleSubmitDelete(e) {

        e.preventDefault();
        this.props.deletePost(this.props.post).then(() => this.props.closeModal())

    }

    render() {
        return (
            <div className="post-delete-modal">
                <div className="post-delete-modal-top">
                    <h1>Delete Post?</h1>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                </div>
                <h3>Are you sure you want to delete the "{this.props.post.title}" post?</h3>

                <form onSubmit={this.handleSubmitDelete}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

export default PostDeleteForm;