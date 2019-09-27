import React from 'react';


class PostNewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', body: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const title = this.state.title;
        const blog_id = this.props.blog_id;
        const id = this.props.blog_id;
        const body = this.state.body;
        const post = { title, body, blog_id };

        this.props.createPost({ id, post }).then(() => this.props.closeModal());
    }



    render() {
        debugger
        if (this.state.title.length < 1 || this.state.body.length < 1) {
            // non-working button to prevent empty submissions
            return (
                <div className='new-post-modal'>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    <h1>Create New Post</h1>

                    <h5>Title</h5>
                    <span>
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder='Post Title' />
                    </span>
                    <h5>Body</h5>
                    <span>
                        <input type="text" value={this.state.body} onChange={this.handleChange('body')} placeholder='Post Body' />
                    </span>
                    <br />
                    <form>
                        <button className="invalid" type='submit'>Done</button>

                    </form>

                </div>
            )
        } else {

            return (
                <div className='new-post-modal'>
                    <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    <h1>Create New Post</h1>

                    <h5>Title</h5>
                    <span>
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')} placeholder='Post Title' />
                    </span>
                    <h5>Body</h5>
                    <span>
                        <input type="text" value={this.state.body} onChange={this.handleChange('body')} placeholder='Post Body' />
                    </span>
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <button className="valid" type='submit'>Done</button>

                    </form>

                </div>
            )
        }
    }
}

export default PostNewForm;