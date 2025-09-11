import React from 'react';
import Heading from '../components/reusable/Heading';
import Paragraph from '../components/reusable/Paragraph';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Heading level={1} className="text-center mb-8">Terms of Service</Heading>
      <Paragraph className="mb-4">
        By accessing the website at ShoeStyle, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
      </Paragraph>
      <Paragraph>
        If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
      </Paragraph>
    </div>
  );
};

export default TermsOfService;