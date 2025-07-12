import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeController = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return null; // no UI, just side effect
};

export default ThemeController;
