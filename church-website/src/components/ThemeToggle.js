import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from 'react-bootstrap/Button';

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Button
      variant="outline-primary"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-btn"
    >
      {darkMode ? (
        <i className="bi bi-sun-fill"></i>
      ) : (
        <i className="bi bi-moon-fill"></i>
      )}
    </Button>
  );
};

export default ThemeToggle;