import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.nav`
  width: 200px;
  background-color: #ffffff;
  padding: 50px;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
`;

const SidebarLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 30px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar>
        <SidebarLink to="/about">About</SidebarLink>
        <SidebarLink to="/gallery">Overview</SidebarLink>
        <SidebarLink to="/LightWater">Light and Water</SidebarLink>
        <SidebarLink to="/Expression">Expressions</SidebarLink>
        <SidebarLink to="/doodle">Doodle</SidebarLink>
        <SidebarLink to="/contact">Contact</SidebarLink>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};

export default Layout;