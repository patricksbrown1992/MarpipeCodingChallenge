import React from 'react';
import { merge } from 'lodash';
import { Link, Redirect } from 'react-router-dom';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
    }

    duplicateArray(array) {
        // deep dupes objects
        let ans = [];
        for (let i = 0; i < array.length; i++) {
            let newObject = merge({}, array[i]);
            ans.push(newObject);
        }

        return ans;
    }

    componentDidMount(){
        this.props.getBlogs(this.props.user)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        let blogs
        if (this.props.blogs.length > 0){
            blogs = this.duplicateArray(this.props.blogs);
            blogs = blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                // <li key={blog.id}>{blog.title}</li>
                )
            )
        }
        return (
            <div className='entry-form'>
                <h1>HI You're in</h1>
                <br/>
                {blogs}
                <br/>
                <button onClick={this.handleSubmit}>logout</button>
            </div>


        )

    }

};

export default EntryForm;