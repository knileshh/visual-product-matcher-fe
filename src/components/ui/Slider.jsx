import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTheme } from '../../context/ThemeContext';

const Slider = ({ value, onChange, min = 0, max = 100, step = 1, ...props }) => {
  const { theme } = useTheme();
  
  const handleStyle = {
    backgroundColor: theme === 'dark' ? '#fff' : '#fff',
    border: `3px solid ${theme === 'dark' ? '#8b5cf6' : '#7c3aed'}`,
    opacity: 1,
    boxShadow: theme === 'dark' 
      ? '0 0 0 4px rgba(139, 92, 246, 0.2), 0 4px 12px rgba(139, 92, 246, 0.4)'
      : '0 0 0 4px rgba(124, 58, 237, 0.2), 0 4px 12px rgba(124, 58, 237, 0.4)',
    width: 20,
    height: 20,
    marginTop: -8,
  };

  const trackStyle = {
    background: theme === 'dark'
      ? 'linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)'
      : 'linear-gradient(90deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)',
    height: 6,
  };

  const railStyle = {
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(139, 92, 246, 0.15)',
    height: 6,
  };

  return (
    <div className="py-2">
      <RcSlider
        value={value}
        onChange={(val) => onChange({ target: { value: val } })}
        min={min}
        max={max}
        step={step}
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        {...props}
      />
    </div>
  );
};

export { Slider };
