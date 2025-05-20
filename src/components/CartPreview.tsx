import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartPreview: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState<Array<{ id: string; name: string; price: number; quantity: number }>>([]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300 flex items-center space-x-2"
      >
        <ShoppingCartIcon className="h-5 w-5" />
        <span>Cart</span>
        {cartItems.length > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {cartItems.length}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-xl border border-gray-700/50 overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Shopping Cart</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-400 text-center py-4">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between bg-gray-700/50 rounded-lg p-2"
                      >
                        <div>
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-gray-400 text-sm">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setCartItems(items =>
                                items.map(i =>
                                  i.id === item.id
                                    ? { ...i, quantity: Math.max(0, i.quantity - 1) }
                                    : i
                                ).filter(i => i.quantity > 0)
                              );
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            -
                          </button>
                          <span className="text-white">{item.quantity}</span>
                          <button
                            onClick={() => {
                              setCartItems(items =>
                                items.map(i =>
                                  i.id === item.id
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i
                                )
                              );
                            }}
                            className="text-gray-400 hover:text-white"
                          >
                            +
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Total:</span>
                      <span className="text-xl font-bold text-white">${total.toFixed(2)}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
                    >
                      Checkout
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartPreview; 