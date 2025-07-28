/** @format */

import React, { useState } from 'react';
import whoImg from '../../../assets/home/AboutMultipleai/whoweare.jpg';
import missionImg from '../../../assets/home/AboutMultipleai/ourmission.jpg';
import visionImg from '../../../assets/home/AboutMultipleai/ourvision.jpg';
import sidebg1 from '../../../assets/home/sidebg1.png';
import SideBG2 from '../../../assets/home/sidebg6.png';
import SideBG3 from '../../../assets/home/sidebg3.png';
// import sidebg2 from '../../../assets/home/sidebg2.png';

const sections = [
	{
		title: 'Who We Are',
		heading: 'We’re Multiple AI Solutions — Your Local AI Automation Experts',
		content: `We’re Multiple AI Solutions, a Perth-based team passionate about making work easier through smart automation. We’ve helped local businesses with software development and marketing expertise for over six years.

Now, our AI agents handle daily tasks like admin, finance, sales, and customer support—so you can focus on what matters most. With both on-call and in-person support, we’re always here when you need us.`,
		img: whoImg,
	},
	{
		title: 'Mission',
		heading: 'Making AI Practical, Helpful, and Human',
		content: `At Multiple AI Solutions, we believe technology should feel like a helpful hand, not a hurdle. Our mission is to keep AI simple, practical, and genuinely useful in everyday work—helping you save time, ease stress, and focus on what truly matters.

Having supported over 200+ businesses in Perth, we’re proud to offer reliable, hands-on support that makes technology feel personal and approachable.`,
		img: missionImg,
	},
	{
		title: 'Vision',
		heading: 'AI That Empowers — Quietly, Powerfully, Reliably',
		content: `We see a future where AI is a trusted partner for businesses across Australia, offering smart, accessible tools without the confusion or complexity.

Our vision is to be the go-to choice for those who want powerful technology that works quietly behind the scenes, helping them move forward with confidence and peace of mind.`,
		img: visionImg,
	},
];

const About2 = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className='w-full relative overflow-hidden bg-white'>
			{/* Bottom Left Decorative Image (fixed overlap + positioning) */}
			<img
				src={sidebg1}
				alt='Decoration'
				className='absolute -bottom-1 -left-35 w-[300px] md:w-[400px] lg:w-[500px] pointer-events-none z-0 opacity-120'
			/>
			<img
				src={SideBG2}
				alt='bg2'
				className='absolute bottom-0 right-0 w-72 md:w-96 pointer-events-none z-0'
			/>
			{/* <img
				src={SideBG3}
				alt='bg3'
				className='absolute right-0 w-40 md:w-32  pointer-events-none z-0'
			/> */}

			<div className='w-full text-black py-12 relative z-10'>
				{/* Page Heading */}
				<div className="container mx-auto px-6 md:px-24 mb-6">
  <h2 className="text-4xl md:text-7xl font-medium leading-tight max-w-8xl text-center mx-auto">
    About <span>Multipleai Solutions</span>
  </h2>
</div>

				<div className='container mx-auto px-6 md:px-24 py-12'>
					{/* Tabs Row with Active + Others */}
					<div className='flex gap-4 mb-10'>
						{sections.map((sec, i) => {
							const isActive = activeIndex === i;
							return (
								<button
									key={i}
									onClick={() => setActiveIndex(i)}
									className={`text-[15px] md:text-[16px] font-medium px-5 py-2 rounded-full transition-all duration-300
            ${
							isActive
								? 'bg-white text-[#6A5BFF] border-[3px] border-[#6A5BFF] shadow-md'
								: 'text-black/80 hover:text-[#6A5BFF]'
						}`}
								>
									{sec.title}
								</button>
							);
						})}
					</div>

					{/* Content Box */}
					<div className='border-[3px] border-[#6A5BFF] rounded-3xl shadow-lg px-6 md:px-10 py-10 transition-all duration-500 ease-in-out'>
						<div className='flex flex-col md:flex-row items-center gap-14 md:gap-20'>
							{/* Left Text */}
							<div className='md:w-1/2'>
								<h3 className='text-[32px] md:text-[42px] font-semibold leading-tight text-indigo-800 mb-6'>
									{sections[activeIndex].heading}
								</h3>
								<p className='text-[17px] md:text-[18px] text-gray-700 leading-relaxed whitespace-pre-line font-normal tracking-tight'>
									{sections[activeIndex].content}
								</p>
							</div>

							{/* Right Image */}
							<div className='md:w-1/2'>
								<img
									src={sections[activeIndex].img}
									alt={sections[activeIndex].title}
									className='rounded-2xl w-full max-w-[600px] shadow-xl object-cover'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About2;
