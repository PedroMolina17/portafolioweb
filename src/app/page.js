import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";
import Jobs from "@/components/Jobs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4   ">
        <Menu />
        <AchievementsSection />
        <AboutSection />
        <Jobs />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
