import React from 'react';
import { 
  ShieldAlert, 
  Network, 
  Headphones, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { whyChooseData } from '../data/contentData';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Network: Network,
  Headphones: Headphones,
  TrendingUp: TrendingUp,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FF] border border-[#2684F7]/30 text-[#0756D9] text-xs font-bold uppercase tracking-wider">
            Enterprise Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] tracking-tight">
            Why Modern Enterprises Choose <span className="text-[#0756D9]">SPECTRANETS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We deliver telecom-grade connectivity engineered exclusively for business reliability, security, and continuous productivity without retail compromises.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseData.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Network;
            return (
              <div
                key={item.id}
                className="group relative bg-[#F5F8FF] hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-[#2684F7]/40 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Icon & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#0756D9] text-[#0756D9] group-hover:text-white border border-blue-100 flex items-center justify-center shadow-sm group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#2684F7]/40 transition-colors font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#0756D9] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-6 pt-5 border-t border-slate-200/60 space-y-2">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0756D9] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom subtle indicator line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#0756D9] group-hover:to-[#2684F7] rounded-t-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
