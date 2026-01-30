import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ProjectCard, type Project } from '@/app/components/ProjectCard';

const DEFAULT_PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
    image: 'ecommerce dashboard modern',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with natural language processing and smart responses.',
    image: 'chat interface ai modern',
    tags: ['Next.js', 'OpenAI', 'WebSocket', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management Tool',
    description: 'Collaborative task management platform with drag-and-drop, team collaboration, and progress tracking.',
    image: 'project management kanban',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
    image: 'analytics dashboard social',
    tags: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness app with workout tracking, nutrition planning, and progress visualization.',
    image: 'fitness app mobile',
    tags: ['React Native', 'Redux', 'GraphQL', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website Builder',
    description: 'Drag-and-drop portfolio builder with customizable templates and one-click deployment.',
    image: 'website builder interface',
    tags: ['Svelte', 'TailwindCSS', 'Supabase', 'Vercel'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

interface ProjectsSectionState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const API_URL = 'https://api.karthikportfolio.in/api/projects';
const FETCH_TIMEOUT = 8000; // 8 seconds

async function fetchProjects(): Promise<Project[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

  try {
    const response = await fetch(API_URL, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate response structure
    if (!Array.isArray(data)) {
      throw new Error('Invalid API response: expected array of projects');
    }

    return data;
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'AbortError') {
        throw new Error('Request timeout: API took too long to respond');
      }
      throw err;
    }
    throw new Error('Unknown error occurred while fetching projects');
  } finally {
    clearTimeout(timeoutId);
  }
}

export function ProjectsSection() {
  const [state, setState] = useState<ProjectsSectionState>({
    projects: DEFAULT_PROJECTS,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const projects = await fetchProjects();
        if (isMounted) {
          setState({
            projects,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to fetch projects';
          setState({
            projects: DEFAULT_PROJECTS,
            loading: false,
            error: errorMessage,
          });
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing innovation, creativity, and technical expertise.
          </p>
        </motion.div>

        {/* Loading State */}
        {state.loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="h-96 rounded-2xl bg-white/5 border border-white/10 animate-pulse"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {state.error && !state.loading && (
          <motion.div
            className="mb-12 p-6 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-400 mb-1">Failed to load projects</h3>
              <p className="text-red-300/80 text-sm">{state.error}</p>
              <p className="text-red-300/60 text-xs mt-2">Displaying default projects instead.</p>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!state.loading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {state.projects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
