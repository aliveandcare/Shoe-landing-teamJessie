import React, { useState } from 'react';
import Heading from '../components/reusable/Heading';
import Button from '../components/reusable/Button';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('credit-card');

    const handlePlaceOrder = () => {
        if (items.length === 0) return;
        
        clearCart();
        navigate('/order-confirmation');
    };

  return (
    <div className="bg-gray-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading level={1} className="text-4xl font-extrabold text-gray-900">Checkout</Heading>
        </div>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Shipping and Payment Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heading level={2} className="text-2xl font-bold mb-6">Shipping Address</Heading>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="Last Name" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
                <input type="email" placeholder="Email Address" className="p-3 border rounded-md sm:col-span-2 focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="Street Address" className="p-3 border rounded-md sm:col-span-2 focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="City" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="State / Province" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="Zip / Postal Code" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="Country" className="p-3 border rounded-md focus:ring-2 focus:ring-teal-500" />
              </form>
            </div>
            
            {/* Payment Options */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <Heading level={2} className="text-2xl font-bold mb-6">Payment Options</Heading>
                <div className="space-y-4">
                    <div className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${paymentMethod === 'credit-card' ? 'ring-2 ring-teal-500' : ''}`} onClick={() => setPaymentMethod('credit-card')}>
                        <label htmlFor="credit-card" className="font-medium cursor-pointer">Credit Card</label>
                        <input type="radio" name="payment" id="credit-card" checked={paymentMethod === 'credit-card'} onChange={() => setPaymentMethod('credit-card')} />
                    </div>
                     <div className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${paymentMethod === 'paypal' ? 'ring-2 ring-teal-500' : ''}`} onClick={() => setPaymentMethod('paypal')}>
                        <label htmlFor="paypal" className="font-medium cursor-pointer">PayPal</label>
                        <input type="radio" name="payment" id="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                    </div>
                     <div className={`border p-4 rounded-lg flex items-center justify-between cursor-pointer ${paymentMethod === 'google-pay' ? 'ring-2 ring-teal-500' : ''}`} onClick={() => setPaymentMethod('google-pay')}>
                        <label htmlFor="google-pay" className="font-medium cursor-pointer">Google Pay</label>
                        <input type="radio" name="payment" id="google-pay" checked={paymentMethod === 'google-pay'} onChange={() => setPaymentMethod('google-pay')} />
                    </div>
                </div>

                {/* Dynamic Payment Details Section */}
                <div className="mt-8">
                    {paymentMethod === 'credit-card' && (
                        <div className="space-y-4">
                            <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md" />
                            <input type="text" placeholder="Name on Card" className="w-full p-3 border rounded-md" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Expiration Date (MM/YY)" className="p-3 border rounded-md" />
                                <input type="text" placeholder="CVC" className="p-3 border rounded-md" />
                            </div>
                        </div>
                    )}
                    {paymentMethod === 'paypal' && (
                        <div className="text-center p-4 border-dashed border-2 rounded-lg">
                            <p className="mb-4 text-gray-600">You will be redirected to PayPal to complete your purchase.</p>
                            <Button text="Continue to PayPal" onClick={() => {}} className="bg-blue-600 hover:bg-blue-700" />
                        </div>
                    )}
                    {paymentMethod === 'google-pay' && (
                        <div className="text-center p-4 border-dashed border-2 rounded-lg">
                             <p className="mb-4 text-gray-600">Click the button below to complete your purchase with Google Pay.</p>
                             <Button text="Pay with Google Pay" onClick={() => {}} className="bg-black hover:bg-gray-800" />
                        </div>
                    )}
                </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="bg-white p-8 rounded-lg shadow-md sticky top-28">
              <Heading level={2} className="text-2xl font-bold mb-6">Order Summary</Heading>
              <div className="space-y-4 border-b pb-4 mb-4">
                {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                        <span>{item.title} x {item.quantity}</span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
              </div>
              <div className="space-y-2 border-b pb-4 mb-4">
                 <div className="flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
              </div>
               <div className="flex justify-between font-bold text-lg mb-6">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex gap-2 mb-6">
                    <input type="text" placeholder="Promo Code" className="p-3 border rounded-md w-full" />
                    <Button text="Apply" onClick={() => {}} className="whitespace-nowrap" />
                </div>
                <Button text="Place Order" onClick={handlePlaceOrder} className="w-full" disabled={items.length === 0} />
                <div className="mt-6 flex items-center">
                    <input type="checkbox" id="newsletter" className="mr-2" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">Sign up for our newsletter</label>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;