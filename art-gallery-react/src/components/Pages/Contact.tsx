import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
`

const Contact: React.FC = () => {
    return (
        <HomeContainer>
            <p>Contact me at @jungyoonlim</p>
        </HomeContainer>
    );
};

export default Contact; 