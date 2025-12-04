import React from 'react';

export const BrandStar: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 60 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Main Star */}
            <path d="M20 0 L24 14 L40 14 L27 23 L32 38 L20 29 L8 38 L13 23 L0 14 L16 14 Z" fill="#FF7576" />

            {/* Small Star 1 */}
            <path d="M45 8 L47 14 L53 14 L48 18 L50 24 L45 20 L40 24 L42 18 L37 14 L43 14 Z" fill="#FF7576" />
        </svg>
    );
};
