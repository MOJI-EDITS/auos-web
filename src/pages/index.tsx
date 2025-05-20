import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MagnifyingGlassIcon, SparklesIcon, ShieldCheckIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { products } from '@/data/products';
import CategoryNav from '@/components/CategoryNav';
import CartPreview from '@/components/CartPreview';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [prices, setPrices] = React.useState<Record<string, number>>({});

  // Simulate real-time price updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      const newPrices = { ...prices };
      products.forEach(product => {
        const fluctuation = (Math.random() - 0.5) * 0.1;
        const basePrice = product.price;
        newPrices[product.id] = Number((basePrice * (1 + fluctuation)).toFixed(2));
      });
      setPrices(newPrices);
    }, 3000);

    return () => clearInterval(interval);
  }, [prices]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const benefits = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Every product is carefully selected to meet our high standards of quality and innovation."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Secure Shopping",
      description: "Your security is our priority. Shop with confidence using our advanced protection systems."
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Experience lightning-fast delivery with our advanced logistics network."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and Categories */}
            <div className="flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center"
              >
                <motion.h1 
                  className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  AUOS
                </motion.h1>
              </motion.div>

              <div className="hidden md:block">
                <CategoryNav onCategoryChange={setSelectedCategory} />
              </div>
            </div>

            {/* Right side - Search, About, and Cart */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-300"
                />
                <motion.div
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
                  >
                    About
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <CartPreview />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Welcome to Moiz's Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light max-w-3xl mx-auto"
          >
            Discover our collection of cutting-edge products that blend innovation with style. 
            Experience the next generation of shopping with real-time pricing and seamless interactions.
          </motion.p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all"
            >
              <motion.div
                className="text-gray-300 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Products Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-gray-700/50 transition-all cursor-pointer border border-gray-700 hover:border-gray-500 group">
                      <motion.div
                        className="text-6xl mb-4 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {product.image}
                      </motion.div>
                      <motion.h2
                        className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {product.name}
                      </motion.h2>
                      <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <motion.span
                          className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
                          whileHover={{ scale: 1.05 }}
                        >
                          ${prices[product.id] || product.price}
                        </motion.span>
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-400">No products found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already discovered the next generation of shopping.
            Start exploring our collection today and be part of the future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-lg font-semibold hover:from-gray-600 hover:to-gray-500 transition-all"
          >
            Start Shopping Now
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default Home; 