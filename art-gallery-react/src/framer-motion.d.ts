declare module 'framer-motion' {
    export * from 'framer-motion/dist/framer-motion';
    
    // Fix for AnimatePresence and motion
    import React from 'react';
    import { AnimatePresenceProps } from 'framer-motion/types/components/AnimatePresence/types';
    
    export const AnimatePresence: React.FC<React.PropsWithChildren<AnimatePresenceProps>>;
    export const motion: any; // This allows motion.div, motion.button etc. to work
} 