import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from './ArtworkCard';
import GalleryNav from './GalleryNav';
import ArrowIcon from './ArrowIcon';

const GalleryContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffffff;
`;

const TextSection = styled.div`
  width: 200px;
  padding-right: 20px; 
`;

const GridContainer = styled(motion.div)`
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  flex-grow: 1; 
`;

const GridItem = styled.div<{url: string}>`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden; 
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
`

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
  z-index: 1000; 
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

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
    <TextSection>
      <h2>Jungyoon Lim</h2>
      <p>Artist, Designer, Engineer</p>
      <p>About</p>
      <p>Light and Water Expressions</p>
    </TextSection>
    <GridContainer>
      {artworks.map((artwork) => (
        <GridItem
          key={artwork.id}
          url={artwork.url}
          onClick={() => setSelectedImage(artwork.url)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={artwork.url} alt={`Artwork ${artwork.id}`} />
        </GridItem>
      ))}
    </GridContainer>
    <AnimatePresence>
      {selectedImage && (
        <SlideshowContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={selectedImage} alt="Selected artwork" style={{ maxHeight: '80vh', maxWidth: '80vw' }} />
          <CloseButton onClick={() => setSelectedImage(null)}>✕</CloseButton>
        </SlideshowContainer>
      )}
    </AnimatePresence>
  </GalleryContainer>
  );
};

export default Gallery;


