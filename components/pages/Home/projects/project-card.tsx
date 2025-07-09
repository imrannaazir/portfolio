import { motion } from "framer-motion";
import { FC, useState } from "react";
import { AnimationType } from "@components/animation/Motion";
import HoverButton from "@components/ui/button/HoverButton";
import { TProject } from "@types";
import { ExternalLink, Calendar, Code2 } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps extends TProject {
  index: number;
  onViewProject?: (id: string) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  index,
  image,
  title,
  id,
  description,
  category = "Fullstack",
  technologies = [],
  status = "Completed",
  onViewProject
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleViewProject = () => {
    if (onViewProject) {
      onViewProject(id);
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'planned':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <motion.div
      variants={AnimationType("up", "spring", index * 0.1, 0.6)}
      initial="hidden"
      animate="show"
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-slate-600/50">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent rounded-2xl" />

        {/* Apple Browser Tab Header */}
        <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-b border-slate-600/30 px-4 py-3 rounded-t-2xl">
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-1.5 h-0.5 bg-red-900 rounded-full transform rotate-45" />
                  <div className="w-1.5 h-0.5 bg-red-900 rounded-full transform -rotate-45 absolute" />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-yellow-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-2 h-0.5 bg-yellow-900 rounded-full" />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-1 h-1 border border-green-900 border-t-0 border-l-0 transform rotate-45 -translate-y-0.5" />
                  <div className="w-1 h-1 border border-green-900 border-b-0 border-r-0 transform rotate-45 translate-y-0.5 absolute" />
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Tab Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-medium text-slate-300 truncate max-w-[200px]"
            >
              {title}
            </motion.div>
          </div>
        </div>
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="aspect-[16/10] relative"
          >
            <Image
              width={300}
              height={200}
              alt={title}
              src={image}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse" />
            )}
          </motion.div>

          {/* Status Badge */}
          {status && (
            <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(status)}`}>
              {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </div>
          )}

          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-black/30 text-white/90 backdrop-blur-sm border border-white/20">
              {category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>

              {description && (
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 mb-3">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-700/50 text-slate-400 border border-slate-600/50">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Code2 size={14} />
              <span>Project</span>
            </div>

            <HoverButton
              labelclassName="text-sm font-medium text-white flex items-center gap-2"
              label="View Project" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleViewProject}
            />
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.05] to-purple-600/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
