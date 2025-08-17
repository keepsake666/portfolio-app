import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10 ${glitching ? 'animate-pulse' : ''}`}>
        {text}
      </span>
      {glitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-cyan-400 animate-pulse"
            style={{ transform: 'translate(-1px, 1px)' }}
          >
            {text}
          </span>
          <span 
            className="absolute top-0 left-0 text-magenta-400 animate-pulse"
            style={{ transform: 'translate(1px, -1px)' }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;