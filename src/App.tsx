import React from 'react';
import Content from './components/Content';
import Navbar from './components/Navbar';
import './styles.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
