import React from "react";

const SignupModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent">
      <div className="absolute inset-0" onClick={closeModal} />

      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl p-8 z-50">
        <h2 className="text-4xl font-bold text-indigo-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-8 text-sm">
          We are deeply committed to delivering unparalleled service and unwavering support to ensure your experience exceeds expectations.
        </p>

        {/* ✅ FormSubmit integration here */}
        <form
          className="space-y-6"
          action="https://formsubmit.co/contact@multipleai.com.au" // 🛠️ Replace with your email
          method="POST"
        >
          {/* Hidden Redirect & Bot Protection */}
          <input type="hidden" name="_next" value="https://multipleai.com.au/products" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone"
                className="w-full p-3 rounded-full border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700">Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="How can we help you?"
              className="w-full p-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none mt-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-3 rounded-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
