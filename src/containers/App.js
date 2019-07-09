import React from 'react';
import './App.scss'
import Navbar from '../components/Navbar';
import ProjectContainer from './ProjectContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectContainer />
    </div>
  );
}

export default App;
