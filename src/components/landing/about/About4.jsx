import React from 'react';

// Import the 6 core values images
import Img1 from '../../../assets/about/Our Core Values 1 to 6/1.png';
import Img2 from '../../../assets/about/Our Core Values 1 to 6/2.png';
import Img3 from '../../../assets/about/Our Core Values 1 to 6/3.png';
import Img4 from '../../../assets/about/Our Core Values 1 to 6/4.png';
import Img5 from '../../../assets/about/Our Core Values 1 to 6/5.png';
import Img6 from '../../../assets/about/Our Core Values 1 to 6/6.png';

// Decorative backgrounds
import SideBG1 from '../../../assets/home/sidebg1.png';
import SideBG2 from '../../../assets/home/sidebg6.png';
import SideBG3 from '../../../assets/home/sidebg3.png';

const values = [
  {
    title: 'Simplicity',
    description:
      'We design AI solutions that are easy to use and understand, so you can automate tasks without adding complexity to your day.',
    image: Img1,
  },
  {
    title: 'Trustworthiness',
    description:
      'Your business deserves reliable tools. Our AI agents work consistently and securely, giving you peace of mind every step of the way.',
    image: Img2,
  },
  {
    title: 'Practical Innovation',
    description:
      'We focus on real-world AI applications that save time and improve accuracy, helping your small business run more smoothly.',
    image: Img3,
  },
  {
    title: 'Supportive Partnership',
    description:
      'We’re here to help you succeed with friendly, responsive support tailored to the unique needs of Australian businesses.',
    image: Img4,
  },
  {
    title: 'Efficiency',
    description:
      'Our AI agents streamline daily tasks, freeing up your time so you can focus on growing your business and serving your customers.',
    image: Img5,
  },
  {
    title: 'Accessibility',
    description:
      'We believe smart automation should be within reach for all businesses—no technical skills required, just practical results.',
    image: Img6,
  },
];

const About4 = () => {
  return (
    <div className="bg-[#fdfbfa] py-16 relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <img
        src={SideBG1}
        alt="bg1"
        className="absolute bottom-60 -left-40  md:w-120  pointer-events-none z-0"
      />
      <img
        src={SideBG2}
        alt="bg2"
        className="absolute bottom-0 right-0 w-72 md:w-96 pointer-events-none z-0"
      />
      {/* <img
        src={SideBG3}
        alt="bg3"
        className="absolute right-0 w-40 md:w-22  pointer-events-none z-0"
      /> */}

      <div className="relative z-10 container mx-auto px-6 md:px-24">
        <p className="text-xl text-center text-indigo-700 font-semibold mb-2">OUR VALUES</p>
        <h2 className="text-4xl md:text-7xl text-center font-medium leading-tight max-w-8xl pb-10">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-20 h-35 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-semibold text-black mb-2">{value.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About4;
