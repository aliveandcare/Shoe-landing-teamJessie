import React from 'react';
import Heading from '../components/reusable/Heading';
import Paragraph from '../components/reusable/Paragraph';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Heading level={1} className="text-center mb-8">About ShoeStyle</Heading>
      <Paragraph>
        Welcome to ShoeStyle, your number one source for all things shoes. We're dedicated to giving you the very best of footwear, with a focus on dependability, customer service and uniqueness.
      </Paragraph>
    </div>
  );
};

export default About;