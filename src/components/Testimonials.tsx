import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const customers = [
    {
      name: 'Giddh',
      logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-black to-gray-700'
    },
    {
      name: 'Socket',
      logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-gray-800 to-black'
    },
    {
      name: 'Frejun',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'MSG91',
      logo: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-black to-gray-600'
    },
    {
      name: 'Walkover',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-gray-700 to-black'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0%, transparent 50%)",
            "linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, transparent 50%)",
            "linear-gradient(225deg, rgba(0, 0, 0, 0.02) 0%, transparent 50%)",
            "linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The results speak for themselves,
            <br />
            <motion.span 
              className="text-gray-600"
              animate={{ 
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              so do our customers
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join thousands of companies that trust DocStar to power their documentation and content creation.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center border border-gray-200 cursor-pointer relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                scale: 1.05,
              }}
            >
              {/* Hover Background Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${customer.color} opacity-0 group-hover:opacity-10`}
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${customer.color} rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-full h-full object-cover rounded-full"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {customer.name}
                </motion.h3>
                <motion.button 
                  className="inline-flex items-center text-black hover:text-gray-600 font-semibold group/btn"
                  whileHover={{ scale: 1.05 }}
                >
                  View Demo
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;