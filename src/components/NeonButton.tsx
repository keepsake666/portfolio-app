import React from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}) => {
  const baseClasses = `
    relative px-8 py-3 font-mono font-bold uppercase tracking-wider
    border-2 transition-all duration-300 overflow-hidden
    before:absolute before:inset-0 before:bg-gradient-to-r
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100 hover:text-black hover:shadow-2xl
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
  `;

  const variants = {
    primary: `
      border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-400/25
      before:from-cyan-400 before:to-blue-400
      hover:shadow-cyan-400/50 focus:ring-cyan-400
      hover:animate-pulse
    `,
    secondary: `
      border-magenta-400 text-magenta-400 shadow-lg shadow-magenta-400/25
      before:from-magenta-400 before:to-pink-400
      hover:shadow-magenta-400/50 focus:ring-magenta-400
      hover:animate-pulse
    `,
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      className="relative z-10"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  // Если это якорная ссылка (начинается с #), не открываем в новой вкладке
  if (href) {
    if (href.startsWith("#")) {
      return (
        <motion.a
          href={href}
          className={combinedClasses}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {content}
        </motion.a>
      );
    } else {
      // Внешние ссылки — открываем в новой вкладке
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {content}
        </motion.a>
      );
    }
  }

  // Обычная кнопка
  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {content}
    </motion.button>
  );
};

export default NeonButton;
