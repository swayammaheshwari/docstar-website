import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Logo 
              size="md" 
              className={`${isScrolled ? 'text-white' : 'text-black'} transition-colors duration-300`}
              animated={true}
            />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-black'} transition-colors duration-300`}>
              DocStar
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} font-medium transition-colors duration-200 relative group`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isScrolled ? 'bg-white' : 'bg-black'} group-hover:w-full transition-all duration-300`}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} font-medium transition-colors duration-200`}
              whileHover={{ scale: 1.05 }}
            >
              Sign In
            </motion.button>
            <motion.button 
              className="bg-black text-white px-6 py-2 rounded-lg font-medium shadow-lg border border-white/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors duration-200`}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-white hover:text-gray-300 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="px-3 py-2 space-y-2">
                  <motion.button 
                    className="w-full text-left text-white hover:text-gray-300 font-medium transition-colors duration-200"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    Sign In
                  </motion.button>
                  <motion.button 
                    className="w-full bg-white text-black px-6 py-2 rounded-lg font-medium shadow-lg"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started Free
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;