import React from 'react';
import { Smartphone, Battery, Settings, Shield } from 'lucide-react';

const MobileSolutions = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Screen Replacement",
      description: "Professional screen repair for all smartphone brands with genuine parts",
      features: ["Original Parts", "Expert Technicians", "Warranty Included", "Quick Service"],
      price: "Starting from ₹999",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Battery,
      title: "Battery Replacement",
      description: "Replace your old battery with high-quality compatible batteries",
      features: ["High Capacity", "Long Lasting", "Safety Tested", "Installation Included"],
      price: "Starting from ₹599",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Settings,
      title: "Phone Repair Services",
      description: "Complete mobile repair solutions for hardware and software issues",
      features: ["Hardware Repair", "Software Issues", "Data Recovery", "Performance Boost"],
      price: "Starting from ₹299",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Protection Installation",
      description: "Professional installation of screen guards and protective accessories",
      features: ["Bubble-Free", "Perfect Alignment", "Premium Tools", "Expert Installation"],
      price: "Starting from ₹99",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mobile Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert repair and maintenance services for all your mobile needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <IconComponent className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600 dark:text-red-400">
                      {service.price}
                    </span>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Service Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Diagnosis", desc: "Free device inspection" },
              { step: "2", title: "Quote", desc: "Transparent pricing" },
              { step: "3", title: "Repair", desc: "Expert service" },
              { step: "4", title: "Quality Check", desc: "Tested & verified" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSolutions;