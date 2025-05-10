import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactForm from "./ContactForm";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="font-inter min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Header */}
      <header className="w-full flex items-center justify-between p-4 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-500">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 shadow-md">
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12l2 2 4-4"
              />
            </svg>
          </span>
          <span className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm">
            SoftSell
          </span>
        </div>
        <div className="flex-shrink-0">
          <DarkModeSwitch
            checked={darkMode}
            onChange={setDarkMode}
            size={40}
            sunColor="#fbbf24"
            moonColor="#fff"
            style={{ margin: "0 0 0 1rem" }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white dark:from-blue-800 dark:to-blue-700 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Unlock Value from Your Unused Software Licenses
        </h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Transform dormant software assets into instant cash. Fast, secure, and
          hassle-free resale for businesses of any size.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transform hover:scale-105 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Get a Quote
        </button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-8 bg-blue-50 dark:bg-gray-800 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-10 text-blue-700 dark:text-blue-300">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-t-4 border-blue-400 flex flex-col items-center"
            tabIndex={0}
            aria-label="Upload License"
          >
            <div className="text-5xl mb-4">📤</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
              Upload License
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Submit your unused software license details securely through our
              platform.
            </p>
          </div>
          {/* Step 2 */}
          <div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-t-4 border-blue-400 flex flex-col items-center"
            tabIndex={0}
            aria-label="Get Valuation"
          >
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
              Get Valuation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive a transparent, competitive quote for your license within
              minutes.
            </p>
          </div>
          {/* Step 3 */}
          <div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-t-4 border-blue-400 flex flex-col items-center"
            tabIndex={0}
            aria-label="Get Paid"
          >
            <div className="text-5xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
              Get Paid
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accept the offer and receive fast, secure payment directly to your
              account.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-8 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-10 text-blue-700 dark:text-blue-300">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Secure & Trusted */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-indigo-400 flex flex-col items-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-300">
              Secure & Trusted
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Thousands of businesses trust us for safe license transactions.
            </p>
          </div>
          {/* Fast Payments */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-indigo-400 flex flex-col items-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-300">
              Fast Payments
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get paid quickly with our streamlined and reliable process.
            </p>
          </div>
          {/* Best Value */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-indigo-400 flex flex-col items-center">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-300">
              Best Value
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              We offer top market prices for your unused software licenses.
            </p>
          </div>
          {/* Expert Support */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-indigo-400 flex flex-col items-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-lg mb-2 text-indigo-700 dark:text-indigo-300">
              Expert Support
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Our team is here to help you every step of the way, 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-8 bg-blue-50 dark:bg-gray-800 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-10 text-blue-700 dark:text-blue-300">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-indigo-400">
            <p className="italic mb-4 text-lg text-gray-700 dark:text-gray-200">
              "The process was incredibly simple and fast. We turned unused
              licenses into cash within days!"
            </p>
            <p className="font-semibold text-indigo-700 dark:text-indigo-300">
              Alex Johnson
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              IT Director, FutureTech
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-indigo-400">
            <p className="italic mb-4 text-lg text-gray-700 dark:text-gray-200">
              "Excellent support and great value for our old software. Highly
              recommended!"
            </p>
            <p className="font-semibold text-indigo-700 dark:text-indigo-300">
              Priya Singh
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Procurement Manager, Innovate Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-8 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-10 text-blue-700 dark:text-blue-300">
          Contact Us
        </h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="text-center p-6 mt-10 border-t border-blue-100 dark:border-gray-700 text-blue-900 dark:text-blue-200 bg-blue-50/50 dark:bg-gray-900/30">
        <p>&copy; 2025 SoftSell Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
