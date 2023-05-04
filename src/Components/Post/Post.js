import React from 'react';

const Post = (props) => {
    return (
        <div>
            {props.post.id}
            {props.post.title}
            <button onClick={()=>props.info(props.post.body)}>INFO</button>
            <hr/>
        </div>
    );
};

export default Post;