import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import CategoryNav from '@/components/CategoryNav';
import CartPreview from '@/components/CartPreview';

const About: React.FC = () => {
  const features = [
    {
      title: "Quantum Shopping Experience",
      description: "Immerse yourself in a revolutionary shopping experience powered by cutting-edge technology and seamless interactions.",
      icon: "⚡"
    },
    {
      title: "Real-Time Price Dynamics",
      description: "Experience the future of pricing with our dynamic, AI-powered system that reflects market conditions in real-time.",
      icon: "📊"
    },
    {
      title: "Intelligent Product Discovery",
      description: "Our advanced recommendation system learns from your preferences to curate the perfect selection of futuristic products.",
      icon: "🔮"
    },
    {
      title: "Secure Transactions",
      description: "State-of-the-art encryption and blockchain technology ensure your transactions are always secure and transparent.",
      icon: "🔒"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <CategoryNav />
      <CartPreview />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back</span>
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent"
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
            Welcome to the Future of Shopping
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Step into a world where technology meets luxury, where every product tells a story of innovation and excellence.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-12 mb-20 border border-gray-700"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Future Store, we're not just selling products – we're crafting experiences. Our platform represents the convergence of cutting-edge technology and unparalleled luxury, where every interaction is designed to inspire and delight.
              </p>
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe in a future where shopping is more than a transaction – it's a journey of discovery. Our curated collection of futuristic products represents the pinnacle of innovation, each item carefully selected to bring tomorrow's technology into your life today.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-20"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-lg font-semibold hover:from-gray-600 hover:to-gray-500 transition-all"
            >
              Explore Our Collection
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 