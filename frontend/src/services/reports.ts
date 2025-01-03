import axios from 'axios';
import { ExpenseReport, ReportType } from '../types/report';

const API_URL = import.meta.env.VITE_API_URL;

export async function generateReport(type: ReportType): Promise<ExpenseReport> {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/reports/${type}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}