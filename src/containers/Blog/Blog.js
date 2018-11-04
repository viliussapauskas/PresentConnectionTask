import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
<div className="Blog" id="#a">
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark"> 
            <button id="nav-toggle-button" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink style={{ fontSize:"35px"}} to={{
                                pathname: "/"
                            }} exact 
                             activeStyle = {{
                                color:'orange'
                            }} 
                            >Home</NavLink>
                        </li>
                     <li className="nav-item">
                            <NavLink style={{ fontSize:"35px"}} to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                            activeStyle= {{
                                color:'orange'
                            }}>New Post</NavLink>
                    </li> 
                </ul>
            </div>
        </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost} /> 
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;