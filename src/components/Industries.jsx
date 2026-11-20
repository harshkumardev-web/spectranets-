import React from 'react';
import { 
  Cpu, 
  Building, 
  Landmark, 
  Activity, 
  GraduationCap, 
  Factory, 
  Hotel, 
  Briefcase, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { industriesData } from '../data/contentData';

const iconMap = {
  Cpu: Cpu,
  Building: Building,
  Landmark: Landmark,
  Activity: Activity,
  GraduationCap: GraduationCap,
  Factory: Factory,
  Hotel: Hotel,
  Briefcase: Briefcase,
};

export default function Industries({ onSelectServiceForEnquiry }) {
  return (
    <section id="industries" className="py-24 bg-[#F5F8FF] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#2684F7]/30 text-[#0756D9] text-xs font-bold uppercase tracking-wider shadow-sm">
            Sector Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-frequency financial platforms to multi-tenant IT parks, our connectivity solutions are built to fulfill the compliance, latency, and uptime requirements of every vertical.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => {
            const IconComponent = iconMap[ind.icon] || Briefcase;
            return (
              <div
                key={ind.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2684F7]/60 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-xl bg-[#F5F8FF] group-hover:bg-[#0756D9] text-[#0756D9] group-hover:text-white border border-blue-100 flex items-center justify-center shadow-sm transition-all duration-300 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-lg font-bold text-[#071B49] group-hover:text-[#0756D9] transition-colors leading-snug">
                    {ind.name}
                  </h3>

                  {/* Tagline */}
                  <div className="text-xs font-semibold text-[#2684F7] mt-1 mb-3">
                    {ind.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Capabilities Chips */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5">
                  {ind.keyCapabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0756D9]"></span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom subtle indicator */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-transparent group-hover:bg-[#0756D9] rounded-t-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Have specialized network architecture or regulatory compliance needs for your industry?
          </p>
          <button
            type="button"
            onClick={() => onSelectServiceForEnquiry("Managed Internet Leased Line")}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#0756D9] hover:text-[#053d9e] hover:underline cursor-pointer"
          >
            <span>Consult with our Enterprise Industry Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
