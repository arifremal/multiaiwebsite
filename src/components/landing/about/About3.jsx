import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';


import AliShahrozImg from '../../../assets/about/team/Ali.webp';
import JarrodFreerImg from '../../../assets/about/team/jarrod.webp';
import RonForleeImg from '../../../assets/about/team/Ron.webp';
import BodoFrostImg from '../../../assets/about/team/Bono.webp';
import ElahaAbuzarImg from '../../../assets/about/team/elaha.webp';
import SundasShujaImg from '../../../assets/about/team/Sundas.webp';
import ArifulIslamImg from '../../../assets/about/team/Arif.webp';
import FareehaFakharImg from '../../../assets/about/team/Fareeha.webp';

import sidebg1 from '../../../assets/home/sidebg4.png';
import sidebg2 from '../../../assets/home/sidebg6.png';
import sidebg3 from '../../../assets/home/sidebg2.png';

const teamMembers = [
  { name: 'Ali Shahroz', role: 'Founder & CEO', image: AliShahrozImg, linkedin: 'https://linkedin.com/in/ali-shahroz' },
  { name: 'Jarrod Freer', role: 'Customer Relationship Manager', image: JarrodFreerImg, linkedin: 'https://linkedin.com/in/jarrod-freer' },
  { name: 'Ron Forlee', role: 'Mentor', image: RonForleeImg, linkedin: 'https://linkedin.com/in/ron-forlee' },
  { name: 'Bodo Frost', role: 'Business Improvement', image: BodoFrostImg, linkedin: 'https://linkedin.com/in/bodo-frost' },
  { name: 'Elaha Abuzar', role: 'Business Development Manager', image: ElahaAbuzarImg, linkedin: 'https://linkedin.com/in/elaha-abuzar' },
  { name: 'Sundas Shuja', role: 'Business Manager', image: SundasShujaImg, linkedin: 'https://linkedin.com/in/sundas-shuja' },
  { name: 'Ariful Islam', role: 'Chief Technology Officer', image: ArifulIslamImg, linkedin: 'https://linkedin.com/in/ariful-islam' },
  { name: 'Fareeha Fakhar', role: 'Digital Marketer', image: FareehaFakharImg, linkedin: 'https://linkedin.com/in/fareeha-fakhar' },
];


const About3 = () => {
  return (
    <div className="bg-white py-16 relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <img
        src={sidebg1}
        className="absolute bottom-30 left-0 md:w-60 pointer-events-none z-0"
        alt="bg1"
      />
      <img
        src={sidebg2}
        className="absolute bottom-0 right-0 w-64 md:w-80 pointer-events-none z-0"
        alt="bg2"
      />
      {/* <img
        src={sidebg3}
        className="absolute transform right-0 w-40 md:w-52 pointer-events-none z-0"
        alt="bg3"
      /> */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-24">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-center mb-14">
          Meet the team
        </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: 1,
          boxShadow: '0 20px 30px rgba(139, 92, 246, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        className="rounded-2xl overflow-hidden w-full h-[420px] shadow-xl"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </motion.div>

      {/* Name and LinkedIn aligned horizontally */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700">
          {member.name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
        </div>
        
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300 ml-2"
          >
            <FaLinkedin size={25} />
          </a>
        )}
      </div>

      
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
};

export default About3;
