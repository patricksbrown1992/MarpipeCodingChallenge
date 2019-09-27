import React from 'react';
import { Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';

class PostShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post.title,
            body: this.props.post.body,
            blog_id: this.props.post.blog_id,
            id: this.props.post.id,
            change: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleAddTag = this.handleAddTag.bind(this);
    }

    // componentDidMount(){
    //     this.props.clearBlogs();
    //     this.props.clearPosts();
    //     this.props.getBlogs(this.props.user).then(() => this.props.blogs.forEach((blog) => {
    //         this.props.getPosts(blog.id)
    //     })).then(() => this.setState({ change: true }));
    // }
  

    // componentWillReceiveProps(newProps) {

    //     if (newProps.post == undefined) {
    //         this.setState({ change: true })


    //     } else {

    //         if (newProps.post.id !== this.props.post.id) {
    //             this.setState({
    //                 id: newProps.post.id,
    //                 title: newProps.post.title,
    //                 body: newProps.post.body,
    //                 blog_id: newProps.post.blog_id
    //             });
    //         }
    //     }
    // }

    // handleAddTag(e) {
    //     e.preventDefault()

    //     this.props.noteTagAddModal(this.props.match.params.post_id)
    // }
   

    handleChange(value) {
        let title = this.state.title;
        let body = value
        let blog_id = this.state.blog_id;
        let id = this.state.id;
        let post = { title, body, blog_id, id };
        // debugger
        this.setState({ body: value }, () => this.props.updatePost({ id, post }));
    }



    handleSubmit() {
        return (e) => {
            e.preventDefault();
            let title = this.state.title;
            let body = this.state.body;
            let blog_id = this.state.blog_id;
            let id = this.state.id;
            let post = { title, body, blog_id, id };
            this.props.updatePost({ id, post })
        };
    }

    handleDelete(){
        return (e) => {
            e.preventDefault();
            let title = this.state.title;
            let body = this.state.body;
            let blog_id = this.state.blog_id;
            let id = this.state.id;
            let post = { title, body, blog_id, id };
            debugger
            this.props.deletePost( post )
            return this.props.history.push(`/blogs/${blog_id}`);
        };

    }

    render() {
            // if(!this.state.change){
            //     return null;
            // }
            let post = this.props.post;
            // debugger
            // debugger

            // let showtagbutton;
            // if (this.props.tags.length < 1) {
            //     showtagbutton = ''
            // } else {
            //     showtagbutton = <button className='add-tag-on-note-button' onClick={this.handleAddTag}>Add Tag</button>
            // }
            
            
            return (
                
                <div className="right-nav">

                    <h1>{post.title}</h1>
                    <br />
                    <br />
                    {/* {showtagbutton} */}
                    <br />
                    <ReactQuill value={this.state.body} onChange={this.handleChange} theme="snow" />
                    <br />
                    <br />
                    <button onClick={this.handleDelete()}>Delete Post</button>
                    <br />
                    <br />
                    
                </div>
            );
        
    }

}


export default PostShowForm;