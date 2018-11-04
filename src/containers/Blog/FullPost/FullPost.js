import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount () { // change from componenot did update because its getting removed or added to the DOM
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
            
            });
    }
    render () {
        let post= <div className="loader"/>;
        if ( this.props.id ) {
            post = <div className="loader"/>
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1 className="title">{this.state.loadedPost.title}</h1>
                    <hr className="style-four"></hr>
                    <p className="body">{this.state.loadedPost.body}</p>
                </div>

            );
        }
        return post;
    }
}
export default FullPost;