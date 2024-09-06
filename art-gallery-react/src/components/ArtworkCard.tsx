import React from 'react';
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

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
    return (
        <motion.div
            whileHover={({ scale: 1.05 })}
            whileTap={({ scale: 0.95 })}
            className="artwork-card"
        >
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h3>{artwork.title}</h3>
        </motion.div>
    );
};

export default ArtworkCard; 
