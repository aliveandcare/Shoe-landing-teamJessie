import React, { useState } from 'react';
import Card from '../components/reusable/Card';
import Heading from '../components/reusable/Heading';
import AirComfortProImg from '../assets/RunningShoes.png';
import UrbanWalkerImg from '../assets/BrearthableSneakers.png';
import TrailBlazerXImg from '../assets/WaterproofBoots.png';
import ClassicEleganceImg from '../assets/MensDressShoes.png';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';
import {type Product } from '../types';
import ProductModal from '../components/product/ProductModal';

const featuresData: Product[] = [
  {
    id: 1,
    title: 'Air Comfort Pro',
    description: 'Lightweight running shoes with enhanced cushioning for maximum comfort.',
    price: 129.99,
    image: AirComfortProImg,
    colors: ['Black', 'White', 'Red'],
  },
  {
    id: 2,
    title: 'Urban Walker',
    description: 'Stylish casual shoes perfect for everyday urban adventures.',
    price: 99.99,
    image: UrbanWalkerImg,
    colors: ['Navy', 'Gray', 'Olive'],
  },
  {
    id: 3,
    title: 'Trail Blazer X',
    description: 'Durable hiking shoes with superior grip for all terrains.',
    price: 149.99,
    image: TrailBlazerXImg,
    colors: ['Brown', 'Black', 'Orange'],
  },
  {
    id: 4,
    title: 'Classic Elegance',
    description: 'Timeless leather dress shoes for formal occasions.',
    price: 159.99,
    image: ClassicEleganceImg,
    colors: ['Black', 'Brown', 'Burgundy'],
  },
];

const Features: React.FC = () => {
  const { addToCart } = useCart();
  const { showNotification } = useNotification();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heading level={2} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Collection
            </Heading>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover our latest shoes designed for style, comfort, and durability.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <Card
                key={feature.id}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                price={`$${feature.price.toFixed(2)}`}
                colors={feature.colors}
                onCardClick={() => setSelectedProduct(feature)} 
              />
            ))}
          </div>
        </div>
      </section>
      
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </>
  );
};

export default Features;