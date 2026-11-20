import React, { useState } from 'react';
import { 
  Layers, 
  Zap, 
  Lock, 
  RefreshCw, 
  Maximize, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Server 
} from 'lucide-react';
import { enterpriseSolutionsData } from '../data/contentData';

const iconMap = {
  Layers: Layers,
  Zap: Zap,
  Lock: Lock,
  RefreshCw: RefreshCw,
  Maximize: Maximize,
  MessageSquare: MessageSquare,
};

export default function EnterpriseSolutions({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F8FF]/50 pointer-events-none hidden lg:block"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FF] border border-[#2684F7]/30 text-[#0756D9] text-xs font-bold uppercase tracking-wider">
            Enterprise Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] tracking-tight">
            Connectivity Solutions That Drive Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered from the ground up for high reliability, data protection, and seamless multi-branch enterprise collaboration.
          </p>
        </div>

        {/* 6 Solution Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseSolutionsData.map((sol, index) => {
            const IconComponent = iconMap[sol.icon] || Layers;
            return (
              <div
                key={sol.id}
                className="group relative bg-[#F5F8FF] hover:bg-white rounded-2xl p-8 border border-slate-200/90 hover:border-[#0756D9]/40 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-[#0756D9] text-[#0756D9] group-hover:text-white border border-blue-100 flex items-center justify-center shadow-sm transition-all duration-300 mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#071B49] group-hover:text-[#0756D9] transition-colors">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="mt-6 pt-5 border-t border-slate-200/70 space-y-2.5">
                    {sol.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0756D9] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    PILLAR 0{index + 1} // ENTERPRISE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Architecture Blueprint Visual Banner */}
        <div className="mt-16 rounded-3xl bg-[#071B49] text-white p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#0756D9]/30 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#00D2FF] text-xs font-mono border border-blue-400/30">
                <Server className="w-3.5 h-3.5" />
                ENTERPRISE REDUNDANCY SCHEME
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Zero-Single-Point-of-Failure Network Topology
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                Spectranets delivers dedicated active-active or active-standby circuits terminating directly into enterprise edge firewalls, ensuring uninterrupted business operations even during metropolitan civic fiber cuts.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0756D9] to-[#2684F7] hover:shadow-glow text-white font-bold text-sm transition-all cursor-pointer"
              >
                Schedule Technical Consultation
              </a>
              <div className="text-center text-xs text-gray-400">
                NOC Engineer Callback within 30 Minutes
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
