import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isVisible: boolean;
  decimals?: number;
}

const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  prefix = "", 
  duration = 1500, 
  isVisible,
  decimals = 0
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (value - startValue) * easeOut;
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration, hasAnimated]);

  const formattedValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.round(count).toLocaleString();

  return (
    <span className="counter-animate">
      {prefix}{formattedValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
