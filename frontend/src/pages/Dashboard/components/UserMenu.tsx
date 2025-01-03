import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { Button } from '../../../components/ui/Button';

export function UserMenu() {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {user?.fullName}
      </span>
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
        onClick={logout}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}