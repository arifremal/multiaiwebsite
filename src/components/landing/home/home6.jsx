import React, { useEffect, useRef } from 'react';
import {
  FaRobot,
  FaCogs,
  FaCode,
  FaBrain,
  FaDatabase,
  FaPhoneAlt,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaHandshake,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define unique light background colors per card
const cardColors = [
  'bg-pink-100',
  'bg-yellow-100',
  'bg-green-100',
  'bg-blue-100',
  'bg-indigo-100',
  'bg-purple-100',
  'bg-teal-100',
  'bg-red-100',
  'bg-orange-100',
];

const services = [
  {
    title: 'AI Consulting',
    description:
      'We help you identify the best AI opportunities for your business and develop practical strategies that align with your goals. Our expert guidance ensures you invest in solutions that deliver real value and measurable results.',
    icon: <FaRobot />,
  },
  {
    title: 'Automation Solutions',
    description:
      'Streamline repetitive tasks and improve efficiency with intelligent automation tailored to your operations. Save time, reduce errors, and free your team to focus on what matters most.',
    icon: <FaCogs />,
  },
  {
    title: 'Custom AI Software Development',
    description:
      'From concept to deployment, we build AI-powered software designed specifically for your business needs. Our custom solutions integrate seamlessly with your existing systems to boost productivity and growth.',
    icon: <FaCode />,
  },
  {
    title: 'Machine Learning Models',
    description:
      'Leverage data-driven insights with machine learning models that predict trends, optimise processes, and support smarter decision-making. Tailored models help you stay ahead in a competitive market.',
    icon: <FaBrain />,
  },
  {
    title: 'Data Integration',
    description:
      'Connect and unify your business data across platforms for a single, reliable source of truth. Effective data integration enhances automation, reporting, and overall operational efficiency.',
    icon: <FaDatabase />,
  },
  {
    title: 'Web App Development',
    description:
      'We build custom web apps that simplify workflows, boost speed, and help you stand out. From internal tools to customer platforms, we create solutions tailored to your needs—ready to scale with your business.',
    icon: <FaPhoneAlt />,
  },
];

const Home6 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-6 md:px-24 py-16 text-gray-900"
    >
      <h2 className="text-4xl md:text-7xl text-center font-medium leading-tight max-w-8xl mb-12">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              rotateX: 5,
              rotateY: -5,
              boxShadow: '0px 20px 30px rgba(0,0,0,0.1)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`card flex flex-col gap-4 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 cursor-pointer ${cardColors[index % cardColors.length]}`}
            style={{ perspective: '1000px' }}
          >
            
            <div>
              <div className="flex items-center gap-4 mb-4">
  <div className="text-4xl text-indigo-700">{service.icon}</div>
  <h3 className="text-lg font-bold text-gray-800">
    {service.title}
  </h3>
</div>        
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home6;
