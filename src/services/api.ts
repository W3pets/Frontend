import axios from 'axios';

const api = axios.create({
  baseURL: 'https://w3pets.nw.r.appspot.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or use Redux if preferred
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
