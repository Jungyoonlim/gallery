import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArtworkCard from './ArtworkCard';
import ArtDetail from './ArtDetail';
import { artworks } from '../data/artworks';
import { Artwork } from '../types/artwork';
import styled from 'styled-components';

const GalleryContainer = styled(motion.div)`
    display: flex;
    overflow-x: hidden;
    width: 100%;
    padding: 20px; 
`; 

const GalleryTrack = styled(motion.div)`
    display: flex;
    gap: 20px;
`;

const Gallery: React.FC = () => {
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
            }}
        >
            <div className="gallery-grid">
                {artworks.map((artwork) => (
                    <ArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                        onClick={() => setSelectedArtwork(artwork)}
                    />
                ))}
            </div>
            {selectedArtwork && (
                <ArtDetail 
                    artwork={selectedArtwork} 
                    onClose={() => setSelectedArtwork(null)} 
                />  
            )}
        </motion.div>
    );
};

export default Gallery; 