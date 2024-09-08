import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; 
import ArtworkCard from './ArtworkCard';
import { waterArtworks } from '../data/artworks';
import GalleryNav from './GalleryNav';

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
    font-size: 2rem;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    color: #333;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.4);
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
                    &lt;
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
                    &gt;
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