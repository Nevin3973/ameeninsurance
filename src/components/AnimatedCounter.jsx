import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter: Smoothly interpolates from start to end value
 * using requestAnimationFrame and cubic ease-out when visible.
 */
export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  style = {}
}) {
  const [value, setValue] = useState(start);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId = null;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic: 1 - (1 - progress)^3
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = start + (end - start) * easeProgress;

        setValue(currentVal);

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    };

    // IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.15 }
    );

    const currentElem = counterRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    // Safety fallback: if not triggered within 800ms, start anyway
    const fallbackTimer = setTimeout(() => {
      startAnimation();
    }, 800);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      if (currentElem) observer.unobserve(currentElem);
      clearTimeout(fallbackTimer);
    };
  }, [end, start, duration]);

  // Format value cleanly
  const formattedNumber = () => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    const rounded = Math.round(value);
    return rounded >= 1000 ? rounded.toLocaleString('en-IN') : rounded.toString();
  };

  return (
    <span ref={counterRef} className={className} style={style}>
      {prefix}{formattedNumber()}{suffix}
    </span>
  );
}

