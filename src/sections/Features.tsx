import React from 'react';
import Card from '../components/reusable/Card';
import Heading from '../components/reusable/Heading';

const featuresData = [
  {
    title: 'Lightweight Design',
    description: 'Experience unparalleled comfort with our feather-light construction, perfect for all-day wear.',
    image: 'https://placehold.co/600x400/E2E8F0/4A5568?text=Feature+1',
  },
  {
    title: 'Durable Materials',
    description: 'Crafted from high-quality, resilient materials to withstand your most demanding adventures.',
    image: 'https://placehold.co/600x400/CBD5E0/4A5568?text=Feature+2',
  },
  {
    title: 'Breathable Fabric',
    description: 'Our advanced fabric technology ensures maximum airflow, keeping your feet cool and dry.',
    image: 'https://placehold.co/600x400/A0AEC0/4A5568?text=Feature+3',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading level={2} className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Shoes?
          </Heading>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Crafted for performance, designed for life.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

