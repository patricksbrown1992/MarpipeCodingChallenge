import React from 'react';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return (
            <div className='entry-form'>
                <h1>HI You're in</h1>
                <button onClick={this.handleSubmit}>logout</button>
            </div>


        )

    }

};

export default EntryForm;