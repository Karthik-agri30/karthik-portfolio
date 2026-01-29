import { motion } from 'motion/react';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function ResumeSection() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      
      // Reset after animation
      setTimeout(() => setIsComplete(false), 2000);
      
      // In a real app, trigger actual download here
      // window.open('/path-to-your-resume.pdf', '_blank');
    }, 1500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FileText className="w-24 h-24 mx-auto text-purple-400" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Download My Resume
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and achievements in a beautifully formatted PDF.
          </p>

          <motion.button
            className="group relative px-10 py-5 text-lg font-bold overflow-hidden rounded-2xl border-2 border-purple-500/50"
            onClick={handleDownload}
            disabled={isDownloading || isComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"
              whileHover={{
                background: [
                  'linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                  'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-all duration-300 blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Content */}
            <span className="relative flex items-center gap-3 text-white">
              {isComplete ? (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </motion.div>
                  Downloaded!
                </>
              ) : isDownloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Download className="w-6 h-6" />
                  </motion.div>
                  Downloading...
                </>
              ) : (
                <>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Download className="w-6 h-6" />
                  </motion.div>
                  Download Resume
                </>
              )}
            </span>

            {/* Download progress bar */}
            {isDownloading && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'linear' }}
              />
            )}
          </motion.button>

          {/* File info */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span>PDF Format</span>
            <span>•</span>
            <span>Last Updated: January 2026</span>
            <span>•</span>
            <span>2 Pages</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
