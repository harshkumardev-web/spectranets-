import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesGrid from './components/ServicesGrid';
import EnterpriseSolutions from './components/EnterpriseSolutions';
import Industries from './components/Industries';
import NetworkInfrastructure from './components/NetworkInfrastructure';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [selectedServicePreload, setSelectedServicePreload] = useState('Managed Internet Leased Line');

  const handleSelectServiceForEnquiry = (serviceTitle) => {
    setSelectedServicePreload(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 90;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenContactDirect = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navOffset = 90;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FF] text-[#17233D] flex flex-col font-sans selection:bg-[#0756D9] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenContact={handleOpenContactDirect} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Why Choose Spectranets */}
        <WhyChooseUs />

        {/* Our Business Services (11 B2B Services Grid) */}
        <ServicesGrid onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* Enterprise Solutions Full-Width Section */}
        <EnterpriseSolutions onOpenContact={handleOpenContactDirect} />

        {/* Industries We Serve */}
        <Industries onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* Enterprise Network Infrastructure */}
        <NetworkInfrastructure />

        {/* About Us */}
        <AboutUs onOpenContact={handleOpenContactDirect} />

        {/* Contact / Lead Generation Section */}
        <ContactSection selectedServicePreload={selectedServicePreload} />
      </main>

      {/* Footer */}
      <Footer onSelectService={handleSelectServiceForEnquiry} />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
