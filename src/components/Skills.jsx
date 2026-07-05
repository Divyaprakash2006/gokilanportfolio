import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background glow orb */}
      <div className="glow-orb-indigo bottom-0 left-[20%] opacity-35" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              className="glass p-8 rounded-2xl border border-white/5 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold font-display text-white mb-6 pb-3 border-b border-gray-800">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 flex-grow">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-white/5 hover:border-indigo-500/20 transition-all duration-300 group cursor-default"
                    >
                      <div className={`text-3xl mb-2.5 transition-transform duration-500 group-hover:scale-110 ${skill.color}`}>
                        <Icon />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
