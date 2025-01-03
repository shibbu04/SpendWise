import React from 'react';
import { Header } from '../../components/layout/Header';
import { Sidebar } from './components/Sidebar';
import { ExpenseOverview } from './components/ExpenseOverview';
import { RecentExpenses } from './components/RecentExpenses';
import { Reports } from './components/Reports';
import { UserMenu } from './components/UserMenu';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-bg">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1">
        <div className="flex items-center justify-between px-6 py-4">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <UserMenu />
        </div>
        
        <main className="p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-8">
            <ExpenseOverview />
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentExpenses />
              </div>
              <div>
                <Reports />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}