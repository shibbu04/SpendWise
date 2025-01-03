import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface ExpenseFormProps {
  onSubmit: (data: {
    category: string;
    description: string;
    amount: number;
    date: string;
  }) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export function ExpenseForm({ onSubmit, onCancel, isLoading }: ExpenseFormProps) {
  const [formData, setFormData] = React.useState({
    category: '',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: Number(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Category"
        required
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />
      <Input
        label="Description"
        required
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <Input
        label="Amount"
        type="number"
        required
        min="0"
        step="0.01"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />
      <Input
        label="Date"
        type="date"
        required
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Expense'}
        </Button>
      </div>
    </form>
  );
}