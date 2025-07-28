import React from 'react';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Sample image imports – replace with your actual image paths
import blog1 from '../../../assets/home/images.jpeg';
import blog2 from '../../../assets/home/whowe.png';
import blog3 from '../../../assets/home/home7.webp';
import sidebg7 from '../../../assets/home/sidebg7.png';

const blogPosts = [
  {
    img: blog1,
    category: 'Workplace',
    title: 'Services That Printing At You Is Important',
    author: 'Admin',
    date: 'Sep 30, 2024',
  },
  {
    img: blog2,
    category: 'Coding',
    title: 'A Checklist To Improve Your Daily Routine',
    author: 'Admin',
    date: 'Sep 30, 2024',
  },
  {
    img: blog3,
    category: 'Technology',
    title: 'That Will Help You Get 1% Better Every Day',
    author: 'Admin',
    date: 'Sep 30, 2024',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Home10 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative overflow-hidden bg-white">
      {/* Decorative side image */}
      <img
        src={sidebg7}
        alt="Decoration"
        className="absolute right-0 w-[300px] md:w-[200px] lg:w-[250px] pointer-events-none z-0 opacity-120"
      />

      <div className="container mx-auto px-6 md:px-24 py-16 bg-gradient-to-br from-white to-gray-100 text-gray-900">
        <h2 className="text-4xl md:text-5xl mb-10 font-medium leading-tight text-center text-gray-800">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              onClick={() => navigate(`/blog/${idx}`)} // Navigate to detail page
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="rounded-xl w-full h-48 object-cover mb-4"
              />
              <span className="inline-block text-sm text-indigo-700 font-semibold mb-2 bg-indigo-100 px-3 py-1 rounded-full shadow-sm">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-800 leading-snug mb-3">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaUser className="text-indigo-500" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-indigo-500" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home10;
