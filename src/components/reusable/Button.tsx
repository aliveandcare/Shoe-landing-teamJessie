import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}) => {

  const baseClasses = 'px-8 py-3 font-bold text-white rounded-lg bg-teal-600 hover:bg-teal-700 active:bg-teal-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {text}
    </button>
  );
};

export default Button;