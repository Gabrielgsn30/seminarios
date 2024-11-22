import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <header className="header">
        <h1>Landing Page</h1>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? "Light Theme" : "Dark Theme"}
        </button>
      </header>
      <main className="main-content">
        <h2>Welcome to Our Page</h2>
        <p>This is a simple landing page with theme toggle functionality.</p>
      </main>
      <footer className="footer">
        <p>© 2024 Gabriel Nascimento. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
