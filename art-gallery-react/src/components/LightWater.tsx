import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from './ArtworkCard';
import { waterArtworks } from '../data/artworks';
import GalleryNav from './GalleryNav';
import ArrowIcon from './ArrowIcon';

const GalleryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: white;
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  max-width: 1200px;
`;

const SlideshowContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
`;

const NavigationButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

const ImageWrapper = styled(motion.div)`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightWater: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleArtworkClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setSelectedIndex(null);
    };

    const handleNext = () => {
        setSelectedIndex((prevIndex) => 
            prevIndex !== null ? (prevIndex + 1) % waterArtworks.length : null
        );
    };

    const handlePrev = () => {
        setSelectedIndex((prevIndex) => 
            prevIndex !== null ? (prevIndex - 1 + waterArtworks.length) % waterArtworks.length : null
        );
    };

    return (
        <GalleryContainer>
            <GridContainer layout>
                {waterArtworks.map((artwork, index) => (
                    <motion.div
                        key={artwork.id}
                        layoutId={`artwork-${artwork.id}`}
                        onClick={() => handleArtworkClick(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArtworkCard artwork={artwork} />
                    </motion.div>
                ))}
            </GridContainer>
            <AnimatePresence>
                {selectedIndex !== null && (
                    <SlideshowContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <CloseButton onClick={handleClose}>✕</CloseButton>
                        <PrevButton onClick={handlePrev}>
                            <ArrowIcon direction="left" />
                        </PrevButton>
                        <ImageWrapper>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                >   
                                    <ArtworkCard artwork={waterArtworks[selectedIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </ImageWrapper>
                        <NextButton onClick={handleNext}>
                            <ArrowIcon direction="right" />
                        </NextButton>
                        <GalleryNav 
                            totalImages={waterArtworks.length} 
                            currentIndex={selectedIndex} 
                            onNavigate={setSelectedIndex} 
                        />
                    </SlideshowContainer>
                )}
            </AnimatePresence>
        </GalleryContainer>
    );
};

export default LightWater;