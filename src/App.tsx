import React from 'react';
import { StudioProvider } from './context/StudioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectConfigurator } from './components/ProjectConfigurator';
import { ProcessSection } from './components/ProcessSection';
import { ClientHub } from './components/ClientHub';
import { ContactSection } from './components/ContactSection';
import { DesignTokensPlayground } from './components/DesignTokensPlayground';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <ProjectConfigurator />
        <ProcessSection />
        <ClientHub />
        <ContactSection />
        <DesignTokensPlayground />
      </main>

      {/* Footer */}
      <Footer />
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
