const PostCard = ({ post }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p>{post.content}</p>
      <p className="text-sm text-gray-600">Comments: {post.commentsCount}</p>
    </div>
  );
};

export default PostCard;
