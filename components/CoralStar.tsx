import React from 'react';

export const CoralStar: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" 
        fill="#FF7576"
      />
      <path 
        d="M18 4L18.5 6.5L21 7L18.5 7.5L18 10L17.5 7.5L15 7L17.5 6.5L18 4Z" 
        fill="#FF7576"
        opacity="0.7"
      />
    </svg>
  );
};
