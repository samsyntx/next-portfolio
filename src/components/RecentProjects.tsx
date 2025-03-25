import { ArrowDownRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { recentProjects } from "@/constant/data";

export default function RecentProjects() {
  return (
    <section className="flex flex-col items-center lg:items-start text-center space-y-4 lg:text-left">
      <p className="text-6xl lg:text-8xl font-bold uppercase">
        Recent <span className="block text-softgray">Projects</span>
      </p>

      <ul className="mt-4">
        {recentProjects.map((each, index) => (
          <li key={index} className="transition-all duration-300 flex gap-6 p-4 rounded-2xl cursor-pointer hover:bg-[#a9a9a90c] group">
            <div className="w-52 h-full rounded overflow-hidden">
              <Image
                src={each.image}
                height={300}
                width={300}
                className="w-full h-full object-cover"
                alt={each.id.toString()}
              />
            </div>
            <div className="self-center">
              <p className="font-semibold text-xl mb-1 capitalize">{each.title}</p>
              <p className="text-[16px] text-gray">{each.description}</p>
            </div>
            <ArrowDownRightIcon className="h-6 w-6 text-primary -rotate-[90deg] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </li>
        ))}
      </ul>
    </section>
  );
}
