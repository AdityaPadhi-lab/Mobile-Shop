import React from 'react';
import { Smartphone, Shield, Video, Wrench } from 'lucide-react';

const FeaturedCategories = () => {
  const categories = [
    {
      icon: Shield,
      title: "Mobile Protection",
      subtitle: "Cases & Screen Guards",
      color: "from-blue-500 to-blue-600",
      items: ["Tempered Glass", "Back Covers", "Screen Protectors"]
    },
    {
      icon: Smartphone,
      title: "Mobile Accessories",
      subtitle: "Chargers & More",
      color: "from-green-500 to-green-600",
      items: ["Chargers", "Cables", "Earphones"]
    },
    {
      icon: Video,
      title: "Video Equipment",
      subtitle: "Professional Gear",
      color: "from-purple-500 to-purple-600",
      items: ["Tripods", "Gimbals", "Ring Lights"]
    },
    {
      icon: Wrench,
      title: "Repair Services",
      subtitle: "Expert Solutions",
      color: "from-red-500 to-red-600",
      items: ["Screen Repair", "Battery", "Software"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Categories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of mobile and video solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <IconComponent className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 dark:text-gray-300 text-sm flex items-center"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;