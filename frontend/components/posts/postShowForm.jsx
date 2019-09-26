import React from 'react';
import { Redirect } from 'react-router-dom';

class NoteShowForm extends React.Component {
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
        // this.handleAddTag = this.handleAddTag.bind(this);
    }

  

    componentWillReceiveProps(newProps) {

        if (newProps.post == undefined) {
            this.setState({ change: true })


        } else {

            if (newProps.post.id !== this.props.post.id) {
                this.setState({
                    id: newProps.post.id,
                    title: newProps.post.title,
                    body: newProps.post.body,
                    blog_id: newProps.post.blog_id
                });
            }
        }
    }

    // handleAddTag(e) {
    //     e.preventDefault()

    //     this.props.noteTagAddModal(this.props.match.params.post_id)
    // }

    handleChange(value) {
        let title = this.state.title;
        let body = value
        let blog_id = this.state.blog_id;
        let id = this.state.id;
        let note = { title, body, blog_id, id };
        this.setState({ body: value }, () => this.props.updatePost({ id, note }));
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

    render() {

       
            if (this.state.change) {
                return <Redirect to={`/username/${this.state.notebook_id}`} />
            }
            let post = this.props.post;
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
                    <input value={this.state.body} onChange={this.handleChange} theme="snow" />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </div>
            );
        
    }

}


export default NoteShowForm;