import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { PiSparkleBold } from 'react-icons/pi';
import sidebg1 from '../../../assets/home/sidebg1.png';

const cardContent = [
  {
    title: 'Free Consultation',
    description:
      'Discuss your business needs and AI goals to identify how automation can save time and reduce workload.',
  },
  {
    title: 'Strategy Session',
    description:
      'Review your current workflows and discover practical AI solutions tailored to streamline daily operations.',
  },
  {
    title: 'Quick Business Check-In',
    description:
      'Identify new growth opportunities by understanding where AI can enhance efficiency and customer experience',
  },
];

const cardColors = [
  'bg-[rgba(238,249,255,0.9)]', // #eef9ff → light blue with 30% opacity
  'bg-[rgba(253,236,206,0.9)]', // #fdecce → light peach with 30%
  'bg-[rgba(253,241,244,0.5)]', // #fdf1f4 → light pink with 30%
];



const Home4 = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-white mt-25">
      {/* Bottom Right Decorative Image */}
      <img
        src={sidebg1}
        alt="Decoration"
        className="absolute -bottom-0 -right-16 w-[250px] md:w-[350px] lg:w-[400px] pointer-events-none z-0"
      />

      <div className="relative z-12 container mx-auto px-6 md:px-24 py-20 text-gray-900">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 mb-16">
          {/* Left Heading */}
          <div className="text-4xl md:text-7xl font-medium leading-tight max-w-2xl">
            <div>The AI</div>
            <div>Agent Revolution</div>
          </div>

          {/* Right Description */}
          <div className="max-w-2xl w-full border-2 border-[#6F4CFF] bg-white rounded-2xl p-6 shadow-md">
  <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-700">
   AI agents are transforming the way businesses handle repetitive tasks—making them simpler, faster, and more efficient. From automating admin, accounts, and sales to managing customer interactions, our AI agents offer dependable, 24/7 support. you can focus on confidently growing your business while your AI tools handle the busywork.
     </p>

  <button className="px-8 py-3 text-xl border border-indigo-700 rounded-lg text-gray-900 hover:bg-indigo-700 hover:text-white transition-all">
    <Link to="/contact">Get Started</Link>
  </button>
</div>

        </div>

        {/* Cards Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
  {cardContent.map((card, index) => (
    <div
  key={index}
  className={`relative w-full h-[300px] p-6 rounded-xl
              shadow-xl ring-1 ring-white/20 hover:ring-indigo-200
              transition-all duration-300 ease-in-out
              ${cardColors[index % cardColors.length]}
              backdrop-blur-lg border border-white/30 z-10`}
>
  <PiSparkleBold className="absolute top-4 right-4 text-black/70 text-2xl" />
  
  <h3 className="text-lg sm:text-xl mb-4 text-black/80">{card.title}</h3>
  <p className="text-sm sm:text-xl text-black/70 leading-relaxed pr-8">
    {card.description}
  </p>

  <FaArrowRight
    className="absolute bottom-4 right-4 text-xl sm:text-2xl text-black/80 hover:text-indigo-600 cursor-pointer transition-colors"
  />
</div>

  ))}
</div>

      </div>
    </div>
  );
};

export default Home4;
