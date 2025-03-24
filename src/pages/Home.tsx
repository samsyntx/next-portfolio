import Overview from "@/components/Overview";
import ProfileCard from "@/components/profile-card/ProfileCard";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 xl:gap-20 px-10 md:px-20 lg:px-28 xl:px-52 py-10">
      <section className="w-full lg:w-md">
        <ProfileCard />
      </section>
      <section className="flex-grow space-y-20">
        <Overview />
        <RecentProjects />
      </section>
    </div>
  );
}
