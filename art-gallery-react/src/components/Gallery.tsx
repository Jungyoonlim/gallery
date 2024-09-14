import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from './ArtworkCard';
import GalleryNav from './GalleryNav';
import ArrowIcon from './ArrowIcon';

const GalleryContainer = styled(motion.div)`
    position: relative;
    width: 1440px;
    height: 1024px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled(motion.div)<{ top: number; left: number; width: number; height: number; url: string }>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: url(${props => props.url});
  background-size: cover;
  cursor: pointer;
`;

const Text = styled.div`
  position: absolute;
  width: 194px;
  height: 90px;
  left: 27px;
  top: 37px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
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
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const artworks = [
    { id: 1, top: 37, left: 327, width: 350, height: 269.36, url: "/images/pond.jpg" },
    { id: 2, top: 37, left: 1087, width: 332, height: 451.14, url: "/images/lilies.jpg" },
    { id: 3, top: 340, left: 327, width: 350, height: 283.33, url: "/images/water.jpg" },
    { id: 4, top: 343, left: 715, width: 350, height: 277.33, url: "/images/faces.jpg" },
    { id: 5, top: 37, left: 715, width: 350, height: 277.33, url: "/images/pond_print.jpg" },
    { id: 6, top: 512, left: 1087, width: 322, height: 443, url: "/images/Student Images_-4 2.jpg" },
    { id: 7, top: 660, left: 327, width: 350, height: 263.46, url: "/images/chandelier.jpg" },
    { id: 8, top: 648, left: 715, width: 350, height: 287.46, url: "/images/duck.jpg" },
  ];

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
      prevIndex !== null ? (prevIndex + 1) % artworks.length : null
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex((prevIndex) => 
      prevIndex !== null ? (prevIndex - 1 + artworks.length) % artworks.length : null
    );
  };

  return (
    <GalleryContainer>
      {artworks.map((artwork, index) => (
        <Image
          key={artwork.id}
          top={artwork.top}
          left={artwork.left}
          width={artwork.width}
          height={artwork.height}
          url={artwork.url}
          onClick={() => handleArtworkClick(index)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      ))}
      <Text>
        Jungyoon Lim
        Artist, Designer, Engineers
      </Text>
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
                <img src={artworks[selectedIndex].url} alt={`Artwork ${selectedIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </ImageWrapper>
            </AnimatePresence>
            <NextButton onClick={handleNext}>
              <ArrowIcon direction="right" />
            </NextButton>
            <GalleryNav 
              totalImages={artworks.length} 
              currentIndex={selectedIndex} 
              onNavigate={setSelectedIndex} 
            />
          </SlideshowContainer>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;