import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; 
import ArtworkCard from './ArtworkCard';
import { waterArtworks } from '../data/artworks';

const GalleryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    width: 100%;
    position: relative;
`;

const ArtworkContainer = styled.div`
    width: 90%; 
    max-width: 1200px; 
    display: flex; 
    align-items: center; 
`;

const ImageWrapper = styled.div`
    width: 95%; 
    aspect-ratio: 16 / 9; 
    margin: 0 auto; 
`

const NavigationButton = styled.button`
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 20px; 
    z-index: 1;
`;

const LightWater: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < waterArtworks.length - 1 ? prevIndex + 1: 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : waterArtworks.length - 1 
        );
    };

    return (
        <GalleryContainer>
            <ArtworkContainer> 
                <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
                <ImageWrapper> 
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50}}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            style={{ width: '100%', height: '100%' }}
                        >   
                            <ArtworkCard artwork={waterArtworks[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </ImageWrapper>
                <NavigationButton onClick={handleNext}>&gt;</NavigationButton>
            </ArtworkContainer>
        </GalleryContainer>
    );
};

export default LightWater;