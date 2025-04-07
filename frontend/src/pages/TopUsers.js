import React, { useEffect, useState } from "react";
import axios from "axios";

function TopUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold">Top Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.postCount} posts</li>
                ))}
            </ul>
        </div>
    );
}

export default TopUsers;
