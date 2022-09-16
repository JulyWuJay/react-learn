import React from 'react';
import Route from './routes'
import './App.css';
import Header from './pages/Header';
function App() {
  return (
    <div className='app'>
      <Header/>
      <Route/>
    </div>
  );
}

export default App;
