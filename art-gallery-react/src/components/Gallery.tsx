import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
    position: relative;
    width: 1440px;
    height: 1024px;
    background: white; 
`;

const Image = styled.div<{ top: number; left: number; width: number; height: number; url: string }>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: url(${props => props.url});
  background-size: cover;
`;

const Text = styled.div`
  position: absolute;
  width: 194px;
  height: 90px;
  left: 27px;
  top: 37px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <Image top={37} left={327} width={350} height={269.36} url="/images/pond.jpg" />
      <Image top={37} left={1087} width={332} height={451.14} url="/images/lilies.jpg" />
      <Image top={340} left={327} width={350} height={283.33} url="/images/water.jpg" />
      <Image top={343} left={715} width={350} height={277.33} url="/images/Joanne LIm 3.jpg" />
      <Image top={37} left={715} width={350} height={277.33} url="/images/pond_print.jpg" />
      <Image top={512} left={1087} width={322} height={443} url="/images/Student Images_-4 2.jpg" />
      <Image top={660} left={327} width={350} height={263.46} url="/images/chandelier.jpg" />
      <Image top={648} left={715} width={350} height={287.46} url="/images/duck.jpg" />
      <Text>
        Jungyoon Lim
        Artist, Designer, Engineer
        About
        Light and Water
        Expressions
        Doodle
      </Text>
    </GalleryContainer>
  );
};

export default Gallery;