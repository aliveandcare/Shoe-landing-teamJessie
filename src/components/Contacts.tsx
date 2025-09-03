import React from 'react';
import Button from './reusable/Button';

const Contacts: React.FC = () => {
  const handleSubmit = () => alert('Form submitted!');

  return (
    <div>
  <Button text="Add to Cart" onClick={handleSubmit} />
    </div>
  );
};

export default Contacts;
