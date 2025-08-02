import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://icon2.cleanpng.com/20240311/rzi/transparent-iphone-iphone-case-purple-blue-apps-colorful-iphone-case-with-clear-front-1710841991418.webp",
      title: "Mobile Accessories Display",
      category: "Store"
    },
    {
      id: 2,
      url: "https://icon2.cleanpng.com/20180516/ie/avrl74sqa.webp",
      title: "Professional Repair Service",
      category: "Service"
    },
    {
      id: 3,
      url: "https://icon2.cleanpng.com/20240311/ajr/transparent-camera-lens-digital-video-camera-with-attached-microphone-1710842753610.webp",
      title: "Video Equipment Collection",
      category: "Products"
    },
    {
      id: 4,
      url: "https://icon2.cleanpng.com/20180816/kzr/6263ff05bed818b87223c149047de346.webp",
      title: "Tempered Glass Installation",
      category: "Service"
    },
    {
      id: 5,
      url: "https://icon2.cleanpng.com/20180809/bpj/f2d6dd5c675dfbb8ffe83aa09caf4854.webp",
      title: "Cable and Charger Collection",
      category: "Products"
    },
    {
      id: 6,
      url: "https://icon2.cleanpng.com/20180705/ctf/kisspng-samsung-galaxy-s8-battery-charger-samsung-galaxy-n-mobile-charger-5b3e4f7e830de8.7563596115308102385368.jpg",
      title: "Wireless Charging Solutions",
      category: "Products"
    },
    {
      id: 7,
      url: "https://icon2.cleanpng.com/20180410/lkw/kisspng-manfrotto-tripod-photography-camera-ball-head-geo-5acc47fd446c12.8626823915233372132803.jpg",
      title: "Professional Tripods",
      category: "Products"
    },
    {
      id: 8,
      url: "https://icon2.cleanpng.com/20180426/xze/avtk94d1a.webp",
      title: "Expert Technician at Work",
      category: "Service"
    },
    {
      id: 9,
      url: "https://icon2.cleanpng.com/20240221/wwh/transparent-bookstore-library-books-bookshelves-reading-quiet-organized-library-with-people-working-1710870824805.webp",
      title: "Store Interior View",
      category: "Store"
    }
  ];

  const categories = ['All', 'Store', 'Products', 'Service'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a look at our store, products, and services in action
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white mb-2 mx-auto" />
                  <p className="text-white text-center font-medium">{image.title}</p>
                  <p className="text-gray-300 text-center text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Visit Store CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Visit Our Store</h3>
            <p className="text-lg opacity-90 mb-6">
              Experience our products and services in person. Our friendly staff is ready to help you find the perfect solution.
            </p>
            <a href="https://maps.app.goo.gl/vzdQvnSMrRbd6f1g6"
  target="_blank"
  rel="noopener noreferrer">
  <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
    Get Directions
  </button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;