import * as React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-smooth',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'glass glass-dark hover:bg-white/20 text-white border-white/20': variant === 'default',
            'bg-gradient-to-r from-dark-primary to-dark-secondary text-white hover:opacity-90 border-0': variant === 'primary',
            'bg-white/5 hover:bg-white/10 text-white border-white/10': variant === 'ghost',
            'border-2 border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white dark:border-dark-primary dark:text-dark-primary': variant === 'outline',
          },
          {
            'h-9 px-4 py-2 text-sm': size === 'sm',
            'h-11 px-6 py-2': size === 'default',
            'h-12 px-8 py-3 text-lg': size === 'lg',
            'h-10 w-10 p-0': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
