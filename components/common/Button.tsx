
import React from 'react';

export interface ButtonProps {
  label: string; 
  onClick?: () => void; 
  disabled?: boolean; 
  className?: string; 
  type?: 'button' | 'submit' | 'reset'; 
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = '',
  type = 'button', 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition-all ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
