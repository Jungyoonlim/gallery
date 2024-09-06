import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import './styles/index.css';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <main>
          <Gallery />
        </main>
      </AppContainer>
    </Router>
  );
};

export default App;
