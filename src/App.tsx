import React, { useState } from 'react';
import { ScrollVideoBackground } from './components/ScrollVideoBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpeedRoiAudit } from './components/SpeedRoiAudit';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { CompetitorComparison } from './components/CompetitorComparison';
import { Process } from './components/Process';
import { LiveDemoSimulator } from './components/LiveDemoSimulator';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { AboutFounder } from './components/AboutFounder';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PageHeader } from './components/PageHeader';
import { HomeNavigationPortal } from './components/HomeNavigationPortal';
import { Pricing } from './components/Pricing';
import { ProjectItem, ActivePage } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('Website Design & Development');

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  const handleSelectTier = (tierName: string) => {
    setPreselectedService(`Pricing Tier: ${tierName}`);
    setIsQuoteModalOpen(true);
  };

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-transparent text-teal-50 selection:bg-teal-400 selection:text-black font-sans flex flex-col justify-between">
      {/* Background Video Layer */}
      <ScrollVideoBackground />

      <div className="relative z-10">
        {/* Sticky Header Navigation */}
        <Navbar
          activePage={activePage}
          onPageChange={handlePageChange}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 1. HOME DEDICATED PAGE */}
        {activePage === 'home' && (
          <main>
            <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            <HomeNavigationPortal onPageChange={handlePageChange} />
            <SpeedRoiAudit />
            <Services
              onSelectService={handleSelectService}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <Portfolio
              onOpenProjectDetail={(project) => setSelectedProjectForModal(project)}
            />
            <Pricing
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onSelectTier={handleSelectTier}
            />
            <Testimonials />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 2. SPEED AUDIT DEDICATED PAGE */}
        {activePage === 'audit-tool' && (
          <main>
            <PageHeader
              badge="Speed & ROI Audit"
              title="Interactive Website Speed & ROI Calculator"
              subtitle="Analyze your existing website performance, calculate lost revenues from slow loads, and receive actionable Core Web Vitals optimization tips."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <SpeedRoiAudit />
            <FAQ />
            <ContactSection preselectedService="Speed & ROI Optimization Audit" />
          </main>
        )}

        {/* 3. SERVICES DEDICATED PAGE */}
        {activePage === 'services' && (
          <main>
            <PageHeader
              badge="Core Digital Services"
              title="Full-Suite Web Design & Growth Solutions"
              subtitle="From hand-coded React websites and custom e-commerce setups to Google Maps local SEO ranking and speed optimization."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <Services
              onSelectService={handleSelectService}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <LiveDemoSimulator />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 4. WHY US DEDICATED PAGE */}
        {activePage === 'why-us' && (
          <main>
            <PageHeader
              badge="Why Choose Nagrotech"
              title="Built Different: Sub-Second Speed & Founder Accountability"
              subtitle="Discover why ambitious businesses in Dhanbad and pan-India switch to Nagrotech for zero-bloat, high-converting digital web solutions."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <WhyUs />
            <Testimonials />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 5. COMPARE US DEDICATED PAGE */}
        {activePage === 'compare-us' && (
          <main>
            <PageHeader
              badge="Competitor Comparison"
              title="How Nagrotech Outperforms Traditional Options"
              subtitle="A side-by-side transparent matrix comparing Nagrotech against traditional agencies, budget freelancers, and slow WordPress page builders."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <CompetitorComparison />
            <WhyUs />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 6. PROCESS DEDICATED PAGE */}
        {activePage === 'process' && (
          <main>
            <PageHeader
              badge="Our 4-Step Process"
              title="From Initial Discovery to 7-Day Fast Launch"
              subtitle="Learn about our structured, transparent 4-step web development workflow, deliverable milestones, and live preview simulator."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <Process />
            <LiveDemoSimulator />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 7. WORK & PORTFOLIO DEDICATED PAGE */}
        {activePage === 'work' && (
          <main>
            <PageHeader
              badge="Portfolio & Case Studies"
              title="Proven Results & Featured Client Projects"
              subtitle="Explore real-world client transformations, sub-second speed benchmarks, before-and-after showcases, and interactive demo previews."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <BeforeAfterShowcase />
            <Portfolio
              onOpenProjectDetail={(project) => setSelectedProjectForModal(project)}
            />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 9. ABOUT DEDICATED PAGE */}
        {activePage === 'about' && (
          <main>
            <PageHeader
              badge="About Founder & Agency"
              title="Founder-Led Engineering Excellence from Dhanbad"
              subtitle="Meet Raju Naha and discover the mission, regional commitment, and technical passion driving Nagrotech Digital Services."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <AboutFounder />
            <Testimonials />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}

        {/* 10. CONTACT DEDICATED PAGE */}
        {activePage === 'contact' && (
          <main>
            <PageHeader
              badge="Contact Head Office"
              title="Get in Touch with Nagrotech Dhanbad"
              subtitle="Ready to transform your online presence? Send us a message, request an instant quote, or chat directly on WhatsApp."
              activePage={activePage}
              onPageChange={handlePageChange}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <ContactSection preselectedService={preselectedService} />
            <FAQ />
          </main>
        )}

        {/* 11. FULL CONTINUOUS LANDING PAGE */}
        {activePage === 'all' && (
          <main>
            <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
            <SpeedRoiAudit />
            <Services
              onSelectService={handleSelectService}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
            />
            <LiveDemoSimulator />
            <WhyUs />
            <CompetitorComparison />
            <Process />
            <BeforeAfterShowcase />
            <Portfolio
              onOpenProjectDetail={(project) => setSelectedProjectForModal(project)}
            />
            <Testimonials />
            <FAQ />
            <AboutFounder />
            <ContactSection preselectedService={preselectedService} />
          </main>
        )}
      </div>

      {/* Global Footer */}
      <Footer onPageChange={handlePageChange} />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Price Estimator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Portfolio Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProjectForModal}
        onClose={() => setSelectedProjectForModal(null)}
      />
    </div>
  );
}
