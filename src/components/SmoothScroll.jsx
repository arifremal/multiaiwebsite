// components/SmoothScroll.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,         // Smoothness: 0.07–0.1 is ideal for gentle scroll
      multiplier: 0.7,    // Scroll speed control (0.6 to 0.8 is good)
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div id="main-container" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
