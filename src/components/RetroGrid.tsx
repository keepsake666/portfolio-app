import React from 'react';

const RetroGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-purple-900/20 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black via-cyan-900/20 to-transparent" />
    </div>
  );
};

export default RetroGrid;