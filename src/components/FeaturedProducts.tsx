import React, { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max Tempered Glass",
      brand: "Apple",
      price: "₹399",
      originalPrice: "₹599",
      image: "https://icon2.cleanpng.com/lnd/20240416/vry/transparent-iphone-15-pro-max-iphone-11-smartphone-camera-tech-black-iphone-11-with-camera-in-focus661f10098bf4a3.98402135.webp",
      rating: 4.9,
      reviews: 128,
      badge: "Best Seller",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Samsung Galaxy S25 Ultra Case",
      brand: "Samsung",
      price: "₹299",
      originalPrice: "₹399",
      image: "https://icon2.cleanpng.com/20180917/jb/kisspng-samsung-galaxy-j5-samsung-galaxy-j7-pro-lte-4g-5b9fca57a3f894.3176600915371986796716.jpg",
      rating: 4.7,
      reviews: 89,
      badge: "New",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "Professional Ring Light 18\"",
      brand: "Universal",
      price: "₹1,899",
      originalPrice: "₹2,499",
      image: "https://m.media-amazon.com/images/I/713+i2JJCVL._SL1500_.jpg",
      rating: 4.8,
      reviews: 156,
      badge: "25% Off",
      badgeColor: "bg-red-500"
    },
    {
      id: 4,
      name: "3-Axis Mobile Gimbal",
      brand: "Universal",
      price: "₹4,299",
      originalPrice: "₹5,999",
      image: "https://m.media-amazon.com/images/I/61ET1fR3gvL._SL1500_.jpg",
      rating: 4.6,
      reviews: 67,
      badge: "Featured",
      badgeColor: "bg-purple-500"
    },
    {
      id: 5,
      name: "Fast Charging Cable Type-C",
      brand: "Universal",
      price: "₹199",
      originalPrice: "₹299",
      image: "https://m.media-amazon.com/images/I/61TAAu1LrqL._SL1500_.jpg",
      rating: 4.5,
      reviews: 234,
      badge: "Hot Deal",
      badgeColor: "bg-orange-500"
    },
    {
      id: 6,
      name: "Wireless Bluetooth Earbuds",
      brand: "Universal",
      price: "₹899",
      originalPrice: "₹1,299",
      image: "https://m.media-amazon.com/images/I/51oMWaW7tKL._SL1500_.jpg",
      rating: 4.4,
      reviews: 91,
      badge: "Limited",
      badgeColor: "bg-yellow-500"
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handpicked products with the best quality and value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                  {product.badge}
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all duration-200"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      favorites.includes(product.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{product.brand}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                    {product.originalPrice}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Buy Now
                  </button>
                  <button className="px-4 py-2 border border-red-600 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900 dark:hover:bg-opacity-20 transition-all duration-200">
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;