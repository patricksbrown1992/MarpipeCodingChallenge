import React from 'react';

class PostDropDownForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
       
    }


    handleSubmitDelete(entity) {

        return (e) => {
            e.preventDefault();
            this.props.postDelete(entity);
        };
    }

    handleSubmitEdit(entity) {

        return (e) => {
            e.preventDefault();
            this.props.postEdit(entity)
        };
    }

    

    render() {

        return (
            <div className='note-drop-down-modal'>
                <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                <br />
                <p>{this.props.post.title}</p>
                <br />
                <span onClick={this.handleSubmitDelete(this.props.post)}>
                    <button type='submit'>Delete Post</button>
                </span>
                <br />
                <span onClick={this.handleSubmitEdit(this.props.post)}>
                    <button type='submit'>Edit Post Title</button>
                </span>
                <br />
                
                <br />
            </div>
        )
        

    }
}

export default PostDropDownForm;