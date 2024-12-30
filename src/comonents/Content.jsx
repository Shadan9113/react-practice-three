import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`content ${theme}`}>
      <h2>Welcome to the Theme Toggler App!</h2>
      <p>
        The current theme is <strong>{theme}</strong>.
      </p>
    </main>
  );
}

export default Content;
