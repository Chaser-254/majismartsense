import React from 'react';
import { Dashboard } from './pages/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';
export function App() {
  return <ThemeProvider>
      <Dashboard />
    </ThemeProvider>;
}