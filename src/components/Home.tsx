import React from 'react';
import Button from './reusable/Button';

const Home: React.FC = () => {
  const handleClick = () => alert('Home button clicked!');

  return (
    <div>
  <Button text="Shop Collection" onClick={handleClick} />
    </div>
  );
};

export default Home;
