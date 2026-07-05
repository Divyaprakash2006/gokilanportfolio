import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '7.91', label: 'CGPA / Grade' },
    { number: '2', label: 'Projects Built' },
    { number: '1', label: 'Internships' },
  ]

  return (
    <section id="about" className="pt-32 pb-24 relative overflow-hidden bg-[#050b18]">
      {/* Subtle blur background circles */}
      <div className="absolute top-[20%] right-[-10%] w-[25rem] h-[25rem] bg-indigo-500/5 rounded-full filter blur-[80px]" />
      
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
            About Me
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Centered Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center justify-center"
          >
            <h3 className="text-xl sm:text-2xl font-semibold font-display text-white mb-6 leading-snug max-w-3xl">
              Bridging academic computer science with <span className="text-indigo-400">modern backend and web engineering</span>.
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed font-sans text-sm sm:text-base max-w-3xl">
              I am a pre-final year Computer Science and Business Systems (CSBS) student at Muthayammal Engineering College. Over the course of my studies, I have transitioned from writing basic algorithms to building full-stack web applications, secure browser extensions, and RESTful backend APIs.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed font-sans text-sm sm:text-base max-w-3xl">
              I specialize in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, and SQL databases. Having balanced my academic coursework with hands-on development, national hackathons like HackIndia 2025, and internship roles, I am eager to apply my skills to real-world software engineering challenges.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1 uppercase font-semibold tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
