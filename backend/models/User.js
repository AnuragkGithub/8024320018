const addUsers = async () => {
    await User.insertMany([
      { name: "Alice", followers: 1200, posts: 50 },
      { name: "Bob", followers: 800, posts: 30 },
      { name: "Charlie", followers: 1500, posts: 70 }
    ]);
    console.log("Users added!");
  };
  addUsers();
  