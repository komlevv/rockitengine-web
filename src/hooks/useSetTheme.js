import { useEffect } from 'react';
import { useTheme } from '../contexts/themeContext';

export const useSetTheme = (theme) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(theme);
  }, []);
};
