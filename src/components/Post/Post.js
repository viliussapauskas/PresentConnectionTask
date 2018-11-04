import React from 'react';
import './Post.css';

function isLengthTitle (props) {
    if(props.title.length>20)
    {
        return <p>{props.title.slice(1,20)}{"..."}</p>
    }
    else {
        return <p>{props.title}</p>
    }
}
function isLengthBody (props) {
    if(props.body.length>60)
    {
        return <p>{props.body.slice(0, 60)}{"..."}</p>
    }
    else {
        return <p>{props.body.slice(0, 60)}</p>
    }
}
const post = (props) => (
        <article className="Post" onClick={props.clicked}>
            <h4>{isLengthTitle(props)}</h4> 
            <div className="Info">
                <hr className="style-three"/>
                    <div className="Body">{isLengthBody(props)}</div>
            </div>
        </article>
);
export default post;