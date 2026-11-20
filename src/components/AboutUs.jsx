import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Network, 
  CheckCircle2, 
  Users, 
  Target, 
  Cpu, 
  PhoneCall 
} from 'lucide-react';
import { companyInfo } from '../data/contentData';

export default function AboutUs({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8FF] border border-[#2684F7]/30 text-[#0756D9] text-xs font-bold uppercase tracking-wider">
              About Spectranets
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] tracking-tight leading-tight">
              Building Stronger Connections for Modern Businesses
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                At <strong className="text-[#071B49]">SPECTRANETS</strong>, our mission is clear and focused: providing dedicated, high-performance internet, network infrastructure, and enterprise communication solutions exclusively tailored for modern business organizations.
              </p>
              <p>
                We recognize that modern enterprises cannot operate on residential, shared, or congested broadband connections. Mission-critical business applications—ranging from core ERPs, cloud workloads, and continuous data replication to high-concurrency VoIP call centers—demand dedicated 1:1 symmetric throughput, robust network security, and proactive technical support.
              </p>
              <p>
                By engineering pure fiber optic leased lines, carrier-grade SIP trunking, advanced cyber security, and automated cloud communications, Spectranets enables corporate companies, technology firms, and commercial facilities to maintain uninterrupted productivity and future-ready digital resilience.
              </p>
            </div>

            {/* 3 Core Operating Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#F5F8FF] border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-[#0756D9] text-white flex items-center justify-center mb-3 shadow-sm">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#071B49]">B2B Exclusivity</h4>
                <p className="text-xs text-slate-500 mt-1">
                  100% focused on commercial and enterprise networking with zero retail contention.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F8FF] border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-[#0756D9] text-white flex items-center justify-center mb-3 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#071B49]">Enterprise SLA</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Guaranteed uptime parameters backed by active 24/7 NOC monitoring and rapid response.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F8FF] border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-[#0756D9] text-white flex items-center justify-center mb-3 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#071B49]">Scalable Architecture</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Flexible fiber pipes that seamlessly expand bandwidth as organizational needs grow.
                </p>
              </div>
            </div>

            {/* Contact CTA in About */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0756D9] to-[#2684F7] text-white font-bold text-sm shadow-md hover:shadow-glow transition-all cursor-pointer"
              >
                <span>Partner with Spectranets</span>
              </a>

              <a
                href={companyInfo.callUrl}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-[#071B49] hover:text-[#0756D9] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#2684F7]" />
                <span>Call {companyInfo.contactPhone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Architecture & Enterprise Guarantee Box */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer decorative card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#071B49] to-[#0A266E] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-blue-900/40">
                <div className="absolute inset-0 bg-dark-grid-pattern opacity-20 pointer-events-none"></div>

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#00D2FF] text-xs font-mono border border-blue-400/30">
                    <Target className="w-3.5 h-3.5" />
                    OUR COMMITMENT
                  </div>

                  <h3 className="text-2xl font-extrabold text-white leading-snug">
                    Dedicated Network Engineering for Business Continuity
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    We treat business connectivity as essential enterprise infrastructure. Whether deploying multi-gigabit leased lines for a software development park or setting up enterprise SIP trunks for a national support team, Spectranets delivers carrier-class reliability.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200">
                        Dedicated Technical Account Support
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200">
                        Proactive Link Latency & Packet Monitoring
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00D2FF] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200">
                        Custom Enterprise Redundancy & Dual Homing
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-blue-200 font-mono">
                    SPECTRANETS // B2B CONNECTIVITY SOLUTIONS
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
