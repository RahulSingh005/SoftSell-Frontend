import React, { useState} from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ContactForm= () =>{
    const [form, setForm] = useState({
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const validate = () => {
      let errs = {};
      if (!form.name.trim()) errs.name = "Name is required";
      if (!form.email.trim()) errs.email = "Email is required";
      else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) errs.email = "Invalid email";
      if (!form.licenseType) errs.licenseType = "Please select a license type";
      if (!form.message.trim()) errs.message = "Message is required";
      return errs;
    };
  
    const handleChange = e => {
      setForm({ ...form, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: undefined });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      const errs = validate();
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      setSubmitted(true);
    };
  
    if (submitted) {
      return (
        <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-2xl shadow-2xl max-w-xl mx-auto">
          <p className="text-green-600 dark:text-green-400 text-lg font-semibold">Thank you! We’ll get in touch soon.</p>
        </div>
      );
    }
  
    return (
      <form
    className="max-w-xl mx-auto grid gap-4 text-left 
      bg-white/95 dark:bg-gray-900/95 
      backdrop-blur-md p-8 rounded-2xl shadow-2xl border-t-4 border-blue-400"
    onSubmit={handleSubmit}
    noValidate
  >
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className={`p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} 
          rounded w-full 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-400 dark:placeholder-gray-400 
          font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
        required
      />
      {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
    </div>
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={`p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} 
          rounded w-full 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-400 dark:placeholder-gray-400 
          font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
        required
      />
      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
    </div>
    <div>
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        className="p-3 border border-gray-300 dark:border-gray-700 rounded w-full 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-400 dark:placeholder-gray-400 
          font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
    <div>
    <select
    name="licenseType"
    value={form.licenseType}
    onChange={handleChange}
    className={`p-3 border ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} 
      rounded w-full 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100 
      font-normal
      focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
    required
  >
    <option value="">Select License Type</option>
    <option value="os">Operating System</option>
    <option value="design">Design Software</option>
    <option value="productivity">Productivity Suite</option>
    <option value="other">Other</option>
  </select>
  
      {errors.licenseType && <span className="text-red-500 text-xs">{errors.licenseType}</span>}
    </div>
    <div>
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        value={form.message}
        onChange={handleChange}
        className={`p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} 
          rounded w-full 
          bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 
          placeholder-gray-400 dark:placeholder-gray-400 
          font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
        required
      ></textarea>
      {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
    </div>
    <button
      type="submit"
      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Submit
    </button>
  </form>
    );
  }

  export default ContactForm;