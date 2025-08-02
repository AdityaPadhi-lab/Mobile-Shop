import React from 'react';
import { Smartphone, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    "Tempered Glass",
    "Back Covers",
    "Chargers & Cables",
    "Earphones",
    "Power Banks",
    "Car Accessories"
  ];

  const videoEquipment = [
    "Tripods",
    "Gimbals",
    "Ring Lights",
    "LED Panels",
    "Mobile Mounts",
    "Camera Accessories"
  ];

  const services = [
    "Screen Replacement",
    "Battery Replacement",
    "Water Damage Repair",
    "Software Issues",
    "Data Recovery",
    "Warranty Service"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-400">Jai Mata Di</h2>
                <p className="text-xs text-gray-400">Mobile & Video Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Your trusted destination for premium mobile accessories, professional video equipment, 
              and expert repair services since 2016.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Accessories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Mobile Accessories</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Video Equipment */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Video Equipment</h3>
            <ul className="space-y-2">
              {videoEquipment.map((equipment, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {equipment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 mb-6">
              {services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Contact */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-red-400" />
                +91 7978863170
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-red-400" />
                info@jaimatadi.com
              </div>
              <div className="flex items-start text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-red-400 mt-0.5 flex-shrink-0" />
                <span>FX8C+MHF, Gaiety Talkies Rd, Pattnayakpada, Sambalpur, Odisha 768001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Jai Mata Di. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Return Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
                Warranty
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Authorized dealer for all major smartphone brands • Professional installation services available • 
              Quality guaranteed products • Expert technical support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;