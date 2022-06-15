import { useContext } from 'react';
import { contextTheme } from '../context/Context';

export const useCounter = () => {
  const context = useContext(contextTheme);

  if (!context === undefined) {
    throw new Error('useCounter() must used in side contextTheme ');
  }
  return context;
};
