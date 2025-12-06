'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
    variant?: 'dots' | 'line' | 'geometric';
    className?: string;
}

export default function SectionDivider({ variant = 'geometric', className = '' }: SectionDividerProps) {
    if (variant === 'dots') {
        return (
            <div className={`flex items-center justify-center gap-3 py-8 ${className}`}>
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-brand-blue/20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                    />
                ))}
            </div>
        );
    }

    if (variant === 'line') {
        return (
            <div className={`flex items-center justify-center py-8 ${className}`}>
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '200px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                />
            </div>
        );
    }

    // Geometric variant - subtle intersecting lines
    return (
        <div className={`flex items-center justify-center py-12 overflow-hidden ${className}`}>
            <div className="relative w-24 h-12">
                {/* Horizontal line */}
                <motion.div
                    className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                />
                {/* Center diamond */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-brand-blue/20"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                />
                {/* Side dots */}
                <motion.div
                    className="absolute top-1/2 left-2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-blue/15"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                />
                <motion.div
                    className="absolute top-1/2 right-2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand-blue/15"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                />
            </div>
        </div>
    );
}
