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
    placeholderBase64?: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, placeholderBase64 }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <ArtworkCardContainer>
            <div style={{ position: 'relative' }}>
                {!isLoaded && placeholderBase64 && (
                    <img
                        src={placeholderBase64}
                        alt="placeholder"
                        style={{
                            filter: 'blur(10px)',
                            width: '100%',
                            height: 'auto',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    />
                )}
                {artwork.webpUrl ? (
                    <picture>
                        <source srcSet={artwork.webpUrl} type="image/webp" />
                        <source srcSet={artwork.imageUrl} type="image/jpeg" />
                        <img
                            src={artwork.imageUrl}
                            alt={artwork.title}
                            loading="lazy"
                            style={{
                                opacity: isLoaded ? 1 : 0,
                                transition: 'opacity 0.4s ease-in-out',
                                display: 'block',
                                width: '100%',
                                height: 'auto'
                            }}
                            onLoad={() => setIsLoaded(true)}
                        />
                    </picture>
                ) : (
                    <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        loading="lazy"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.4s ease-in-out',
                            display: 'block',
                            width: '100%',
                            height: 'auto'
                        }}
                        onLoad={() => setIsLoaded(true)}
                    />
                )}
            </div>
        </ArtworkCardContainer>
    );
};

export default ArtworkCard;