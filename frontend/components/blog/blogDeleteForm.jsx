import React from 'react';
import { Redirect } from 'react-router-dom';

class BlogDeleteForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();
        this.props.deleteBlog(this.props.blog)
            .then(() => this.props.posts.forEach((post) => {
                if (post.blog_id == this.props.blog.id) {
                    this.props.deletePost(post)
                }
            }))
            .then(() => this.props.closeModal());
            return this.props.history.push('/entry');
    }


    render() {

        return (
            <div className="blog-delete-modal">
                <div className="blog-delete-top">
                    <h1>Delete Blog?</h1>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                </div>
                <h3>Are you sure you want to delete the "{this.props.blog.title}" blog?</h3>
                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Delete</button>
                </form>
            </div>
        )
    }
}

export default BlogDeleteForm;