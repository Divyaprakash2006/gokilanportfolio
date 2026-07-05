import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "ThinkInfo Expert Solution, Salem, India",
      duration: "2026",
      description: "Developed a browser extension to detect unsafe API requests in real time. Built interactive user interfaces using HTML, CSS, and JavaScript, and integrated robust backend validation mechanisms for real-time API security analysis.",
      type: "work"
    },
    {
      id: 2,
      role: "B.Tech – Computer Science and Business Systems",
      company: "Muthayammal Engineering College, Rasipuram",
      duration: "2023 - 2027",
      description: "Currently pursuing B.Tech in CSBS. Maintained a CGPA of 7.91/10. Core studies include data structures, backend engineering, cloud basics, and database systems.",
      type: "education"
    },
    {
      id: 3,
      role: "Higher Secondary Certificate (HSC)",
      company: "Vidhyaa Vikas Higher Secondary School",
      duration: "2022 - 2023",
      description: "Completed higher secondary education focusing on Computer Science and Mathematics, graduating with 60%.",
      type: "education"
    }
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background glow orb */}
      <div className="glow-orb-indigo top-[30%] left-[-15%] opacity-30" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
          >
            My Journey
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Timeline Track Container */}
        <div className="relative timeline-track">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0
            return (
              <div 
                key={exp.id} 
                className="mb-12 md:mb-16 flex flex-col md:flex-row items-stretch md:items-center relative"
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-[8px] md:left-1/2 transform -translate-y-0 md:-translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-indigo-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                  {exp.type === 'work' ? (
                    <FaBriefcase className="text-indigo-400 text-xs" />
                  ) : (
                    <FaGraduationCap className="text-cyan-400 text-sm" />
                  )}
                </div>

                {/* Timeline Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                  className={`w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 p-6 sm:p-8 rounded-2xl glass border border-white/5 shadow-lg flex flex-col justify-between ${
                    isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                  }`}
                >
                  <div>
                    <span className="inline-block text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                      {exp.duration}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-medium text-cyan-400 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold font-display text-white mb-4"
            >
              Certifications & Achievements
            </motion.h3>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Salesforce Certified Agentforce Specialist",
                issuer: "Salesforce",
                desc: "Demonstrated knowledge of Salesforce Agentforce tools and AI-driven automation capabilities.",
                date: "2025"
              },
              {
                title: "ServiceNow Micro-Certifications",
                issuer: "ServiceNow",
                desc: "Obtained certifications validating core understanding of ServiceNow workflows and IT Service Management (ITSM).",
                date: "2025"
              },
              {
                title: "AWS Cloud Practitioner Fundamentals",
                issuer: "Amazon Web Services (AWS)",
                desc: "Learned foundational cloud concepts, pricing models, security protocols, and core AWS services.",
                date: "2025"
              },
              {
                title: "NPTEL – Distributed Systems",
                issuer: "NPTEL",
                desc: "Successfully completed academic study of distributed architectures, consistency protocols, and system scalability.",
                date: "2024"
              },
              {
                title: "HackIndia 2025 – Selected Participant",
                issuer: "HackIndia",
                desc: "Selected to participate in a competitive national-level hackathon building innovative software solutions.",
                date: "2025"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 bg-slate-900/40"
              >
                <div>
                  <span className="inline-block text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2 font-display">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-sans">
                    {cert.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] text-gray-500 font-semibold">
                  <span>ACHIEVEMENT</span>
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
