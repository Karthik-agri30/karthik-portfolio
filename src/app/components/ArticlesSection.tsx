import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const articles: Article[] = [
  {
    title: 'Building Scalable Applications with Microservices',
    excerpt: 'Learn how to architect and deploy microservices-based applications that scale efficiently.',
    image: 'microservices architecture diagram',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    category: 'Architecture',
  },
  {
    title: 'The Future of Web Development in 2026',
    excerpt: 'Exploring upcoming trends, frameworks, and technologies shaping the web development landscape.',
    image: 'futuristic web development',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
    category: 'Web Dev',
  },
  {
    title: 'Mastering React Performance Optimization',
    excerpt: 'Deep dive into advanced techniques for optimizing React applications for better performance.',
    image: 'react performance dashboard',
    date: 'Jan 5, 2026',
    readTime: '10 min read',
    category: 'React',
  },
  {
    title: 'CSS Grid vs Flexbox: When to Use Which',
    excerpt: 'A comprehensive guide to choosing the right layout system for your web projects.',
    image: 'css layout grid flexbox',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    category: 'CSS',
  },
  {
    title: 'Building Real-time Applications with WebSockets',
    excerpt: 'Learn how to implement real-time features in your applications using WebSocket technology.',
    image: 'websocket real-time communication',
    date: 'Dec 20, 2025',
    readTime: '9 min read',
    category: 'Backend',
  },
  {
    title: 'Designing for Accessibility: Best Practices',
    excerpt: 'Essential guidelines for creating inclusive and accessible web experiences for all users.',
    image: 'accessibility web design',
    date: 'Dec 15, 2025',
    readTime: '5 min read',
    category: 'UX/UI',
  },
];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm h-full"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-600/80 backdrop-blur-sm text-white text-xs font-semibold"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {article.category}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {article.title}
          </motion.h3>

          {/* Excerpt */}
          <motion.p
            className="text-gray-400 text-sm mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {article.excerpt}
          </motion.p>

          {/* Read more link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 font-semibold text-sm group/link"
            whileHover={{ x: 5 }}
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300 pointer-events-none rounded-2xl"
        />
      </motion.div>
    </motion.article>
  );
}

export function ArticlesSection() {
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
            Featured Articles
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-purple-500/50 bg-purple-500/10 text-purple-400 font-semibold hover:bg-purple-500/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
