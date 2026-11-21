import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUp, 
  Linkedin, 
  Twitter, 
  Globe, 
  Building2,
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { companyInfo } from '../data/contentData';
import { servicesData } from '../data/servicesData';

export default function Footer({ onSelectService }) {
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

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Business Services', id: 'services' },
    { name: 'Enterprise Solutions', id: 'solutions' },
    { name: 'Industries We Serve', id: 'industries' },
    { name: 'Network Infrastructure', id: 'infrastructure' },
    { name: 'Contact & Enquiries', id: 'contact' },
  ];

  return (
    <footer className="bg-[#071B49] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0756D9]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/spectranets-logo-white.png" 
                alt="SPECTRANETS" 
                className="h-10 sm:h-12 w-auto max-w-[220px] object-contain filter drop-shadow-[0_2px_12px_rgba(0,210,255,0.25)]"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/spectranets-logo.png';
                }}
              />
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              SPECTRANETS is a dedicated B2B Internet Service Provider and enterprise connectivity company delivering high-capacity leased lines, cyber defense, cloud interconnects, and scalable business communications.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-blue-200 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
              <span>
                <strong>100% B2B Focus:</strong> We provide solutions exclusively for enterprises, offices, and commercial organizations. No residential services.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0756D9] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0756D9] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#home"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0756D9] flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-xs sm:text-sm text-gray-300 hover:text-[#00D2FF] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#2684F7]" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Our Business Services
            </h4>
            <ul className="space-y-2">
              {servicesData.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(s.title);
                      scrollTo('contact');
                    }}
                    className="text-xs text-gray-300 hover:text-[#00D2FF] transition-colors flex items-center gap-1.5 cursor-pointer text-left truncate w-full"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#2684F7] shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="text-xs font-bold text-[#00D2FF] hover:underline flex items-center gap-1 mt-2"
                >
                  <span>View All 11 Services</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hotline (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Contact Information
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-gray-400 block font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00D2FF]" />
                  Corporate Office Address
                </span>
                <address className="not-italic text-xs text-gray-200 leading-relaxed pt-0.5">
                  <strong className="text-white block font-semibold">Spectranets</strong>
                  A 64, Sector 63, Noida,<br />
                  Uttar Pradesh – 201301, India
                </address>
                <div className="pt-1">
                  <a
                    href={companyInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00D2FF] hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[11px] text-gray-400 block font-semibold">Corporate Sales & Support</span>
                <a
                  href={companyInfo.callUrl}
                  className="text-lg font-extrabold text-[#00D2FF] hover:underline flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#2684F7]" />
                  <span>{companyInfo.contactPhone}</span>
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={companyInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-green-600/30 hover:bg-green-600/40 border border-green-500/40 text-green-300 text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-gray-400 space-y-1">
                <div>• 24/7/365 NOC Network Monitoring</div>
                <div>• Enterprise Escalation Support Desk</div>
                <div>• Dedicated SLA Operations</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Terms Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} <strong>SPECTRANETS</strong>. All Rights Reserved. Enterprise Internet & Business Connectivity Solutions.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">B2B Enterprise Only</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#2684F7]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
