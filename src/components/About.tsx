import React from 'react';
import { Cpu, Users, Trophy, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: 'Technical Workshops',
      description: 'Hands-on sessions with cutting-edge robotics technology',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Networking',
      description: 'Connect with industry experts and fellow enthusiasts',
    },
    {
      icon: <Trophy className="w-6 h-6 text-blue-500" />,
      title: 'Competitions',
      description: 'Showcase your skills in various robotics challenges',
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Career Growth',
      description: 'Gain insights into robotics career opportunities',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/30 pointer-events-none" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Prayana</h2>
          <p className="text-gray-300">
            Prayana is IEEE RAS Kerala Section's flagship event, bringing together students,
            professionals, and enthusiasts in the field of robotics and automation. Join us
            for three days of learning, innovation, and networking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-700/50 transition-colors relative group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="mb-4 relative"
              >
                {feature.icon}
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <motion.div
                className="absolute inset-0 border-2 border-blue-500/0 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;