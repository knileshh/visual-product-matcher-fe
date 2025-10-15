import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://vsearch.knileshh.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Health check
export const checkHealth = async () => {
  try {
    const response = await api.get('/api/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

// Get statistics
export const getStats = async () => {
  try {
    const response = await api.get('/api/stats');
    return response.data;
  } catch (error) {
    console.error('Failed to get stats:', error);
    throw error;
  }
};

// Get product by ID
export const getProduct = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to get product:', error);
    throw error;
  }
};

// Upload image and search
export const uploadAndSearch = async (file, k = 20, threshold = 0.3) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('k', k.toString());
    formData.append('threshold', threshold.toString());

    const response = await api.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Upload and search failed:', error);
    throw error;
  }
};

// Search by URL
export const searchByUrl = async (url, k = 20, threshold = 0.3) => {
  try {
    const response = await api.post('/api/search-url', {
      url,
      k,
      threshold,
    });
    
    return response.data;
  } catch (error) {
    console.error('Search by URL failed:', error);
    throw error;
  }
};

export default api;
