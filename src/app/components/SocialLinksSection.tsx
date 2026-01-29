import { motion } from "motion/react";
import {
  Linkedin,
  Instagram,
  Github,
  Youtube,
  Twitter,
} from "lucide-react";

interface Social {
  name: string;
  icon: typeof Linkedin;
  url: string;
  color: string;
  hoverColor: string;
}

const socials: Social[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/karthik-t-0a6141292",
    color: "#0A66C2",
    hoverColor: "#004182",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/karth_ii_01?igsh=MWp3N2UwdGM4ZHZ2cQ==",
    color: "#E4405F",
    hoverColor: "#C13584",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Karthik-agri30",
    color: "#333",
    hoverColor: "#000",
  },
  // {
  // name: 'YouTube',
  //icon: Youtube,
  //url: 'https://youtube.com/@yourhandle',
  //color: '#FF0000',
  //hoverColor: '#CC0000',
  // },
  // {
  // name: 'Twitter',
  //icon: Twitter,
  //url: 'https://twitter.com/yourhandle',
  //color: '#1DA1F2',
  //hoverColor: '#0C85D0',
  //},
];

function SocialIcon({
  social,
  index,
}: {
  social: Social;
  index: number;
}) {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 200,
        delay: index * 0.1,
      }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Idle floating animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
      >
        {/* Icon container */}
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          {/* Glow background */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-xl opacity-50"
            style={{ backgroundColor: social.color }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main icon */}
          <motion.div
            className="relative w-full h-full rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden"
            whileHover={{
              borderColor: social.color,
            }}
          >
            {/* Background fill on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: social.color }}
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon
                className="w-8 h-8 md:w-10 md:h-10 relative z-10"
                style={{ color: social.color }}
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>

          {/* Neon glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              boxShadow: `0 0 20px ${social.color}, 0 0 40px ${social.color}`,
            }}
          />
        </div>

        {/* Label */}
        <motion.p
          className="text-center mt-3 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {social.name}
        </motion.p>
      </motion.div>
    </motion.a>
  );
}

export function SocialLinksSection() {
  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden flex items-center">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {socials.map((social, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              backgroundColor: social.color,
              width: "400px",
              height: "400px",
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Follow me on social media for updates, content, and
            behind-the-scenes insights.
          </p>
        </motion.div>

        {/* Social icons grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {socials.map((social, index) => (
            <SocialIcon
              key={index}
              social={social}
              index={index}
            />
          ))}
        </div>

        {/* Follow stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: "Total Followers", value: "50K+" },
            { label: "Engagement Rate", value: "8.5%" },
            { label: "Content Posts", value: "500+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-gray-500 text-sm">
            © 2026 Your Name. Built with React & Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}