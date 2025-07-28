import React, { useState, useEffect, useCallback } from "react";
import "./FloatingIcons.css";

// ✅ Image imports
import img1 from "../../../assets/home/Solutionsfor/AutomationSolutions.jpg";
import img2 from "../../../assets/home/Solutionsfor/CustomAISoftwareDevelopment.jpg";
import img3 from "../../../assets/home/Solutionsfor/NaturalLanguageProcessing.jpg";
import img4 from "../../../assets/home/Solutionsfor/MachineLearningModels.jpg";
import img5 from "../../../assets/home/Solutionsfor/DataIntegration.jpg";

import SideBG1 from "../../../assets/home/sidebg1.png";
import SideBG2 from "../../../assets/home/sidebg6.png";

// ✅ Floating icon imports
import Icon1 from "../../../assets/home/Icons/2.svg";
import Icon2 from "../../../assets/home/Icons/3.svg";
import Icon3 from "../../../assets/home/Icons/4.svg";
import Icon4 from "../../../assets/home/Icons/7.svg";
import Icon5 from "../../../assets/home/Icons/6.svg";

const tabs = [
  "Custom AI Solutions",
  "Smart Workflow Automation",
  "Secure & Scalable Systems",
  "End-to-End AI Development",
  "Smart Workflow Automation",
];

const descriptions = [
  "We craft AI applications tailored to your unique challenges, ensuring solutions that fit your business perfectly.",
  "From administrative duties to customer interactions, our AI tools streamline workflows, freeing your team to focus on what matters most.",
  "Built with Australian data standards, our solutions ensure your data is protected as your business grows.",
  "From initial strategy to final deployment, we manage every step, turning your AI concepts into user-friendly software.",
  "From initial strategy to final deployment, we manage every step, turning your AI concepts into user-friendly software.",
];

const images = [img1, img2, img3, img4, img5];
const floatingIcons = [Icon1, Icon2, Icon3, Icon4, Icon5];

const getReorderedTabs = (tabs, activeIndex) => {
  const n = tabs.length;
  const half = Math.floor(n / 2);

  return tabs.map((_, i) => {
    // shift i so that i=half → activeIndex, i<half → left items, i>half → right items
    const realIndex = (activeIndex + i - half + n) % n;
    return {
      label: tabs[realIndex],
      realIndex
    };
  });
};


const Home3 = () => {
 const [activeIndex, setActiveIndex] = useState(2);
  const [fade, setFade] = useState(true);

  // single changeTab for both manual and auto
  const changeTab = useCallback((newIndex) => {
    if (newIndex === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 300);
  }, [activeIndex]);

  // auto‑advance 5s after each index change
  useEffect(() => {
    const timer = setTimeout(
      () => changeTab((activeIndex + 1) % tabs.length),
      5000
    );
    return () => clearTimeout(timer);
  }, [activeIndex, changeTab]);

  // prev/next now just call changeTab
  const handlePrev = () =>
    changeTab((activeIndex - 1 + tabs.length) % tabs.length);
  const handleNext = () =>
    changeTab((activeIndex + 1) % tabs.length);



  return (
    <div className="w-full py-25 bg-white relative overflow-hidden">
      {/* Backgrounds */}
      <img
        src={SideBG1}
        className="absolute top-50 -left-60 w-54 md:w-150 pointer-events-none"
        alt="bg1"
      />
      <img
        src={SideBG2}
        className="absolute bottom-0 right-0 w-64 md:w-80 pointer-events-none"
        alt="bg2"
      />

      {/* Floating Icons - Container */}

      <div className="relative w-full z-10 hidden md:block">
        {/* Left Floating Icons */}
        {/* Floating Icons - Container */}
       <div className={`relative w-full z-10 transition-opacity duration-700 ease-in-out  ${fade ? "opacity-100" : "opacity-0"}`}>
        <img
          src={floatingIcons[0]}
          alt="icon-1"
          className="floating-icon delay-1 left-[380px] top-[250px] w-[100px]"
        />
        <img
          src={floatingIcons[1]}
          alt="icon-2"
          className="floating-icon delay-2 left-[300px] top-[400px] w-[120px]"
        />
        <img
          src={floatingIcons[2]}
          alt="icon-3"
          className="floating-icon delay-3 left-[350px] top-[550px] w-[130px]"
        />
        {/* Right Floating Icons */}
        <img
          src={floatingIcons[4]}
          alt="icon-5"
          className="floating-icon delay-1 right-[380px] top-[250px] w-[100px]"
        />
        <img
          src={floatingIcons[3]}
          alt="icon-4"
          className="floating-icon delay-2 right-[300px] top-[400px] w-[120px]"
        />
        <img
          src={floatingIcons[0]}
          alt="icon-3"
          className="floating-icon delay-3 right-[350px] top-[550px] w-[130px]"
        />
        </div>
      </div>

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
    AI-Powered Solutions Built for Growth
  </h2>
</div>


      {/* Tabs */}
<div className="relative z-10 mb-6 px-4">
  <div
    className="flex items-center sm:justify-center no-scrollbar space-x-2 sm:space-x-4         
      -mx-4 sm:mx-0 px-4"
  >
    {getReorderedTabs(tabs, activeIndex).map((tab) => (
      <button
        key={tab.realIndex}
        onClick={() => changeTab(tab.realIndex)}
        className={`
          whitespace-nowrap
          rounded-md
          transition-transform transform
          ${
            tab.realIndex === activeIndex
              ? `
                text-gray-800 font-semibold scale-105 text-lg sm:text-3xl mx-1 sm:mx-3`
              : `
                text-gray-500 text-sm sm:text-[13px] hover:text-black border border-gray-100 px-3 py-1`
          }
        `}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>


      {/* Description + Arrows */}
      <div className="text-center max-w-3xl mx-auto px-4 relative z-10">
  <div className="flex justify-center items-center space-x-2 md:space-x-4">
    <button
      onClick={handlePrev}
      className="border border-gray-300 p-1 md:p-2 text-sm md:text-base rounded-full hover:bg-gray-100"
    >
      &#8592;
    </button>
    <p
      className={`text-gray-700 text-sm md:text-sm lg:text-xl mb-6 transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {descriptions[activeIndex]}
    </p>
    <button
      onClick={handleNext}
      className="border border-gray-300 p-1 md:p-2 text-sm md:text-base rounded-full hover:bg-gray-100"
    >
      &#8594;
    </button>
  </div>
</div>


      {/* Image */}
     <div className="relative mt-12 flex justify-center z-10">
  <img
    src={images[activeIndex]}
    alt={tabs[activeIndex]}
    className={`rounded-3xl shadow-xl object-cover transition-opacity duration-500 ${
      fade ? "opacity-100" : "opacity-0"
    } w-[300px] h-[240px] md:w-[450px] md:h-[320px]`}
  />
</div>

    </div>
  );
};

export default Home3;
