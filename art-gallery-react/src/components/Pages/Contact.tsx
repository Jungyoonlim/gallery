import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`

const Contact: React.FC = () => {
    return (
        <HomeContainer>
            <h2>Contact me at @jungyoonlim</h2>
        </HomeContainer>
    );
};

export default Contact; 