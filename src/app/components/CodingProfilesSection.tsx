import { motion } from 'motion/react';
import { Github, Code2, Award, Terminal, ExternalLink } from 'lucide-react';

interface Profile {
  name: string;
  username: string;
  icon: typeof Github;
  stats: { label: string; value: string }[];
  color: string;
  url: string;
}

const profiles: Profile[] = [
  {
    name: 'GitHub',
    username: '@yourhandle',
    icon: Github,
    stats: [
      { label: 'Repositories', value: '120+' },
      { label: 'Stars', value: '2.5K' },
      { label: 'Followers', value: '500+' },
    ],
    color: 'from-gray-700 to-gray-900',
    url: 'https://github.com/yourhandle',
  },
  {
    name: 'LeetCode',
    username: '@yourhandle',
    icon: Code2,
    stats: [
      { label: 'Problems Solved', value: '850+' },
      { label: 'Contest Rating', value: '2100' },
      { label: 'Ranking', value: 'Top 5%' },
    ],
    color: 'from-orange-600 to-orange-800',
    url: 'https://leetcode.com/yourhandle',
  },
  {
    name: 'HackerRank',
    username: '@yourhandle',
    icon: Award,
    stats: [
      { label: 'Badges', value: '45' },
      { label: 'Stars', value: '5★ Gold' },
      { label: 'Rank', value: 'Top 3%' },
    ],
    color: 'from-green-600 to-green-800',
    url: 'https://hackerrank.com/yourhandle',
  },
  {
    name: 'SkillRack',
    username: '@yourhandle',
    icon: Terminal,
    stats: [
      { label: 'Score', value: '9500+' },
      { label: 'Rank', value: '#42' },
      { label: 'Challenges', value: '650+' },
    ],
    color: 'from-blue-600 to-blue-800',
    url: 'https://skillrack.com/yourhandle',
  },
];

function ProfileCard({ profile, index }: { profile: Profile; index: number }) {
  const Icon = profile.icon;

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-full">
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)`,
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative mb-4"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 2,
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Name and username */}
        <div className="relative mb-4">
          <h3 className="text-2xl font-bold text-white mb-1">{profile.name}</h3>
          <p className="text-sm text-gray-400">{profile.username}</p>
        </div>

        {/* Stats */}
        <div className="relative space-y-3">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex justify-between items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <span className="text-sm text-gray-400">{stat.label}</span>
              <span className="text-sm font-bold text-purple-400">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        {/* External link indicator */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ExternalLink className="w-5 h-5 text-purple-400" />
        </motion.div>

        {/* 3D lift effect indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.a>
  );
}

export function CodingProfilesSection() {
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
            Coding Profiles
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Check out my competitive programming achievements and contributions across various platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} index={index} />
          ))}
        </div>

        {/* Achievement highlights */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: 'Total Problems', value: '2500+' },
            { label: 'Contest Wins', value: '15' },
            { label: 'Global Rank', value: 'Top 2%' },
            { label: 'Contributions', value: '1200+' },
          ].map((achievement, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {achievement.value}
              </motion.p>
              <p className="text-sm text-gray-400">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
