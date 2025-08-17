import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink } from "lucide-react";
import GlitchText from "./GlitchText";
import NeonButton from "./NeonButton";
import { useGitHubUser } from "../hooks/useGitHub";

const Hero: React.FC = () => {
  const { user, loading } = useGitHubUser();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        {!loading && user && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              <img
                src={user.avatar_url}
                alt={user.name || user.login}
                className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 shadow-xl shadow-cyan-400/25"
              />
              <div className="absolute inset-0 rounded-full border-4 border-magenta-400 animate-ping opacity-20"></div>
            </div>
          </motion.div>
        )}

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          <GlitchText
            text="FRONTEND"
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-400 bg-clip-text text-transparent"
          />
          <br />
          <GlitchText
            text="DEVELOPER"
            className="bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-mono max-w-3xl mx-auto leading-relaxed"
        >
          Fullstack разработчик, создаю современные веб-приложения с
          использованием <span className="text-cyan-400 font-bold">React</span>,{" "}
          <span className="text-magenta-400 font-bold">TypeScript</span> и{" "}
          <span className="text-purple-400 font-bold">Next.js</span>. Backend на{" "}
          <span className="text-green-400 font-bold">Node.js</span> и{" "}
          <span className="text-red-400 font-bold">NestJS</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Эта кнопка скроллит к секции проектов */}
          <NeonButton href="#projects" variant="primary">
            <Github className="inline mr-2 h-5 w-5" />
            Мои проекты
          </NeonButton>
          {/* Эта кнопка скроллит к секции контактов */}
          <NeonButton href="#contact" variant="secondary">
            <Mail className="inline mr-2 h-5 w-5" />
            Связаться
          </NeonButton>
          {/* Внешняя ссылка — откроется в новой вкладке */}
          {!loading && user?.html_url && (
            <NeonButton href={user.html_url}>
              <ExternalLink className="inline mr-2 h-5 w-5" />
              GitHub
            </NeonButton>
          )}
        </motion.div>

        {/* Stats */}
        {!loading && user && (
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">
                {user.public_repos}
              </div>
              <div className="text-sm text-gray-400 font-mono">REPOS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magenta-400">
                {user.followers}
              </div>
              <div className="text-sm text-gray-400 font-mono">FOLLOWERS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">
                {user.following}
              </div>
              <div className="text-sm text-gray-400 font-mono">FOLLOWING</div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
