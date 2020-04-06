import React from 'react';
// import logo from './logo.svg';
import alex from './images/Alex.jpeg';
import './App.css';
import Buttons from './components/buttons';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={alex} className='alex-logo' alt='logo' />
        <h3>ALEX XU</h3>
        <Buttons />
      </header>
    </div>
  );
}

export default App;
