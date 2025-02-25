import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  event: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  event?: string;
}

const events = [
  'Robotic Challenge',
  'Drone Racing',
  'ROS Workshop',
  'AI in Robotics'
];

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    event: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ''))) {
      newErrors.phone = 'Invalid phone number (10 digits required)';
    }

    if (!formData.event) {
      newErrors.event = 'Please select an event';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          event: ''
        });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="register" className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Event Registration</h2>
          <p className="mt-2 text-sm text-gray-400">Sign up for our exciting robotics events</p>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="bg-green-500 rounded-lg p-6 text-white text-center"
            >
              <CheckCircle className="mx-auto mb-4 h-12 w-12" />
              <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
              <p>We'll contact you with further details.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="bg-gray-800 shadow-xl rounded-lg px-6 py-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className="mt-1"
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block w-full rounded-md bg-gray-700 border ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    } focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white px-4 py-2`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className="mt-1"
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full rounded-md bg-gray-700 border ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    } focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white px-4 py-2`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className="mt-1"
                >
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`block w-full rounded-md bg-gray-700 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-600'
                    } focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white px-4 py-2`}
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <div>
                <label htmlFor="event" className="block text-sm font-medium text-gray-300">
                  Select Event
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className="mt-1"
                >
                  <select
                    name="event"
                    id="event"
                    value={formData.event}
                    onChange={handleChange}
                    className={`block w-full rounded-md bg-gray-700 border ${
                      errors.event ? 'border-red-500' : 'border-gray-600'
                    } focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-white px-4 py-2`}
                  >
                    <option value="">Select an event</option>
                    {events.map(event => (
                      <option key={event} value={event}>
                        {event}
                      </option>
                    ))}
                  </select>
                  {errors.event && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.event}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Register Now
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}