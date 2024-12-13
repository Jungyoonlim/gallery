import React from 'react';
import styled from 'styled-components';
import { Artwork } from '../types/artwork';

const ArtworkCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    background-color: white;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: bottom;
    transition: opacity 0.3s ease-in-out;
`;

interface ArtworkCardProps {
    artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <ArtworkCardContainer>
            <StyledImage
                src={artwork.imageUrl}
                alt={artwork.title}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        </ArtworkCardContainer>
    );
};

export default ArtworkCard;