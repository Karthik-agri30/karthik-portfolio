import { motion, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * ProjectCard Component
 * 
 * Renders a 3D-transformed project card with hover effects,
 * image preview, and action buttons for live demo and GitHub links.
 * 
 * Features:
 * - 3D perspective transform on mouse move
 * - Image zoom effect on hover
 * - Smooth animations with framer-motion
 * - Responsive design
 * - Accessibility-friendly
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [15, -15]);
  const rotateY = useTransform(mouseX, [-150, 150], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'translateZ(10px)' }}
        />

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Overlay buttons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transform: 'translateZ(30px)' }}
          >
            <motion.a
              href={project.liveUrl}
              className="p-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={`${tag}-${i}`}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 3D depth indicator */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
