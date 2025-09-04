import Heading from './reusable/Heading';
import Paragraph from './reusable/Paragraph';
import Card from './reusable/Card';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import RunningShoesImg from '../assets/RunningShoes.png';
import WaterproofBootsImg from '../assets/WaterproofBoots.png';
import BrearthableSneakersImg from '../assets/BrearthableSneakers.png';

const Home = () => {
  return (
    <>
      <Hero />
      <main className="p-8 max-w-4xl mx-auto">
        <Heading level={1} className="text-blue-600">
          Component Showcase
        </Heading>
        <Paragraph className="text-gray-500 mt-2 mb-8">
          This page demonstrates the reusable Heading and Paragraph components.
        </Paragraph>
        {/* Card Showcase Section */}
        <Heading level={2} className="mt-8 mb-4">Product & Feature Cards</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <Card
            title={<>Running<br />Shoes</>}
            image={RunningShoesImg}
            description="Lightweight and comfortable shoes perfect for daily runs."
            price="$89.99"
            colors={["Black", "White", "Red"]}
          />
          <Card
            title="Waterproof Boots"
            image={WaterproofBootsImg}
            description="Durable boots designed for all weather conditions."
            price="$129.99"
            colors={["Brown", "Black", "Tan"]}
          />
          <Card
            title="Breathable Sneakers"
            image={BrearthableSneakersImg}
            description="Stay cool and stylish with our breathable sneaker collection."
            price="$59.99"
            colors={["White", "Gray", "Blue"]}
          />
        </div>
        {/* ...existing code... */}
        <Heading level={2}>Heading Level Examples</Heading>
        <Heading level={1}>Heading Level 1</Heading>
        <Heading level={2}>Heading Level 2</Heading>
        <Heading level={3}>Heading Level 3</Heading>
        <Heading level={4}>Heading Level 4</Heading>
        <Heading level={5}>Heading Level 5</Heading>
        <Heading level={6}>Heading Level 6</Heading>
        <Heading level={2} className="mt-8">Paragraph Examples</Heading>
        <Paragraph>
          This is a default paragraph using the `p` tag. It uses the default placeholder text if no children are provided.
        </Paragraph>
        <Paragraph className="mt-4 text-sm italic text-purple-700">
          This paragraph has custom Tailwind CSS classes applied for a different style.
        </Paragraph>
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          This is a{' '}
          <Paragraph as="span" className="font-bold text-red-600">
            span element
          </Paragraph>
          {' '}inside a div, rendered using the Paragraph component.
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
