import React from 'react';
import { merge } from 'lodash';

class PostIndexForm extends React.Component {
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

    componentDidMount() {
        this.props.getBlogs(this.props.user).then(() => this.props.blogs.forEach((blog) => {
            this.props.getPosts(blog.id)
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

   

    render() {
        let posts
        if (this.props.posts.length > 0) {
            posts = this.duplicateArray(this.props.posts);
            posts = posts.map(post => (
                <li key={post.id}>{post.title}{post.body}</li>
            )
            )
        }
        return (
            <div className='entry-form'>
                <br />
                {posts}
                <br />
                <button onClick={this.handleSubmit}>logout</button>
            </div>


        )

    }

};

export default PostIndexForm;