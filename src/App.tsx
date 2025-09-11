import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./sections/Header";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/cart/CartDrawer";
import { NotificationProvider } from "./context/NotificationContext";
import { AuthProvider } from './context/AuthContext';
import SignInModal from './components/auth/SignInModal';

// Import pages
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import OrderConfirmation from './pages/OrderConfirmation';
import PrivacyPolicy from './pages/Privacy';
import TermsOfService from './pages/Terms';


const App: React.FC = () => {
  return (
    <Router>
      <NotificationProvider>
        <AuthProvider>
          <CartProvider>
            <Header />
            <CartDrawer />
            <SignInModal />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </main>
          </CartProvider>
        </AuthProvider>
      </NotificationProvider>
    </Router>
  );
};

export default App;