import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminDocumentAgentImg from "../../../assets/services/Admin&DocumentAgent.jpg";
import SignupModal from "./SignupModal";
import SideBG3 from "../../../assets/home/sidebg1.png";

const Service3 = () => {
   const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  return (
    <div className="relative px-6 py-16 bg-white overflow-hidden">
      <img
        src={SideBG3}
        alt="bg3"
        className="absolute -bottom-60 -right-50 w-32 md:w-120 pointer-events-none z-0 transform -translate-y-1/2"
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
            Admin & Document Agent (Admin)
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Automate your quotes, contracts, and proposals with ease, reducing
            errors and cutting admin time. Stay organised and ready for every
            job, so you can focus on your business.
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
              src={AdminDocumentAgentImg}
              alt="Admin & Document Agent"
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
                title: "Efficient Document Creation and Editing",
                desc: "Generate documents quickly using templates or custom inputs, and easily find and update existing files to keep your workflow moving without delays.",
              },
              {
                title: "Consistent Branding and Accurate Data",
                desc: "Maintain professional, consistent branding and formatting across all documents, while auto-filling details through CRM integration to reduce errors and save time.",
              },
              {
                title: "Secure and Organised File Management",
                desc: "Keep all your documents securely stored and easily searchable with smart tagging, ensuring you can access what you need whenever you need it.",
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
        </div>
      </div>
      {/* Modal Component */}
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Service3;
