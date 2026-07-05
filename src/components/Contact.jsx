import { motion } from 'framer-motion'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const phoneNumber = "+91 82702 98939" // Placeholder mobile number, Gokilan can edit
  const emailAddress = "gokilanthangavel@gmail.com"

  const contacts = [
    {
      name: "Direct Call",
      description: "Call me directly on my mobile",
      value: 8270298939,
      href: `tel:${phoneNumber.replace(/\s+/g, '')}`,
      icon: <FaPhoneAlt className="text-emerald-400 text-2xl" />,
      colorClass: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] hover:bg-emerald-500/5",
      btnText: "Call Now"
    },
    {
      name: "WhatsApp",
      description: "Send a message for instant chat",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`,
      icon: <FaWhatsapp className="text-green-400 text-2xl" />,
      colorClass: "hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:bg-green-500/5",
      btnText: "Send Message"
    }
  ]

  const socials = [
    {
      name: "Email",
      href: `mailto:${emailAddress}`,
      icon: <FaEnvelope className="text-rose-400 text-xl" />,
      bgClass: "bg-rose-500/10 border-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedinIn className="text-blue-400 text-xl" />,
      bgClass: "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white"
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <FaGithub className="text-gray-200 text-xl" />,
      bgClass: "bg-gray-500/10 border-gray-500/20 text-gray-200 hover:bg-gray-200 hover:text-slate-950"
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <FaInstagram className="text-pink-400 text-xl" />,
      bgClass: "bg-pink-500/10 border-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white"
    }
  ]

  return (
    <section id="contact" className="min-h-[80vh] pt-32 pb-24 relative flex items-center justify-center overflow-hidden bg-[#050b18]">
      {/* Background glow orbs */}
      <div className="glow-orb-cyan top-[20%] right-[-10%] opacity-35 z-0 pointer-events-none" />
      <div className="glow-orb-indigo bottom-[10%] left-[-10%] opacity-40 z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"
          />
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Quick Communication Cards */}
          <div className="space-y-6 flex flex-col justify-between">
            {contacts.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target={item.name === "WhatsApp" ? "_blank" : undefined}
                rel={item.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-6 cursor-pointer transition-all duration-300 ${item.colorClass}`}
              >
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-gray-800 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white font-display mb-0.5">{item.name}</h3>
                  <p className="text-xs text-gray-400 font-sans mb-2">{item.description}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-indigo-400">
                    {item.btnText} →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Socials & Other Channels card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-3">Social Channels</h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6">
                Feel free to connect with me across any of these professional and social platforms.
              </p>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${social.bgClass}`}
                  >
                    {social.icon}
                    <span className="text-xs font-medium font-sans">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Design statement footer */}
            <div className="border-t border-gray-800 pt-6 mt-6 flex justify-between items-center">
              <div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Email Me At</span>
                <a href={`mailto:${emailAddress}`} className="text-xs text-indigo-400 hover:text-indigo-300 font-sans mt-0.5 block">{emailAddress}</a>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[9px] font-bold bg-slate-900 border border-gray-800 text-indigo-300 tracking-wider uppercase">Online</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
