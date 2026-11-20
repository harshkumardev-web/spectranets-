import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/contentData';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-white text-[#071B49] hover:bg-[#0756D9] hover:text-white border border-slate-200 shadow-xl transition-all duration-300 transform hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Direct Call Button */}
      <a
        href={companyInfo.callUrl}
        className="pointer-events-auto group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#0756D9] text-white shadow-xl hover:shadow-glow transition-all duration-300 transform hover:scale-105"
        aria-label="Direct Phone Hotline"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="hidden sm:inline text-xs font-bold font-mono">
          {companyInfo.contactPhone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={companyInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-bold">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
}
