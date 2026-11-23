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
    <section id="services" className="py-20 sm:py-24 bg-[#F5F8FF] relative overflow-hidden">
      {/* Soft light fields keep the section calm while adding depth. */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[28rem] rounded-full bg-blue-200/30 blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-blue-200 text-[#0756D9] text-[11px] font-extrabold uppercase tracking-[0.16em] shadow-sm shadow-blue-900/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
            B2B Connectivity Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#071B49] tracking-[-0.045em] leading-[1.05]">
            Our Business Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-8 max-w-2xl mx-auto">
            Tailored enterprise networking, carrier-grade internet leased lines, cyber security, and automated cloud communications designed strictly for business organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm font-semibold text-slate-500">
            <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-[#0756D9]" /> Dedicated business support</span>
            <span className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-[#0756D9]" /> Flexible enterprise solutions</span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-10 mx-auto w-fit max-w-full rounded-2xl sm:rounded-full border border-white bg-white/70 p-2 shadow-sm shadow-blue-900/5 backdrop-blur-sm flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" role="group" aria-label="Filter services by category">
          {serviceCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2684F7] focus-visible:ring-offset-2 ${
                activeCategory === cat
                  ? 'bg-[#0756D9] text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 hover:text-[#0756D9] hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 11 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" aria-live="polite">
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Network;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 shadow-[0_8px_30px_-20px_rgba(7,27,73,0.28)] hover:shadow-[0_22px_50px_-25px_rgba(7,86,217,0.28)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {service.badge && <span className="absolute top-0 right-0 rounded-bl-xl bg-[#071B49] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-white/90">{service.badge}</span>}
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 group-hover:from-[#0756D9] group-hover:to-[#2684F7] text-[#0756D9] group-hover:text-white border border-blue-100/80 flex items-center justify-center transition-all duration-300 shadow-sm shadow-blue-900/5">
                      <IconComponent className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="mt-8 px-2.5 py-1 rounded-md bg-blue-50 text-[#0756D9] text-[10px] font-extrabold tracking-[0.08em] uppercase border border-blue-100/80">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#071B49] group-hover:text-[#0756D9] transition-colors leading-snug tracking-tight">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <div className="text-[11px] font-bold text-[#2684F7] mt-2 mb-3 leading-relaxed">
                    {service.tagline}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-6">
                    {service.shortDescription}
                  </p>

                  {/* 2 Bullet Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 mt-0.5 text-[#0756D9] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions: Learn More & Direct Quote */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0756D9] group-hover:text-[#2684F7] hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleEnquirySelection(service.title)}
                    className="px-3.5 py-2 rounded-lg bg-[#F5F8FF] hover:bg-[#0756D9] text-[#0756D9] hover:text-white text-xs font-bold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
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
        <div className="mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#071B49] via-[#0A2E7E] to-[#0756D9] p-7 sm:p-9 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-7 shadow-[0_24px_60px_-30px_rgba(7,27,73,0.65)] border border-white/10">
          <div className="absolute inset-0 bg-dark-grid-pattern opacity-60 pointer-events-none" aria-hidden="true"></div>
          <div className="absolute -right-12 -top-28 w-72 h-72 rounded-full border border-white/10 pointer-events-none" aria-hidden="true"></div>
          <div className="relative space-y-2 max-w-3xl">
            <span className="text-[10px] uppercase font-extrabold tracking-[0.18em] text-[#67E8F9]">
              Strict B2B Guarantee
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Require a Custom Bandwidth or Multi-Branch Sizing?
            </h4>
            <p className="text-sm text-blue-100/85 max-w-2xl leading-6">
              Our enterprise network architects design custom dark fiber links, SD-WAN topologies, and consolidated SIP trunks tailored specifically to your organization's footprint.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleEnquirySelection("Managed Internet Leased Line")}
            className="relative shrink-0 px-6 py-3.5 rounded-xl bg-white text-[#0756D9] font-extrabold text-sm hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0756D9]"
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
