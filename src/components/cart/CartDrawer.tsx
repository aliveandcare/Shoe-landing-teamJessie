import React from 'react';
import { useCart } from '../../context/CartContext';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { isOpen, toggleCart, items, removeFromCart, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <Heading level={3}>Your Cart</Heading>
            <button onClick={toggleCart} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
          </div>

          <div className="flex-grow p-6 overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map(item => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-grow">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">
                      REMOVE
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className={items.length === 0 ? 'pointer-events-none' : ''} onClick={items.length > 0 ? toggleCart : undefined}>
                <Button text="Checkout" onClick={() => {}} className="w-full" disabled={items.length === 0} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;