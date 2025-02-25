import React from 'react';
import { Code, Notebook as Robot, Gamepad2, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
  const RegistrationForm = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  }; 
  const events = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'ROS Workshop',
      description: 'Learn Robot Operating System (ROS) fundamentals and practical applications',
      date: 'February 25, 2025',
      time: '9:00 AM - 4:00 PM',
      image: '/images/ros.jpg',
    },
    {
      icon: <Robot className="w-8 h-8 text-blue-500" />,
      title: 'Robotics Challenge',
      description: 'Compete in an exciting robotics competition with teams from across the region',
      date: 'February 25, 2025',
      time: '10:00 AM - 6:00 PM',
      image: '/images/robochallenge.jpeg',
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-blue-500" />,
      title: 'Drone Racing',
      description: 'Experience the thrill of FPV drone racing with expert guidance',
      date: 'February 25, 2025',
      time: '2:00 PM - 5:00 PM',
      image: '/images/drone.png',
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI in Robotics',
      description: 'Explore the integration of artificial intelligence in modern robotics',
      date: 'February 26, 2025',
      time: '9:00 AM - 1:00 PM',
      image: '/images/airob.jpeg',
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
    <section id="events" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 border-2 border-blue-500 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Events</h2>
          <p className="text-gray-300">
            Discover our exciting lineup of workshops, competitions, and hands-on sessions
            designed to enhance your robotics knowledge and skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/50 p-3 rounded-lg"
                >
                  {event.icon}
                </motion.div>
                <div>
  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

  {/* Responsive container */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
    <p className="text-gray-300 text-center sm:text-left flex-1">{event.description}</p>
    <img src={event.image} alt="Event Image" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md" />
  </div>

  <div className="text-sm text-gray-400 text-center sm:text-left mt-2">
    <p>{event.date}</p>
    <p>{event.time}</p>
  </div>
</div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
<motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors relative overflow-hidden group"
            onClick={RegistrationForm}
          >          
            Register for Events
            <motion.div
              className="absolute inset-0 bg-blue-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;