import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Code, FolderOpen, Mail } from "lucide-react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Главная", icon: Home },
    { href: "#skills", label: "Навыки", icon: Code },
    { href: "#projects", label: "Проекты", icon: FolderOpen },
    { href: "#contact", label: "Контакты", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-cyan-400/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-black text-xl"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                &lt;DEV/&gt;
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-cyan-400 font-mono text-sm transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-md"
        >
          <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
            <span className="font-black text-xl bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              &lt;DEV/&gt;
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center space-x-3 w-full p-4 text-gray-300 hover:text-cyan-400 font-mono transition-colors duration-300 hover:bg-cyan-400/5 rounded-lg"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
