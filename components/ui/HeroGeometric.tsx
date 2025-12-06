'use client';

import { motion } from 'framer-motion';

interface HeroGeometricProps {
    className?: string;
}

export default function HeroGeometric({ className = '' }: HeroGeometricProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Large circle - top right */}
            <motion.div
                className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-brand-blue/[0.07]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            {/* Medium circle - overlapping */}
            <motion.div
                className="absolute top-32 right-16 w-[280px] h-[280px] rounded-full border border-brand-blue/[0.05]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            />

            {/* Small accent circle */}
            <motion.div
                className="absolute top-48 right-64 w-3 h-3 rounded-full bg-brand-coral/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            />

            {/* Diagonal line composition */}
            <motion.div
                className="absolute top-[35%] right-[20%] w-32 h-px bg-gradient-to-r from-brand-blue/10 to-transparent origin-left rotate-[35deg]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.div
                className="absolute top-[40%] right-[18%] w-20 h-px bg-gradient-to-r from-brand-coral/15 to-transparent origin-left rotate-[35deg]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            />

            {/* Bottom left subtle element */}
            <motion.div
                className="absolute bottom-32 left-16 w-24 h-24 border border-brand-blue/[0.04] rounded-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Floating diamond */}
            <motion.div
                className="absolute top-[60%] right-[30%] w-4 h-4 rotate-45 border border-brand-blue/10"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            />

            {/* Micro dots cluster */}
            <div className="absolute top-[25%] right-[35%]">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-brand-blue/15"
                        style={{
                            top: i * 8,
                            left: i * 12,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                    />
                ))}
            </div>
        </div>
    );
}
