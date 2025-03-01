import medium from "@/public/medium.png"
import ezchat from "@/public/Ez-chat.png"
import landing from "@/public/landing.png"
import coachai from "@/public/coach-ai.png"

export const navLinks = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Skills",
        hash:   "#skills"
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact"
    },
    {

    }
];

export const projectsList = [
    {
        title: "Coach-AI",
        description: "An AI agent that helps users create resumes, gain industry insights, and prepare for interviews with AI-generated questions based on their skills. Users can also download resumes and cover letters.",
        tags: ["NextJs", "TailwindCSS", "PostgreSQL", "Clerk", "Prisma", "Gemini"],
        imageUrl:coachai,
        linkToProject: "https://www.coachai.site"
    },
    {
        title: "Ez-Chat",
        description: "A Slack clone in Next.js where users can manage workspaces, chat with friends, send reactions, and create message threads.",
        tags: ["NextJs", "TailwindCSS", "Convex", "Shadcn", "OAuth"],
        imageUrl:ezchat,
        linkToProject: "https://ez-chat-beta.vercel.app"
    },
    {
        title: "Blogging App",
        description:"A Medium,com clone, using React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
        tags: ["ReactJs", "TypeScript", "PostgreSQL","Serverless", "Cloudflare Workers", "JWT"],
        imageUrl: medium,
        linkToProject: "https://medium-blogging-olive.vercel.app"
    },
    {
        title: "Modern-landing-page",
        description: "Create a landing page using NextJs and React, gives animation and parallax effects using framer-motion.",
        imageUrl:landing,
        tags:["NextJs", "TailwindCSS", "Framer-Motion"],
        linkToProject:"https://landing-page-2-kappa.vercel.app"
    }
] as const;

export const skills = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "RESTful APIs",
    "CI/CD",
    "Docker",
    "TurboRepo",
    "Data Structures",
    "Algorithms",
    "Cloudflare Workers",
    "MongoDB",
    "Zod",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "MongoDB",
    "Node.Js",
    "Git",
    "Express.Js",
    "Framer-motion",
    "GSAP",
]