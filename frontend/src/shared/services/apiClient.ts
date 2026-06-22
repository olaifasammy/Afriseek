import { useAuthStore } from '../store/authStore';

const API_BASE_URL = '/api';

export const apiClient = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  const token = useAuthStore.getState().token;
  
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      useAuthStore.getState().logout();
    }
    const errorData = await response.json().catch(() => ({ message: 'API error' }));
    throw { status: response.status, message: errorData.message || 'Something went wrong' };
  }

  return response.json();
};
