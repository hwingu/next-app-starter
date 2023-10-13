import Image from "next/image";
import { getAuthSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import PopularSection from "@/components/PopularSection";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <div className="px-4 sm:px-6 lg:px-8">
        <header className="relative">
          <NavBar />
        </header>
        <PopularSection />
      </div>
    </div>
  );
}
