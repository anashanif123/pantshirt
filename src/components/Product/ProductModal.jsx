import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, HeartIcon, ShoppingBagIcon, StarIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart, isInCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [product]);

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) return;
    
    setIsAddingToCart(true);
    addToCart(product, quantity, selectedSize, selectedColor);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAddingToCart(false);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const discountPercentage = product?.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative bg-gray-50">
                <div className="aspect-square relative overflow-hidden">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    src={product.gallery[selectedImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
                  {product.gallery.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-indigo-500'
                          : 'border-white/50 hover:border-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 overflow-y-auto max-h-[90vh]">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-500">{product.brand}</span>
                      {product.tag && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          product.tag === 'New' ? 'bg-green-100 text-green-700' :
                          product.tag === 'Sale' ? 'bg-red-100 text-red-700' :
                          product.tag === 'Bestseller' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice > 0 && (
                      <>
                        <span className="text-xl text-gray-400 line-through">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-semibold">
                          Save ${(product.oldPrice - product.price).toFixed(2)}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Key Features</h3>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Color: {selectedColor}</h3>
                    <div className="flex gap-3">
                      {product.colors.map((color) => (
                        <motion.button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            selectedColor === color
                              ? 'border-indigo-500 scale-110'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          style={{ backgroundColor: getColorValue(color) }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Size: {selectedSize}</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {product.sizes.map((size) => (
                        <motion.button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                            selectedSize === size
                              ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {size}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MinusIcon className="h-4 w-4" />
                      </motion.button>
                      <span className="px-4 py-2 font-semibold">{quantity}</span>
                      <motion.button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      onClick={handleWishlistToggle}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold transition-all ${
                        isInWishlist(product.id)
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isInWishlist(product.id) ? (
                        <HeartSolidIcon className="h-5 w-5" />
                      ) : (
                        <HeartIcon className="h-5 w-5" />
                      )}
                      {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                    </motion.button>

                    <motion.button
                      onClick={handleAddToCart}
                      disabled={isAddingToCart || !selectedSize || !selectedColor}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all ${
                        isAddingToCart || !selectedSize || !selectedColor
                          ? 'bg-gray-400 cursor-not-allowed'
                          : isInCart(product.id, selectedSize, selectedColor)
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-indigo-600 hover:bg-indigo-700'
                      }`}
                      whileHover={{ scale: isAddingToCart ? 1 : 1.02 }}
                      whileTap={{ scale: isAddingToCart ? 1 : 0.98 }}
                    >
                      {isAddingToCart ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ShoppingBagIcon className="h-5 w-5" />
                      )}
                      {isAddingToCart 
                        ? 'Adding...' 
                        : isInCart(product.id, selectedSize, selectedColor)
                        ? 'In Cart'
                        : 'Add to Cart'
                      }
                    </motion.button>
                  </div>

                  {/* Stock Info */}
                  <div className="text-sm text-gray-500 pt-4 border-t">
                    <p>✓ Free shipping on orders over $75</p>
                    <p>✓ 30-day return policy</p>
                    <p>✓ Ships within 1-2 business days</p>
                    {product.stockCount < 10 && (
                      <p className="text-orange-600 font-semibold">
                        ⚠ Only {product.stockCount} left in stock!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
    'Beige': '#F5F5DC'
  };
  return colorMap[colorName] || '#CCCCCC';
};

export default ProductModal;
