import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Award, label: "Products Sold", value: "15000+" },
    { icon: Shield, label: "Warranty Claims", value: "99%" }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-red-600 dark:text-red-400">Jai Mata Di</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Established in <strong className="text-red-600 dark:text-red-400">2016</strong>, 
                Jai Mata Di has been serving customers with premium mobile accessories, 
                professional video equipment, and expert repair services.
              </p>
              
              <p>
                Our journey started with a simple mission: to provide one-stop solutions 
                for all mobile and video shooting needs. Over the years, we have built 
                a reputation for quality products, competitive prices, and exceptional 
                customer service.
              </p>
              
              <p>
                From the latest smartphone accessories to professional video equipment, 
                we ensure that every product meets our high standards of quality. Our 
                expert team is always ready to help you find the perfect solution for 
                your needs.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Quality Products",
                "Expert Service",
                "Competitive Prices",
                "Customer Satisfaction"
              ].map((value, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
  src="/images/IMG20250802111332.jpg"
  alt="Jai Mata Di Shop"
  className="rounded-2xl shadow-2xl w-full"
/>

            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">8+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              "To be the most trusted destination for mobile accessories and video equipment, 
              providing our customers with quality products, expert services, and an 
              exceptional shopping experience that exceeds their expectations."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;