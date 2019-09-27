import React from 'react';
import { merge } from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import LeftNav from '../../components/leftNav/leftNavContainer';

class PostIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {change: false};
        this.duplicateArray = this.duplicateArray.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
        this.handleSubmitPostDropDown = this.handleSubmitPostDropDown.bind(this);
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

        this.props.getBlog(this.props.match.params.blog_id).then(() => this.props.getPosts(this.props.match.params.blog_id))
        .then(() => this.setState({change: true}))
       
    }
    handleSubmitPostDropDown(entity) {
        return (e) => {
            e.preventDefault();
            this.props.postDropDown(entity)
        };
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
                    {post.body.replace(/(<([^>]+)>)/ig, "")}<i onClick={this.handleSubmitPostDropDown(post)} className="fas fa-ellipsis-h"></i></li>
            )
            )
        }
        return (
            <div className='entry-form'>
                <LeftNav />
                <h1>{this.props.blog.title}</h1>
                <br />
                {posts}
                <br/>
                <br/>
                <div>
                    
                    <button onClick={this.handleCreateSubmit}>Create Post</button>
                    <br />
                    <br/>
                    <button onClick={this.handleUpdateSubmit}>Change Blog name</button>
                    <br/>
                    <button onClick={this.handleUpdateSubmit}>Delete Blog</button>
                    

                </div>
            </div>


        )

    }

};

export default PostIndexForm;