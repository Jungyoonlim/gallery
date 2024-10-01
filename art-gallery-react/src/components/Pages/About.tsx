import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BioContainer = styled.div`
  position: absolute;
  width: 810px;
  max-width: calc(100% - 40px);
  left: 475px;
  top: 10px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 1285px) { // 475 + 810
    left: 0;
    width: 100%;
  }

  @media (max-width: 810px) {
    position: relative;
    top: 44px;
    padding: 20px 0;
  }
`;

const Bio = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #333;
  margin: 0;

  @media (max-width: 810px) {
    font-size: 24px;
    line-height: 30px;
  }
`;


const About: React.FC = () => {
    return (
            <BioContainer>
                    <Bio>
                        <p>Jungyoon Lim (b. 1999, Seoul, Korea) is a design engineer. </p>
                        <p>She spent her childhood drawing and painting, <br></br> her teenage years reading classics, <br></br>and studied math and philosophy in college, <br></br> but now she designs and codes digital objects. 
                        </p>
                    </Bio>
        </BioContainer>
    );
};

export default About;