import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "Next.js", level: 85, color: "from-gray-600 to-gray-800" },
    { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
    { name: "Docker", level: 60, color: "from-blue-400 to-blue-600" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              ТЕХНОЛОГИИ
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-mono text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm font-mono text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              ДОПОЛНИТЕЛЬНЫЕ НАВЫКИ
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Git",
                "Webpack",
                "Vite",
                "Jest",
                "Cypress",
                "MongoDB",
                "PostgreSQL",
                "Redis",
                "Figma",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 
                           border border-cyan-400/30 rounded-lg text-cyan-400 
                           font-mono text-sm hover:shadow-lg hover:shadow-cyan-400/25 
                           transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
