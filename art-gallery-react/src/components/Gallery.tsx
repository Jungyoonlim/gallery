import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; 
import ArtworkCard from './ArtworkCard';
import { artworks } from '../data/artworks';

const GalleryContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
`;

const NavigationButton = styled.button`
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 20px; 
`;

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < artworks.length - 1 ? prevIndex + 1: 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : artworks.length - 1 
        );
    };

    return (
        <GalleryContainer>
            <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >   
                    <ArtworkCard artwork={artworks[currentIndex]} />
                </motion.div>
            </AnimatePresence>
            <NavigationButton onClick={handleNext}>&gt;</NavigationButton>
        </GalleryContainer>
    );
};



export default Gallery;