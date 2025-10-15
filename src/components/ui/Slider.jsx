import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useTheme } from '../../context/ThemeContext';

const Slider = ({ value, onChange, min = 0, max = 100, step = 1, ...props }) => {
  const { theme } = useTheme();
  
  const handleStyle = {
    backgroundColor: theme === 'dark' ? '#fff' : '#fff',
    border: `3px solid ${theme === 'dark' ? '#6366f1' : '#7c3aed'}`,
    opacity: 1,
    boxShadow: theme === 'dark' 
      ? '0 0 0 4px rgba(99, 102, 241, 0.2), 0 4px 12px rgba(99, 102, 241, 0.4)'
      : '0 0 0 4px rgba(124, 58, 237, 0.2), 0 4px 12px rgba(124, 58, 237, 0.4)',
    width: 20,
    height: 20,
    marginTop: -8,
  };

  const trackStyle = {
    background: theme === 'dark'
      ? 'linear-gradient(90deg, #6366f1 0%, #7c3aed 50%, #db2777 100%)'
      : 'linear-gradient(90deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)',
    height: 6,
  };

  const railStyle = {
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(124, 58, 237, 0.15)',
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
