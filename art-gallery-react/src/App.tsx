import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/Pages/LightWater';
import LightWater from './components/Pages/LightWater'; 
import Contact from './components/Pages/Contact';
import Gallery from './components/Pages/Gallery';
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
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/lightwater" element={<LightWater />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </AppContainer>
  );
}

export default App;
