import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./sections/Header";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/cart/CartDrawer";
import { NotificationProvider } from "./context/NotificationContext";

// Import new pages
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import OrderConfirmation from './pages/OrderConfirmation'; // Import new page

const App: React.FC = () => {
  return (
    <Router>
      <NotificationProvider>
        <CartProvider>
          <Header />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* Add new route */}
            </Routes>
          </main>
        </CartProvider>
      </NotificationProvider>
    </Router>
  );
};

export default App;