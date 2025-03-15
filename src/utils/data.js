import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaLinkedin,
    FaInstagram,
    FaFacebook,

} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";

import { VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
 } from "react-icons/vsc";
 
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/projects-images/project1.webp";
import PROJECT_IMG_2 from "../assets/projects-images/project2.webp";
import PROJECT_IMG_3 from "../assets/projects-images/project3.webp";
import PROJECT_IMG_4 from "../assets/projects-images/project4.webp";
import PROJECT_IMG_5 from "../assets/projects-images/project5.webp";
import PROJECT_IMG_6 from "../assets/projects-images/project6.webp";


export const MENU_LINKS = [
  {
    id: 1,
    label: "Home",
    offset: -100,
    to: "hero",
  },
  {
    id: 2,
    label: "Skills",
    offset: -80,
    to: "skills",
  },
  {
    id: 3,
    label: "About Us",
    offset: -80,
    to: "about",
  },
  {
    id: 4,
    label: "Projects",
    offset: -80,
    to: "projects",
  },
  {
    id: 5,
    label: "Contact Us",
    offset: -80,
    to: "contact",
  },
];

export const STATS = [
    {id:"01", count:"10", label: `Years of \nExperience`},
    {id:"01", count:"12", label: `Certifications \nEarned`},
    {id:"01", count:"43", label: `Projects \nCompleted`},
    {id:"01", count:"37+", label: `Happy \nClients`},
]

export const SKILL_TABS = [
    {
        id: "01", 
        label: "All", 
        value: "all"
    },
    {
        id: "02", 
        label: "Frontend", 
        value: "frontend"
    },
    {
        id: "03", 
        label: "Backend", 
        value: "backend"
    },
    {
        id: "04", 
        label: "Tools", 
        value: "tools"
    },
    {
        id: "05", 
        label: "Skills", 
        value: "soft_skills"
    }
];


export const SKILLS = [
    {
        id: "01",
        icon: FaHtml5, 
        skill: "HTML", 
        progress: 90, 
        type: "frontend", 
        description: "Strong knowledge of semantic HTML and accessibility, ensuring well-structured and SEO-friendly web pages."
    },
    {
        id: "02",
        icon: FaCss3, 
        skill: "CSS", 
        progress: 85, 
        type: "frontend", 
        description: "Experienced in responsive design using Flexbox, Grid, and Tailwind CSS to create modern and visually appealing layouts."
    },
    {
        id: "03",
        icon: BiLogoJavascript, 
        skill: "JavaScript", 
        progress: 80, 
        type: "frontend", 
        description: "Proficient in ES6+, DOM manipulation, API integration, and building interactive web applications."
    },
    {
        id: "04",
        icon: FaReact, 
        skill: "React", 
        progress: 75, 
        type: "frontend", 
        description: "Skilled in React Hooks, component-based architecture, and state management using Context API or Redux."
    },
    {
        id: "05",
        icon: FaNodeJs, 
        skill: "Node.js", 
        progress: 70, 
        type: "backend", 
        description: "Experienced in building RESTful APIs, handling authentication, and working with server-side logic."
    },
    {
        id: "06",
        icon: SiExpress, 
        skill: "Express.js", 
        progress: 70, 
        type: "backend", 
        description: "Proficient in using Express.js to build scalable backend applications with middleware, routing, and API development."
    },
    {
        id: "07",
        icon: SiMongodb, 
        skill: "MongoDB", 
        progress: 65, 
        type: "backend", 
        description: "Familiar with MongoDB for database management, using Mongoose for schema modeling and efficient queries."
    },
    {
        id: "08",
        icon: SiMysql, 
        skill: "SQL", 
        progress: 65, 
        type: "backend", 
        description: "Experienced in writing SQL queries, database normalization, and working with relational databases like MySQL and PostgreSQL."
    },
    {
        id: "09",
        icon: FaGitAlt, 
        skill: "Git & GitHub", 
        progress: 70, 
        type: "tools", 
        description: "Skilled in using Git for version control and collaboration, and GitHub for code hosting, pull requests, and project management."
    },
    {
        id: "10",
        icon: VscVscode, 
        skill: "VSCode", 
        progress: 80, 
        type: "tools", 
        description: "Experienced in using Visual Studio Code for efficient coding with extensions like Prettier, ESLint, and Git integration."
    },
    {
        id: "11",
        icon: SiWebpack, 
        skill: "Webpack", 
        progress: 65, 
        type: "tools", 
        description: "Proficient in configuring Webpack for bundling, optimizing assets, and managing project dependencies."
    },
    {
        id: "12",
        icon: VscCommentUnresolved, 
        skill: "Problem Solving", 
        progress: 90, 
        type: "soft_skills", 
        description: "Strong analytical skills in debugging issues, finding efficient solutions, and optimizing code for performance."
    },
    {
        id: "13",
        icon: MdGroups3, 
        skill: "Collaboration", 
        progress: 85, 
        type: "soft_skills", 
        description: "Excellent at collaborating with teams, using tools like Git, GitHub, and Slack to ensure seamless communication and workflow."
    },
    {
        id: "14",
        icon: VscTerminalPowershell, 
        skill: "Attention to Detail", 
        progress: 90, 
        type: "soft_skills", 
        description: "Keen eye for details, ensuring that code is clean, well-documented, and free from bugs and inconsistencies."
    }
];

