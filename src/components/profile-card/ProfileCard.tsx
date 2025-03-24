import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/constant/icons";
import Image from "next/image";

const socialLinks = [
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

export default function ProfileCard() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-white text-gray-800 px-12 py-10 rounded-xl flex flex-col items-center space-y-3">
        <div className="bg-gray-300 h-60 w-full max-w-52 rounded-xl overflow-hidden">
          <Image
            src="https://gp.xom"
            alt="user"
            className="w-full h-full"
            height={100}
            width={100}
          />
        </div>

        <p className="text-4xl font-bold capitalize text-center">
          Shubham Arora
        </p>

        <p className="site-content text-center mt-20">
          A Software Engineer who has developed countless innovative solutions.
        </p>

        <ul className="flex gap-4">
          {socialLinks.map((each, index) => (
            <a
              href={each.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <li>
                <span>{each.icon}</span>
              </li>
            </a>
          ))}
        </ul>
      </div>

      <Image
        src="assets/svgs/profile1.svg"
        height={100}
        width={100}
        className="w-60 absolute top-0 left-0"
        alt=""
      />

      <Image
        src="assets/svgs/profile2.svg"
        height={100}
        width={100}
        className="w-60 absolute top-[21rem] -left-24"
        alt=""
      />
    </div>
  );
}
