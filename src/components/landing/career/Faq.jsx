import React, { useState } from "react";

const faqs = [
  {
    q: "What does Multiple AI Solutions do?",
    a: "We develop custom AI software and automation tools to help businesses save time, reduce admin, and grow faster—with no technical knowledge required.",
  },
  {
    q: "Do I need technical skills to use your AI products?",
    a: "No. Our solutions are user-friendly and fully supported. We handle setup, training, and updates—so you can focus on running your business.",
  },
  {
    q: "How can an AI receptionist help my business?",
    a: "Our AI receptionist answers calls 24/7, books appointments, sends reminders, and follows up with clients—saving you hours every week.",
  },
  {
    q: "Is my data safe with your AI tools?",
    a: "Absolutely. We prioritise security and only work with Australian-standard-compliant platforms to ensure full data protection and privacy.",
  },
  {
    q: "Can your solutions integrate with my existing systems?",
    a: "Yes. We build AI tools that work seamlessly with your current CRM, calendar, email, and other business tools.",
  },
  {
    q: "What industries do you work with?",
    a: "We support a wide range of industries including trades, finance, real estate, legal, and small businesses across Australia.",
  },
  {
    q: "How do I get started with Multiple AI Solutions?",
    a: "Book a free consultation and we’ll assess your workflows, recommend solutions, and create a tailored AI plan for your business.",
  },
  {
    q: "How much do your AI products cost?",
    a: "Our pricing is flexible and based on your business size and needs. We offer affordable packages for startups to large teams.",
  },
  {
    q: "Do you offer local support?",
    a: "Yes. We’re based in Perth and offer personalised, face-to-face and remote support to ensure you’re always covered.",
  },
  {
    q: "What kind of automation can I implement?",
    a: "We automate admin tasks, document creation, invoicing, client communication, lead follow-ups, and more.",
  },
  {
    q: "Can I try your services before committing?",
    a: "Yes. We offer a free discovery session to help you explore how AI can help before you commit to anything.",
  },
  {
    q: "What makes your AI tools different?",
    a: "Our tools are designed specifically for Australian businesses, with local support, easy integration, and zero-tech-stress setup.",
  },
  {
    q: "Are your AI solutions scalable?",
    a: "Yes. Whether you’re a solo operator or a growing team, our solutions scale with your business.",
  },
  {
    q: "How quickly can I get started?",
    a: "Many of our tools can be implemented within days. Custom software may take longer depending on scope.",
  },
  {
    q: "What’s coming next from Multiple AI Solutions?",
    a: "We’re constantly innovating. Stay tuned—new AI-powered products and features are launching soon to make your business even smarter.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-indigo-200 rounded-xl shadow-sm transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-2 flex justify-between items-center focus:outline-none"
              >
                <span className="text-indigo-700 font-semibold">
                  {index + 1}. {item.q}
                </span>
                <span className="text-indigo-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-5 pb-4 text-gray-700 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="mt-5">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
