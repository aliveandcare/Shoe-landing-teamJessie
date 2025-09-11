import React from 'react';
import Button from './Button';

interface CardProps {
  title: React.ReactNode;
  image: string;
  description: string;
  price?: string;
  colors?: string[];
  onCardClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  price,
  colors,
  onCardClick,
  className = ''
}) => {
  return (
    <div
      onClick={onCardClick}
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col cursor-pointer ${className}`}
    >
      <div className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-t-lg">
        <img
          src={image}
          alt={typeof title === 'string' ? title : 'Product image'}
          className="w-full h-48 object-cover bg-gray-200"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {price && <span className="text-teal-600 font-semibold text-lg">{price}</span>}
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        {colors && colors.length > 0 && (
          <div className="mb-4">
            <span className="text-sm text-gray-500">Available Colors:</span>
            <div className="mt-1 flex gap-2 flex-nowrap">
              {colors.map((color) => (
                <span key={color} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap">{color}</span>
              ))}
            </div>
          </div>
        )}
        
        <Button
          text="Add to Cart"
          onClick={onCardClick ?? (() => {})} 
          className="w-full mt-auto"
        />
      </div>
    </div>
  );
};

export default Card;