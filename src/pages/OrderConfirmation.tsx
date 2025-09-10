import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/reusable/Heading';
import Button from '../components/reusable/Button';

const OrderConfirmation: React.FC = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <Heading level={1} className="mt-6 text-3xl font-extrabold text-gray-900">
          Thank you for your order!
        </Heading>
        <p className="mt-4 text-gray-600">
          Your order has been placed successfully. Your order number is <span className="font-semibold text-gray-800">#{orderNumber}</span>.
        </p>
        <p className="mt-2 text-gray-600">
          We've sent a confirmation email with your order details.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button text="Continue Shopping" onClick={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;