import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; 
import ArtworkCard from './ArtworkCard';
import { waterArtworks } from '../data/artworks';

const GalleryContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px;
`;

const NavigationButton = styled.button`
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 20px; 
`;

const ThemeContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto; 
`;

const ThemeCard = styled(motion.div)`
    position: relative;
    height: 250px; 
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ThemeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${ThemeCard}:hover & {
        transform: scale(1.05);
    }
`;

const ThemeOverlay = styled.div`
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0,0,0,0));
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center; 
`

const themes = [
    { name: 'Water', image: 'images/pond.jpg'},
    { name: 'Expressions', image: 'images/faces.jpg'},
];

// Renders a theme selector component
const ThemeSelector: React.FC<{}> = () => {
    return (
        <ThemeContainer>
            {themes.map((theme, index) => (
                <ThemeCard key={index}>
                    <ThemeImage src={theme.image} alt={theme.name} />
                    <ThemeOverlay>{theme.name}</ThemeOverlay>
                </ThemeCard>
            ))}
        </ThemeContainer>
    );
};

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex < waterArtworks.length - 1 ? prevIndex + 1: 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : waterArtworks.length - 1 
        );
    };




    return (
        <GalleryContainer>
            <NavigationButton onClick={handlePrev}>&lt;</NavigationButton>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50}}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                >   
                    <ArtworkCard artwork={waterArtworks[currentIndex]} />
                </motion.div>
            </AnimatePresence>
            <NavigationButton onClick={handleNext}>&gt;</NavigationButton>
        </GalleryContainer>
    );
};



export default Gallery;