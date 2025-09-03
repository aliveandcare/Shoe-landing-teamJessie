import React from 'react';

interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
  as: Component = 'p',
}) => {
  const content = children || "This is placeholder text. Replace this with your own content.";
  
  return (
    <Component className={className}>
      {content}
    </Component>
  );
};

export default Paragraph;
