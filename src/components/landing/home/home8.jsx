import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // 👈 Add this at the top


import video1 from '../../../assets/home/video/brandvideo1.mp4';
import video2 from '../../../assets/home/video/brandvideo2.mp4';
import video3 from '../../../assets/home/video/brandvideo3.mp4';
import video4 from '../../../assets/home/video/brandvideo4.mp4';
import video5 from '../../../assets/home/video/brandvideo5.mp4';
import video6 from '../../../assets/home/video/brandvideo6.mp4';

import sidebg2 from '../../../assets/home/sidebg2.png';
import sidebg9 from '../../../assets/home/sidebg9.png';

const Home8 = () => {
  const videoWrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const el = videoWrapperRef.current;
      if (!el) return;
      let scrollAmount = 1;

      const interval = setInterval(() => {
        el.scrollLeft -= scrollAmount;
        if (el.scrollLeft <= 0) {
          el.scrollLeft = el.scrollWidth / 2;
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (

    <div className="w-full relative overflow-hidden bg-white">
                  {/* Bottom Left Decorative Image (fixed overlap + positioning) */}
        {/* <img
          src={sidebg2}
          alt="Decoration"
          className="absolute right-0 w-[70px] md:w-[80px] lg:w-[180px] pointer-events-none z-0 opacity-120"
        /> */}
    
        <img
  src={sidebg9}
  alt="Decoration"
  className="absolute -bottom-1 -left-16 md:-left-24 lg:-left-80 w-[150px] md:w-[200px] lg:w-[450px] pointer-events-none z-0 opacity-100"
 />


    <div className="container mx-auto px-6 md:px-24 py-20  text-gray-900">
      {/* Section Header */}
      <h2 className="text-4xl md:text-7xl text-center font-medium leading-tight max-w-8xl mb-8" data-aos="fade-up">
        What our <br />
        <span className="text-black">clients are saying ?</span>
      </h2>

      {/* Scrollable Carousel */}
      <div
        className="relative group mb-14"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={videoWrapperRef} className="relative overflow-hidden">
          <div className="flex gap-6 w-fit">
            {[
              video1, video2, video3, video4,
              video5, video6,
              video1, video2, video3, video4,
              video5, video6,
            ].map((vid, idx) => (
              <div
                key={idx}
                className="min-w-[200px] sm:min-w-[280px] md:min-w-[300px] rounded-xl overflow-hidden"
              >
                <video
                  src={vid}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
  onClick={() => {
    videoWrapperRef.current.scrollLeft -= 320;
  }}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 text-black p-3 rounded-full z-10 hover:bg-opacity-80 transition hidden group-hover:block"
>
  <AiOutlineLeft size={24} />
</button>
        <button
  onClick={() => {
    videoWrapperRef.current.scrollLeft += 320;
  }}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 text-black p-3 rounded-full z-10 hover:bg-opacity-80 transition hidden group-hover:block"
>
  <AiOutlineRight size={24} />
</button>
      </div>
    </div>
    </div>
  );
};

export default Home8;
