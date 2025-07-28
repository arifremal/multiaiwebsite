import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Service1 = () => {
  const dotsRef = useRef(null);

  useEffect(() => {
    if (dotsRef.current) {
      gsap.fromTo(
        dotsRef.current.children,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          stagger: {
            amount: 2,
            grid: 'auto',
            from: 'random',
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative bg-white py-24 px-6 sm:px-10 lg:px-20 text-center overflow-hidden mt-20">
       <div className="relative rounded-2xl p-18 overflow-hidden bg-[#f7fbff]">

      {/* Main Content with Framer Motion */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="inline-block px-5 py-1.5 text-2xl font-small bg-gray-100 text-indigo-700 rounded-full shadow-sm mb-6">
          Our AI-Powered
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6 tracking-tight">
          Products
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed">
          Discover how Multiple AI Solutions can help your business work smarter, not harder. <br className="hidden sm:block" />
          Our AI agents are designed to automate your admin, improve client communication, <br className="hidden sm:block" />
          streamline invoicing, and boost sales, so you can focus on what matters most.
        </p>
        <p className="text-base sm:text-2xl text-gray-800">
          <span className="font-medium text-black">Home</span>{' '}
          <span className="text-indigo-700">› Products</span>
        </p>
      </motion.div>
      </div>
    </div>
  );
};

export default Service1;
