import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  return (
    <div>
      <NavBar/>
      <Route
      path='/'
      exact
      >
        <Intro/>
        <Skills/>
      </Route>
      <Route
        path='/projects/'
        exact
      >
        <Projects/>
      </Route>
    </div>
  );
}

export default App;
