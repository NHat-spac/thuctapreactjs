import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { deleteUser } from '../services/userService';

const UserList = () => {
  const { users, fetchUsers } = useContext(UserContext);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h3>Danh sách người dùng</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;