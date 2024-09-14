import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
`;

const NavDot = styled(motion.div)<{ active: boolean }>`
    width: 8px;
    height: 8px; 
    border-radius: 50%;
    background-color: ${props => props.active ? '#333': '#ccc'};
    margin: 0 5px;
    cursor: pointer;
    opacity: 0.7;
`;

interface GalleryNavProps {
    totalImages: number;
    currentIndex: number;
    onNavigate: (index: number) => void;
}

const GalleryNav: React.FC<GalleryNavProps> = ({ totalImages, currentIndex, onNavigate }) => {
    console.log('GalleryNav rendered:', { totalImages, currentIndex });
    return (
        <NavContainer>
            {Array.from({ length: totalImages }, (_, index) => (
                <NavDot
                key={index}
                active={index === currentIndex}
                onClick={() => onNavigate(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 10 
                }}
                />
            ))}
        </NavContainer>
    );
};

export default GalleryNav; 