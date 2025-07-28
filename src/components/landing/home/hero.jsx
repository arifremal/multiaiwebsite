import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="h-screen w-full overflow-hidden text-black bg-white">
      {/* 🔹 Spline Background */}
      <div className="mt-30 absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/1UjZlPEUBkIEmBpR/scene.splinecode" />
      </div>


      {/* 🔹 Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center h-full"
      >
        <motion.h1
          className="text-5xl sm:text-8xl font-semibold leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Your Business,{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Supercharged
          </span>{' '}
          by AI
        </motion.h1>

        <motion.p
          className="text-lg sm:text-3xl font-light mb-12 text-gray-700 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Multiple AI Solutions. Australia's first local multi-agent AI platform, personalised for your business. Making work feel like play.
        </motion.p>

        <div className="flex gap-4">
            <Link to="/contact">
          <motion.button
            whileHover={{
    scale: 1.08,
    backgroundColor: '#4F46E5', // Indigo-600
    color: '#ffffff',
    transition: { duration: 0.3 },
  }}
            whileTap={{ scale: 0.96 }}
            className="border border-indigo-600 text-indigo-600 bg-white font-semibold mt-5 px-8 py-3 rounded-4xl transition-all duration-300 text-2xl"
          >
            Book a Free Consultation
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
