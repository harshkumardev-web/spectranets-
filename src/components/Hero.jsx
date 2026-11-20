import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Server, 
  Cpu, 
  Wifi, 
  CheckCircle2, 
  PhoneCall, 
  Layers, 
  Globe2 
} from 'lucide-react';
import { companyInfo } from '../data/contentData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 bg-[#071B49] text-white overflow-hidden">
      {/* Background Grid and Glowing Nodes */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Dynamic Background Light Cones / Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0756D9]/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-[32rem] h-[32rem] bg-[#2684F7]/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Enterprise Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2684F7]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                B2B Enterprise Internet & Technology Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Powering Businesses with <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2684F7] via-[#00D2FF] to-white">
                Next-Generation
              </span> Connectivity
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Reliable, secure and high-performance internet and network solutions designed to keep your business connected, productive and future-ready.
            </p>

            {/* Enterprise Value Metrics Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-gray-400 font-medium">Contention Ratio</div>
                <div className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"></span>
                  1:1 Dedicated
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-gray-400 font-medium">Uptime Guarantee</div>
                <div className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  99.5%+ SLA
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-xs text-gray-400 font-medium">Network Ops</div>
                <div className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2684F7]"></span>
                  24/7 Managed NOC
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#0756D9] to-[#2684F7] hover:from-[#064ac0] hover:to-[#1a76e8] shadow-lg shadow-blue-900/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>Contact Our Team</span>
              </button>
            </div>

            {/* Verified Enterprise Assurance */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                Zero Consumer Contention
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                Direct Enterprise Peering
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                Dedicated Account Manager
              </span>
            </div>

          </div>

          {/* Right Column: Visual Business Networking & Infrastructure Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#2684F7]/40 via-white/10 to-transparent p-1 shadow-2xl backdrop-blur-xl">
                
                {/* Main Visual Terminal / Network Rack Display */}
                <div className="rounded-2xl bg-[#0B215E] border border-blue-400/20 p-5 sm:p-6 overflow-hidden relative">
                  
                  {/* Top Bar with Server Indicators */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                    </div>
                    <div className="text-[11px] font-mono tracking-widest text-[#00D2FF] uppercase flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      SPECTRANETS CORE NOC // ONLINE
                    </div>
                  </div>

                  {/* Visual Enterprise Core Router / Fiber Interface Simulation */}
                  <div className="py-5 space-y-4">
                    
                    {/* Primary Node Feed */}
                    <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-400/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0756D9]/40 border border-[#2684F7]/50 flex items-center justify-center text-[#00D2FF]">
                          <Server className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            Tier-1 Backbone Carrier Link
                            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">ACTIVE</span>
                          </div>
                          <div className="text-[11px] text-gray-400 font-mono">10 Gbps Symmetrical • DWDM Core</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold text-emerald-400">0.02% Jitter</div>
                        <div className="text-[10px] text-gray-400 font-mono">0% Loss</div>
                      </div>
                    </div>

                    {/* Fiber Optic Path Simulator with Animated Pulse */}
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/80 via-blue-900/40 to-blue-950/80 border border-white/10 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                          <Activity className="w-4 h-4 text-[#00D2FF]" />
                          Fiber Path Redundancy (Ring Topology)
                        </span>
                        <span className="text-[11px] font-mono text-[#00D2FF]">Sub-10ms Routing</span>
                      </div>
                      
                      {/* Pulse Stream Visualization */}
                      <div className="w-full bg-blue-950 h-2 rounded-full overflow-hidden relative">
                        <div className="h-full bg-gradient-to-r from-[#0756D9] via-[#00D2FF] to-[#2684F7] w-full animate-pulse"></div>
                      </div>

                      <div className="mt-2 flex justify-between text-[10px] text-gray-400 font-mono">
                        <span>Route A: Optical Primary</span>
                        <span className="text-emerald-400">Route B: Hot-Standby</span>
                      </div>
                    </div>

                    {/* Integrated Enterprise Services Grid Mini */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-blue-400/30 transition-colors">
                        <div className="text-[11px] text-gray-300 font-semibold flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                          DDoS Mitigation
                        </div>
                        <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Automated Scrubbing</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-blue-400/30 transition-colors">
                        <div className="text-[11px] text-gray-300 font-semibold flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-[#2684F7]" />
                          Cloud On-Ramps
                        </div>
                        <div className="text-[10px] text-gray-300 font-mono mt-0.5">AWS • Azure • GCP</div>
                      </div>
                    </div>

                  </div>

                  {/* Terminal Footer with Enterprise Hotline */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-[11px] text-gray-300">Corporate Consultation Desk:</span>
                    </div>
                    <a
                      href={companyInfo.callUrl}
                      className="text-xs font-bold text-[#00D2FF] hover:underline flex items-center gap-1"
                    >
                      <PhoneCall className="w-3 h-3" />
                      {companyInfo.contactPhone}
                    </a>
                  </div>

                </div>

              </div>

              {/* Floating Technology Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-[#071B49] to-[#0A266E] border border-blue-400/30 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0756D9] flex items-center justify-center text-white shadow-glow">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Pure Dedicated Pipe</div>
                  <div className="text-[11px] text-blue-200">Zero consumer noise</div>
                </div>
              </div>

              {/* Floating Technology Badge 2 */}
              <div className="absolute -top-6 -right-4 bg-gradient-to-tr from-[#071B49] to-[#0A266E] border border-blue-400/30 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">SLA-Backed</div>
                  <div className="text-[11px] text-emerald-300">Guaranteed Packet Delivery</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
