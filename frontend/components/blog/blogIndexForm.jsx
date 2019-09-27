import React from 'react';
import { merge } from 'lodash';
import { Link, Redirect } from 'react-router-dom';
import LeftNav from '../../components/leftNav/leftNavContainer';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.duplicateArray = this.duplicateArray.bind(this);
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
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
        this.props.openCreateBlogModal(this.props.user)
    }

    componentDidMount(){
        this.props.clearBlogs();
        this.props.getBlogs(this.props.user);
    }

   

    render(){
        let blogs
        if (this.props.blogs.length > 0){
            blogs = this.duplicateArray(this.props.blogs);
            blogs = blogs.map(blog => (
                <div>
                    <br/>
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                    <br/>
                </div>
                // <li key={blog.id}>{blog.title}</li>
                )
            )
        }
    
        return (
            <div className='entry-form'>
                <h1>HI You're in</h1>
                <LeftNav />
                <br/>
                {blogs}
                <br/>
                <br/>
                <button onClick={this.handleCreateSubmit}>Create Blog</button>
                <br/>
                <br/>
               
            </div>


        )

    }

};

export default EntryForm;