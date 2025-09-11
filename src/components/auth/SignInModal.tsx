import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';

const SignInModal: React.FC = () => {
  const { isModalOpen, closeModal } = useAuth();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
        <button onClick={closeModal} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800">&times;</button>
        <div className="text-center">
            <Heading level={2} className="text-3xl font-bold mb-2">Sign In</Heading>
            <p className="text-gray-500 mb-8">Welcome back to ShoeStyle</p>
        </div>
        <form className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
            <Button text="Sign In" onClick={(e) => { e.preventDefault(); alert('Signed in!'); closeModal(); }} className="w-full" type="submit" />
            <p className="text-center text-sm text-gray-500">
                Don't have an account? <a href="#" className="font-semibold text-teal-600 hover:underline">Sign Up</a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;