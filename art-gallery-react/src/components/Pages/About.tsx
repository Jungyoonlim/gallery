import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Menu = styled.div`
    position: absolute;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #333; 
    font-size: 20px;
    font-family: 'Inter', sans-serif; 
    line-height: 36px;
`;

const AboutContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    max-width: 1000px;
    width: 100%;
    margin: 2rem auto;
    padding: 0 1rem;
    font-family: 'Inter', sans-serif; 

      @media (max-width: 768px) {
        flex-direction: column; 
        margin: 1rem auto;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px; // Space between bio and skill list
`;

const Bio = styled.p`
    font-size: 20px;
    line-height: 1.6;
    color: #333;
    text-align: left;
    font-family: 'Inter', sans-serif;
`;

const SkillContainer = styled.div`
    margin-top: 20px; 
`;


const About: React.FC = () => {
    return (
            <AboutContainer>
                <ContentContainer>
                    <Bio>
                        <p>Jungyoon Lim (b. 1999, Seoul, KR) is a designer and design engineer. </p>
                    </Bio>
                </ContentContainer>
        </AboutContainer>
    );
};

export default About;