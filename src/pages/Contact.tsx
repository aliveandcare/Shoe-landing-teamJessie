import React from 'react';
import Heading from '../components/reusable/Heading';
import Paragraph from '../components/reusable/Paragraph';
import Button from '../components/reusable/Button';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 text-center">
      <Heading level={1} className="mb-4">Contact Us</Heading>
      <Paragraph className="mb-8">
        Have questions? We'd love to hear from you.
      </Paragraph>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Your Message" rows={5} className="w-full p-3 border rounded-md"></textarea>
        <Button text="Send Message" onClick={() => alert('Message sent!')} type="submit" />
      </form>
    </div>
  );
};

export default Contact;