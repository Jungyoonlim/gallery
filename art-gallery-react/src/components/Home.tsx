import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`

const ContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MenuContainer = styled(motion.div)`
    display: flex;
    flex-direction: column; 
    align-items: left; 
    padding: 1.5rem; 
`

const MenuItem = styled(motion(Link))`
    display: block
    font-size: 2rem;
    color: #333;
    text-decoration: none;
    margin: 0.5rem 0; 
    padding: 0.3rem 0.8rem; 
    transition: color 0.3s ease; 
`

const Home: React.FC = () => {
    return (
      <HomeContainer>
        <ContentContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MenuContainer>
            <MenuItem 
              to="/about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </MenuItem>
            <MenuItem 
              to="/lightwater"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Light and Water
            </MenuItem>
            <MenuItem 
              to="/expressions"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Expressions
            </MenuItem>
            <MenuItem 
              to="/doodle"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Doodle
            </MenuItem>
            <MenuItem 
              to="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </MenuItem>
          </MenuContainer>
        </ContentContainer>
      </HomeContainer>
    );
  };
export default Home; 