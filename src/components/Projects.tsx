import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star, GitFork, Calendar } from "lucide-react";
import { useGitHubRepos } from "../hooks/useGitHub";
import NeonButton from "./NeonButton";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { repos, loading, error } = useGitHubRepos();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "short",
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      React: "#61dafb",
      HTML: "#e34c26",
      CSS: "#1572b6",
      Python: "#3776ab",
      Java: "#ed8b00",
      "C++": "#00599c",
      Go: "#00add8",
      Rust: "#000000",
    };
    return colors[language || ""] || "#6b7280";
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-6xl font-black text-center mb-16"
          >
            <span className="bg-gradient-to-r from-magenta-400 to-cyan-400 bg-clip-text text-transparent">
              ПРОЕКТЫ
            </span>
          </motion.h2>

          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
              <p className="mt-4 text-gray-400 font-mono">
                Загрузка проектов из GitHub...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <p className="text-red-400 font-mono">{error}</p>
              <p className="text-gray-400 text-sm mt-2">
                Измените GITHUB_USERNAME в src/hooks/useGitHub.ts на свой
                username
              </p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  variants={cardVariants}
                  className="group relative"
                >
                  <div
                    className="bg-gradient-to-br from-gray-900 to-black border border-cyan-400/20 
                                rounded-lg p-6 h-full flex flex-col transition-all duration-300
                                hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10
                                hover:transform hover:scale-[1.02]"
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3
                        className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 
                                   transition-colors duration-300 line-clamp-1"
                      >
                        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-400">
                        {repo.language && (
                          <div className="flex items-center space-x-1">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(
                                  repo.language
                                ),
                              }}
                            />
                            <span className="text-xs font-mono">
                              {repo.language}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                      {repo.description || "Описание отсутствует"}
                    </p>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-magenta-400/20 border border-magenta-400/30 
                                     rounded text-xs text-magenta-300 font-mono"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star size={14} />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork size={14} />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span className="font-mono">
                          {formatDate(repo.updated_at)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-3 py-2 border border-cyan-400/50 
                                 text-cyan-400 rounded text-sm font-mono transition-all duration-300
                                 hover:bg-cyan-400/10 hover:border-cyan-400"
                      >
                        <Github size={14} />
                        <span>Код</span>
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-3 py-2 border border-magenta-400/50 
                                   text-magenta-400 rounded text-sm font-mono transition-all duration-300
                                   hover:bg-magenta-400/10 hover:border-magenta-400"
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 pointer-events-none
                                bg-gradient-to-r from-cyan-400/5 via-transparent to-magenta-400/5"
                  />
                </motion.div>
              ))}
            </div>
          )}

          <motion.div variants={cardVariants} className="text-center mt-16">
            <NeonButton href="https://github.com" variant="primary">
              <Github className="inline mr-2 h-5 w-5" />
              Больше проектов на GitHub
            </NeonButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
