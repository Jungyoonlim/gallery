import React from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '../types/artwork';

interface Props {
    artwork: Artwork;
    onClick: () => void; 
}

const ArtworkCard: React.FC<Props> = ({ artwork, onClick }) => {
    return (
        <motion.div
            whileHover={({ scale: 1.05 })}
            whileTap={({ scale: 0.95 })}
            className="artwork-card"
            onClick={onClick}
        >
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h3>{artwork.title}</h3>
        </motion.div>
    );
};

export default ArtworkCard; 
