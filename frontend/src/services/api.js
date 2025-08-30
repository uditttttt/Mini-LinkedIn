import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://mini-linkedin-backend-jer6.onrender.com/api', // Your backend API URL
    baseURL: 'https://mini-linked-in-eta.vercel.app/api', // Your backend API URL
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
