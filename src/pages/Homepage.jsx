import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* THEME TOGGLE */}
      <ThemeToggle />

      {/* BACKGROUND EFFECTS */}
      <StarBackground />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />

      {/* FOOTER */}

    </div>
  );
}
