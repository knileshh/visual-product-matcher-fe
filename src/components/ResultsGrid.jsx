import { motion as Motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Package } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ResultsGrid({ results, isLoading }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  if (isLoading) {
    return (
      <section className="relative px-4 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 space-y-4">
            <div className="relative">
              <div className={`w-16 h-16 border-4 rounded-full animate-spin ${
                isDark 
                  ? 'border-white/10 border-t-violet-500' 
                  : 'border-gray-200 border-t-violet-600'
              }`} />
            </div>
            <p className={`text-base sm:text-lg text-center ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Searching through 42,700+ products...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!results || results.length === 0) {
    return (
      <section className="relative px-4 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col items-center justify-center py-14 sm:py-20 space-y-4 rounded-2xl ${
              isDark 
                ? 'bg-white/10 backdrop-blur-md border border-white/20' 
                : 'bg-white/80 backdrop-blur-md border-2 border-violet-200'
            }`}
          >
            <Package className={`w-16 h-16 ${isDark ? 'text-white/20' : 'text-gray-300'}`} />
            <p className={`text-base sm:text-lg text-center px-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              Upload an image or paste a URL to find similar products
            </p>
          </Motion.div>
        </div>
      </section>
    );
  }

  return (
    <Motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative px-4 py-10 sm:py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Results Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className={`text-2xl sm:text-3xl font-heading font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Similar Products
          </h2>
          <p className={`text-sm sm:text-base ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Found {results.length} visually similar items
          </p>
        </Motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {results.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </Motion.section>
  );
}
