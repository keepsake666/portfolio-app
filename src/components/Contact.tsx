import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, MapPin } from "lucide-react";
import { useGitHubUser } from "../hooks/useGitHub";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { user } = useGitHubUser();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            <span className="bg-gradient-to-r from-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              СВЯЗАТЬСЯ
            </span>
          </motion.h2>

          <div className="flex flex-col items-center space-y-8 md:space-y-12 md:items-start md:flex-row md:space-x-16 md:space-y-0 justify-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="text-cyan-400" size={28} />
                <span className="text-lg text-gray-300 font-mono">
                  {user?.email || "Почта не указана"}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="text-magenta-400" size={28} />
                <a
                  href={user?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-300 font-mono hover:text-magenta-400 transition-colors"
                >
                  {user?.login}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-purple-400" size={28} />
                <span className="text-lg text-gray-300 font-mono">
                  {user?.location || "Город не указан"}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
