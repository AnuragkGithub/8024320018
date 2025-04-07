const UserCard = ({ user }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p>Posts: {user.postCount}</p>
    </div>
  );
};

export default UserCard;
