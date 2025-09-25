import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ShoppingBagIcon, EyeIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const ProductCard = ({ product, onView, loading = false }) => {
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm overflow-hidden"
      >
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-6 bg-gray-200 rounded w-1/3" />
          </div>
        </div>
      </motion.div>
    );
  }

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1, product.sizes[0], product.colors[0]);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(product)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          
          {/* Loading Overlay */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          {/* Tag */}
          {product.tag && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-3 left-3"
            >
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                product.tag === 'New' ? 'bg-green-500 text-white' :
                product.tag === 'Sale' ? 'bg-red-500 text-white' :
                product.tag === 'Bestseller' ? 'bg-blue-500 text-white' :
                product.tag === 'Featured' ? 'bg-purple-500 text-white' :
                'bg-gray-500 text-white'
              }`}>
                {product.tag}
              </span>
            </motion.div>
          )}

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-3 right-3"
            >
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -{discountPercentage}%
              </span>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 10 
            }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
          >
            <motion.button
              onClick={handleWishlistToggle}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isInWishlist(product.id) ? (
                <HeartSolidIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-gray-600" />
              )}
            </motion.button>

            <motion.button
              onClick={() => onView(product)}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <EyeIcon className="h-5 w-5 text-gray-600" />
            </motion.button>

            <motion.button
              onClick={handleAddToCart}
              className="p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBagIcon className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        
        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-500">Colors:</span>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: getColorValue(color) }}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Quick Add Button */}
          <motion.button
            onClick={handleAddToCart}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              isInCart(product.id)
                ? 'bg-gray-100 text-black'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isInCart(product.id) ? 'In Cart' : 'Add'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function to get color values
const getColorValue = (colorName) => {
  const colorMap = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Ocean': '#0066CC',
    'Tan': '#D2B48C',
    'Brown': '#8B4513',
    'Red': '#FF0000',
    'Blue': '#0000FF',
    'Olive': '#808000',
    'Gray': '#808080',
      'Beige': '#F5F5DC',
      'Khaki': '#C3B091',
      'Navy': '#001F3F'
  };
  return colorMap[colorName] || '#CCCCCC';
};

export default ProductCard;
