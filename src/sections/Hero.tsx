
import Heading from '../components/reusable/Heading';
import Paragraph from '../components/reusable/Paragraph';
import Button from '../components/reusable/Button';
import BackgroundImg from '../assets/Background.png';
// @ts-expect-error: Vite import.meta.env for Vercel detection
const isVercel = import.meta.env.VERCEL === '1' || import.meta.env.VERCEL === true;

const Hero = () => (
  <section
    className="relative flex items-center justify-center min-h-[60vh] w-full bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${BackgroundImg})` }}
    aria-label="Hero Banner"
  >
    <div className="absolute inset-0 bg-black bg-opacity-40" aria-hidden="true"></div>
    <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center flex flex-col items-center">
      <Heading level={1} className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
        Step Into Comfort & Style
      </Heading>
      <Paragraph className="mb-8 text-lg md:text-xl text-gray-100">
        Discover our latest collection of shoes designed for every adventure. Quality, comfort, and style in every step.
      </Paragraph>
      <Button
        text="Shop Collection"
        onClick={() => window.location.href = '/'}
        className="bg-teal-600 hover:bg-teal-700 px-8 py-4 text-lg rounded-lg shadow-lg"
        disabled={isVercel}
      />
    </div>
  </section>
);

export default Hero;

