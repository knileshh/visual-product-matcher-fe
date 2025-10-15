import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Package } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ResultsGrid({ results, isLoading }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  if (isLoading) {
    return (
      <section className="relative px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="relative">
              <div className={`w-16 h-16 border-4 rounded-full animate-spin ${
                isDark 
                  ? 'border-white/10 border-t-indigo-500' 
                  : 'border-gray-200 border-t-indigo-600'
              }`} />
            </div>
            <p className={`text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Searching through 42,700+ products...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!results || results.length === 0) {
    return (
      <section className="relative px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col items-center justify-center py-20 space-y-4 rounded-2xl ${
              isDark 
                ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                : 'bg-white/80 backdrop-blur-md border-2 border-purple-200'
            }`}
          >
            <Package className={`w-16 h-16 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
            <p className={`text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Upload an image or paste a URL to find similar products
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative px-4 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className={`text-3xl font-heading font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Similar Products
          </h2>
          <p className={isDark ? 'text-white/60' : 'text-gray-600'}>
            Found {results.length} visually similar items
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
