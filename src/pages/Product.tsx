import React from 'react';
import Heading from '../components/reusable/Heading';
import Features from '../sections/Features';

const Product: React.FC = () => {
  return (
    <div>
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
            <Heading level={1} className="mb-4">Our Products</Heading>
        </div>
        <Features />
    </div>
  );
};

export default Product;