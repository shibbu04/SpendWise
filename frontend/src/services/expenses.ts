import axios from 'axios';
import { CreateExpenseDTO, Expense } from '../types/expense';
import { getCurrentUser } from './auth';

const API_URL = import.meta.env.VITE_API_URL;

export async function getExpenses(): Promise<Expense[]> {
  const user = getCurrentUser();
  const response = await axios.get(`${API_URL}/api/expenses`, {
    params: { userId: user?.id }
  });
  return response.data;
}

export async function createExpense(data: CreateExpenseDTO): Promise<Expense> {
  const user = getCurrentUser();
  const response = await axios.post(`${API_URL}/api/expenses`, {
    ...data,
    userId: user?.id
  });
  return response.data;
}

export async function deleteExpense(id: string): Promise<void> {
  const user = getCurrentUser();
  await axios.delete(`${API_URL}/api/expenses/${id}`, {
    params: { userId: user?.id }
  });
}