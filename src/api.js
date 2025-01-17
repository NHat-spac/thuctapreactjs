import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.daksystem.net/hethongchungchithuctap/api',
});

export default api;
