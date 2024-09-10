import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; 
import ArtworkCard from './ArtworkCard';
import { waterArtworks } from '../data/artworks';
import GalleryNav from './GalleryNav';
import ArrowIcon from './ArrowIcon';

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column; 
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

const NavigationButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:focus {
    outline: none;
  }
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
                <NavigationButton 
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                    <ArrowIcon direction="left" />
                </NavigationButton>
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
                <NavigationButton 
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 10 
                    }}
                >
                    <ArrowIcon direction="right" />
                </NavigationButton>
            </ArtworkContainer>
            <GalleryNav 
                totalImages={waterArtworks.length} 
                currentIndex={currentIndex} 
                onNavigate={setCurrentIndex} 
            />
        </GalleryContainer>
    );
};

export default LightWater;