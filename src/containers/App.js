import React from 'react'
import './App.scss'
import Navbar from '../components/Navbar'
import ProjectContainer from './ProjectContainer'
import Contact from '../components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProjectContainer />
      <Contact />
    </div>
  );
}

export default App;
