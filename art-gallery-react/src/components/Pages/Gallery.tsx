import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryContainer = styled.div<{ allLoaded: boolean }>`
  display: flex;
  padding: 20px;
  background-color: #ffffff;
  transition: opacity 0.6s ease-in-out;
  opacity: ${(props) => (props.allLoaded ? 1 : 0)};
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 60px 20px;
  width: 100%;
  padding: 10px;
  margin: 40px 0; 
  
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
  overflow: hidden; 
  justify-content: center;
  align-items: flex-end; 
  
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
  const [selectedImage, setSelectedImage] = useState<{ jpg: string; webp: string } | null>(null); 

  const artworks = [
    { id: 1, url: "/images/pond.jpg", webpUrl: "/images/webp/pond.webp" },
    { id: 2, url: "/images/lilies.jpg", webpUrl: "/images/webp/lilies.webp" },
    { id: 3, url: "/images/water.jpg", webpUrl: "/images/webp/water.webp" },
    { id: 4, url: "/images/pond_print.jpg", webpUrl: "/images/webp/pond_print.webp" },
    { id: 5, url: "/images/pond_print2.jpg", webpUrl: "/images/webp/pond_print2.webp" },
    { id: 6, url: "/images/faces.jpg", webpUrl: "/images/webp/faces.webp" },
    { id: 7, url: "/images/light.jpg", webpUrl: "/images/webp/light.webp" },
    { id: 8, url: "/images/glass.jpg", webpUrl: "/images/webp/glass.webp" },
    { id: 9, url: "/images/glass2.jpg", webpUrl: "/images/webp/glass2.webp" },
    { id: 10, url: "/images/duck.jpg", webpUrl: "/images/webp/duck.webp" },
    { id: 11, url: "/images/horizontalface.jpg", webpUrl: "/images/webp/horizontalface.webp" },
    { id: 12, url: "/images/flower.jpg", webpUrl: "/images/webp/flower.webp" },
    { id: 13, url: "/images/snow-school.jpg", webpUrl: "/images/webp/snow-school.webp" },
    { id: 14, url: "/images/met.jpg", webpUrl: "/images/webp/met.webp" },
    { id: 15, url: "/images/portrait.jpg", webpUrl: "/images/webp/portrait.webp" },
    { id: 16, url: "/images/portrait_print.jpg", webpUrl: "/images/webp/portrait_print.webp" },
    { id: 17, url: "/images/IMG_1981.jpg", webpUrl: "/images/webp/IMG_1981.webp" },
    { id: 18, url: "/images/chandelier.jpg", webpUrl: "/images/webp/chandelier.webp" }
  ];

  return (
    <GalleryContainer allLoaded={true}>
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
          onClick={() => setSelectedImage({ jpg: artwork.url, webp: artwork.webpUrl })}
        >
          <picture>
            <source srcSet={artwork.webpUrl} type="image/webp" />
            <source srcSet={artwork.url} type="image/jpeg" />
            <Image src={artwork.url} alt={`Artwork ${artwork.id}`} />
          </picture>
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
          <picture>
            <source srcSet={selectedImage.webp} type="image/webp" />
            <source srcSet={selectedImage.jpg} type="image/jpeg" />
            <img src={selectedImage.jpg} alt="Selected artwork" style={{ maxHeight: '80vh', maxWidth: '80vw' }} />
          </picture>
          <CloseButton onClick={() => setSelectedImage(null)}>✕</CloseButton>
        </SlideshowContainer>
      )}
    </AnimatePresence>
  </GalleryContainer>
  );
};

export default Gallery;


