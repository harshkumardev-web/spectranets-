import React, { useState } from 'react';
import { 
  Network, 
  PhoneCall, 
  ShieldCheck, 
  Cloud, 
  Cpu, 
  Zap, 
  Building2, 
  MessageSquare, 
  Send, 
  Headphones, 
  ArrowRight, 
  Check, 
  SlidersHorizontal 
} from 'lucide-react';
import { servicesData, serviceCategories } from '../data/servicesData';
import ServiceDetailModal from './ServiceDetailModal';

const iconMap = {
  Network: Network,
  PhoneCall: PhoneCall,
  ShieldCheck: ShieldCheck,
  Cloud: Cloud,
  Cpu: Cpu,
  Zap: Zap,
  Building2: Building2,
  MessageSquare: MessageSquare,
  Send: Send,
  Headphones: Headphones,
};

export default function ServicesGrid({ onSelectServiceForEnquiry }) {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = activeCategory === "All Services" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  const handleOpenDetail = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleEnquirySelection = (serviceTitle) => {
    onSelectServiceForEnquiry(serviceTitle);
  };

  return (
    <section id="services" className="py-24 bg-[#F5F8FF] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#2684F7]/30 text-[#0756D9] text-xs font-bold uppercase tracking-wider shadow-sm">
            B2B Connectivity Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] tracking-tight">
            Our Business Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tailored enterprise networking, carrier-grade internet leased lines, cyber security, and automated cloud communications designed strictly for business organizations.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0756D9] text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-[#0756D9] border border-slate-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 11 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Network;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#2684F7]/50 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#F5F8FF] group-hover:bg-[#0756D9] text-[#0756D9] group-hover:text-white border border-blue-100 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#0756D9] text-[11px] font-bold tracking-wide uppercase border border-blue-100/80">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#0756D9] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <div className="text-xs font-semibold text-[#2684F7] mt-1 mb-3">
                    {service.tagline}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* 2 Bullet Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#0756D9] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions: Learn More & Direct Quote */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0756D9] group-hover:text-[#2684F7] hover:underline cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEnquirySelection(service.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#F5F8FF] hover:bg-[#0756D9] text-[#0756D9] hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>

                {/* Subtle bottom indicator */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-transparent group-hover:bg-[#0756D9] rounded-t-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services: Enterprise SLA Commitment */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#071B49] via-[#0A2E7E] to-[#071B49] p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#00D2FF]">
              Strict B2B Guarantee
            </span>
            <h4 className="text-xl sm:text-2xl font-bold">
              Require a Custom Bandwidth or Multi-Branch Sizing?
            </h4>
            <p className="text-sm text-gray-300 max-w-2xl">
              Our enterprise network architects design custom dark fiber links, SD-WAN topologies, and consolidated SIP trunks tailored specifically to your organization's footprint.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleEnquirySelection("Managed Internet Leased Line")}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0756D9] to-[#2684F7] text-white font-bold text-sm hover:shadow-glow transition-all cursor-pointer whitespace-nowrap"
          >
            Request Enterprise Assessment
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectForEnquiry={handleEnquirySelection}
      />
    </section>
  );
}
