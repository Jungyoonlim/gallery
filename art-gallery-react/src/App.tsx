import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';
import styled from 'styled-components';
import './styles/index.css';
import './App.css';

const AppContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Router>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/Contact" element={<Layout><Contact /></Layout>} />
        </Routes>
        </main>
    </Router>
    </AppContainer>
  )
}

export default App;
