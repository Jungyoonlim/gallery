import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import BlurredImage from '../BlurredImage';

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
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  
  img {
    max-width: 90%;
    max-height: 95%;
  }
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

interface Image {
  id: number;
  url: string;
  webpUrl: string;
  placeholderUrl: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  const artworks: Image[] = [
    { id: 1, url: "/images/pond.jpg", webpUrl: "/images/webp/pond.webp", placeholderUrl: "/images/placeholders/pond-placeholder.jpg" },
    { id: 2, url: "/images/lilies.jpg", webpUrl: "/images/webp/lilies.webp", placeholderUrl: "/images/placeholders/lilies-placeholder.jpg" },
    { id: 3, url: "/images/water.jpg", webpUrl: "/images/webp/water.webp", placeholderUrl: "/images/placeholders/water-placeholder.jpg" },
    { id: 4, url: "/images/pond_print.jpg", webpUrl: "/images/webp/pond_print.webp", placeholderUrl: "/images/placeholders/pond_print-placeholder.jpg" },
    { id: 5, url: "/images/pond_print2.jpg", webpUrl: "/images/webp/pond_print2.webp", placeholderUrl: "/images/placeholders/pond_print2-placeholder.jpg" },
    { id: 6, url: "/images/faces.jpg", webpUrl: "/images/webp/faces.webp", placeholderUrl: "/images/placeholders/faces-placeholder.jpg" },
    { id: 7, url: "/images/light.jpg", webpUrl: "/images/webp/light.webp", placeholderUrl: "/images/placeholders/light-placeholder.jpg" },
    { id: 8, url: "/images/glass.jpg", webpUrl: "/images/webp/glass.webp", placeholderUrl: "/images/placeholders/glass-placeholder.jpg" },
    { id: 9, url: "/images/glass2.jpg", webpUrl: "/images/webp/glass2.webp", placeholderUrl: "/images/placeholders/glass2-placeholder.jpg" },
    { id: 10, url: "/images/duck.jpg", webpUrl: "/images/webp/duck.webp", placeholderUrl: "/images/placeholders/duck-placeholder.jpg" },
    { id: 11, url: "/images/horizontalface.jpg", webpUrl: "/images/webp/horizontalface.webp", placeholderUrl: "/images/placeholders/horizontalface-placeholder.jpg" },
    { id: 12, url: "/images/flower.jpg", webpUrl: "/images/webp/flower.webp", placeholderUrl: "/images/placeholders/flower-placeholder.jpg" },
    { id: 13, url: "/images/snow-school.jpg", webpUrl: "/images/webp/snow-school.webp", placeholderUrl: "/images/placeholders/snow-school-placeholder.jpg" },
    { id: 14, url: "/images/met.jpg", webpUrl: "/images/webp/met.webp", placeholderUrl: "/images/placeholders/met-placeholder.jpg" },
    { id: 15, url: "/images/portrait.jpg", webpUrl: "/images/webp/portrait.webp", placeholderUrl: "/images/placeholders/portrait-placeholder.jpg" },
    { id: 16, url: "/images/portrait_print.jpg", webpUrl: "/images/webp/portrait_print.webp", placeholderUrl: "/images/placeholders/portrait_print-placeholder.jpg" },
    { id: 17, url: "/images/IMG_1981.jpg", webpUrl: "/images/webp/IMG_1981.webp", placeholderUrl: "/images/placeholders/IMG_1981-placeholder.jpg" },
    { id: 18, url: "/images/chandelier.jpg", webpUrl: "/images/webp/chandelier.webp", placeholderUrl: "/images/placeholders/chandelier-placeholder.jpg" }
  ];

  useEffect(() => {
    setTotalImages(artworks.length);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <GalleryContainer allLoaded={imagesLoaded >= Math.min(6, totalImages)}>
      <GridContainer>
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GridItem
              key={artwork.id}
              url={artwork.url}
              onClick={() => setSelectedImage(artwork)}
            >
              <BlurredImage
                src={artwork.url}
                webpSrc={artwork.webpUrl}
                placeholderSrc={artwork.placeholderUrl}
                alt={`Artwork ${artwork.id}`}
                // Don't lazy load the first 6 images (visible above the fold)
                style={{ width: '100%', height: '100%' }}
                onLoad={index < 6 ? handleImageLoad : undefined}
              />
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
            <BlurredImage
              src={selectedImage.url}
              webpSrc={selectedImage.webpUrl}
              placeholderSrc={selectedImage.placeholderUrl}
              alt={`Selected artwork`}
              style={{ maxHeight: '80vh', maxWidth: '80vw' }}
            />
            <CloseButton onClick={() => setSelectedImage(null)}>✕</CloseButton>
          </SlideshowContainer>
        )}
      </AnimatePresence>
    </GalleryContainer>
  );
};

export default Gallery;


