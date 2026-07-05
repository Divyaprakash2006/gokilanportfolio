import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb
} from 'react-icons/si';

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-[#e34f26]" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572b6]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#f7df1e]" },
      { name: "React.js", icon: FaReact, color: "text-[#61dafb]" },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
      { name: "SQL", icon: FaDatabase, color: "text-[#00758f]" }
    ]
  }
];
