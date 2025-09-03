import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = '',
}) => {
  const tagName = `h${Math.max(1, Math.min(6, level))}`;

  const levelStyles: { [key: number]: string } = {
    1: 'text-4xl font-bold mb-4',
    2: 'text-3xl font-semibold mb-3',
    3: 'text-2xl font-semibold mb-3',
    4: 'text-xl font-medium mb-2',
    5: 'text-lg font-medium mb-2',
    6: 'text-base font-medium mb-2',
  };

  const combinedClassName = `${levelStyles[level]} ${className}`.trim();

  return React.createElement(
    tagName,
    { className: combinedClassName },
    children
  );
};

export default Heading;

