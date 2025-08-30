import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://mini-linked-in-eta.vercel.app//api', // Uses local URL if availableL
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
  This is a request interceptor. It's a smart function that will
  automatically add the authentication token to the header of every
  request you send, as long as a token is saved in localStorage.
*/
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
