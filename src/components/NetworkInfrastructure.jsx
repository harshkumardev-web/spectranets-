import React from 'react';
import { 
  Cable, 
  GitFork, 
  ShieldCheck, 
  Server, 
  Activity, 
  CheckCircle2, 
  Radio, 
  Cpu, 
  Wifi, 
  Layers 
} from 'lucide-react';
import { networkInfrastructureData } from '../data/contentData';

const iconMap = {
  Cable: Cable,
  GitFork: GitFork,
  ShieldCheck: ShieldCheck,
  Server: Server,
  Activity: Activity,
};

export default function NetworkInfrastructure() {
  return (
    <section id="infrastructure" className="py-24 bg-[#071B49] text-white relative overflow-hidden">
      {/* Background Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0756D9]/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#2684F7]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00D2FF] text-xs font-semibold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            Core Backbone
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Network Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Built on carrier-grade underground single-mode optical fiber rings, self-healing routing engines, and 24/7 centralized Network Operations Center management.
          </p>
        </div>

        {/* 5 Network Infrastructure Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {networkInfrastructureData.map((infra, index) => {
            const IconComponent = iconMap[infra.icon] || Server;
            return (
              <div
                key={infra.id}
                className="group relative rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2684F7]/60 p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-[#0756D9]/40 border border-[#2684F7]/50 text-[#00D2FF] flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-blue-200 border border-white/10">
                      {infra.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                    {infra.title}
                  </h3>

                  {/* Short description */}
                  <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {infra.short}
                  </p>

                  {/* Detailed specs list */}
                  <ul className="mt-5 pt-4 border-t border-white/10 space-y-2">
                    {infra.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 text-[10px] text-gray-400 font-mono">
                  INFRA-NODE // {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}

          {/* 6th Card: Interactive Network Architecture Schematic */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0B2361] to-[#071B49] border border-blue-400/30 p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                <Cpu className="w-4 h-4" />
                Network Architecture Schematic
              </div>

              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-mono">Tier-1 Internet Exchange Peering</span>
                  <span className="text-emerald-400 font-mono">Direct Ring</span>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-mono">Metro DWDM Transport Grid</span>
                  <span className="text-emerald-400 font-mono">Sub-10ms</span>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-mono">Enterprise Edge CPE & Firewalls</span>
                  <span className="text-[#00D2FF] font-mono">Managed</span>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-950/80 border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-mono">24/7/365 NOC Monitoring</span>
                  <span className="text-emerald-400 font-mono">Active</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-blue-200">Carrier-Grade Reliability</span>
              <span className="text-xs font-bold text-white font-mono">99.5%+ SLA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
