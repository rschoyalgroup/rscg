"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MapPin, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Honeypot from "@/components/Honeypot";
import { submitLead } from "@/lib/leads";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "Select enquiry type",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    const result = await submitLead({
      form: "contact",
      formName: "Contact page",
      fields: {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        interest: formData.subject === "Select enquiry type" ? "" : formData.subject,
        message: formData.message,
      },
      website: honeypot,
    });
    if (!result.ok) {
      setSubmitError(result.error);
      setIsSubmitting(false);
      return;
    }
    router.push("/thank-you?success=true");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative w-full pt-28 sm:pt-36 pb-24 sm:pb-64 lg:pb-72 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/images/contact/factory.png"
          alt="RS Choyal Factory Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Banner Text Content */}
        <div className="relative z-10 px-6 sm:px-12 max-w-3xl mx-auto space-y-2 sm:space-y-3 pb-4 sm:pb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-tight font-heading">
            Contact us
          </h1>
          <p className="text-slate-100 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Have a question, project or milling requirement? Our team is here to
            help you find the right solution.
          </p>
        </div>
      </section>

      {/* Main Overlapping Card Section */}
      <section className="relative z-20 w-full px-4 sm:px-12 lg:px-16 xl:px-24 mx-auto -mt-12 sm:-mt-20 lg:-mt-24 pb-12 sm:pb-28 flex-1">
        <div className="w-full max-w-[1240px] mx-auto bg-white rounded-[24px] sm:rounded-[36px] shadow-2xl border border-slate-200/80 p-5 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 lg:space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#0E3321] tracking-wider block mb-1">
                  Contact
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Get in touch
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reach out to our team for enquiries, support, project
                  discussions or milling solutions.
                </p>
              </div>

              {/* Contact Items */}
              <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-3 gap-y-4 sm:gap-6">
                {/* Corporate Headquarters */}
                <div className="col-span-2 sm:col-span-1 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f7b032] text-slate-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider block">
                      Corporate headquarters
                    </span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      Choyal Tower, 1180/28, Shalimar Colony, Adarsh Nagar Ajmer -
                      305 008, Rajasthan, India
                    </p>
                  </div>
                </div>

                {/* Factory Unit */}
                <div className="col-span-2 sm:col-span-1 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f7b032] text-slate-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider block">
                      Factory unit
                    </span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      Choyal Grinding Solution Pvt. Ltd. Arjunpura - Khalsa,
                      Distt. Ajmer (Raj.) - 305203, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="col-span-2 sm:col-span-1 lg:col-span-1 xl:col-span-2 flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f7b032] text-slate-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider block">
                      Email
                    </span>
                    <a
                      href="mailto:info@rschoyalgroup.com"
                      className="text-[13px] sm:text-sm font-semibold text-slate-800 hover:text-[#0E3321] transition-colors block leading-snug break-words"
                    >
                      info@rschoyalgroup.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-span-2 sm:col-span-1 lg:col-span-1 xl:col-span-2 flex items-start gap-3 sm:gap-4 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f7b032] text-slate-900 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider block">
                      Phone
                    </span>
                    <a
                      href="tel:+919240289259"
                      className="text-[13px] sm:text-sm font-semibold text-slate-800 hover:text-[#0E3321] transition-colors block leading-snug whitespace-nowrap"
                    >
                      +91 9240289259
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed Box */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1121.2328852168694!2d74.5342179!3d26.3016254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39696185f6ccf15b%3A0x3c82ebb0ad52417e!2sChoyal!5e1!3m2!1sen!2sin!4v1790678363898!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                />
                {/* Floating "Open in Maps" pill badge */}
                <a
                  href="https://maps.app.goo.gl/tj15BXMmUybbqV47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-slate-200/80 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 z-10"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                </a>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:pl-6">
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#0E3321] tracking-wider block mb-1">
                  Enquiry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Send us a message
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tell us a little about your requirement and our team will get
                  back to you shortly.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative space-y-3.5 sm:space-y-5 sm:pt-2"
              >
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#133a25] focus:ring-1 focus:ring-[#133a25] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#133a25] focus:ring-1 focus:ring-[#133a25] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#133a25] focus:ring-1 focus:ring-[#133a25] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#133a25] focus:ring-1 focus:ring-[#133a25] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-[#133a25] focus:ring-1 focus:ring-[#133a25] outline-none transition-all appearance-none cursor-pointer pr-10"
                    >
                      <option value="Select enquiry type" disabled>
                        Select enquiry type
                      </option>
                      <option value="New flour mill setup">
                        New flour mill setup
                      </option>
                      <option value="Plant upgrade or improvement">
                        Plant upgrade or improvement
                      </option>
                      <option value="Flour Mill Automation">
                        Flour mill automation
                      </option>
                      <option value="Consultancy Services">
                        Consultancy services
                      </option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your requirement..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#133a25] focus:ring-1 focus:ring-[#133a25] outline-none transition-all resize-y"
                  />
                </div>

                <Honeypot value={honeypot} onChange={setHoneypot} />

                {submitError && (
                  <p role="alert" className="text-xs text-red-500 bg-red-50 border border-red-500/20 rounded-xl px-4 py-3">
                    {submitError}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold py-3.5 sm:py-4 rounded-xl shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all duration-200 text-sm sm:text-base cursor-pointer hover:scale-[1.005] active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                </button>

                <p className="text-xs text-slate-400 text-center pt-1 font-normal">
                  By submitting this form, you agree to our terms and policies.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
