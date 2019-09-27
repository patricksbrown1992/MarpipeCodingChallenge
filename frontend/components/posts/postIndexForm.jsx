import React from 'react';
import { merge } from 'lodash';
import { Link, Redirect } from 'react-router-dom';

class PostIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {change: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
        this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
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

    handleCreateSubmit(e){
        e.preventDefault();
        // debugger
        this.props.openCreatePostModal(this.props.blog.id)
    }

    componentDidMount() {
        this.props.clearBlogs();
        this.props.clearPosts();
        debugger
        this.props.getBlog(this.props.match.params.blog_id).then(() => this.props.getPosts(this.props.match.params.blog_id))
        .then(() => this.setState({change: true}))
       
    }

    handleOpenDeleteModal(e){
        e.preventDefault();
        this.props.openDeleteBlogModal(this.props.blog);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

   

    render() {
        if (!this.state.change){
            return null;
        }
        let posts
        if (this.props.posts.length > 0) {
            posts = this.duplicateArray(this.props.posts);
            posts = posts.map(post => (
                <li key={post.id}><Link to={`/blogs/${post.blog_id}/posts/${post.id}`}>{post.title}</Link> 
                <br/>
                <br/>
                {post.body.replace(/(<([^>]+)>)/ig, "")}</li>
            )
            )
        }
        return (
            <div className='entry-form'>
                <h1>{this.props.blog.title}</h1>
                <br />
                {posts}
                <br/>
                <br/>
                <button onClick={this.handleCreateSubmit}>Create Post</button>
                <br />
                <br/>
                <button onClick={this.handleOpenDeleteModal}>Delete Blog</button>
                <br/>
                <button onClick={this.handleSubmit}>logout</button>
            </div>


        )

    }

};

export default PostIndexForm;