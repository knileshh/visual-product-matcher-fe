import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-visible px-4 py-20 pb-0">
      {/* Subtle Animated Blobs - Extended beyond Hero */}
      <div className="absolute inset-0 pointer-events-none" style={{ height: '150%' }}>
        <div className={`absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px] animate-float ${
          isDark ? 'bg-violet-500/40' : 'bg-violet-400/50'
        }`} />
        <div className={`absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[100px] animate-float ${
          isDark ? 'bg-blue-500/40' : 'bg-blue-400/50'
        }`} style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <div className={`absolute bottom-[15%] left-[15%] w-[300px] h-[300px] rounded-full blur-[90px] animate-float ${
          isDark ? 'bg-cyan-500/35' : 'bg-cyan-400/45'
        }`} style={{ animationDelay: '4s', animationDuration: '10s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
            isDark 
              ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
              : 'bg-white/60 backdrop-blur-md border border-violet-200 shadow-lg shadow-violet-100'
          }`}
        >
          <Sparkles className={`w-4 h-4 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
          <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
            AI-Powered Visual Search
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight ${
            isDark ? 'text-white text-glow' : 'text-gray-900'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          {['Visual', 'Product', 'Matcher'].map((word, wordIndex) => (
            <motion.span
              key={word}
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1 + wordIndex * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading with cursive brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-xl md:text-2xl mb-4 ${isDark ? 'text-white/80' : 'text-gray-700'}`}
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
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
            isDark ? 'text-white/60' : 'text-gray-600'
          }`}
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
            <Zap className={`w-5 h-5 ${isDark ? 'text-violet-400' : 'text-violet-600'}`} />
            <span className="text-sm md:text-base">
              <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>42,700+</span>{' '}
              <span className={isDark ? 'text-white/60' : 'text-gray-600'}>Products</span>
            </span>
          </div>
          <div className={`h-4 w-px ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />
          <div className="flex items-center gap-2">
            <Zap className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className="text-sm md:text-base">
              <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>&lt;100ms</span>{' '}
              <span className={isDark ? 'text-white/60' : 'text-gray-600'}>Search</span>
            </span>
          </div>
          <div className={`h-4 w-px ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />
          <div className="flex items-center gap-2">
            <Zap className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
            <span className="text-sm md:text-base">
              <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>CLIP AI</span>{' '}
              <span className={isDark ? 'text-white/60' : 'text-gray-600'}>Powered</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
