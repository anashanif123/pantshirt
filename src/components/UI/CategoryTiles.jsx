import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'pants',
    title: 'Pants',
    image: 'https://images.unsplash.com/photo-1548883354-8858f2c2b4b3?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'shirts',
    title: 'Shirts',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'shorts',
    title: 'Shorts',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'tshirts',
    title: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=70'
  }
];

const CategoryTiles = ({ onNavigate }) => {
  const handleClick = (id) => {
    if (typeof onNavigate === 'function') {
      onNavigate('shop', { category: id });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="aspect-[4/5] w-full">
                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white text-xl font-semibold drop-shadow">{cat.title}</span>
                  <span className="text-white/90 text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Shop</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;


