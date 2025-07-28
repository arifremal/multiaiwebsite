import React from 'react';
import { Link } from 'react-router-dom';

const Contact1 = () => {
  return (
    <div className="relative w-full bg-white py-24 px-6 sm:px-10 lg:px-20 text-center overflow-hidden mt-20">
 
      <div className="relative rounded-2xl p-18 overflow-hidden bg-[#f7fbff]">

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <div className="inline-block px-5 py-1.5 text-2xl font-small bg-gray-100 text-indigo-700 rounded-full shadow-sm mb-6">
          Contact Us
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6 tracking-tight">
          Streamline your processes with<br className="hidden sm:block" />
          integrated solutions
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
          We offer a range of AI-powered solutions that can automate and<br className="hidden sm:block" />
          optimise marketing operations.
        </p>

        {/* Breadcrumb */}
        <p className="text-base sm:text-2xl text-gray-800">
          <span className="font-medium text-black">Home</span>{' '}
          <span className="text-indigo-700">› Contact</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Contact1;
