import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, Laptop, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { playNotificationSound } from '../utils/notificationSound';

export default function BackendNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Show notice after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      playNotificationSound(); // Play sound when appearing
      setIsHighlighted(true);
      
      // Remove highlight after 2 seconds
      setTimeout(() => {
        setIsHighlighted(false);
      }, 2000);
    }, 5000);

    // Auto-hide after 15 seconds (5s delay + 15s visible)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: 100 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            x: 0,
            boxShadow: isHighlighted 
              ? isDark
                ? '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(99, 102, 241, 0.4)'
                : '0 0 40px rgba(124, 58, 237, 0.6), 0 0 80px rgba(139, 92, 246, 0.3)'
              : isDark
                ? '0 20px 40px rgba(0, 0, 0, 0.5)'
                : '0 20px 40px rgba(0, 0, 0, 0.15)'
          }}
          exit={{ opacity: 0, y: 50, scale: 0.9, x: 100 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
            boxShadow: { duration: 0.5 }
          }}
          className="hidden md:block fixed bottom-6 right-6 z-50 max-w-md"
        >
          <motion.div 
            animate={{
              scale: isHighlighted ? [1, 1.02, 1] : 1,
            }}
            transition={{ 
              duration: 0.5,
              times: [0, 0.5, 1],
              repeat: isHighlighted ? 2 : 0
            }}
            className={`relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-900/90 to-purple-900/90 border-2' 
                : 'bg-gradient-to-br from-white/95 to-purple-50/95 border-2'
            } ${
              isHighlighted
                ? isDark
                  ? 'border-indigo-400 ring-4 ring-indigo-400/50'
                  : 'border-purple-400 ring-4 ring-purple-400/50'
                : isDark
                  ? 'border-white/20'
                  : 'border-purple-300'
            }`}
            style={{
              boxShadow: isHighlighted 
                ? isDark
                  ? '0 0 60px rgba(139, 92, 246, 0.6), inset 0 0 30px rgba(99, 102, 241, 0.2)'
                  : '0 0 60px rgba(124, 58, 237, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.15)'
                : undefined
            }}
          >
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
                  A Note from Nilesh
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
                  Hey there! 👋 Due to the computational requirements of this AI model, I'm currently running the backend locally on my personal machine.
                </p>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <p>
                  If you can't connect, I might be offline. Try again during my development hours when the machine is on. It might also work at night till 2 AM, but that's not guaranteed! 😅
                </p>
              </div>

              <div className={`pt-2 border-t ${
                isDark ? 'border-white/10' : 'border-purple-200'
              }`}>
                <p className={`text-xs ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>
                  <span className="font-semibold">Coming Soon:</span> I'm actively working on moving this to cloud infrastructure for 24/7 availability. Thanks for your understanding! 🚀
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
