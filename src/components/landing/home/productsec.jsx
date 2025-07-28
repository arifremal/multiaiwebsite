import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PersonalAssistance from '../../../assets/home/product/PersonalAssistant.png';
import AdminImage from '../../../assets/home/product/AdminImage.png';
import AccountsImage from '../../../assets/home/product/AccountsImage.png';
import SalesImage from '../../../assets/home/product/SalesImage.png';
import ReceptionistImage from '../../../assets/home/product/Ai-recetionist.jpeg';

import Vector1 from '../../../assets/home/product/Vector1.png';
import Vector2 from '../../../assets/home/product/Vector2.png';
import Vector3 from '../../../assets/home/product/Vector3.png';
import Vector4 from '../../../assets/home/product/Vector4.png';

import SideBG1 from '../../../assets/home/sidebg4.png';
import SideBG2 from '../../../assets/home/sidebg6.png';

const agents = [
  {
    title: 'AI Receptionist',
    description:
      'Never miss a call or booking again. Our AI Receptionist handles enquiries, schedules appointments, sends reminders, and ensures every customer receives a prompt, professional response—day or night.',
    image: ReceptionistImage,
    path: '/products',
    position: { top: '10%', left: '25%' },
    tooltipAlign: 'right',
  },
  {
    title: 'Admin Agent',
    description:
      'Automate your paperwork and daily admin. This agent creates and manages documents, quotes, and schedules, integrates with CRM, and keeps your business organised.',
    image: AdminImage,
    path: '/products',
    position: { top: '10%', right: '25%' },
    tooltipAlign: 'left',
  },
  {
    title: 'Accounts Agent',
    description:
      'Stay on top of your finances with automated invoicing, reminders, and real-time tracking. Syncs with your calendar to ensure smooth billing.',
    image: AccountsImage,
    path: '/products',
    position: { bottom: '10%', left: '25%' },
    tooltipAlign: 'right',
  },
  {
    title: 'Sales Agent',
    description:
      'Capture leads and move your pipeline. Automate follow-ups, send proposals, and update CRM to close deals faster.',
    image: SalesImage,
    path: '/products',
    position: { bottom: '10%', right: '25%' },
    tooltipAlign: 'left',
  },
];

export default function ProductSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="pb-36 relative h-[120vh] w-full bg-white overflow-hidden mt-30">
     {/* Backgrounds */}
<img
  src={SideBG1}
  className="hidden md:flex absolute top-0 left-0 w-40 sm:w-48 md:w-62 pointer-events-none z-0"
  alt="bg1"
/>
<img
  src={SideBG2}
  className="hidden md:flex absolute bottom-0 right-0 w-48 sm:w-56 md:w-72 pointer-events-none z-0"
  alt="bg2"
/>

  {/* Heading */}
     <div className="text-center mb-4 px-4 sm:px-6 md:px-0 relative z-10">
  <h2
    className="
      text-xl      /* base: mobile */
      sm:text-xl   /* ≥640px */
      md:text-2xl   /* ≥768px */
      lg:text-4xl   /* ≥1024px */
      xl:text-5xl   /* ≥1280px */
      font-semibold 
      text-gray-800
      leading-snug   /* tighter line-height on mobile */
      sm:leading-tight /* normal on larger */
    "
  >
    AI-Powered Assistance, Tailored for Your Business
  </h2>
</div>

      <div className="hidden md:flex relative w-full h-full items-center justify-center z-10">
        {/* Central Personal Assistant */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center text-center max-w-md px-4 transition-all duration-500 ${
            hoveredIndex !== null ? 'scale-105 shadow-2xl ring-4 ring-purple-300' : ''
          }`}
        >
          <img
            src={PersonalAssistance}
            alt="Personal Assistance"
            className="w-[280px] md:w-[360px] z-10 transition-transform duration-500"
          />
          <div className="bg-blue-100 text-blue-800 px-10 py-2 rounded-xl text-2xl md:text-3xl font-semibold inline-block">
            Personal Assistance
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Our Personal Assistant connects you with dedicated virtual agents to handle calls, follow-ups,
            documentation, scheduling, and more—freeing up your time so you can focus on what matters most.
          </p>
        </div>

        {/* Agent Circles with Vector Arrows */}
        {agents.map((agent, index) => {
          const isHovered = hoveredIndex === index;

          const moveX =
            agent.position.left !== undefined ? 'translate-x-[30px]' :
            agent.position.right !== undefined ? '-translate-x-[30px]' : '';

          const moveY =
            agent.position.top !== undefined ? 'translate-y-[30px]' :
            agent.position.bottom !== undefined ? '-translate-y-[30px]' : '';

          const hoverAnimation = isHovered ? `${moveX} ${moveY} scale-105` : '';

          // Choose vector image based on index
          const vectorMap = {
            0: Vector3,
            1: Vector2,
            2: Vector4,
            3: Vector1,
          };

          // Vector position tweaks per index
          const vectorPosition = {
            0: 'absolute -bottom-2 -right-12',
            1: 'absolute -bottom-1 -left-8',
            2: 'absolute -top-4 -right-6',
            3: 'absolute -top-4 -left-6',
          };

          return (
            <div
              key={index}
              style={{ position: 'absolute', ...agent.position }}
              className={`group z-10 cursor-pointer text-center transition-all duration-500 ease-in-out ${hoverAnimation}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(agent.path)}
            >
              {/* Tooltip on hover */}
              {isHovered && (
                <div
                  className={`absolute -top-[10%] ${
                    agent.tooltipAlign === 'right' ? 'right-[100%] ml-2' : 'left-[100%] mr-2'
                  } w-[350px] bg-[#ede9fe] text-black text-sm p-3 rounded-xl shadow-xl z-30 whitespace-normal`}
                >
                  {agent.description}
                </div>
              )}

              {/* Vector Arrow */}
              <img
                src={vectorMap[index]}
                alt={`Vector${index + 1}`}
                className={`w-[80px] h-auto pointer-events-none z-0 ${vectorPosition[index]}`}
              />

              {/* Circle */}
              <div className="w-[180px] h-[180px] bg-purple-100 rounded-full flex flex-col items-center justify-center transition-transform duration-500 shadow-lg relative z-10">
                <img
                  src={agent.image}
                  alt={agent.title}
                  className="w-[140px] h-[140px] rounded-full object-cover mb-2"
                />
              </div>
              <span className="text-xl font-semibold text-black px-2">{agent.title}</span>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="min-h-screen w-full flex flex-col md:hidden z-20 px-4 pt-10 pb-20 space-y-10">
        <div className="text-center">
          <img
            src={PersonalAssistance}
            alt="Personal Assistance"
            className="w-[200px] mx-auto"
          />
          <div className="bg-blue-100 text-blue-800 px-6 py-2 rounded-xl text-xl font-semibold inline-block mt-4">
            Personal Assistance
          </div>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Our Personal Assistant connects you with dedicated virtual agents to handle calls, follow-ups,
            documentation, scheduling, and more—freeing up your time so you can focus on what matters most.
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              onClick={() => navigate(agent.path)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-[70px] h-[70px] bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={agent.image}
                  alt={agent.title}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-semibold text-black">{agent.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* View All Products Button */}
<div className="w-full text-center mt-8 md:mt-4 relative z-20">
  <button
    onClick={() => navigate('/products')}
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-300"
  >
    View All Products
  </button>
</div>
    </section>
  );
}
