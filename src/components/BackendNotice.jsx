import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, Laptop, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function BackendNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Show notice after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 max-w-md"
        >
          <div className={`relative rounded-2xl p-6 shadow-2xl backdrop-blur-xl ${
            isDark 
              ? 'bg-gradient-to-br from-indigo-900/90 to-purple-900/90 border border-white/20' 
              : 'bg-gradient-to-br from-white/95 to-purple-50/95 border-2 border-purple-300'
          }`}>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className={`absolute top-3 right-3 p-1.5 rounded-lg transition-smooth ${
                isDark 
                  ? 'hover:bg-white/10 text-white/60 hover:text-white' 
                  : 'hover:bg-purple-100 text-gray-500 hover:text-gray-700'
              }`}
              aria-label="Close notice"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className={`p-2 rounded-xl ${
                isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'
              }`}>
                <Info className={`w-5 h-5 ${
                  isDark ? 'text-indigo-300' : 'text-indigo-600'
                }`} />
              </div>
              <div>
                <h3 className={`font-heading font-bold text-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Did You Know?
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-3 text-sm ${
              isDark ? 'text-white/80' : 'text-gray-700'
            }`}>
              <div className="flex items-start gap-2">
                <Laptop className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <p>
                  Due to the scale of this AI model, the backend is currently hosted locally on the developer's machine.
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <p>
                  If the service is temporarily unavailable, please try during business hours (9 AM - 6 PM IST) when the system is online.
                </p>
              </div>

              <div className={`pt-2 border-t ${
                isDark ? 'border-white/10' : 'border-purple-200'
              }`}>
                <p className={`text-xs ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>
                  <span className="font-semibold">Note:</span> The developer is actively working on securing cloud infrastructure to ensure 24/7 availability. Thank you for your patience!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
