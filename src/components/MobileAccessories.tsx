import React, { useState } from 'react';
import { Filter, Star } from 'lucide-react';

const MobileAccessories = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const brands = ['All', 'Samsung', 'Apple', 'Xiaomi', 'Vivo', 'Realme', 'Redmi', 'Moto', 'Poco'];

  const accessories = [
    {
      id: 1,
      name: "Premium Tempered Glass",
      brand: "Samsung",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/71UWca9yQlL._SL1500_.jpg",
      rating: 4.8,
      type: "Screen Protection"
    },
    {
      id: 2,
      name: "Matte Finish Screen Guard",
      brand: "Apple",
      price: "₹199",
      image: "https://m.media-amazon.com/images/I/61fLW1FpfsL._SL1500_.jpg",
      rating: 4.6,
      type: "Screen Protection"
    },
    {
      id: 3,
      name: "Silicone Back Cover",
      brand: "Xiaomi",
      price: "₹149",
      image: "https://m.media-amazon.com/images/I/61ObJMDsiUL._SL1500_.jpg",
      rating: 4.7,
      type: "Protection"
    },
    {
      id: 4,
      name: "Wireless Charger",
      brand: "Samsung",
      price: "₹899",
      image: "https://m.media-amazon.com/images/I/61H84kDDNFL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.9,
      type: "Charging"
    },
    {
      id: 5,
      name: "Fast Charging Cable",
      brand: "All",
      price: "₹199",
      image: "https://m.media-amazon.com/images/I/314cC3odHwL.jpg",
      rating: 4.5,
      type: "Charging"
    },
    {
      id: 6,
      name: "Bluetooth Earphones",
      brand: "All",
      price: "₹599",
      image: "https://m.media-amazon.com/images/I/51vT4GzBObL._SL1500_.jpg",
      rating: 4.4,
      type: "Audio"
    }
  ];

  const filteredAccessories = selectedBrand === 'All' 
    ? accessories 
    : accessories.filter(item => item.brand === selectedBrand || item.brand === 'All');

  return (
    <section id="products" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mobile Accessories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Premium accessories for all major smartphone brands
          </p>
        </div>

        {/* Brand Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-300 mr-2" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Filter by Brand:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedBrand === brand
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {accessory.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{accessory.brand}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{accessory.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{accessory.name}</h3>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">{accessory.price}</p>
                
                <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAccessories;