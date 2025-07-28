import React, { useState } from "react";
import { motion } from "framer-motion";
import SignupModal from "./SignupModal";
import AIReceptionist from '../../../assets/services/AIReceptionist.jpg';
import PersonalAssistantImg from '../../../assets/home/product/PersonalAssistant.png';
import SideBG1 from '../../../assets/home/sidebg1.png';
import SideBG2 from '../../../assets/home/sidebg6.png';

const Service2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative px-6 py-16 bg-white overflow-hidden">
      {/* Decorative BGs */}
      <img src={SideBG1} alt="bg1" className="absolute top-60 -left-40 md:w-130 pointer-events-none z-0" />
      <img src={SideBG2} alt="bg2" className="absolute bottom-0 -right-32 md:w-110 pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Personal Assistant Image and Title */}
        <motion.div
          className="flex flex-col items-center justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={PersonalAssistantImg}
            alt="Personal Assistance"
            className="w-[160px] md:w-[250px] transition-transform duration-500 hover:scale-105"
          />
          <div className=" bg-blue-100 text-blue-800 px-8 py-1 rounded-xl text-lg md:text-xl font-semibold">
            Personal Assistance
          </div>
          <p
  className="
    mt-4
    text-sm text-gray-600 leading-relaxed
    text-center
    mx-auto
    w-full
    max-w-[740px]
    px-4 sm:px-0
  "
>
  Our Personal Assistant connects you with dedicated virtual agents to handle calls, follow‑ups,
  documentation, scheduling, and more—freeing up your time so you can focus on what matters most.
</p>

        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-indigo-700">AI Receptionist (Receptionist-Tina)</h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Let our AI receptionist manage your calls, bookings, and client questions 24/7, ensuring every inquiry is answered promptly and routed correctly.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto items-center">
          {/* Left Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, index) => {
              const items = [
                {
                  title: "Reliable 24/7 Call and Enquiry Handling",
                  desc: "Our AI receptionist answers calls and client questions around the clock, ensuring every inquiry is addressed promptly.",
                },
                {
                  title: "Efficient Appointment Management and Reminders",
                  desc: "Automatically book and confirm appointments while sending timely reminders via SMS, email, or call.",
                },
                {
                  title: "Smart Message Routing and Client Support",
                  desc: "Queries are quickly directed to the right team members, cutting down on admin time and improving customer satisfaction.",
                }
              ];
              return (
                <motion.div
                  key={index}
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-indigo-700 mb-3">{items[index].title}</h3>
                  <p className="text-gray-600">{items[index].desc}</p>
                </motion.div>
              );
            })}

            <motion.button
              onClick={openModal}
              className="mt-4 px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up Free
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={AIReceptionist}
              alt="AI Receptionist"
              className="w-full rounded-2xl shadow-lg object-cover"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Modal Component */}
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Service2;
