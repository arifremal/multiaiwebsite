import React from 'react';
import logo1 from '../../../assets/home/BrandLogo1.png';
import logo2 from '../../../assets/home/BrandLogo2.png';
import logo3 from '../../../assets/home/BrandLogo3.png';
import logo4 from '../../../assets/home/BrandLogo4.png';
import logo5 from '../../../assets/home/BrandLogo5.png';
import logo6 from '../../../assets/home/BrandLogo6.png';
import logo7 from '../../../assets/home/BrandLogo7.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const BrandCarousel = () => {
  const repeatedLogos = [...logos, ...logos]; // repeat for infinite effect

  return (
    <div className="container mx-auto mb-10 md:px-48 relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-10">
         Expert in Leading Technologies{' '}
      </h2>

      {/* Scrolling logos */}
      <div className="overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee w-max">
          {repeatedLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand-${i}`}
              className="h-22 w-auto transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

        .animate-marquee {
  animation: marquee 20s linear infinite;
}

      `}</style>
    </div>
  );
};

export default BrandCarousel;
