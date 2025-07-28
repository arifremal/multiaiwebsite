import React from 'react';
import { Link } from 'react-router-dom';

import { FaYoutube, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/home/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Link to="/">
          <img src={logo} alt="MultipleAI Logo" className="h-24 sm:h-32 md:h-36 mb-2" />
          </Link>
        </div>

        {/* Services */}
        {/* Services */}
<div>
  <h4 className="font-semibold mb-3 text-base sm:text-lg">Services</h4>
  <ul className="space-y-1 text-xs sm:text-sm">
    <li>
      <Link to="/services#AI%20Consulting" className="hover:text-indigo-600 transition-colors">
        AI Consulting
      </Link>
    </li>
    <li>
      <Link to="/services#Automation%20Solutions" className="hover:text-indigo-600 transition-colors">
        Automation Solutions
      </Link>
    </li>
    <li>
      <Link to="/services#Custom%20AI%20Software%20Development" className="hover:text-indigo-600 transition-colors">
        Custom AI Software Development
      </Link>
    </li>
    <li>
      <Link to="/services#Machine%20Learning%20Models" className="hover:text-indigo-600 transition-colors">
        Machine Learning Models
      </Link>
    </li>
    <li>
      <Link to="/services#Data%20Integration" className="hover:text-indigo-600 transition-colors">
        Data Integration
      </Link>
    </li>
    <li>
      <Link to="/services#Web%20App%20Development" className="hover:text-indigo-600 transition-colors">
        Web App Development
      </Link>
    </li>
  </ul>
</div>


        {/* Quick Links */}
<div>
  <h4 className="font-semibold mb-3 text-base sm:text-lg">Quick Links</h4>
  <ul className="space-y-1 text-xs sm:text-sm">
    <li>
      <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-indigo-600 transition-colors">About Us</Link>
    </li>
    <li>
      <Link to="/products" className="hover:text-indigo-600 transition-colors">Products</Link>
    </li>
    <li>
      <Link to="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
    </li>
    <li>
      <Link to="/career" className="hover:text-indigo-600 transition-colors">Career</Link>
    </li>
  </ul>
</div>


        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-base sm:text-lg">Contact</h4>
          <ul className="text-xs sm:text-sm space-y-1">
  <li>
    <a href="tel:0861898577" className="hover:underline">T: 08 6189 8577</a>
  </li>
  <li>
    <a href="tel:0452229880" className="hover:underline">M: 0452 229 880</a>
  </li>
  <li>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Level+28,+140+St+Georges+Tce,+Perth,+Western+Australia+6000"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Level 28, 140 St Georges Tce
    </a>
  </li>
  <li>Perth, Western Australia 6000</li>
  <li>
    <a href="mailto:contact@multipleai.com.au" className="hover:underline">
      contact@multipleai.com.au
    </a>
  </li>
</ul>

          <div className="flex gap-4 mt-3 text-xl">
            <FaYoutube className="hover:text-red-600" />
            <FaInstagram className="hover:text-pink-500" />
            <FaEnvelope className="hover:text-blue-500" />
            <FaLinkedin className="hover:text-blue-700" />
          </div>
        </div>
      </div>

      {/* CTA */}
<div className="text-center text-lg sm:text-xl font-medium mb-8 px-6">
  Questions?{' '}
  <Link
    to="/contact"
    className="underline cursor-pointer hover:text-indigo-600"
  >
    Contact us
  </Link>
</div>


      {/* Bottom Bar */}
      <div className="bg-green-700 text-white py-3 text-xs sm:text-sm px-6 md:px-40 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div>
          Privacy Policy | Terms &amp; Conditions
        </div>
        <div>
          Design &amp; Developed by Perfect Web Solution
        </div>
      </div>
    </footer>
  );
}
