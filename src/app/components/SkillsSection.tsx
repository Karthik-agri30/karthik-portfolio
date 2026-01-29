import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Database, Smartphone, Cloud, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: typeof Code2;
  color: string;
}

const skills: Skill[] = [
  { name: 'Frontend Development', level: 95, icon: Code2, color: 'from-cyan-500 to-blue-500' },
  { name: 'UI/UX Design', level: 90, icon: Palette, color: 'from-purple-500 to-pink-500' },
  { name: 'Backend Development', level: 85, icon: Database, color: 'from-green-500 to-emerald-500' },
  { name: 'Mobile Development', level: 80, icon: Smartphone, color: 'from-orange-500 to-red-500' },
  { name: 'Cloud Services', level: 88, icon: Cloud, color: 'from-blue-500 to-cyan-500' },
  { name: 'Performance Optimization', level: 92, icon: Zap, color: 'from-yellow-500 to-orange-500' },
];

function AnimatedCounter({ target, suffix = '%' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const animation = animate(count, target, {
      duration: 2,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [target, count, rounded]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {/* Skill header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <motion.div
            className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-lg font-semibold text-white">{skill.name}</span>
        </div>
        <motion.span
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {hasAnimated && <AnimatedCounter target={skill.level} />}
        </motion.span>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.2,
            }}
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} blur-md opacity-50`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function CircularSkill({ skill, index }: { skill: Skill; index: number }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const Icon = skill.icon;
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (skill.level / 100) * circumference;
  const gradientId = `skill-gradient-${index}`;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onViewportEnter={() => setHasAnimated(true)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-32 h-32 mb-4">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-white/10"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
          />
        </svg>

        {/* Icon and percentage */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="w-8 h-8 text-purple-400 mb-1" />
          <motion.span
            className="text-xl font-bold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {hasAnimated && <AnimatedCounter target={skill.level} />}
          </motion.span>
        </div>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}
        />
      </div>

      <p className="text-sm font-semibold text-gray-300 text-center">{skill.name}</p>
    </motion.div>
  );
}

export function SkillsSection() {
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
            My Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        {/* Linear skill bars */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Circular skill indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <CircularSkill key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
