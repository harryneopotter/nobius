import Hero from "@/components/home/Hero";
import CategoryList from "@/components/home/CategoryList";
import CraftPillars from "@/components/home/CraftPillars";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryList />
      <CraftPillars />
    </div>
  );
}
