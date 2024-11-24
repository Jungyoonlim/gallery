import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffffff;
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  width: 100%;
  padding: 10px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
`;

const GridItem = styled.div<{url: string}>`
  aspect-ratio: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #EEEEEE;
  overflow: hidden; 
  justify-content: center;
  align-items: center; 
  
  img {
    max-width: 90%;
    max-height: 95%;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
`

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
  padding: 10px;
  
  img {
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
    
    @media (min-width: 768px) {
      max-width: 80vw;
      max-height: 80vh;
    }
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


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 

  const artworks = [
    { id: 1, top: 37, left: 327, width: 350, height: 269.36, url: "/images/pond.jpg" },
    { id: 2, top: 37, left: 1087, width: 332, height: 451.14, url: "/images/lilies.jpg" },
    { id: 3, top: 340, left: 327, width: 350, height: 283.33, url: "/images/water.jpg" },
    { id: 4, top: 343, left: 715, width: 350, height: 277.33, url: "/images/faces.jpg" },
    { id: 5, top: 37, left: 715, width: 350, height: 277.33, url: "/images/pond_print.jpg" },
    { id: 6, top: 512, left: 1087, width: 322, height: 443, url: "/images/light.jpg" },
    { id: 7, top: 660, left: 327, width: 350, height: 263.46, url: "/images/glass.jpg" },
    { id: 8, top: 648, left: 715, width: 350, height: 287.46, url: "/images/duck.jpg" },
    { id: 9, top: 660, left: 1087, width: 350, height: 277.33, url: "/images/horizontalface.jpg" },
  ];

  return (
    <GalleryContainer>
    <GridContainer>
      {artworks.map((artwork) => (
        <motion.div
          key={artwork.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95}}
        >
          <GridItem
          key={artwork.id}
          url={artwork.url}
          onClick={() => setSelectedImage(artwork.url)}
        >
          <Image src={artwork.url} alt={`Artwork ${artwork.id}`} />
        </GridItem>
        </motion.div>
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


