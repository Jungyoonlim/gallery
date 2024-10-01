import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from '../ArtworkCard';
import { waterArtworks } from '../../data/artworks';
import GalleryNav from '../GalleryNav';
import ArrowIcon from '../Icons/ArrowIcon';

const GalleryContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 60vh; 
  background-color: white; 
  justify-content: center; 
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
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightWater: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '50%' : '-50%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({ 
            zIndex: 0,
            x: direction > 0 ? '-50%' : '50%',    
            opacity: 0,
        }),
    };

    const handleArtworkClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setSelectedIndex(null);
    };

    const handleNext = () => {
        setDirection(1);
        setSelectedIndex((prevIndex) => 
            prevIndex !== null ? (prevIndex + 1) % waterArtworks.length : null
        );
    };

    const handlePrev = () => {
        setDirection(-1);
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
            <AnimatePresence initial={false} custom={direction}>
                {selectedIndex !== null && (
                    <SlideshowContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <CloseButton onClick={handleClose}>✕</CloseButton>
                        <PrevButton onClick={handlePrev}>
                            <ArrowIcon direction="left" />
                        </PrevButton>
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <ImageWrapper
                                key={selectedIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 150, damping: 30 },
                                }}
                            >
                                <ArtworkCard artwork={waterArtworks[selectedIndex]} />
                            </ImageWrapper>
                        </AnimatePresence>
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