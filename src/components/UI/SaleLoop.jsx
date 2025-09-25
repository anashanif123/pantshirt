import React from 'react';
import { motion } from 'framer-motion';

const SaleLoop = () => {
  const saleItems = [
    "🔥 UP TO 50% OFF - LIMITED TIME!",
    "🚚 FREE SHIPPING ON ORDERS OVER $50",
    "⭐ NEW ARRIVALS - CHECK THEM OUT!",
    "💎 PREMIUM QUALITY GUARANTEED",
    "🎉 EXCLUSIVE DEALS LIVE NOW!",
    "👕 APPAREL BEST SELLERS - SHOP NOW!",
    "💳 EASY RETURNS - 30 DAYS",
    "🌟 CUSTOMER FAVORITES - LIMITED STOCK"
  ];

  return (
    <div className="bg-black text-white py-3 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-10"></div>
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -100 * saleItems.length + "%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {/* First set */}
        {saleItems.map((item, index) => (
          <motion.div
            key={`first-${index}`}
            className="inline-block px-8 text-sm font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.div>
        ))}
        
        {/* Second set for seamless loop */}
        {saleItems.map((item, index) => (
          <motion.div
            key={`second-${index}`}
            className="inline-block px-8 text-sm font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SaleLoop;
