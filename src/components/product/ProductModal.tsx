import React, { useState } from 'react';
import { type Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color.');
      return;
    }
    addToCart(product);
    showNotification(`${product.title} was added to your cart.`);
    onClose();
  };

  const menSizes = [7, 8, 9, 10, 11, 12];
  const womenSizes = [5, 6, 7, 8, 9, 10];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 p-4">
            <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="flex justify-between items-start">
            <Heading level={2} className="text-3xl font-bold">{product.title}</Heading>
            <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-800">&times;</button>
          </div>
          <p className="text-2xl text-teal-600 font-semibold my-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Color</h4>
              <div className="flex gap-2">
                {product.colors?.map(color => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`px-4 py-2 text-sm rounded-full border-2 ${selectedColor === color ? 'border-teal-600 bg-teal-50' : 'border-gray-200'}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>
             <div>
              <h4 className="font-semibold mb-2">Men's Sizes</h4>
               <div className="flex gap-2 flex-wrap">
                {menSizes.map(size => (
                  <button key={`men-${size}`} onClick={() => setSelectedSize(`Men's ${size}`)} className={`w-12 h-12 text-sm rounded-full border-2 ${selectedSize === `Men's ${size}` ? 'border-teal-600 bg-teal-50' : 'border-gray-200'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Women's Sizes</h4>
               <div className="flex gap-2 flex-wrap">
                {womenSizes.map(size => (
                  <button key={`women-${size}`} onClick={() => setSelectedSize(`Women's ${size}`)} className={`w-12 h-12 text-sm rounded-full border-2 ${selectedSize === `Women's ${size}` ? 'border-teal-600 bg-teal-50' : 'border-gray-200'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <Button text="Add to Cart" onClick={handleAddToCart} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;