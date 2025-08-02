import { Camera, Lightbulb, Smartphone, Video } from 'lucide-react';

const VideoShooting = () => {
  const equipment = [
    {
      icon: Camera,
      title: "Tripods & Stands",
      items: [
        { name: "Professional Tripod", price: "₹2,999", image: "https://m.media-amazon.com/images/I/71DGyBWrz+L._SL1500_.jpg" },
        { name: "Mobile Tripod", price: "₹799", image: "https://m.media-amazon.com/images/I/61H1dMNTSnL._SL1413_.jpg" },
        { name: "Desktop Stand", price: "₹299", image: "https://m.media-amazon.com/images/I/71lf1hllfJL._SL1500_.jpg" }
      ]
    },
    {
      icon: Video,
      title: "Gimbals & Stabilizers",
      items: [
        { name: "3-Axis Gimbal", price: "₹4,999", image: "https://m.media-amazon.com/images/I/61ET1fR3gvL._AC_UL480_FMwebp_QL65_.jpg" },
        { name: "Mobile Gimbal", price: "₹1,999", image: "https://m.media-amazon.com/images/I/314ouOpcUYL.jpg" },
        { name: "Action Camera Gimbal", price: "₹3,499", image: "https://m.media-amazon.com/images/I/51ExnRIRpqL._AC_UL480_FMwebp_QL65_.jpg" }
      ]
    },
    {
      icon: Lightbulb,
      title: "Lighting Equipment",
      items: [
        { name: "Ring Light 18\"", price: "₹1,999", image: "https://m.media-amazon.com/images/I/51X-+VlVhiL._SL1500_.jpg" },
        { name: "LED Panel Light", price: "₹899", image: "https://m.media-amazon.com/images/I/51pGRUv4MVL.jpg" },
        { name: "Softbox Kit", price: "₹2,499", image: "https://m.media-amazon.com/images/I/71a7jO4ttCL._SL1500_.jpg" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Mounts",
      items: [
        { name: "Car Phone Mount", price: "₹399", image: "https://m.media-amazon.com/images/I/41H7NUu+b4L._SL1200_.jpg" },
        { name: "Flexible Arm Mount", price: "₹599", image: "https://m.media-amazon.com/images/I/51dOQt2ZbYL._SL1001_.jpg" },
        { name: "Suction Cup Mount", price: "₹299", image: "https://m.media-amazon.com/images/I/61Eg7NQ6n+L._SL1182_.jpg" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Video Shooting Equipment
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional video equipment for creators and enthusiasts
          </p>
        </div>

        <div className="space-y-16">
          {equipment.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center justify-center mb-8">
                  <IconComponent className="h-8 w-8 text-red-600 dark:text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.name}
                        </h4>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                          {item.price}
                        </p>
                        
                        <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Video Equipment?</h3>
            <p className="text-lg opacity-90">Professional quality gear for all your video needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Premium Quality", desc: "Only original and high-quality products" },
              { title: "Expert Advice", desc: "Professional guidance for your needs" },
              { title: "Best Prices", desc: "Competitive pricing with great value" },
              { title: "After Sales", desc: "Support and service after purchase" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShooting;