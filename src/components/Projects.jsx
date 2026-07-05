import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projectsData } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="pt-32 pb-24 relative overflow-hidden bg-[#050b18]">
      {/* Background glow orbs */}
      <div className="glow-orb-cyan top-[20%] right-[-10%] opacity-30" />
      <div className="glow-orb-indigo bottom-[10%] left-[-10%] opacity-35" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
          >
            Completed Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-8"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => {
            const primaryLink = project.demoLink && project.demoLink !== '#'
              ? project.demoLink
              : project.githubLink

            return (
              <motion.a
                key={project.id}
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-indigo-500/25 border border-indigo-400/30 text-indigo-300 backdrop-blur-md uppercase">
                    {project.category}
                  </span>

                  {/* Hover overlay icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white text-sm font-semibold shadow-lg">
                      {project.demoLink && project.demoLink !== '#' ? (
                        <><FaExternalLinkAlt size={13} /> View Live</>
                      ) : (
                        <><FaGithub size={14} /> View Code</>
                      )}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-2.5 group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 border border-gray-800 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
