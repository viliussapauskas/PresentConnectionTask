import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: ''
        
    }
     // COMPONENT DID MOUNT EXECUTES EACH TIME WE CHANGE THIS PAGE
    componentDidMount () {
       
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            userId: this.state.userId
            
        };
        axios.post('/posts', data)
            .then(response => {
                if(data.title.length === 0 || data.body.length === 0)
                {
                    alert("You can not add an empty post!");
                }
                else { 
                    console.log(" Title - " + data.title + "\n Content - " + data.body);
                    alert(" Title - " + data.title + "\n Content - " + data.body);
                }          
            });
    }
    render () {
        return (
            <div className="jumbotron container">
                <h1 className="display-4 centered">Add a new Post!</h1>
                <h3 className="display-5">Title:</h3>
                <div className="input-group input-group-lg">
                    <input placeholder="Enter your title here!" type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"
                           value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                </div>
                <h3 className="display-5">Content:</h3>
                <div className="form-group">
                    <textarea placeholder="Enter your content here!" className="form-control" rows="5" id="comment"
                    value={this.state.content} onChange={(event) => this.setState({content: event.target.value})}/>
                </div>
                <button id="btn" type="button" className="btn btn-warning btn-lg"
                    onClick={this.postDataHandler}>Add your post!
                 </button>
            </div>
        );
    }
}
export default NewPost;