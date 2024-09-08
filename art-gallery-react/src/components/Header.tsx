import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css'; 

const Header: React.FC = () => {
    return (
        <header>
            <h1>Gallery</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;