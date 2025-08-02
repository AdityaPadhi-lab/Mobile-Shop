import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import MobileAccessories from './components/MobileAccessories';
import MobileSolutions from './components/MobileSolutions';
import VideoShooting from './components/VideoShooting';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// ✅ Import your image here
import shopImage from './assets/IMG20250802111332.jpg';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />

          {/* ✅ Add image wherever you want */}
          <div className="my-8 px-4">
            <img
              src={shopImage}
              alt="Jai Mata Di Shop"
              className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto"
            />
          </div>

          <FeaturedCategories />
          <MobileAccessories />
          <MobileSolutions />
          <VideoShooting />
          <FeaturedProducts />
          <About />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}

export default App;
