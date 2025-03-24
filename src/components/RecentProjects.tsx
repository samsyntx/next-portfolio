import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const recentProjectsJSON = [
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
    image: "http://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default function RecentProjects() {
  return (
    <section className="flex flex-col items-center lg:items-start text-center space-y-4 lg:text-left">
      <p className="text-6xl lg:text-8xl font-bold uppercase">
        Recent <span className="block text-softgray">Projects</span>
      </p>

      <ul>
        {recentProjectsJSON.map((each, index) => (
          <li key={index}>
            <Image
              src={each.image}
              height={100}
              width={100}
              className="w-20 h-full"
              alt={each.id.toString()}
            />
            <div>
              <p>{each.title}</p>
              <p>{each.description}</p>
            </div>
            <ArrowDownRightIcon className="h-5 w-5 text-primary -rotate-[90deg]" />
          </li>
        ))}
      </ul>
      <div className="group p-4"></div>
    </section>
  );
}
