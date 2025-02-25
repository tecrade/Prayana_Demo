import React from 'react';
import { Calendar, MapPin, BrainCircuit as Circuit, Cpu,Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const TypingText = ({ text }: { text: string }) => {
  return (
    <motion.div className="typingtext">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: index * 0.1}}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {

  const RegistrationForm = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden 
             bg-gray-900 bg-[url('/images/banner.png')] bg-no-repeat bg-center bg-cover">
      {/* Animated circuit background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
      {i % 3 === 0 ? (
        <Circuit className="w-16 h-16 text-blue-500/20" />
      ) : i % 3 === 1 ? (
        <Cpu className="w-16 h-16 text-purple-500/20" />
      ) : (
        <Bot className="w-16 h-16 text-green-500/20" /> 
      )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Prayana 2025
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 mb-8"
          >
          <TypingText text="Embark on a Journey Through Robotics and Automation" />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="w-5 h-5" />
              <span>February 25-27, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Kerala, India</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors relative overflow-hidden group"
              onClick={RegistrationForm}
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-blue-400"
                initial={{ x: '-100%' }}
                viewport={{ once: false}}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-500 hover:border-gray-400 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;