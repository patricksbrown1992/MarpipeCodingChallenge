import React from 'react';
import styleDate from '../../util/styleDate';
import LeftNav from '../leftNav/leftNavContainer';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
class AllPostsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false }
        this.duplicateArray = this.duplicateArray.bind(this);
        // this.handleSubmitPostDropDown = this.handleSubmitPostDropDown.bind(this);

        this.handleTagModal = this.handleTagModal.bind(this);

    }

    componentDidMount() {

        this.props.clearBlogs();
        this.props.getBlogs(this.props.user).then(() => this.props.blogs.forEach((blog) => {
            this.props.getPosts(blog.id)
        })).then(() => this.props.getTaggings(this.props.user)).then(() => this.props.getTags(this.props.user));
        // .then( () => this.props.getNotes())
    }

    handleTagModal() {
        return (e) => {
            e.preventDefault();
            this.props.tagSearchDropDown()
        }
    }



    // handleSubmitPostDropDown(entity) {
    //     return (e) => {
    //         e.preventDefault();
    //         this.props.postDropDown(entity)
    //     };
    // }

    componentWillUnmount() {

        this.props.removeTriage();
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

   


    render() {
        let posts;
        let theTag;
        let showtagbutton;
        if (this.props.posts.length > 0) {
            posts = this.duplicateArray(this.props.posts);
            // posts = posts.filter(post => (
            //     post.title.toUpperCase().includes(this.props.search.toUpperCase()))
            // )
            // if (this.props.triage.length > 0) {
            //     posts = this.triageNotes(posts);
            // }

            if (this.props.tags.length < 1) {
                showtagbutton = ''
            } else {
                showtagbutton = "fas fa-tag"
            }
            posts = posts.map(post => (
                <li key={post.id} className="all-post-title"><Link to={`/blogs/${post.blog_id}/posts/${post.id}`} > <h1>{post.title}</h1> </Link>
                    <Link to={`/blogs/${post.blog_id}/posts/${post.id}`} > <h3>{post.body.replace(/(<([^>]+)>)/ig, "")}</h3></Link>



                    Last updated:
                    <br />
                    {styleDate(post.updated_at)}
                    <br />

                    {/* <i onClick={this.handleSubmitPostDropDown(post)} className="fas fa-ellipsis-h"></i> */}


                </li>
            ));

            // if (this.props.triage.length > 0) {
            //     theTag = <button onClick={this.handleRemoveTriage} className="tag-triage-name">{this.props.triage[0].name} x</button>
            // } else {
            //     theTag = ''
            // }



            return (


                <div className="all-post-page">
                    <LeftNav />
                    <div className="all-post-right">
                        <div className="all-post-title">
                            <h1>All Posts</h1>
                            <h3 className="all-posts-length">{posts.length} posts</h3>
                            <div className="blog-show-icons">
                                <div className='tag-triage-div'>
                                    {theTag}
                                </div>
                                <div className="blog-show-bottom">
                                    <i onClick={this.handleTagModal()} className={showtagbutton}></i>
                                </div>
                            </div>
                        </div>
                        <div className="all-post-nav">
                            {posts}
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="all-post-page">
                    <LeftNav />
                    <div className="all-post-right">
                        <div className="all-post-title">
                            <h1>No Posts</h1>
                        </div>

                    </div>
                </div>
            )
        }
    }
}
export default AllPostsForm;