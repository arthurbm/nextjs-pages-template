import { Inter } from "next/font/google";
import { BlogLayout } from "@/components/Article";
import { Header, HeroSection } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-indigo-950 px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="mb-5 mt-3.5 flex w-full max-w-[1171px] flex-col max-md:max-w-full">
        <Header />
        <main className="mt-16 px-px max-md:mt-10 max-md:max-w-full">
          <HeroSection />
        </main>
      </div>
      <BlogLayout />
    </div>
  );
}
