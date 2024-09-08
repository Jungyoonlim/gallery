import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavBar = styled.nav`
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavContainer = styled.div`
    display: flex;
    align-items: center;
`

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Header: React.FC = () => {
    return (
        <NavBar>
          <NavContainer>
            <NavList>
              <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/About">About</NavLink>
              </NavItem>
              <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/LightWater">Light and Water</NavLink>
              </NavItem>
              <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavList>
          </NavContainer>
        </NavBar>
    ); 
};

export default Header;