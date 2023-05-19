import React, { useEffect, useState } from "react";



export const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            setPosts(data)
        })
    }, [])

    // console.log(posts)
    return <div style={{padding: 10, margin: 10}}>
        <h4>Post List</h4>
        <ol style={{textAlign: 'left'}}>
            {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ol>

    </div>
}