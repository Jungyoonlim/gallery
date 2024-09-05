import React from 'react';
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
    <AppContainer>
        <Header />
        <main>
          <Gallery />
        </main>
    </AppContainer>
  );
};

export default App;
