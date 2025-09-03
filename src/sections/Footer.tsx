import Paragraph from '../components/reusable/Paragraph';
import Button from '../components/reusable/Button';

const Footer = () => (
  <footer className="bg-gray-100 py-8 mt-12">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <Paragraph>
          <span className="font-semibold">Contact Us:</span><br />
          Email: <a href="mailto:info@shoelanding.com" className="underline text-blue-600">info@shoelanding.com</a><br />
          Phone: <a href="tel:+1234567890" className="underline text-blue-600">+1 (234) 567-890</a>
        </Paragraph>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-end">
        <Paragraph>
          <span className="font-semibold">Useful Links:</span>
        </Paragraph>
        <nav className="flex flex-wrap gap-4 mt-2">
          <a href="/products" className="text-gray-700 hover:text-teal-600 font-medium">Products</a>
          <a href="/features" className="text-gray-700 hover:text-teal-600 font-medium">Features</a>
          <a href="/about" className="text-gray-700 hover:text-teal-600 font-medium">About Us</a>
          <a href="/contact" className="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
        </nav>
        <Button text="Subscribe" onClick={() => alert('Subscribed!')} className="mt-4" />
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Shoe Landing Team Jessie. All rights reserved.
    </div>
  </footer>
);

export default Footer;
