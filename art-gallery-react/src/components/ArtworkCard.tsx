//?import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Artwork } from '../types/artwork';

const Card = styled.div`
    width: 300px; 
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center; 
`;

const Image = styled.img`
    max-width: 100%;
    height: auto; 
`; 

interface ArtworkCardProps {
    artwork: Artwork; 
}

const ArtworkCardContainer = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const ArtworkCard: React.FC<{ artwork: Artwork }> = ({ artwork }) => {
    return (
        <ArtworkCardContainer>
            <img src={artwork.imageUrl} alt={artwork.title} />
        </ArtworkCardContainer>
    );
};

export default ArtworkCard; 
