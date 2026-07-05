import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { projectsData } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = projectsData

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
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full group"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-indigo-500/25 border border-indigo-400/30 text-indigo-300 backdrop-blur-md uppercase">
                    {project.category}
                  </span>
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

                  {/* Tags list */}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white transition-all duration-300 z-10 cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>

                {/* Modal Banner Image */}
                <div className="relative aspect-video w-full bg-slate-950">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category overlay */}
                  <span className="absolute bottom-6 left-6 sm:left-8 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 backdrop-blur-md uppercase">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 rounded text-xs font-medium bg-slate-900 border border-gray-800 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-gray-300 font-semibold mb-2 font-display">Project Overview</h4>
                  <p className="text-gray-400 leading-relaxed font-sans mb-8 text-sm sm:text-base">
                    {selectedProject.detailedDescription}
                  </p>

                  {/* Modal Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-gray-800 hover:border-gray-700 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    
                    {selectedProject.demoLink !== "#" && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                      >
                        <FaExternalLinkAlt size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
