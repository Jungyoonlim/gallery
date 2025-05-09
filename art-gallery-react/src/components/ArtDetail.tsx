import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Artwork } from '../types/artwork';

interface Props {
    artwork: Artwork;
    onClose: () => void;
}

const ArtDetail: React.FC<Props> = ({ artwork, onClose }) => {
    return (
        <>
            {artwork && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="art-detail"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                        >
                            Close
                        </motion.button>
                        <img src={artwork.imageUrl} alt={artwork.title} />
                        <h2>{artwork.title}</h2>
                        <p>{artwork.description}</p>
                    </motion.div>
                </AnimatePresence>
            )}
        </>
    );
};

export default ArtDetail;