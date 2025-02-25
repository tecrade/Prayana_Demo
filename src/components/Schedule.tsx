import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const schedule = [
    {
      day: 'Day 1 - February 25',
      events: [
        { time: '09:00 - 10:00', title: 'Registration & Welcome Kit Distribution' },
        { time: '10:00 - 11:00', title: 'Inaugural Ceremony' },
        { time: '11:00 - 13:00', title: 'Keynote: Future of Robotics' },
        { time: '14:00 - 17:00', title: 'ROS Workshop' },
        { time: '17:00 - 18:00', title: 'Networking Session' },
      ],
    },
    {
      day: 'Day 2 - February 26',
      events: [
        { time: '09:00 - 09:30', title: 'Day 2 Briefing' },
        { time: '10:00 - 16:00', title: 'Robotics Challenge' },
        { time: '14:00 - 17:00', title: 'Drone Racing Competition' },
        { time: '17:30 - 18:30', title: 'Expert Panel Discussion' },
      ],
    },
    {
      day: 'Day 3 - February 27',
      events: [
        { time: '09:00 - 13:00', title: 'AI in Robotics Workshop' },
        { time: '14:00 - 15:00', title: 'Project Showcase' },
        { time: '15:30 - 16:30', title: 'Prize Distribution' },
        { time: '16:30 - 17:30', title: 'Closing Ceremony' },
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="schedule" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Decorative circuit lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            initial={{ opacity: 0, width: '0%' }}
            whileInView={{ opacity: 1, width: '100%' }}
            viewport={{ once: false}}
            transition={{ duration: 2, delay: i * 0.5 }}
            style={{ top: `${20 * (i + 1)}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Event Schedule</h2>
          <p className="text-gray-300">
            Plan your Prayana experience with our comprehensive event schedule.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 relative group"
            >
              <motion.div
                className="absolute inset-0 border-2 border-blue-500/0 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold mb-6 text-blue-500">{day.day}</h3>
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false}}
                    transition={{ delay: eventIndex * 0.1 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-4 before:w-4 before:h-4 before:bg-blue-500/20 before:rounded-full before:shadow-lg group"
                  >
                    <motion.div
                      className="absolute left-0 top-4 w-4 h-4 bg-blue-500 rounded-full transform scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    />
                    <p className="text-sm text-gray-400 mb-1">{event.time}</p>
                    <p className="font-medium group-hover:text-blue-400 transition-colors">{event.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;