import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3 dark:border-dark-border dark:bg-dark-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-dark-card lg:hidden"
            >
              <Menu className="h-6 w-6 dark:text-dark-text" />
            </button>
          )}
          <Link to="/" className="text-xl font-bold text-primary-600">
            ExpenseTracker
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-dark-card"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 dark:text-dark-text" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <Button as={Link} to="/login" variant="primary" size="sm">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};