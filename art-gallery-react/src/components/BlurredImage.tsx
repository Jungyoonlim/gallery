import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img<{ isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => props.isLoaded ? 1 : 0};
`;

const PlaceholderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(20px);
  transform: scale(1.1); /* To avoid blur bleeding edges */
  transition: opacity 0.3s ease-in-out;
`;

interface BlurredImageProps {
  src: string;
  webpSrc?: string;
  placeholderSrc?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
  onLoad?: () => void;
  loading?: 'lazy' | 'eager';
}

/**
 * A component that shows a blurred placeholder while the main image loads
 * Can also use WebP images with JPG fallback
 */
const BlurredImage: React.FC<BlurredImageProps> = ({
  src,
  webpSrc,
  placeholderSrc,
  alt,
  width,
  height,
  style,
  className,
  onLoad,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [placeholderLoaded, setPlaceholderLoaded] = useState(false);
  
  // Pre-load the placeholder image
  useEffect(() => {
    if (placeholderSrc) {
      const img = new Image();
      img.onload = () => setPlaceholderLoaded(true);
      img.src = placeholderSrc;
    } else {
      // If there's no placeholder, consider it "loaded"
      setPlaceholderLoaded(true);
    }
  }, [placeholderSrc]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <ImageContainer style={{ width, height, ...style }} className={className}>
      {placeholderSrc && placeholderLoaded && !isLoaded && (
        <PlaceholderImage
          src={placeholderSrc}
          aria-hidden="true"
          alt=""
          style={{ opacity: isLoaded ? 0 : 1 }}
        />
      )}
      
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <source srcSet={src} type="image/jpeg" />
          <StyledImage
            src={src}
            alt={alt}
            loading={loading}
            onLoad={handleImageLoad}
            isLoaded={isLoaded}
          />
        </picture>
      ) : (
        <StyledImage
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleImageLoad}
          isLoaded={isLoaded}
        />
      )}
    </ImageContainer>
  );
};

export default BlurredImage; 