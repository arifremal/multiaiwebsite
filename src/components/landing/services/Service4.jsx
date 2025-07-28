import React, { useState } from "react";
import { motion } from "framer-motion";
import SignupModal from "./SignupModal";
import AccountsAgent from "../../../assets/services/AccountsAgent.jpg";

// Decorative BGs
import SideBG1 from "../../../assets/home/sidebg1.png";
import SideBG2 from "../../../assets/home/sidebg6.png";

const Service4 = () => {
   const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return (
    <div className="relative px-6 py-16 bg-white overflow-hidden">
      {/* Decorative Backgrounds */}
      <img
        src={SideBG1}
        alt="bg1"
        className="absolute top-60 -left-40 md:w-96 pointer-events-none z-0"
      />
      <img
        src={SideBG2}
        alt="bg2"
        className="absolute bottom-0 -right-32 md:w-110 pointer-events-none z-0"
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-indigo-700">
            Accounts Agent (Invoice-Ian)
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Simplify invoicing and payment tracking with automated reminders and
            real-time cash flow insights. Reduce errors, get paid faster, and
            make smarter financial decisions to grow your business.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto items-center">
          {/* Left Section - Features */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "Automated Invoicing & Reminders",
                desc: "Instantly send professional invoices and automate payment reminders, ensuring you get paid faster and reduce the administrative burden of chasing payments.",
              },
              {
                title: "Real-time Financial Tracking",
                desc: "Gain immediate clarity on your business's financial health by tracking all payment statuses and summarising your cash flow in real time.",
              },
              {
                title: "Seamless System Integration",
                desc: "Our service effortlessly syncs with your CRM and calendar, streamlining your financial workflows and centralising essential business data for improved efficiency.",
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
                <h3 className="text-2xl font-semibold text-indigo-700 mb-5">
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

          {/* Right Section - Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={AccountsAgent}
              alt="Accounts Agent"
              className="w-full rounded-2xl shadow-lg object-cover"
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 10px 30px rgba(99, 102, 241, 0.3)",
              }}
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

export default Service4;
