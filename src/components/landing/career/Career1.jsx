import React from 'react';
import BG1 from '../../../assets/home/sidebg1.png';
import BG2 from '../../../assets/home/sidebg6.png';

const Career1 = () => {
  return (
    <div className="relative min-h-screen px-6 py-20 flex items-center justify-center font-inter overflow-hidden bg-[#fdfbfa]">
      {/* Backgrounds */}
      <img src={BG1} alt="Decorative BG1" className="absolute top-20 -left-32 w-72 md:w-[550px] pointer-events-none z-0" />
      <img src={BG2} alt="Decorative BG2" className="absolute bottom-0 right-0 w-60 md:w-95 pointer-events-none z-0" />

      {/* Form Card */}
      <div className="relative z-10 max-w-5xl w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-6 text-center">Join Our Team</h2>
        <p className="text-gray-600 mb-8 text-center text-lg">
          Fill out the form below and we’ll get back to you if there's a match.
        </p>

        <form
          action="https://formsubmit.co/contact@multipleai.com.au"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Hidden Configs */}
          <input type="hidden" name="_subject" value="New Career Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Thank you for applying! We’ll get back to you soon." />
          <input type="hidden" name="_next" value="https://multipleai.com.au/career" />

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="Full Name"
              required
              placeholder="Your full name"
              className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="Email"
                required
                placeholder="you@example.com"
                className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="Phone"
                required
                placeholder="e.g. +91 9876543210"
                className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position Applying For</label>
            <select
              name="Position"
              required
              className="w-full p-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a role...</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>UI/UX Designer</option>
              <option>Intern</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
            <input
              type="file"
              name="Resume"
              required
              accept=".pdf,.doc,.docx"
              className="w-full border border-gray-300 p-3 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message / Cover Letter</label>
            <textarea
              name="Message"
              rows="5"
              required
              placeholder="Tell us why you’d be a great fit..."
              className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career1;
