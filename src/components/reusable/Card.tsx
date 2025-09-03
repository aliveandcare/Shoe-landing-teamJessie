import React from 'react';

interface CardProps {
  title: string;
  image: string;
  description: string;
  price?: string;
  colors?: string[];
  onAddToCart?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  price,
  colors,
  onAddToCart,
  className = ''
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col p-6 ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-200"
      />
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        {price && <span className="text-teal-600 font-semibold text-lg">{price}</span>}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {colors && colors.length > 0 && (
        <div className="mb-4">
          <span className="text-sm text-gray-500">Available Colors:</span>
          <div className="mt-1 flex gap-2 flex-wrap">
            {colors.map((color) => (
              <span key={color} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border">{color}</span>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={onAddToCart}
        className="w-full mt-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
