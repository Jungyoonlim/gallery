import React from 'react';
import styled from 'styled-components';
import { Artwork } from '../types/artwork';
import BlurredImage from './BlurredImage';

const ArtworkCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    background-color: white;
`

interface ArtworkCardProps {
    artwork: Artwork;
    placeholderSrc?: string;
    isAboveTheFold?: boolean;
    onLoad?: () => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ 
    artwork, 
    placeholderSrc,
    isAboveTheFold = false,
    onLoad 
}) => {
    // For artwork, we'll use a placeholder path based on the image name if not provided
    const placeholder = placeholderSrc || 
        (artwork.imageUrl && `/images/placeholders/${artwork.imageUrl.split('/').pop()?.replace('.jpg', '-placeholder.jpg')}`);

    return (
        <ArtworkCardContainer>
            <BlurredImage 
                src={artwork.imageUrl}
                webpSrc={artwork.webpUrl}
                placeholderSrc={placeholder}
                alt={artwork.title}
                loading={isAboveTheFold ? 'eager' : 'lazy'}
                style={{ 
                    width: '100%',
                    height: 'auto' 
                }}
                onLoad={onLoad}
            />
        </ArtworkCardContainer>
    );
};

export default ArtworkCard;