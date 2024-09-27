import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const AboutContainer = styled(motion.div)`
    padding: 20px; 
`;


const Menu = styled.div`
    position: absolute;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
`;

const SkillContainer = styled.div`
    margin-top: 20px; 
`;




const About: React.FC = () => {
    return (
        <AboutContainer>
            <div className="AboutContainer">
            <Menu>
                <SkillContainer>
                <section className="left-col">
                <ul>About</ul>
                <ul>Light and Water</ul>
                <ul>Expressions</ul>
                <ul>Pictorial</ul>
            </section>
            <section className="skillContainer">
                <article className="technical-skills">


                </article>
                <article className="design">

                </article>
            </section>
                </SkillContainer>
        </Menu>
        </div>
        </AboutContainer>
    );
};

export default About;