import React from 'react';


class BlogNewForm extends React.Component {

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
        const user_id = this.props.user_id;

        this.props.createBlog({ title, user_id }).then(() => this.props.closeModal());
    }


    render() {
        // non-working button to prevent empty submissions
        if (this.state.title.length < 1) {
            return (
                <div className='new-blog-modal'>
                    <div className='new-blog-modal-top'>
                        <h1>Create new blog</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    </div>
                    <h3>Blogs are useful for grouping posts around a common topic</h3>
                    <h5>Title</h5>
                    <span>
                        <input type="text" value={this.state.title} onChange={this.handleChange()} placeholder='Blog Title' />
                    </span>
                    <br />
                    <br />
                    <form >
                        <button className="invalid" type='submit'>Done</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className='new-blog-modal'>
                    <div className='new-blog-modal-top'>
                        <h1>Create new blog</h1>
                        <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                    </div>
                    <h3>Blogs are useful for grouping posts around a common topic</h3>
                    <h5>Name</h5>
                    <span>

                        <input type="text" value={this.state.name} onChange={this.handleChange()} placeholder='Notebook blog' />
                    </span>
                    <br />
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <button className="valid" type='submit'>Done</button>
                    </form>
                </div>
            )

        }
    }
}


export default BlogNewForm;