import React from 'react';
import Card from '../components/reusable/Card';
import RunningShoesImg from '../assets/RunningShoes.png';
import WaterproofBootsImg from '../assets/WaterproofBoots.png';
import BreathableSneakersImg from '../assets/BrearthableSneakers.png';
import MensDressShoesImg from '../assets/MensDressShoes.png';

const featuresData = [
  {
    title: 'Air Comfort Pro',
    description: 'Lightweight running shoes with enhanced cushioning for maximum comfort.',
    image: RunningShoesImg,
    price: '$129.99',
    colors: ['Black', 'White', 'Red'],
  },
  {
    title: 'Urban Walker',
    description: 'Stylish casual shoes perfect for everyday urban adventures.',
    image: BreathableSneakersImg,
    price: '$99.99',
    colors: ['Navy', 'Gray', 'Olive'],
  },
  {
    title: 'Trail Blazer X',
    description: 'Durable hiking shoes with superior grip for all terrains.',
    image: WaterproofBootsImg,
    price: '$149.99',
    colors: ['Brown', 'Black', 'Orange'],
  },
  {
    title: 'Classic Elegance',
    description: 'Timeless leather dress shoes for formal occasions.',
    image: MensDressShoesImg,
    price: '$159.99',
    colors: ['Black', 'Brown', 'Burgundy'],
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Collection
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our latest shoes designed for style, comfort, and durability.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

