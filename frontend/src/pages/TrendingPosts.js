import React, { useEffect, useState } from "react";
import axios from "axios";

function TrendingPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">Trending Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.content} - {post.comments} comments</li>
                ))}
            </ul>
        </div>
    );
}

export default TrendingPosts;
