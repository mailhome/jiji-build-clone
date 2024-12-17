
import { Features } from "@/components/features/features";
import { MainFeatures } from "@/components/features/main-features";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Features />
    </main>
  );
}
