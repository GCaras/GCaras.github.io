import React from 'react';
import NavBar from './NavBar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import styled from 'styled-components';

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`

function App() {
  return (
    <div>
      <AppContainer>
        <NavBar/>
        <Intro/>
        <Skills/>
        <Projects/>
      </AppContainer>
    </div>
  );
}

export default App;
