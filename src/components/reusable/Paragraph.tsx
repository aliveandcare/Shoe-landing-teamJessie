import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
  as: Component = 'p',
}) => {
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};
//
export default Paragraph;

