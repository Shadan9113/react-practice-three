import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './comonents/Header';
import Content from './comonents/Content';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
