import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Sliders, 
  Layers, 
  Building 
} from 'lucide-react';
import { companyInfo } from '../data/contentData';

export default function ServiceDetailModal({ service, isOpen, onClose, onSelectForEnquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const handleEnquireClick = () => {
    onSelectForEnquiry(service.title);
    onClose();
  };

  const whatsappEnquiryUrl = `https://wa.me/919891406594?text=Hello%20Spectranets,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}%20for%20our%20business.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#071B49]/80 backdrop-blur-md transition-opacity duration-300">
      
      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 my-8"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Modal Header */}
        <div className="bg-[#071B49] text-white p-6 sm:p-8 relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none"></div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-[#0756D9] text-white text-xs font-semibold uppercase tracking-wider">
                {service.category}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40 text-xs font-mono">
                {service.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-blue-200">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-8">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold text-[#0756D9] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              Service Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Technical Specifications */}
          {service.technicalSpecs && (
            <div>
              <h4 className="text-xs font-bold text-[#0756D9] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                Enterprise Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F5F8FF] border border-blue-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">{spec.label}</span>
                    <span className="text-xs font-bold text-[#071B49] text-right font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Enterprise Features */}
          <div>
            <h4 className="text-xs font-bold text-[#0756D9] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Core Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#0756D9] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Use Cases */}
          {service.targetUseCases && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-[#2684F7]" />
                Recommended For
              </h4>
              <ul className="space-y-1.5">
                {service.targetUseCases.map((useCase, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0756D9]"></span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer with CTAs */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Direct Enterprise Support: </span>
            <strong className="text-[#071B49]">{companyInfo.contactPhone}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-green-500/40 text-green-700 bg-green-50 hover:bg-green-100 text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-green-600" />
              <span>WhatsApp Query</span>
            </a>

            <button
              type="button"
              onClick={handleEnquireClick}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0756D9] to-[#2684F7] text-white text-xs font-bold hover:shadow-glow transition-all cursor-pointer"
            >
              <span>Enquire for this Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
