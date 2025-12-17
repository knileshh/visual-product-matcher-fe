import * as React from 'react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-xl px-4 py-2 text-sm transition-smooth',
        isDark 
          ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/40 focus-visible:ring-violet-500' 
          : 'bg-white/90 backdrop-blur-md border-2 border-violet-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-violet-500',
        'focus-visible:outline-none focus-visible:ring-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
