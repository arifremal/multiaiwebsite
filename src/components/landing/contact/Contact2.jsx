import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import SideBG1 from '../../../assets/home/sidebg1.png';
import SideBG2 from '../../../assets/home/sidebg6.png';

const Contact2 = () => {
  return (
    <div className="relative min-h-screen bg-[#fdfbfa] px-6 py-20 md:px-16 font-inter overflow-hidden">

      {/* Decorative Backgrounds */}
      <img
        src={SideBG1}
        alt="bg1"
        className="absolute bottom-[290px] -left-40 md:w-[32rem] pointer-events-none z-0"
      />
      <img
        src={SideBG2}
        alt="bg2"
        className="absolute bottom-0 right-0 w-72 md:w-96 pointer-events-none z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto w-full">

        {/* Left Form Section */}
        <div className="w-full md:w-2/3 bg-white rounded-3xl shadow-lg p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 tracking-tight">Contact Us</h2>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              We are deeply committed to delivering unparalleled service and unwavering support to ensure your experience exceeds expectations.
            </p>

            <form
  action="https://formsubmit.co/contact@multipleai.com.au"
  method="POST"
  className="space-y-6"
>
  {/* Hidden Inputs for success redirect and subject */}
  <input type="hidden" name="_next" value="https://multipleai.com.au/contact" />
  <input type="hidden" name="_subject" value="New Contact Form Submission" />

  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">First Name</label>
      <input
        type="text"
        name="First Name"
        placeholder="First Name"
        required
        className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
      />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">Last Name</label>
      <input
        type="text"
        name="Last Name"
        placeholder="Last Name"
        required
        className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
      <input
        type="email"
        name="Email"
        placeholder="Email"
        required
        className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
      />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">Phone</label>
      <input
        type="tel"
        name="Phone"
        placeholder="Phone"
        className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
      />
    </div>
  </div>

  <div>
    <label className="text-sm font-medium text-gray-700 mb-1 block">Your Message</label>
    <textarea
      name="Message"
      rows="4"
      placeholder="How can we help you?"
      required
      className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none text-sm"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-3 rounded-full transition duration-300 text-sm"
  >
    Submit
  </button>
</form>

          </div>
        </div>

        {/* Right Info Boxes */}
        <div className="w-full md:w-1/3 flex flex-col justify-between gap-6">
          {/* Address */}
          <div className="flex items-start gap-4 p-6 py-10 rounded-2xl bg-indigo-800 text-white shadow-md">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-base">Address</h4>
              <p className="text-sm leading-relaxed">
                <a
                  href="https://www.google.com/maps?q=Level+28,+140+St+Georges+Tce,+Perth,+Western+Australia+6000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Level 28, 140 St Georges Tce<br />
                  Perth, Western Australia 6000
                </a>
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-6 py-10 rounded-2xl bg-gray-100 shadow-sm">
            <FaPhone className="text-xl mt-1 text-indigo-600" />
            <div>
              <h4 className="font-semibold text-base text-black">Contact</h4>
              <p className="text-sm text-gray-700">
                <a href="tel:0861898577" className="hover:underline block">T: 08 6189 8577</a>
                <a href="tel:0452229880" className="hover:underline block">M: 0452 229 880</a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-6 py-10 rounded-2xl bg-gray-100 shadow-sm">
            <FaEnvelope className="text-xl mt-1 text-indigo-600" />
            <div>
              <h4 className="font-semibold text-base text-black">Email</h4>
              <p className="text-sm text-gray-700">
                <a href="mailto:contact@multipleai.com.au" className="hover:underline">
                  contact@multipleai.com.au
                </a>
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 p-6 py-10 rounded-2xl bg-gray-100 shadow-sm">
            <FaClock className="text-xl mt-1 text-indigo-600" />
            <div>
              <h4 className="font-semibold text-base text-black">Working Hours</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mon to Sat - 10 am to 7 pm<br />
                Sunday - 11 am to 5 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
