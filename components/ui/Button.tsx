import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none tracking-wide";

  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
    secondary: "bg-surfaceHighlight text-white hover:bg-zinc-700",
    outline: "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white bg-transparent backdrop-blur-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};