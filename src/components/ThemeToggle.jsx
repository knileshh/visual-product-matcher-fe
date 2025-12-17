import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Button } from './ui/Button';
import { motion as Motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Button
        onClick={toggleTheme}
        variant="ghost"
        size="icon"
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 glass ${
          theme === 'dark' 
            ? 'glass-dark text-white' 
            : 'bg-white/80 border-violet-200 text-violet-700 hover:bg-white hover:text-violet-900'
        }`}
        aria-label="Toggle theme"
      >
        <Motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Motion.div>
      </Button>
    </Motion.div>
  );
}
