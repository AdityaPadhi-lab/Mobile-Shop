import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip after another delay
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const phoneNumber = "917978863170"; // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in your mobile accessories and video equipment. Please help me with product information.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 animate-bounce">
            <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg max-w-xs relative">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-200"
              >
                <X className="h-3 w-3" />
              </button>
              <p className="text-sm">
                👋 Need help? Chat with us on WhatsApp!
              </p>
              <div className="absolute bottom-[-6px] right-4 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
          
          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </a>

        {/* Text Label (Hidden on Mobile) */}
        <div className="hidden md:block absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us!
        </div>
      </div>

      {/* Additional floating elements for engagement */}
      <div className="fixed bottom-24 right-6 z-40">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-xs transform translate-x-full opacity-0 animate-slide-in-delayed">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">
              Online - Quick Response
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-delayed {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-delayed {
          animation: slide-in-delayed 3s ease-out forwards;
          animation-delay: 6s;
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;