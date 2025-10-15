import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { formatSimilarity, getImageUrl } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

export default function ProductCard({ product, index }) {
  const { theme } = useTheme();
  const similarity = product.similarity * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative rounded-2xl overflow-hidden hover:scale-105 transition-smooth ${
        theme === 'dark'
          ? 'bg-white/10 backdrop-blur-md border border-white/20'
          : 'bg-white/90 backdrop-blur-md border-2 border-purple-200/60 shadow-xl shadow-purple-100/30'
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
        <img
          src={getImageUrl(product.image_path)}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div>
          <h3 className={`font-semibold line-clamp-2 transition-smooth ${
            theme === 'dark' 
              ? 'text-white group-hover:text-pink-400' 
              : 'text-gray-900 group-hover:text-pink-600'
          }`}>
            {product.name}
          </h3>
          <p className={`text-sm capitalize ${
            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
          }`}>
            {product.category}
          </p>
        </div>

        <div className={`flex items-center justify-between pt-2 border-t ${
          theme === 'dark' ? 'border-white/10' : 'border-purple-200/50'
        }`}>
          <div className="text-sm">
            <span className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}>Match: </span>
            <span className={`font-semibold ${
              theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              {formatSimilarity(product.similarity)}
            </span>
          </div>
          <button
            className={`p-1.5 rounded-lg transition-smooth opacity-0 group-hover:opacity-100 ${
              theme === 'dark' 
                ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                : 'bg-purple-100 hover:bg-purple-200 border border-purple-300'
            }`}
            aria-label="View details"
          >
            <ExternalLink className={`w-4 h-4 ${
              theme === 'dark' ? 'text-white' : 'text-purple-700'
            }`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
