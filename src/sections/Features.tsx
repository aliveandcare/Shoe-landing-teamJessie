import React from 'react';
import Card from '../components/reusable/Card';
import RunningShoesImg from '../assets/RunningShoes.png';
import WaterproofBootsImg from '../assets/WaterproofBoots.png';
import BreathableSneakersImg from '../assets/BrearthableSneakers.png';

const featuresData = [
  {
    title: 'Running Shoes',
    description: 'Lightweight and comfortable shoes perfect for daily runs.',
    image: RunningShoesImg,
    price: '$89.99',
    colors: ['Black', 'White', 'Red'],
  },
  {
    title: 'Waterproof Boots',
    description: 'Durable boots designed for all weather conditions.',
    image: WaterproofBootsImg,
    price: '$129.99',
    colors: ['Brown', 'Black', 'Tan'],
  },
  {
    title: 'Breathable Sneakers',
    description: 'Stay cool and stylish with our breathable sneaker collection.',
    image: BreathableSneakersImg,
    price: '$59.99',
    colors: ['White', 'Gray', 'Blue'],
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out our latest and greatest selection.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              price={feature.price}
              colors={feature.colors}
              onAddToCart={() => console.log(`Added ${feature.title} to cart`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

