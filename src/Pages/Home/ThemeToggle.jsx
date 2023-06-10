import { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('light');
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
