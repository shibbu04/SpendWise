import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  monthlySalary: string;
  mobileNumber: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  fullName: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const loginUser = async (data: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, data);
    const user = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    logout();
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};