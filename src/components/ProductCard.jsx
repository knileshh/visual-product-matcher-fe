import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { formatSimilarity, getImageUrl } from '../lib/utils';

export default function ProductCard({ product, index }) {
  const similarity = product.similarity * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative glass glass-dark rounded-2xl overflow-hidden hover:scale-105 transition-smooth"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
        <img
          src={getImageUrl(product.image_path)}
          alt={product.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Similarity Score Badge */}
        <div className="absolute top-3 right-3">
          <div className="relative w-14 h-14">
            {/* Circle Background */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 24}`}
                strokeDashoffset={`${2 * Math.PI * 24 * (1 - similarity / 100)}`}
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold">
                {Math.round(similarity)}%
              </span>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-white line-clamp-2 group-hover:text-dark-accent transition-smooth">
            {product.name}
          </h3>
          <p className="text-sm text-white/60 capitalize">{product.category}</p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="text-sm">
            <span className="text-white/50">Match: </span>
            <span className="font-semibold text-dark-primary">
              {formatSimilarity(product.similarity)}
            </span>
          </div>
          <button
            className="p-1.5 rounded-lg glass glass-dark hover:bg-white/20 transition-smooth opacity-0 group-hover:opacity-100"
            aria-label="View details"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
