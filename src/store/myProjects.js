import { github } from "./info";
import myProject1 from "../assets/myProject1.png";
import myProject2 from "../assets/myProject2.png";

export const myProjects = [
    {
        title: "E-Commerce",
        description: "A simple full-stack e-commerce website that allows users to browse products, with user-friendly UI, backend functionality and strong logic to ensure a smooth shopping experience.",
        technologies: ["React", "TypeScript", "Bootstrap", "Redux Toolkit", "React Hook Form", "Zod"],
        image: myProject1,
        liveLink: "Not_Deployed_Yet",
        isRepoAvailable: true,
        repoLink: `${github}/E-Commerce_Front`
    },
    {
        title: "Finance Tracker",
        description: "A finance tracker app that allows users to manage their incomes and outcomes, providing a simple UI, efficient data management and charts to visualize spending patterns.",
        technologies: ["React", "TypeScript", "Tailwind", "Local Storage", "Context API"],
        image: myProject2,
        liveLink: "https://finance-tracker-abdallah.vercel.app",
        isRepoAvailable: true,
        repoLink: `${github}/Finance_Tracker`
    }
]