import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import './Posts.css';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postInfo, setPostInfo] = useState();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json));
    },[]);
    
    const info = (body) => {
        setPostInfo(body);
    }

    return (
        <div className={'container'}>
            <div className={'left'}>{posts.map((post)=> <Post post={post} info={info}/>) }</div>
            <div className={'right'}>{postInfo}</div>
        </div>
    );
};

export default Posts;