import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>Theme Toggler App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
}

export default Header;
