import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-dark dark:bg-gradient-dark" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-dark-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-dark-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dark-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass glass-dark px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-dark-accent" />
          <span className="text-sm font-medium">AI-Powered Visual Search</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Visual Product Matcher
        </motion.h1>

        {/* Subheading with cursive brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-4 text-white/80"
        >
          by{' '}
          <span className="font-cursive text-3xl md:text-4xl text-gradient">
            nilesh
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8"
        >
          Find visually similar fashion products from 42,700+ items using advanced AI. 
          Upload an image or paste a URL to discover your perfect match.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-dark-accent" />
            <span className="text-sm md:text-base">
              <span className="font-bold text-white">42,700+</span>{' '}
              <span className="text-white/60">Products</span>
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-dark-secondary" />
            <span className="text-sm md:text-base">
              <span className="font-bold text-white">&lt;100ms</span>{' '}
              <span className="text-white/60">Search</span>
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-dark-primary" />
            <span className="text-sm md:text-base">
              <span className="font-bold text-white">CLIP AI</span>{' '}
              <span className="text-white/60">Powered</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
