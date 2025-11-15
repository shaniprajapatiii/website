import React, { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface LazySplineProps {
  scene: string;
  className?: string;
}

const LazySpline: React.FC<LazySplineProps> = ({ scene, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ minHeight: isVisible ? 'auto' : '400px' }}>
      {isVisible ? <Spline scene={scene} className={className} /> : null}
    </div>
  );
};

export default LazySpline;