export const ABOUT_ME = {
    content: `I’m a Full Stack Developer with a strong passion for building efficient, scalable, and user-friendly web applications. My expertise lies in React, Tailwind CSS, and PHP, allowing me to create visually appealing and highly responsive front-end designs while ensuring the back-end remains robust, secure, and optimized for performance. I take pride in writing clean, maintainable code and developing solutions that enhance user experience and functionality.

    I enjoy solving complex problems and continuously expanding my knowledge by exploring new technologies, frameworks, and best practices. Whether it’s designing dynamic and intuitive user interfaces, improving application performance, or optimizing database structures, I thrive on turning ideas into functional, real-world applications. I believe in writing code with purpose, focusing on efficiency, scalability, and long-term sustainability. `,
    socialLinks: [
        {
            id: "01",
            label: "Facebook",
            icon: FaFacebook,
            link: "#"
        },
        {
            id: "02",
            label: "Instagram",
            icon: FaInstagram,
            link: "#"
        },
        {
            id: "03",
            label: "Twitter",
            icon: FaXTwitter,
            link: "#"
        },
        {
            id: "04",
            label: "LinkedIn",
            icon: FaLinkedin,
            link: "#"
        },
    
        {
            id: "05",
            label: "Dribbble",
            icon: FaDribbble,
            link: "#"
        }
    ],
    email: "asuka1212@gmail.com",
    phone: "+95 901 234 5678",
    website: "https://timetoprogram.com"
};

export const PROJECTS = [
    {
        id: "01",
        title: "Modern E-Commerce Website with Secure Payments and User Authentication",
        image: PROJECT_IMG_1,
        tags: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express"]
    },
    {
        id: "02",
        title: "Personal Portfolio Website Showcasing Projects and Smooth Animations",
        image: PROJECT_IMG_2,
        tags: ["React", "Tailwind CSS", "Framer Motion"]
    },
    {
        id: "03",
        title: "Dynamic Blog Platform with Markdown Support and Database Storage",
        image: PROJECT_IMG_3,
        tags: ["Next.js", "Markdown", "MongoDB", "Node.js"]
    },
    {
        id: "04",
        title: "Task Management App with Real-Time Sync and User Notifications",
        image: PROJECT_IMG_4,
        tags: ["React", "Redux", "Firebase"]
    },
    {
        id: "05",
        title: "Social Media Dashboard with Analytics and Data Visualization",
        image: PROJECT_IMG_5,
        tags: ["React", "Tailwind CSS", "Chart.js"]
    },
    {
        id: "06",
        title: "Weather App with Live Forecast and Location-Based Updates",
        image: PROJECT_IMG_6,
        tags: ["JavaScript", "OpenWeather API", "CSS", "HTML"]
    }
];



   

