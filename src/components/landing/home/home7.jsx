import React from 'react';
import sidebg7 from '../../../assets/home/sidebg7.png';

const features = [
  {
    title: 'Perth-Based and Personal',
    description:
      'We’re your local AI team—no outsourcing, just face-to-face support and solutions tailored to your business.',
  },
  {
    title: 'AI Made Simple',
    description:
      ' Whether you’re starting or scaling with AI, we make it easy, clear, and aligned with your goals—no jargon.',
  },
  {
    title: 'Trusted and Affordable',
    description:
      ' With 6+ years of experience, we offer reliable service and pricing that keeps AI innovation within reach.',
  },
];

const bgColors = [
  "bg-[#E0F2FE]", // Light blue for card 1
  "bg-[#E6FFFA]", // Light teal for card 2
  "bg-[#F3E8FF]", // Light purple for card 3
];


const Home7 = () => {
  return (
    <div className="w-full relative overflow-hidden bg-white mt-25">
              {/* Bottom Left Decorative Image (fixed overlap + positioning) */}
    <img
      src={sidebg7}
      alt="Decoration"
      className="absolute bottom-20 right-0 w-[300px] md:w-[200px] lg:w-[250px] pointer-events-none z-0 opacity-120"
    />

    

    <section className="container mx-auto px-6 md:px-24 py-20 text-gray-900">
      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-14 md:gap-20 border-2 border-[#6F4CFF] bg-white rounded-2xl p-12 ">
        {/* Left Heading */}
        <div className="md:w-1/2 text-left">
  {/* Combined Heading */}
  <h2 className="text-[24px] md:text-[71px] font-semibold leading-tight text-black">
    <span className="text-indigo-600">Choose</span> Multiple
    <br />
     AI Solutions
    <br />
      Your <span className="text-indigo-600">Local AI </span><br />
Experts in Perth

  </h2>

  {/* Gap between heading and paragraph */}
  <div className="h-6 md:h-30"></div>

  {/* Paragraph */}
  <p className="text-base md:text-lg text-gray-600">
    Simplify your business with flexible, scalable, and intelligent AI solutions built for results.
  </p>
</div>


        {/* Right Features */}
       <div className="md:w-1/2 space-y-8">
  {features.map((f, i) => (
    <div
      key={i}
      className={`rounded-xl p-6 md:p-8 shadow-md ${bgColors[i % bgColors.length]}`}
    >
      <h3 className="text-[17px] md:text-[22px] text-gray-900">
        {f.title}
      </h3>
      <p className="mt-2 text-[17px] md:text-[20px] text-gray-700 ">
        {f.description}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>

      </div>
  );
};

export default Home7;
