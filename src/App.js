import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer>
      This project was coded by Justine Ziola and is open-sourced on <a href="https://github.com/justineziola/weather-app" target="_blank" rel="noopener noreferrer">GitHub</a> and is deployed on <a href="https://finalprojectweatherap.netlify.app" target="_blank" rel="noopener noreferrer">Netlify</a>.
      </footer>
    </div>
    </div>
  );
}

