import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ArtworkCard from './ArtworkCard';
import GalleryNav from './GalleryNav';
import ArrowIcon from './Icons/ArrowIcon';

const NavigationButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;



