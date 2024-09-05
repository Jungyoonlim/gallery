import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        >
            <h1>Gallery</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;