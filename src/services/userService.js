import api from '../api';

export const getUsers = (page = 1, limit = 10) => {
  return api.get(`/users?page=${page}&limit=${limit}`);
};

export const getUserById = (id) => {
  return api.get(`/user/${id}`);
};

export const createUser = (userData) => {
  return api.post('/user', userData);
};

export const updateUser = (id, userData) => {
  return api.put(`/user/${id}`, userData);
};

export const deleteUser = (id) => {
  return api.delete(`/user/${id}`);
};
