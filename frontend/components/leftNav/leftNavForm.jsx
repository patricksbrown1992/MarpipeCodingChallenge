import React from 'react';
import { Link } from 'react-router-dom';


class LeftNavForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

   


    
    handleLogOut() {
        return (e) => {
            e.preventDefault();
            this.props.logOutModal();
        }
    }
    


    render() {
       



        return (


            <div className="left-nav">
                <ul>

                    <li className="user-email" onClick={this.handleLogOut()} className="user-email">{this.props.user.email}</li>
                    <li className="all-posts-li"><Link to='/allposts'><i className="fas fa-sticky-note"></i>All Posts</Link></li>
                    <li className="blogs-li"><Link to='/entry'><i className="fas fa-book"></i>Blogs</Link></li>
                    <li className="tags-li"><Link to='/tags'><i className="fas fa-tag"></i>Tags</Link></li>
                    

                </ul>
            </div>




        )
    }
}



export default LeftNavForm;