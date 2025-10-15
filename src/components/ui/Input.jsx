import * as React from 'react';
import { cn } from '../../lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-xl glass glass-dark px-4 py-2 text-sm',
        'text-white placeholder:text-white/40',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-primary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'transition-smooth',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
