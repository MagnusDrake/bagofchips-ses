import React from 'react';
import { StudioProvider } from './context/StudioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectConfigurator } from './components/ProjectConfigurator';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { ClientHub } from './components/ClientHub';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <ProjectConfigurator />
        <PortfolioSection />
        <ProcessSection />
        <ClientHub />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Theme Flavor Switcher for immediate visitor interaction */}
      <ThemeSwitcher variant="floating" />
    </div>
  );
};

export default function App() {
  return (
    <StudioProvider>
      <AppContent />
    </StudioProvider>
  );
}
