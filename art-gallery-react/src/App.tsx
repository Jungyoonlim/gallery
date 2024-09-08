import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import './styles/index.css';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </main>
    </Router>
    </AppContainer>
  )
}

export default App;
