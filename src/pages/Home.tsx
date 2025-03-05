import ProfileCard from "@/components/profile-card/ProfileCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-20 px-8 md:px-28 lg:px-52 py-10">
      <section className="w-full lg:w-xs">
        <ProfileCard />
      </section>
      <section className="flex-grow">
        <p>Hello Right Section</p>
      </section>
    </div>
  );
}
