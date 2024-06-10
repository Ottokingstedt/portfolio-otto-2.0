"use client";

import React, { useState, useEffect } from 'react';
import { motion, easeInOut, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Counter from './Counter'; // Adjust the path as necessary

const TransitionEffect = () => {
    const [isTransitioning, setIsTransitioning] = useState(true);
    const router = useRouter();
    const duration = 3; // Duration in seconds for both transition and counter

    useEffect(() => {
        const handleComplete = () => setIsTransitioning(false);

        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 0, opacity: 0 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ ease: easeInOut, duration, delay: duration }}
                    className="fixed inset-0 bg-white z-50 pointer-events-none"
                    onAnimationComplete={() => setIsTransitioning(false)}
                >
                    <div className="flex items-center justify-center h-full">
                        <Counter value={100} duration={duration * 1000} /> {/* Duration in milliseconds */}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TransitionEffect;
