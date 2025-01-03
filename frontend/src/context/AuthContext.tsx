import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, logout } from '../services/auth';

interface User {
  id: string;
  email: string;
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getCurrentUser());

  useEffect(() => {
    // Check token validity on mount
    const currentUser = getCurrentUser();
    if (currentUser !== user) {
      setUser(currentUser);
    }
  }, []);

  const value = {
    user,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}