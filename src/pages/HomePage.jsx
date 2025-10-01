import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';
import ProductCard from '../components/Product/ProductCard';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import ImageCarousel from '../components/UI/ImageCarousel';
import SaleLoop from '../components/UI/SaleLoop';
import CategoryTiles from '../components/UI/CategoryTiles';

gsap.registerPlugin(ScrollTrigger);

const HomePage = ({ onNavigate, onViewProduct, products }) => {
  useEffect(() => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
      );
    }

    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
      gsap.fromTo('.hero-buttons', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power2.out' }
      );
    }

    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      gsap.fromTo('.hero-image', 
        { opacity: 0, scale: 0.8, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
      );
    }

    // Stats animation
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length > 0) {
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );
    }

    // Featured products animation
    const featuredProducts = document.querySelectorAll('.featured-product');
    if (featuredProducts.length > 0) {
      gsap.fromTo('.featured-product',
        { opacity: 0, y: 40, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.featured-section',
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=70",
      title: "Premium Tees",
      subtitle: "Everyday comfort, elevated"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=70",
      title: "Crisp Shirts",
      subtitle: "Smart-casual staples"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=1400&q=70",
      title: "Tailored Chinos",
      subtitle: "Versatile pants for every day"
    },    
  ];

  return (
    <div className="min-h-screen">
      {/* Sale Loop */}
      <SaleLoop />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5" />
        </div>

        {/* Enhanced Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/30 to-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Content */}
            <div className="hero-content space-y-8">
              <motion.h1 
                className="hero-title text-5xl lg:text-6xl font-extrabold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Dress in{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Style
                </span>
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle text-xl lg:text-2xl text-white/90 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Discover premium apparel that combines comfort, style, and quality. 
                From shirts and pants to shorts and tees, find your perfect fit.
              </motion.p>

              <motion.div 
                className="hero-buttons flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.button
                  onClick={() => onNavigate('shop')}
                  className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Now
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  onClick={() => onNavigate('shop', { category: 'featured' })}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Collection
                </motion.button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              className="hero-image relative lg:justify-self-end"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative max-w-xl mx-auto aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl max-h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=70"
                  alt="Premium Apparel Hero"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automatic Carousel Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Discover Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore premium footwear and apparel — pants, shirts, shorts, and t-shirts
            </p>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden rounded-3xl shadow-2xl h-96 md:h-[500px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageCarousel 
              images={carouselImages}
              autoPlay={true}
              interval={5000}
              className="h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and highly-rated footwear collection
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.15 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="featured-product"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <ProductCard
                  product={product}
                  onView={onViewProduct}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <CategoryTiles onNavigate={onNavigate} />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
