import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield, Headphones } from 'lucide-react';
import shopImage from '../assets/IMG20250802111332.jpg'; // ✅ Local image import

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Mobile Accessories",
      subtitle: "Tempered Glass, Back Covers & More",
      image: shopImage  ,
      cta: "Shop Accessories"
    },
    {
      title: "Expert Mobile Repair Services",
      subtitle: "Screen & Battery Replacement",
      image: shopImage, // ✅ Local Jai Mata Di image here
      cta: "Book Service"
    },
    {
      title: "Professional Video Equipment",
      subtitle: "Tripods, Gimbals & Lighting Solutions",
      image: shopImage,
      cta: "Explore Video Gear"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl text-yellow-400 font-semibold mb-8">
            One Stop Solution for All Your Mobile & Shooting Needs
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-sm md:text-base">Quality Products</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-yellow-400" />
            <span className="text-sm md:text-base">Expert Services</span>
          </div>
          <div className="flex items-center space-x-2">
            <Headphones className="h-5 w-5 text-yellow-400" />
            <span className="text-sm md:text-base">24/7 Support</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          {slides[currentSlide].cta}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
