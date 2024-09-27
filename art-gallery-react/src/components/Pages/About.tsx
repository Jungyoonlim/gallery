import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const AboutContainer = styled(motion.div)`

`;



const menu = styled.div`
    position: absolute;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
`;

const skillContainer = styled.div`


`;



const About: React.FC = () => {
    return (
        <div className="AboutContainer">
            <div className="menu">
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
        </div>
        </div>

    );
};

export default About;