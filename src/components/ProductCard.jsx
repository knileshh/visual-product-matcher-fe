import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { formatSimilarity, getImageUrl } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

export default function ProductCard({ product, index }) {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <Motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 0.4, delay: index * 0.03 }}
      className={`group relative rounded-2xl overflow-hidden transition-smooth sm:hover:scale-105 active:scale-[0.99] ${
        theme === 'dark'
          ? 'bg-white/10 backdrop-blur-md border border-white/20'
          : 'bg-white/90 backdrop-blur-md border-2 border-violet-200/60 shadow-xl shadow-violet-100/30'
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
        <img
          src={getImageUrl(product.image_path)}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth sm:group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-40 sm:opacity-0 sm:group-hover:opacity-100 transition-smooth" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-4 space-y-2">
        <div>
          <h3 className={`font-semibold line-clamp-2 transition-smooth ${
            theme === 'dark' 
              ? 'text-white group-hover:text-violet-400' 
              : 'text-gray-900 group-hover:text-violet-600'
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
          theme === 'dark' ? 'border-white/10' : 'border-violet-200/50'
        }`}>
          <div className="text-sm">
            <span className={theme === 'dark' ? 'text-white/50' : 'text-gray-500'}>Match: </span>
            <span className={`font-semibold ${
              theme === 'dark' ? 'text-violet-400' : 'text-violet-700'
            }`}>
              {formatSimilarity(product.similarity)}
            </span>
          </div>
          <button
            className={`p-2 rounded-lg transition-smooth opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 ${
              theme === 'dark' 
                ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                : 'bg-violet-100 hover:bg-violet-200 border border-violet-300'
            }`}
            aria-label="View details"
          >
            <ExternalLink className={`w-4 h-4 ${
              theme === 'dark' ? 'text-white' : 'text-violet-900'
            }`} />
          </button>
        </div>
      </div>
    </Motion.div>
  );
}
