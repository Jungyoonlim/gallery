import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


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
            <div className="AboutContainer">
            <Menu>
                <SkillContainer>
            <section className="skillContainer">
                <article className="technical-skills">
                <ul>HTML/CSS</ul>
                <ul>JavaScript</ul>
                <ul>TypeScript</ul>
                <ul>React</ul>
                <ul>Tailwind</ul>
                <ul>Next.js</ul>
                <ul>Three.js</ul>
                <ul>Framer Motion</ul>

                </article>
                <article className="design">

                </article>
            </section>
                </SkillContainer>
        </Menu>
        </div>
    );
};

export default About;