import React from 'react';
import Heading from '../components/reusable/Heading';
import Paragraph from '../components/reusable/Paragraph';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Heading level={1} className="text-center mb-8">Privacy Policy</Heading>
      <Paragraph className="mb-4">
        Your privacy is important to us. It is ShoeStyle's policy to respect your privacy regarding any information we may collect from you across our website.
      </Paragraph>
      <Paragraph>
        We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
      </Paragraph>
    </div>
  );
};

export default PrivacyPolicy;