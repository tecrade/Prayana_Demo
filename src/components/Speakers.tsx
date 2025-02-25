import React from 'react';
import { motion } from 'framer-motion';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Robotics Researcher',
      organization: 'MIT Robotics Lab',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300',
      topics: ['Machine Learning', 'Robot Navigation'],
    },
    {
      name: 'Prof. James Wilson',
      role: 'Professor of Robotics',
      organization: 'Stanford University',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300',
      topics: ['Control Systems', 'Industrial Automation'],
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Lead Robotics Engineer',
      organization: 'SpaceX',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300',
      topics: ['Space Robotics', 'Autonomous Systems'],
    },
    {
      name: 'Michael Chang',
      role: 'CTO',
      organization: 'RoboTech Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300',
      topics: ['Robotics Startups', 'Innovation'],
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
    <section id="speakers" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Speakers</h2>
          <p className="text-gray-300">
            Learn from industry leaders and renowned experts in robotics, automation, and artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
         viewport={{ once: false}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-blue-500 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-400 text-sm mb-4">{speaker.organization}</p>
                <div className="flex flex-wrap gap-2">
                  {speaker.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topicIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700/50 text-sm px-3 py-1 rounded-full text-gray-300"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;