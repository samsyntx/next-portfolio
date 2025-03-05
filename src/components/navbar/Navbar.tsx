import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathRoundedSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const initialNavbar = [
  {
    id: "Home",
    label: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    id: "Projects",
    label: "Projects",
    icon: <FolderIcon className="h-5 w-5" />,
  },
  {
    id: "Experience",
    label: "Experience",
    icon: <ArrowPathRoundedSquareIcon className="h-5 w-5" />,
  },
  {
    id: "Tools",
    label: "Tools",
    icon: <Cog6ToothIcon className="h-5 w-5" />,
  },
  {
    id: "Blogs",
    label: "Blogs",
    icon: <ClipboardDocumentIcon className="h-5 w-5" />,
  },
];

export default function Navbar() {
  return (
    <header className="flex justify-center mb-5 md:my-5">
      <ul className="w-full md:w-auto flex gap-6 md:gap-10 py-4 px-8 bg-[#FFFFFF08] justify-center md:rounded-xl">
        {initialNavbar.map((each) => (
          <li
            key={each.id}
            className="cursor-pointer relative group flex justify-center items-center"
          >

            <span className="group-hover:text-orange-500">{each.icon}</span>
            <span className="bg-[#FFFFFF08] absolute hidden md:group-hover:block top-10 p-2 text-xs rounded-md">
              {each.label}
            </span>
          </li>
        ))}
      </ul>
    </header>
  );
}
