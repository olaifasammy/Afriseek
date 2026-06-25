import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api/admin', // Assuming a prefix for administrative API routes
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
