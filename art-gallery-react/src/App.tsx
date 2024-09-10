import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/LightWater';
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
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/LightWater" element={<Layout><Gallery /></Layout>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </main>
    </Router>
    </AppContainer>
  )
}

export default App;
