import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { companyInfo } from '../data/contentData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'services', 'solutions', 'industries', 'infrastructure', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Network Infrastructure', href: '#infrastructure', id: 'infrastructure' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Enterprise Information Bar - Desktop & Laptop */}
      <div className="bg-[#071B49] text-white text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0756D9]/30 border border-[#2684F7]/40 text-[#00D2FF] font-medium text-[11px] tracking-wide shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
              B2B ENTERPRISE SOLUTIONS ONLY
            </span>
            <span className="text-gray-200 text-xs tracking-wide">
              Dedicated Internet Leased Line • SIP Trunking • Managed Wi-Fi, Cloud & Security
            </span>
          </div>

          <div className="flex items-center gap-5 lg:gap-6 shrink-0">
            <a 
              href={companyInfo.callUrl} 
              className="flex items-center gap-1.5 text-gray-200 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#2684F7]" />
              <span>Direct Enterprise Desk: <strong>{companyInfo.contactPhone}</strong></span>
            </a>
            <a 
              href={companyInfo.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-green-400" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Top Header Tagline Bar */}
      <div className="bg-[#051438] text-white text-[11px] py-1.5 px-3 border-b border-white/10 md:hidden flex items-center justify-center text-center">
        <span className="text-gray-200 font-medium leading-tight">
          Dedicated Internet Leased Line • SIP Trunking • Managed Wi-Fi, Cloud & Security
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#071B49]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-white/10' 
          : 'bg-[#071B49] py-3.5 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')} 
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="SPECTRANETS Home"
            >
              <div className="relative flex items-center py-1">
                <img 
                  src="/spectranets-logo-white.png" 
                  alt="SPECTRANETS Enterprise Logo" 
                  className="h-10 sm:h-12 md:h-12 lg:h-13 w-auto max-w-[210px] sm:max-w-[260px] object-contain filter drop-shadow-[0_2px_12px_rgba(0,210,255,0.25)] transition-transform duration-200 group-hover:scale-[1.03]"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to unedited logo if white version not found
                    e.target.src = '/spectranets-logo.png';
                  }}
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#2684F7] rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-[#0756D9] via-[#2684F7] to-[#0756D9] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-md hover:shadow-glow group cursor-pointer"
              >
                <span>Talk to Our Experts</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden gap-2">
              <a
                href={companyInfo.callUrl}
                className="p-2 rounded-lg bg-white/10 text-white sm:hidden"
                aria-label="Call Spectranets"
              >
                <Phone className="w-5 h-5 text-[#2684F7]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/10 text-gray-200 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071B49] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
            {/* Mobile Header with Logo */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <img 
                src="/spectranets-logo-white.png" 
                alt="SPECTRANETS" 
                className="h-9 w-auto max-w-[180px] object-contain filter drop-shadow"
                onError={(e) => {
                  e.target.src = '/spectranets-logo.png';
                }}
              />
              <span className="text-[10px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 border border-blue-400/30">
                B2B ENTERPRISE
              </span>
            </div>

            <div className="p-2.5 mb-3 rounded-lg bg-blue-900/30 border border-blue-500/20 text-xs text-blue-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF] shrink-0" />
              <span className="leading-snug">
                Dedicated Internet Leased Line • SIP Trunking • Managed Wi-Fi, Cloud & Security
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-[#0756D9]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 px-4 rounded-lg bg-gradient-to-r from-[#0756D9] to-[#2684F7] text-white font-bold text-sm shadow-md"
              >
                Talk to Our Experts
              </a>
              <div className="flex gap-2">
                <a
                  href={companyInfo.callUrl}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2684F7]" />
                  Call: {companyInfo.contactPhone}
                </a>
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold hover:bg-green-600/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
