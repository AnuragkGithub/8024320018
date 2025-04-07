import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Live Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="p-2 border-b">
          {post.content} - {post.likes} likes
        </div>
      ))}
    </div>
  );
};

export default Feed;
