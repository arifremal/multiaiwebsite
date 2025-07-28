/** @format */

import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaRobot,
  FaCode,
  FaChartLine,
  FaDatabase,
  FaLaptopCode,
} from 'react-icons/fa';

import sidebg1 from '../../../assets/home/sidebg1.png';
import SideBG2 from '../../../assets/home/sidebg6.png';
import AutomationSolutions from '../../../assets/home/Solutionsfor/AutomationSolutions.jpg';
import CustomAI from '../../../assets/home/Solutionsfor/CustomAISoftwareDevelopment.jpg';
import DataIntegration from '../../../assets/home/Solutionsfor/DataIntegration.jpg';
import MachineLearning from '../../../assets/home/service/MachineLearning.jpg';
import NaturalLanguage from '../../../assets/home/Solutionsfor/NaturalLanguageProcessing.jpg';
import WebAppDevelopment from '../../../assets/home/service/WebAppDevelopment.jpg';

const serviceSections = [
  {
    icon: <FaBrain className="w-12 h-12 text-indigo-700" />,
    title: 'AI Consulting',
    content:
      'We help identify the best AI opportunities for your business and develop strategies that align with your goals, ensuring investments that deliver measurable results.',
    image: NaturalLanguage,
  },
  {
    icon: <FaRobot className="w-12 h-12 text-indigo-700" />,
    title: 'Automation Solutions',
    content:
      'Streamline repetitive tasks and enhance efficiency with intelligent automation tailored to your operations, allowing your team to focus on core activities.',
    image: AutomationSolutions,
  },
  {
    icon: <FaCode className="w-12 h-12 text-indigo-700" />,
    title: 'Custom AI Software Development',
    content:
      'From concept to deployment, we build AI-powered software designed to meet your specific business needs, integrating seamlessly with existing systems.',
    image: CustomAI,
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-indigo-700" />,
    title: 'Machine Learning Models',
    content:
      'Utilise data-driven insights with machine learning models that predict trends, optimize processes, and support smarter decision-making.',
    image: MachineLearning,
  },
  {
    icon: <FaDatabase className="w-12 h-12 text-indigo-700" />,
    title: 'Data Integration',
    content:
      'Connect and unify your business data across platforms, providing a single, reliable source of truth that enhances automation and reporting.',
    image: DataIntegration,
  },
  {
    icon: <FaLaptopCode className="w-12 h-12 text-indigo-700" />,
    title: 'Web App Development',
    content:
      'We build custom web apps that simplify workflows, boost speed, and help you stand out. From internal tools to customer platforms, we create solutions tailored to your needs—ready to scale with your business.',
    image: WebAppDevelopment,
  },
];

const ServicesPage1 = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = decodeURIComponent(location.hash.replace('#', ''));
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative bg-white py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      {/* Decorative Backgrounds */}
      <img
        src={sidebg1}
        className="absolute top-50 -right-50 md:w-150 pointer-events-none z-0"
        alt="bg1"
      />
      <img
        src={SideBG2}
        alt="bg2"
        className="absolute bottom-0 -right-32 md:w-116 pointer-events-none z-0"
      />
      <img
        src={sidebg1}
        className="absolute bottom-190 -left-50 md:w-150 pointer-events-none z-0"
        alt="bg1"
      />

      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-indigo-700"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          From AI integration to custom apps, we deliver smart, scalable, and
          secure solutions for every stage of your digital journey.
        </motion.p>
      </div>

      {/* Service Sections */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {serviceSections.map((section, index) => {
          const isEven = index % 2 === 0;
          const id = section.title.replace(/\s+/g, '%20');

          return (
            <motion.div
              key={index}
              id={id}
              className={`flex flex-col-reverse md:flex-row ${
                !isEven ? 'md:flex-row-reverse' : ''
              } items-center gap-10 md:gap-24`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Text Content */}
              <div className="flex-1">
                <div className="mb-4">{section.icon}</div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>

              {/* Image Block */}
              <div className="flex-1 w-full h-64 md:h-80">
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Paragraph Footer */}
      <motion.div
        className="mt-24 text-center max-w-4xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          We offer intelligent AI services built to simplify and streamline your business,
          from custom development to automation and integration. Our solutions are designed
          to scale with you and adapt as your needs evolve.{' '}
          <span className="text-indigo-600 font-medium">
            More specialised services will be introduced soon—to help you do even more, effortlessly.
          </span>
        </p>
        {/* Contact Us Button */}
        <div className="mt-8">
          <Link to="/contact">
            <button className="px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-md font-medium">
              Contact Us
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage1;
