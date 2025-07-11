import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Palette, ArrowRight } from 'lucide-react';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Shield,
      title: 'SSO Authentication',
      description: 'Integrate directly with your platform for a seamless user experience',
      emoji: '🔐'
    },
    {
      icon: Palette,
      title: 'Themes',
      description: 'Update frill with your own brand colours',
      emoji: '🎨'
    }
  ];


  return (
    <section id="features" className="py-20 bg-white">

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
            Everything you need to create
            <span className="text-gray-600"> amazing content</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Powerful tools designed to help you create, collaborate, and publish content that makes an impact.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mr-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl">{feature.emoji}</span>
              </div>
                
              <h3 className="text-2xl font-bold text-black mb-4">
                {feature.title}
              </h3>
                
              <p className="text-gray-700 mb-6 leading-relaxed">
                {feature.description}
              </p>
                
              <button className="inline-flex items-center text-black hover:text-gray-600 font-semibold transition-colors duration-200">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;