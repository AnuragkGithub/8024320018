const addPosts = async () => {
    await Post.insertMany([
      { content: "Hello World!", likes: 200, comments: 10 },
      { content: "Check out my new blog post!", likes: 350, comments: 25 },
      { content: "Learning MongoDB is fun!", likes: 500, comments: 40 }
    ]);
    console.log("Posts added!");
  };
  addPosts();
  