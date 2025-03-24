import {
  ArrowLongRightIcon,
  Square3Stack3DIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

const features = [
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

const highlight = [
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

export default function Overview() {
  return (
    <div className="flex flex-col items-center lg:items-start text-center space-y-4 lg:text-left">
      <p className="text-6xl lg:text-8xl font-bold uppercase">
        Full Stack <span className="block text-softgray">Developer</span>
      </p>
      <p className="site-content max-w-lg">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      <ul className="flex gap-7 mt-16 space-x-4 mb-7">
        {features.map((each, index) => (
          <li key={index}>
            <p className="text-7xl font-semibold">{each.title}</p>
            <p className="site-content max-w-32">{each.description}</p>
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-12 gap-5 lg:max-w-2xl">
        {highlight.map((each, index) => (
          <li
            key={index}
            className={twMerge(
              "flex flex-col justify-between px-4 py-8 rounded-xl h-60 cursor-pointer group",
              each.id === 0
                ? "bg-primary text-white col-span-5"
                : "bg-secondary text-black col-span-7"
            )}
          >
            <each.icon className="w-10 h-10" />
            <p className="text-2xl font-medium capitalize">{each.title}</p>
            <div
              className={twMerge(
                "self-end border p-1 rounded",
                each.id === 0
                  ? "border-white group-hover:bg-white"
                  : "border-black group-hover:bg-black"
              )}
            >
              <ArrowLongRightIcon
                className={twMerge(
                  "w-6 h-6",
                  each.id === 0
                    ? "text-white group-hover:text-primary"
                    : "text-black group-hover:text-secondary"
                )}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
