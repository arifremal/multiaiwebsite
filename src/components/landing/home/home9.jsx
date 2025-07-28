import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import marketingImg from '../../../assets/home/home7.webp'; // Ensure this path is correct

const Home9 = () => {
  return (
    <div className="container mx-auto px-6 md:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between bg-blue-100 rounded-3xl p-8 md:p-12 gap-10"
      >
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-snug">
            Ready to transform your business with <span className="text-indigo-600">AI</span>?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Book a free demo today and see how <strong>Multiple AI Solutions</strong> can help you work smarter, not harder.
          </p>
          <Link to="/contact">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition"
          >
            Book Your Free Demo
          </motion.a>
          </Link>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <img
            src={marketingImg}
            alt="AI Marketing Support"
            className="rounded-2xl object-cover w-full max-w-xl shadow-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home9;
