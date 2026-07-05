import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-[#030712] border-t border-gray-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link
            to="/"
            className="text-xl font-bold font-display cursor-pointer tracking-wider text-white hover:opacity-80 transition-opacity"
          >
            Gokilan<span className="text-indigo-500">.</span>
          </Link>
          <p className="text-xs text-gray-500 font-sans">Crafting digital experiences.</p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 uppercase tracking-widest font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4">
            {[
              { icon: <FaGithub size={16} />, link: "https://github.com" },
              { icon: <FaLinkedinIn size={16} />, link: "https://linkedin.com" },
              { icon: <FaTwitter size={16} />, link: "https://twitter.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <span className="text-xs text-gray-500 font-sans">
            &copy; {currentYear} Gokilan. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
