import Hero from "@/components/home/Hero";
import CategoryList from "@/components/home/CategoryList";
import CraftPillars from "@/components/home/CraftPillars";

export const metadata = {
  title: 'Nobius Audio - Handcrafted Premium Speakers',
  description: 'Handcrafted in Illinois. Audio Equipment designed for the love of music, built with disciplined engineering and artisanal care.',
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryList />
      <CraftPillars />
    </div>
  );
}
