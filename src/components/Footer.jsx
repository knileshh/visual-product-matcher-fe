import { motion } from 'framer-motion';
import { Heart, Mail, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative px-4 py-12 border-t ${
        isDark ? 'border-white/10' : 'border-gray-200'
      }`}
    >      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Creator Credit */}
          <div className={`flex items-center gap-2 ${
            isDark ? 'text-white/80' : 'text-gray-700'
          }`}>
            <span>Created with</span>
            <Heart className={`w-4 h-4 fill-current ${
              isDark ? 'text-pink-400' : 'text-pink-600'
            }`} />
            <span>by</span>
            <span className="font-cursive text-2xl text-gradient">nilesh</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://knileshh.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm transition-smooth ${
                isDark 
                  ? 'text-white/60 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              knileshh.com
            </a>
            <a
              href="mailto:hey@knileshh.com"
              className={`flex items-center gap-2 text-sm transition-smooth ${
                isDark 
                  ? 'text-white/60 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Mail className="w-4 h-4" />
              hey@knileshh.com
            </a>
          </div>

          {/* Copyright */}
          <p className={`text-xs ${
            isDark ? 'text-white/40' : 'text-gray-500'
          }`}>
            © {new Date().getFullYear()} Visual Product Matcher. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
