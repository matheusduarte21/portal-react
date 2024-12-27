import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = "w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 shadow-sm";
  const variants = {
    primary: "bg-gradient-to-r from-[#5200a0] to-[#3cabe0] hover:from-[#5200a0]/90 hover:to-[#3cabe0]/90 text-white focus:ring-[#3cabe0]/50",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 focus:ring-gray-200"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}