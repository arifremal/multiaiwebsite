import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SignupModal from "./SignupModal";
import SalesAgent from "../../../assets/services/SalesAgent.jpg";

// Decorative BGs
import SideBG1 from "../../../assets/home/sidebg9.png";
import SideBG2 from "../../../assets/home/sidebg6.png";
import SideBG3 from "../../../assets/home/sidebg2.png";

const Service5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative px-6 py-16 bg-white overflow-hidden">
      {/* Decorative Backgrounds */}
      <img
        src={SideBG1}
        alt="bg1"
        className="absolute top-10 -left-40 md:w-126 pointer-events-none z-0"
      />
      <img
        src={SideBG2}
        alt="bg2"
        className="absolute bottom-0 -right-32 md:w-116 pointer-events-none z-0"
      />

      <div className="relative z-10">
        {/* Centered Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-indigo-700">
            Sales Agent (Salex)
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Automate lead management, follow-ups, and sales reporting to keep
            your pipeline moving smoothly. Focus on building relationships and
            closing deals with a more efficient, consistent sales process.
          </p>
        </motion.div>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto items-center">
          {/* Left: Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={SalesAgent}
              alt="Sales Agent"
              className="w-full rounded-2xl shadow-lg object-cover"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </motion.div>

          {/* Right: Features */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Lead Capture and Follow-Up",
                desc: "Automatically capture leads from calls, forms, and emails, then send professional follow-up messages to keep prospects engaged and save you time.",
              },
              {
                title: "CRM Management and Proposal Creation",
                desc: "Keep your CRM up to date in real time while generating quotes and proposals instantly, streamlining your sales process and improving efficiency.",
              },
              {
                title: "Sales Reporting and Forecasting",
                desc: "Access clear sales reports and forecasts that provide valuable insights, helping you track performance and make informed business decisions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-indigo-600 mb-5">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

            <motion.button
              onClick={openModal}
              className="mt-4 px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-md font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up Free
            </motion.button>
          </motion.div>
        </div>

        {/* Additional Info Paragraph at the bottom */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto text-gray-700 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Discover AI tools that take the manual work off your plate—like virtual receptionists,
            smart invoicing, and sales automation. Everything we offer is built to save time,
            increase efficiency, and grow with your business.
            <span className="block sm:inline font-medium text-indigo-600">
              New products are on the way—stay tuned for powerful tools launching soon.
            </span>
          </p>
          {/* Contact Us Button */}
          <div className="mt-8">
            <Link to="/contact">
              <button className="px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-md font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Modal Component */}
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Service5;
