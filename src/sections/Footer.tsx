import Paragraph from '../components/reusable/Paragraph';

const Footer = () => (
  <footer className="bg-gray-100 py-8 mt-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col items-start text-left">
          <div className="font-bold text-xl text-gray-800 mb-2">ShoeStyle</div>
          <Paragraph className="text-sm text-gray-600 text-left">
            <span className="font-semibold">Contact Us:</span><br />
            Email: <a href="mailto:info@shoelanding.com" className="underline text-blue-600">info@shoelanding.com</a><br />
            Phone: <a href="tel:+1234567890" className="underline text-blue-600">+1 (234) 567-890</a>
          </Paragraph>
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium mt-4 md:mt-0">
          <a href="#hero" className="hover:text-teal-600">About</a>
          <a href="#product-cards" className="hover:text-teal-600">Products</a>
          <a href="#contact-info" className="hover:text-teal-600">Contact</a>
        </nav>
      </div>
      <hr className="border-gray-200 mb-4" />
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} ShoeStyle. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-teal-600">Privacy</a>
          <a href="/terms" className="hover:text-teal-600">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
