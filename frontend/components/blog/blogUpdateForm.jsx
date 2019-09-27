import React from 'react';

class BlogEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange() {

        return (e) => {
            this.setState({ title: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.state.title;
        const user_id = this.props.user.id
        const id = this.props.id;
        this.props.updateBlog({ title, user_id, id }).then(() => this.props.closeModal());
    }

    render() {
        if (this.state.title.length < 1) {
            // non-working button to prevent empty submissions
            return (
                <div className="blog-edit-modal">
                    <div className="blog-edit-top">
                        <h1>Rename blog</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    </div>
                    <h3>Title</h3>
                    <span>

                        <input type="text" value={this.state.title} onChange={this.handleChange()} />
                    </span>

                    <form>
                        <button className="invalid" type='submit'>Done</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="title-edit-modal">
                    <div className="title-edit-top">
                        <h1>Rename title</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    </div>
                    <h3>Title</h3>
                    <span>

                        <input type="text" value={this.state.title} onChange={this.handleChange()} />
                    </span>

                    <form onSubmit={this.handleSubmit}>
                        <button className="valid" type='submit'>Done</button>
                    </form>
                </div>
            )
        }
    }
}



export default BlogEditForm;