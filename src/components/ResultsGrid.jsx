import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Package } from 'lucide-react';

export default function ResultsGrid({ results, isLoading }) {
  if (isLoading) {
    return (
      <section className="relative px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white/10 border-t-dark-primary rounded-full animate-spin" />
            </div>
            <p className="text-lg text-white/60">Searching through 42,700+ products...</p>
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
            className="flex flex-col items-center justify-center py-20 space-y-4 glass glass-dark rounded-2xl"
          >
            <Package className="w-16 h-16 text-white/20" />
            <p className="text-lg text-white/60">
              Upload an image or paste a URL to find similar products
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-heading font-bold mb-2">
            Similar Products
          </h2>
          <p className="text-white/60">
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
    </section>
  );
}
