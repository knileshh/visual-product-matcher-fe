import * as React from 'react';
import { cn } from '../../lib/utils';

const Slider = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="range"
      className={cn(
        'w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer',
        'slider-thumb',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Slider.displayName = 'Slider';

export { Slider };
