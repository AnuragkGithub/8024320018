const addComments = async () => {
    await Comment.insertMany([
      { postId: "POST_ID_1", text: "Great post!" },
      { postId: "POST_ID_2", text: "Nice insights!" }
    ]);
    console.log("Comments added!");
  };
  addComments();
  