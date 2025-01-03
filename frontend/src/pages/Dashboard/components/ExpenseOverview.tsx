import React from 'react';
import { Wallet, PiggyBank, TrendingUp, BarChart3 } from 'lucide-react';

export function ExpenseOverview() {
  const stats = [
    {
      icon: Wallet,
      label: 'Monthly Salary',
      value: '₹40,131',
      iconClassName: 'text-blue-600 dark:text-blue-400',
      bgClassName: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: PiggyBank,
      label: 'Remaining Budget',
      value: '₹33,506',
      iconClassName: 'text-green-600 dark:text-green-400',
      bgClassName: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: TrendingUp,
      label: 'Total Expenses',
      value: '₹6,625',
      iconClassName: 'text-red-600 dark:text-red-400',
      bgClassName: 'bg-red-50 dark:bg-red-900/20',
    },
    {
      icon: BarChart3,
      label: 'Categories',
      value: '2',
      iconClassName: 'text-purple-600 dark:text-purple-400',
      bgClassName: 'bg-purple-50 dark:bg-purple-900/20',
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl bg-white p-6 shadow-sm dark:bg-dark-card"
        >
          <div className="flex items-center gap-4">
            <div className={`rounded-lg p-3 ${stat.bgClassName}`}>
              <stat.icon className={`h-6 w-6 ${stat.iconClassName}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-dark-text">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}