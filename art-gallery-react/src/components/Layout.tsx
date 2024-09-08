import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

interface LayoutProps {
    children: React.ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            {children}
        </LayoutContainer>
    );
};

export default Layout;