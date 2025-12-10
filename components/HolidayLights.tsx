import React, { useEffect, useRef } from 'react';

export const HolidayLights: React.FC = () => {
  const lightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lightsRef.current) return;

    // Create individual light bulbs
    const lightCount = 20;
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8DC7'];

    for (let i = 0; i < lightCount; i++) {
      const light = document.createElement('div');
      light.className = 'holiday-light';
      light.style.left = `${(i / lightCount) * 100}%`;
      light.style.backgroundColor = colors[i % colors.length];
      light.style.animationDelay = `${Math.random() * 2}s`;
      lightsRef.current.appendChild(light);
    }
  }, []);

  return (
    <>
      <style>{`
        .holiday-lights-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 24px;
          pointer-events: none;
          z-index: 50;
          overflow: hidden;
        }

        .holiday-light {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          top: 8px;
          transform: translateX(-50%);
          box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
          animation: twinkle 2s ease-in-out infinite;
        }

        .holiday-light::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 8px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            filter: brightness(1);
          }
          50% {
            opacity: 0.4;
            filter: brightness(0.6);
          }
        }

        /* String/wire connecting the lights */
        .holiday-lights-container::after {
          content: '';
          position: absolute;
          top: 8px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1) 10%,
            rgba(255, 255, 255, 0.1) 90%,
            transparent
          );
        }
      `}</style>
      <div ref={lightsRef} className="holiday-lights-container" />
    </>
  );
};
