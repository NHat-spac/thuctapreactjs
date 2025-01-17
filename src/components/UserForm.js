import React, { useState, useEffect } from 'react';
import { createUser, getUserById, updateUser } from '../services/userService';

const UserForm = ({ userId, onSuccess }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await getUserById(userId);
      setName(response.data.name);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userId) {
        await updateUser(userId, { name });
      } else {
        await createUser({ name });
      }
      onSuccess();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tên người dùng:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <button type="submit">{userId ? 'Cập nhật' : 'Thêm mới'}</button>
    </form>
  );
};

export default UserForm;