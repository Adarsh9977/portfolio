import medium from "@/public/medium.png"
import ezchat from "@/public/Ez-chat.png"
import landing from "@/public/landing.png"

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
    }
] as const;

export const projectsList = [
    {
        title: "Ez-Chat",
        description: "A Slack clone, with NextJs that allows users to create, update & deloete workspaces. And also make chat with friends and send reactions in chat. Also implement the thread feature for messages.",
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