import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface CategoryNavProps {
  onCategoryChange: (category: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ onCategoryChange }) => {
  const router = useRouter();
  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Sports'];

  // Hide on about page
  if (router.pathname === '/about') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-2"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="px-3 py-1.5 text-sm rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryNav; 