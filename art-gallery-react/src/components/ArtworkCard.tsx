import React from 'react';
import styled from 'styled-components';
import { Artwork } from '../types/artwork';

const ArtworkCardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    background-color: white;
`

interface ArtworkCardProps {
    artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <ArtworkCardContainer>
            <div style={{ position: 'relative' }}>
                {!isLoaded && (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            background: '#f0f0f0',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1
                        }}
                    />
                )}
                <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    loading="lazy"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                        display: 'block',
                        width: '100%',
                        height: 'auto'
                    }}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
        </ArtworkCardContainer>
    );
};

export default ArtworkCard;