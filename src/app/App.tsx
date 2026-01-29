import { ParticlesBackground } from '@/app/components/ParticlesBackground';
import { Navigation } from '@/app/components/Navigation';
import { LoadingScreen } from '@/app/components/LoadingScreen';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { HeroSection } from '@/app/components/HeroSection';
import { CTASection } from '@/app/components/CTASection';
import { ResumeSection } from '@/app/components/ResumeSection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { ArticlesSection } from '@/app/components/ArticlesSection';
import { CodingProfilesSection } from '@/app/components/CodingProfilesSection';
import { SocialLinksSection } from '@/app/components/SocialLinksSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Loading screen */}
      <LoadingScreen />
      
      {/* Animated particle background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navigation />

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* All sections */}
      <main className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <CTASection />
        </div>
        <ResumeSection />
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <ArticlesSection />
        <CodingProfilesSection />
        <SocialLinksSection />
      </main>
    </div>
  );
}