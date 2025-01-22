import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence, stagger, useAnimate } from 'framer-motion';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed w-full bg-white/80 backdrop-blur-md z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              DevForge
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <motion.button 
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Features
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Pricing
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('docs')}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Docs
              </motion.button>
              <Button className="bg-primary hover:bg-primary/90">
                Try Free
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                scrollToSection('features');
                setIsOpen(false);
              }}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => {
                scrollToSection('pricing');
                setIsOpen(false);
              }}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                scrollToSection('docs');
                setIsOpen(false);
              }}
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md w-full text-left"
            >
              Docs
            </button>
            <div className="pt-2">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Try Free
              </Button>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
