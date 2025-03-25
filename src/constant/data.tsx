import { Square3Stack3DIcon, WindowIcon } from "@heroicons/react/24/outline";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./icons";

export const OwnerImage = "https://images.unsplash.com/photo-1742922079438-c2f50c06541c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"

export const socialLinks = [
    {
        id: "Linkedin",
        label: "Linkedin",
        icon: <LinkedinIcon h="20" w="20" color="var(--primary)" />,
        link: "https://linkedin.com/in/samsyntx",
    },
    {
        id: "Instagram",
        label: "Instagram",
        icon: <InstagramIcon h="23" w="23" color="var(--primary)" />,
        link: "https://linkedin.com/in/samsyntx",
    },
    {
        id: "Youtube",
        label: "Youtube",
        icon: <YoutubeIcon h="23" w="23" color="var(--primary)" />,
        link: "https://linkedin.com/in/samsyntx",
    },
];

export const features = [
    {
        id: 0,
        title: "+2",
        description: "Years of Experience",
    },
    {
        id: 2,
        title: "+25",
        description: "Projects Completed",
    },
    {
        id: 3,
        title: "+20",
        description: "Clients worldwide",
    },
];

export const highlight = [
    {
        id: 0,
        title: "DYNAMIC ANIMATION, MOTION DESIGN",
        icon: Square3Stack3DIcon,
        link: "",
    },
    {
        id: 1,
        title: "FRAMER, FIGMA, WORDPRESS, REACTJS",
        icon: WindowIcon,
        link: "",
    },
];

export const recentProjects = [
    {
        id: 1,
        image:
            "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Next.js Landing Page",
        description:
            "A modern and responsive Next.js landing page with Tailwind CSS.",
        link: "/",
    },
    {
        id: 2,
        image: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Personal Developer Portfolio",
        description:
            "A sleek and professional portfolio website built with React and Next.js.",
        link: "/",
    },
    {
        id: 3,
        image: "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Admin Dashboard UI",
        description:
            "A feature-rich admin dashboard template with Ant Design and Recharts.",
        link: "/",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
        title: "Tech Blog",
        description:
            "A fast and SEO-optimized blog powered by Next.js and Markdown.",
        link: "/",
    },
];