import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  Building2, 
  Mail, 
  User, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';
import { companyInfo } from '../data/contentData';
import { servicesData } from '../data/servicesData';

export default function ContactSection({ selectedServicePreload }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    contactNumber: '',
    requiredService: 'Managed Internet Leased Line',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update selected service if preloaded from "Learn More" or "Enquire Now"
  useEffect(() => {
    if (selectedServicePreload) {
      setFormData(prev => ({
        ...prev,
        requiredService: selectedServicePreload
      }));
    }
  }, [selectedServicePreload]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim()) errs.companyName = "Company / Organization name is required";
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = "Business email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      errs.businessEmail = "Please enter a valid business email";
    }
    if (!formData.contactNumber.trim()) {
      errs.contactNumber = "Contact number is required";
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.contactNumber.trim())) {
      errs.contactNumber = "Please enter a valid phone number";
    }
    if (!formData.city.trim()) errs.city = "City is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate enterprise lead submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Spectranets Team,%0A%0A*New Business Connectivity Enquiry:*%0A• *Name:* ${encodeURIComponent(formData.fullName)}%0A• *Company:* ${encodeURIComponent(formData.companyName)}%0A• *Service:* ${encodeURIComponent(formData.requiredService)}%0A• *Phone:* ${encodeURIComponent(formData.contactNumber)}%0A• *Email:* ${encodeURIComponent(formData.businessEmail)}%0A• *City:* ${encodeURIComponent(formData.city)}%0A• *Requirements:* ${encodeURIComponent(formData.message || 'Custom enterprise connectivity enquiry.')}`;
    window.open(`https://wa.me/919891406594?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      contactNumber: '',
      requiredService: 'Managed Internet Leased Line',
      city: '',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F8FF] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#2684F7]/30 text-[#0756D9] text-xs font-bold uppercase tracking-wider shadow-sm">
            B2B Enterprise Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] tracking-tight">
            Let's Build a Stronger Connection for Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Connect directly with our senior network solutions team. We review your bandwidth requirements, site feasibility, and propose customized enterprise connectivity architecture.
          </p>
        </div>

        {/* Main Grid: Contact Cards & Enquiry Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info, Hotlines, WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & Hotline Card */}
            <div className="rounded-2xl bg-[#071B49] text-white p-7 sm:p-8 shadow-xl border border-blue-900/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0756D9]/30 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-4 relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#00D2FF] text-xs font-mono border border-blue-400/30">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED DIRECT DESK
                </span>

                <h3 className="text-2xl font-bold text-white">
                  Speak Directly with Our Corporate Team
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Call our enterprise business desk for immediate site survey assessment, technical queries, or multi-location bandwidth sizing.
                </p>

                <div className="pt-2">
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Direct Contact Number
                  </div>
                  <a
                    href={companyInfo.callUrl}
                    className="text-3xl sm:text-4xl font-extrabold text-[#00D2FF] hover:text-white transition-colors tracking-tight flex items-center gap-3 mt-1"
                  >
                    <Phone className="w-8 h-8 text-[#2684F7]" />
                    <span>{companyInfo.contactPhone}</span>
                  </a>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={companyInfo.callUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0756D9] to-[#2684F7] text-white font-bold text-sm shadow-md hover:shadow-glow transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={companyInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Official Corporate Office Address Card */}
            <div className="rounded-2xl bg-white p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0756D9] text-[11px] font-bold tracking-wide uppercase border border-blue-100">
                  <Building2 className="w-3.5 h-3.5 text-[#0756D9]" />
                  Corporate Headquarters
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  DELHI NCR / NOIDA
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0756D9] shrink-0" />
                  <span>Official Business Address</span>
                </h4>
                
                <address className="mt-2.5 text-sm text-slate-700 not-italic leading-relaxed pl-7 space-y-1">
                  <strong className="text-[#071B49] block text-base font-bold">Spectranets</strong>
                  <div className="font-medium text-slate-800">A 64, Sector 63, Noida, Uttar Pradesh – 201301, India</div>
                </address>
              </div>

              <div className="pt-2 pl-7">
                <a
                  href={companyInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5F8FF] hover:bg-[#0756D9] text-[#0756D9] hover:text-white border border-blue-200 hover:border-[#0756D9] text-xs font-bold transition-all duration-200 shadow-sm group"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#2684F7] group-hover:text-white transition-colors" />
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Response Time & Support Assurance Card */}
            <div className="rounded-2xl bg-white p-7 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0756D9]" />
                Dedicated B2B Support Commitment
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0756D9] shrink-0 mt-0.5" />
                  <span>24/7/365 Centralized Network Operations Center (NOC)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0756D9] shrink-0 mt-0.5" />
                  <span>Rapid site feasibility and technical evaluation within 24 hours</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0756D9] shrink-0 mt-0.5" />
                  <span>Dedicated corporate relationship manager assigned to every business</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0756D9] shrink-0 mt-0.5" />
                  <span>Strict non-residential, non-retail B2B service quality guarantees</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-8 sm:p-10 border border-slate-200/90 shadow-card">
              
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071B49]">
                      Business Connectivity Enquiry Form
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the details below to receive a custom proposal and technical feasibility report.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                            errors.fullName 
                              ? 'border-red-400 bg-red-50/30 focus:border-red-500' 
                              : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0756D9]'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Organization <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Apex Technologies Pvt Ltd"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                            errors.companyName 
                              ? 'border-red-400 bg-red-50/30 focus:border-red-500' 
                              : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0756D9]'
                          }`}
                        />
                      </div>
                      {errors.companyName && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Business Email & Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                            errors.businessEmail 
                              ? 'border-red-400 bg-red-50/30 focus:border-red-500' 
                              : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0756D9]'
                          }`}
                        />
                      </div>
                      {errors.businessEmail && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.businessEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="e.g. 9891406594"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                            errors.contactNumber 
                              ? 'border-red-400 bg-red-50/30 focus:border-red-500' 
                              : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0756D9]'
                          }`}
                        />
                      </div>
                      {errors.contactNumber && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.contactNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Required Service (Dropdown with all 11 services) & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Required Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="requiredService"
                        value={formData.requiredService}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm text-slate-800 focus:outline-none focus:border-[#0756D9] transition-colors cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Location <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Delhi NCR / Gurugram / Noida"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-colors ${
                            errors.city 
                              ? 'border-red-400 bg-red-50/30 focus:border-red-500' 
                              : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#0756D9]'
                          }`}
                        />
                      </div>
                      {errors.city && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Message / Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements / Bandwidth Need (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention expected bandwidth, number of users, branch offices, or specific connectivity goals..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm text-slate-800 focus:outline-none focus:border-[#0756D9] transition-colors"
                    />
                  </div>

                  {/* Submission Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0756D9] via-[#2684F7] to-[#0756D9] bg-[length:200%_auto] hover:bg-right text-white font-bold text-base shadow-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Business Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-400 mt-2">
                      Strictly B2B Services • No retail or residential inquiries • Response within 30 minutes
                    </p>
                  </div>

                </form>
              ) : (
                /* Success State Confirmation */
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#071B49]">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#071B49]">{formData.fullName}</strong>. Our enterprise connectivity solutions team has logged your enquiry for <strong className="text-[#0756D9]">{formData.requiredService}</strong> for <strong className="text-[#071B49]">{formData.companyName}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F5F8FF] border border-blue-100 max-w-md mx-auto text-left text-xs text-slate-700 space-y-1.5">
                    <div><strong>Organization:</strong> {formData.companyName}</div>
                    <div><strong>Service Selected:</strong> {formData.requiredService}</div>
                    <div><strong>Location:</strong> {formData.city}</div>
                    <div><strong>Corporate Office:</strong> {companyInfo.address}</div>
                    <div><strong>Direct Hotline:</strong> {companyInfo.contactPhone}</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed up via WhatsApp ({companyInfo.contactPhone})</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
