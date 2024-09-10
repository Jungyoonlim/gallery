import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const AboutContainer = styled.div`
    display: flex;
    flex: 0 0 100%;
    flex-flow: wrap;
    justify-content: center;
    margin: 0 auto;
    min-height: 45rem;
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
        align-content: center;
        margin: 3.6rem auto 0;
    }

    @media (min-width: 1024px) {
        margin: 5rem auto 0;
    }
`;

const ContentContainer = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Paragraph = styled.p`
    font-size: 1rem;
    color: #000000;
    margin-bottom: 1rem;
    font-family: Menlo, Monaco, 'Courier New', monospace;
    line-height: 1.5; 
`;

const About: React.FC = () => {
    return (
        <AboutContainer>
            <ContentContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Paragraph>When Joanne was young, she went to a cram school for art classes. She spent most of the days ... </Paragraph>
                <Paragraph>para2</Paragraph>
                <Paragraph>para3</Paragraph>
                <Paragraph>para4</Paragraph>
            </ContentContainer>
        </AboutContainer>
    );
};

export default About;