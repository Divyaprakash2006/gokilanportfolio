import aiDashboardImg from '../assets/project-ai-dashboard.png';
import chatAppImg from '../assets/project-chat-app.png';

export const projectsData = [
  {
    id: 1,
    title: "Smart Leave Management System",
    category: "Fullstack",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Nodemailer", "REST APIs"],
    description: "A system to automate student leave requests and approval workflows. Implemented role-based dashboards and email notifications.",
    detailedDescription: "The Smart Leave Management System automates student leave workflows. It features role-based dashboards for Students, Advisors, and HODs. Built with the MERN stack, the application handles user authentication, leave applications, status tracking, and sends real-time email notifications utilizing Nodemailer.",
    image: aiDashboardImg,
    githubLink: "https://github.com",
    demoLink: "#"
  },
  {
    id: 2,
    title: "Web Calculator",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript"],
    description: "A responsive, mobile-friendly calculator supporting basic arithmetic operations with an interactive interface.",
    detailedDescription: "A modern web calculator built to practice responsive CSS layout strategies and interactive vanilla JavaScript logic. Supports key mathematical actions, decimal computations, keyboard support, and clear functions with standard clean button animations.",
    image: chatAppImg,
    githubLink: "https://github.com",
    demoLink: "#"
  }
];
